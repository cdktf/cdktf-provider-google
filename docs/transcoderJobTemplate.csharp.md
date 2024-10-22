# `transcoderJobTemplate` Submodule <a name="`transcoderJobTemplate` Submodule" id="@cdktf/provider-google.transcoderJobTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TranscoderJobTemplate <a name="TranscoderJobTemplate" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template google_transcoder_job_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplate(Construct Scope, string Id, TranscoderJobTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig">TranscoderJobTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig">TranscoderJobTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.putConfig"></a>

```csharp
private void PutConfig(TranscoderJobTemplateConfigA Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA">TranscoderJobTemplateConfigA</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.putTimeouts"></a>

```csharp
private void PutTimeouts(TranscoderJobTemplateTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts">TranscoderJobTemplateTimeouts</a>

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetConfig"></a>

```csharp
private void ResetConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a TranscoderJobTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

TranscoderJobTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

TranscoderJobTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

TranscoderJobTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

TranscoderJobTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a TranscoderJobTemplate resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TranscoderJobTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TranscoderJobTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the TranscoderJobTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference">TranscoderJobTemplateConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference">TranscoderJobTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA">TranscoderJobTemplateConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.jobTemplateIdInput">JobTemplateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.jobTemplateId">JobTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.config"></a>

```csharp
public TranscoderJobTemplateConfigAOutputReference Config { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference">TranscoderJobTemplateConfigAOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.timeouts"></a>

```csharp
public TranscoderJobTemplateTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference">TranscoderJobTemplateTimeoutsOutputReference</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.configInput"></a>

```csharp
public TranscoderJobTemplateConfigA ConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA">TranscoderJobTemplateConfigA</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `JobTemplateIdInput`<sup>Optional</sup> <a name="JobTemplateIdInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.jobTemplateIdInput"></a>

```csharp
public string JobTemplateIdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `JobTemplateId`<sup>Required</sup> <a name="JobTemplateId" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.jobTemplateId"></a>

```csharp
public string JobTemplateId { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TranscoderJobTemplateConfig <a name="TranscoderJobTemplateConfig" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string JobTemplateId,
    string Location,
    TranscoderJobTemplateConfigA Config = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    TranscoderJobTemplateTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.jobTemplateId">JobTemplateId</a></code> | <code>string</code> | ID to use for the Transcoding job template. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.location">Location</a></code> | <code>string</code> | The location of the transcoding job template resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA">TranscoderJobTemplateConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#id TranscoderJobTemplate#id}. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels associated with this job template. You can use these to organize and group your job templates. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#project TranscoderJobTemplate#project}. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts">TranscoderJobTemplateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `JobTemplateId`<sup>Required</sup> <a name="JobTemplateId" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.jobTemplateId"></a>

```csharp
public string JobTemplateId { get; set; }
```

- *Type:* string

ID to use for the Transcoding job template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#job_template_id TranscoderJobTemplate#job_template_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the transcoding job template resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#location TranscoderJobTemplate#location}

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.config"></a>

```csharp
public TranscoderJobTemplateConfigA Config { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA">TranscoderJobTemplateConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#config TranscoderJobTemplate#config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#id TranscoderJobTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels associated with this job template. You can use these to organize and group your job templates.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#labels TranscoderJobTemplate#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#project TranscoderJobTemplate#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfig.property.timeouts"></a>

```csharp
public TranscoderJobTemplateTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts">TranscoderJobTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#timeouts TranscoderJobTemplate#timeouts}

---

### TranscoderJobTemplateConfigA <a name="TranscoderJobTemplateConfigA" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigA {
    object AdBreaks = null,
    object EditList = null,
    object ElementaryStreams = null,
    object Encryptions = null,
    object Inputs = null,
    object Manifests = null,
    object MuxStreams = null,
    TranscoderJobTemplateConfigOutput Output = null,
    object Overlays = null,
    TranscoderJobTemplateConfigPubsubDestination PubsubDestination = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.adBreaks">AdBreaks</a></code> | <code>object</code> | ad_breaks block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.editList">EditList</a></code> | <code>object</code> | edit_list block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.elementaryStreams">ElementaryStreams</a></code> | <code>object</code> | elementary_streams block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.encryptions">Encryptions</a></code> | <code>object</code> | encryptions block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.inputs">Inputs</a></code> | <code>object</code> | inputs block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.manifests">Manifests</a></code> | <code>object</code> | manifests block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.muxStreams">MuxStreams</a></code> | <code>object</code> | mux_streams block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.output">Output</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutput">TranscoderJobTemplateConfigOutput</a></code> | output block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.overlays">Overlays</a></code> | <code>object</code> | overlays block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.pubsubDestination">PubsubDestination</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestination">TranscoderJobTemplateConfigPubsubDestination</a></code> | pubsub_destination block. |

---

##### `AdBreaks`<sup>Optional</sup> <a name="AdBreaks" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.adBreaks"></a>

```csharp
public object AdBreaks { get; set; }
```

- *Type:* object

ad_breaks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#ad_breaks TranscoderJobTemplate#ad_breaks}

---

##### `EditList`<sup>Optional</sup> <a name="EditList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.editList"></a>

```csharp
public object EditList { get; set; }
```

- *Type:* object

edit_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#edit_list TranscoderJobTemplate#edit_list}

---

##### `ElementaryStreams`<sup>Optional</sup> <a name="ElementaryStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.elementaryStreams"></a>

```csharp
public object ElementaryStreams { get; set; }
```

- *Type:* object

elementary_streams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#elementary_streams TranscoderJobTemplate#elementary_streams}

---

##### `Encryptions`<sup>Optional</sup> <a name="Encryptions" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.encryptions"></a>

```csharp
public object Encryptions { get; set; }
```

- *Type:* object

encryptions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#encryptions TranscoderJobTemplate#encryptions}

---

##### `Inputs`<sup>Optional</sup> <a name="Inputs" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.inputs"></a>

```csharp
public object Inputs { get; set; }
```

- *Type:* object

inputs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#inputs TranscoderJobTemplate#inputs}

---

##### `Manifests`<sup>Optional</sup> <a name="Manifests" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.manifests"></a>

```csharp
public object Manifests { get; set; }
```

- *Type:* object

manifests block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#manifests TranscoderJobTemplate#manifests}

---

##### `MuxStreams`<sup>Optional</sup> <a name="MuxStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.muxStreams"></a>

```csharp
public object MuxStreams { get; set; }
```

- *Type:* object

mux_streams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#mux_streams TranscoderJobTemplate#mux_streams}

---

##### `Output`<sup>Optional</sup> <a name="Output" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.output"></a>

```csharp
public TranscoderJobTemplateConfigOutput Output { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutput">TranscoderJobTemplateConfigOutput</a>

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#output TranscoderJobTemplate#output}

---

##### `Overlays`<sup>Optional</sup> <a name="Overlays" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.overlays"></a>

```csharp
public object Overlays { get; set; }
```

- *Type:* object

overlays block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#overlays TranscoderJobTemplate#overlays}

---

##### `PubsubDestination`<sup>Optional</sup> <a name="PubsubDestination" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA.property.pubsubDestination"></a>

```csharp
public TranscoderJobTemplateConfigPubsubDestination PubsubDestination { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestination">TranscoderJobTemplateConfigPubsubDestination</a>

pubsub_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#pubsub_destination TranscoderJobTemplate#pubsub_destination}

---

### TranscoderJobTemplateConfigAdBreaks <a name="TranscoderJobTemplateConfigAdBreaks" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigAdBreaks {
    string StartTimeOffset = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaks.property.startTimeOffset">StartTimeOffset</a></code> | <code>string</code> | Start time in seconds for the ad break, relative to the output file timeline. |

---

##### `StartTimeOffset`<sup>Optional</sup> <a name="StartTimeOffset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaks.property.startTimeOffset"></a>

```csharp
public string StartTimeOffset { get; set; }
```

- *Type:* string

Start time in seconds for the ad break, relative to the output file timeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#start_time_offset TranscoderJobTemplate#start_time_offset}

---

### TranscoderJobTemplateConfigEditListStruct <a name="TranscoderJobTemplateConfigEditListStruct" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigEditListStruct {
    string[] Inputs = null,
    string Key = null,
    string StartTimeOffset = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct.property.inputs">Inputs</a></code> | <code>string[]</code> | List of values identifying files that should be used in this atom. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct.property.key">Key</a></code> | <code>string</code> | A unique key for this atom. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct.property.startTimeOffset">StartTimeOffset</a></code> | <code>string</code> | Start time in seconds for the atom, relative to the input file timeline.  The default is '0s'. |

---

##### `Inputs`<sup>Optional</sup> <a name="Inputs" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct.property.inputs"></a>

```csharp
public string[] Inputs { get; set; }
```

- *Type:* string[]

List of values identifying files that should be used in this atom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#inputs TranscoderJobTemplate#inputs}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

A unique key for this atom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#key TranscoderJobTemplate#key}

---

##### `StartTimeOffset`<sup>Optional</sup> <a name="StartTimeOffset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStruct.property.startTimeOffset"></a>

```csharp
public string StartTimeOffset { get; set; }
```

- *Type:* string

Start time in seconds for the atom, relative to the input file timeline.  The default is '0s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#start_time_offset TranscoderJobTemplate#start_time_offset}

---

### TranscoderJobTemplateConfigElementaryStreams <a name="TranscoderJobTemplateConfigElementaryStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigElementaryStreams {
    TranscoderJobTemplateConfigElementaryStreamsAudioStream AudioStream = null,
    string Key = null,
    TranscoderJobTemplateConfigElementaryStreamsVideoStream VideoStream = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams.property.audioStream">AudioStream</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream">TranscoderJobTemplateConfigElementaryStreamsAudioStream</a></code> | audio_stream block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams.property.key">Key</a></code> | <code>string</code> | A unique key for this atom. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams.property.videoStream">VideoStream</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStream">TranscoderJobTemplateConfigElementaryStreamsVideoStream</a></code> | video_stream block. |

---

##### `AudioStream`<sup>Optional</sup> <a name="AudioStream" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams.property.audioStream"></a>

```csharp
public TranscoderJobTemplateConfigElementaryStreamsAudioStream AudioStream { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream">TranscoderJobTemplateConfigElementaryStreamsAudioStream</a>

audio_stream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#audio_stream TranscoderJobTemplate#audio_stream}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

A unique key for this atom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#key TranscoderJobTemplate#key}

---

##### `VideoStream`<sup>Optional</sup> <a name="VideoStream" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreams.property.videoStream"></a>

```csharp
public TranscoderJobTemplateConfigElementaryStreamsVideoStream VideoStream { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStream">TranscoderJobTemplateConfigElementaryStreamsVideoStream</a>

video_stream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#video_stream TranscoderJobTemplate#video_stream}

---

### TranscoderJobTemplateConfigElementaryStreamsAudioStream <a name="TranscoderJobTemplateConfigElementaryStreamsAudioStream" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigElementaryStreamsAudioStream {
    double BitrateBps,
    double ChannelCount = null,
    string[] ChannelLayout = null,
    string Codec = null,
    double SampleRateHertz = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream.property.bitrateBps">BitrateBps</a></code> | <code>double</code> | Audio bitrate in bits per second. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream.property.channelCount">ChannelCount</a></code> | <code>double</code> | Number of audio channels. The default is '2'. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream.property.channelLayout">ChannelLayout</a></code> | <code>string[]</code> | A list of channel names specifying layout of the audio channels.  The default is ["fl", "fr"]. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream.property.codec">Codec</a></code> | <code>string</code> | The codec for this audio stream. The default is 'aac'. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream.property.sampleRateHertz">SampleRateHertz</a></code> | <code>double</code> | The audio sample rate in Hertz. The default is '48000'. |

---

##### `BitrateBps`<sup>Required</sup> <a name="BitrateBps" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream.property.bitrateBps"></a>

```csharp
public double BitrateBps { get; set; }
```

- *Type:* double

Audio bitrate in bits per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#bitrate_bps TranscoderJobTemplate#bitrate_bps}

---

##### `ChannelCount`<sup>Optional</sup> <a name="ChannelCount" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream.property.channelCount"></a>

```csharp
public double ChannelCount { get; set; }
```

- *Type:* double

Number of audio channels. The default is '2'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#channel_count TranscoderJobTemplate#channel_count}

---

##### `ChannelLayout`<sup>Optional</sup> <a name="ChannelLayout" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream.property.channelLayout"></a>

```csharp
public string[] ChannelLayout { get; set; }
```

- *Type:* string[]

A list of channel names specifying layout of the audio channels.  The default is ["fl", "fr"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#channel_layout TranscoderJobTemplate#channel_layout}

---

##### `Codec`<sup>Optional</sup> <a name="Codec" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream.property.codec"></a>

```csharp
public string Codec { get; set; }
```

- *Type:* string

The codec for this audio stream. The default is 'aac'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#codec TranscoderJobTemplate#codec}

---

##### `SampleRateHertz`<sup>Optional</sup> <a name="SampleRateHertz" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream.property.sampleRateHertz"></a>

```csharp
public double SampleRateHertz { get; set; }
```

- *Type:* double

The audio sample rate in Hertz. The default is '48000'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#sample_rate_hertz TranscoderJobTemplate#sample_rate_hertz}

---

### TranscoderJobTemplateConfigElementaryStreamsVideoStream <a name="TranscoderJobTemplateConfigElementaryStreamsVideoStream" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStream.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigElementaryStreamsVideoStream {
    TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264 H264 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStream.property.h264">H264</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264</a></code> | h264 block. |

---

##### `H264`<sup>Optional</sup> <a name="H264" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStream.property.h264"></a>

```csharp
public TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264 H264 { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264</a>

h264 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#h264 TranscoderJobTemplate#h264}

---

### TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264 <a name="TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264 {
    double BitrateBps,
    double FrameRate,
    double CrfLevel = null,
    string EntropyCoder = null,
    string GopDuration = null,
    double HeightPixels = null,
    TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg Hlg = null,
    string PixelFormat = null,
    string Preset = null,
    string Profile = null,
    string RateControlMode = null,
    TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr Sdr = null,
    double VbvFullnessBits = null,
    double VbvSizeBits = null,
    double WidthPixels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.bitrateBps">BitrateBps</a></code> | <code>double</code> | The video bitrate in bits per second. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.frameRate">FrameRate</a></code> | <code>double</code> | The target video frame rate in frames per second (FPS). |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.crfLevel">CrfLevel</a></code> | <code>double</code> | Target CRF level. The default is '21'. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.entropyCoder">EntropyCoder</a></code> | <code>string</code> | The entropy coder to use. The default is 'cabac'. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.gopDuration">GopDuration</a></code> | <code>string</code> | Select the GOP size based on the specified duration. The default is '3s'. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.heightPixels">HeightPixels</a></code> | <code>double</code> | The height of the video in pixels. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.hlg">Hlg</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg</a></code> | hlg block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.pixelFormat">PixelFormat</a></code> | <code>string</code> | Pixel format to use. The default is 'yuv420p'. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.preset">Preset</a></code> | <code>string</code> | Enforces the specified codec preset. The default is 'veryfast'. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.profile">Profile</a></code> | <code>string</code> | Enforces the specified codec profile. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.rateControlMode">RateControlMode</a></code> | <code>string</code> | Specify the mode. The default is 'vbr'. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.sdr">Sdr</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr</a></code> | sdr block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.vbvFullnessBits">VbvFullnessBits</a></code> | <code>double</code> | Initial fullness of the Video Buffering Verifier (VBV) buffer in bits. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.vbvSizeBits">VbvSizeBits</a></code> | <code>double</code> | Size of the Video Buffering Verifier (VBV) buffer in bits. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.widthPixels">WidthPixels</a></code> | <code>double</code> | The width of the video in pixels. |

---

##### `BitrateBps`<sup>Required</sup> <a name="BitrateBps" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.bitrateBps"></a>

```csharp
public double BitrateBps { get; set; }
```

- *Type:* double

The video bitrate in bits per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#bitrate_bps TranscoderJobTemplate#bitrate_bps}

---

##### `FrameRate`<sup>Required</sup> <a name="FrameRate" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.frameRate"></a>

```csharp
public double FrameRate { get; set; }
```

- *Type:* double

The target video frame rate in frames per second (FPS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#frame_rate TranscoderJobTemplate#frame_rate}

---

##### `CrfLevel`<sup>Optional</sup> <a name="CrfLevel" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.crfLevel"></a>

```csharp
public double CrfLevel { get; set; }
```

- *Type:* double

Target CRF level. The default is '21'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#crf_level TranscoderJobTemplate#crf_level}

---

##### `EntropyCoder`<sup>Optional</sup> <a name="EntropyCoder" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.entropyCoder"></a>

```csharp
public string EntropyCoder { get; set; }
```

- *Type:* string

The entropy coder to use. The default is 'cabac'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#entropy_coder TranscoderJobTemplate#entropy_coder}

---

##### `GopDuration`<sup>Optional</sup> <a name="GopDuration" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.gopDuration"></a>

```csharp
public string GopDuration { get; set; }
```

- *Type:* string

Select the GOP size based on the specified duration. The default is '3s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#gop_duration TranscoderJobTemplate#gop_duration}

---

##### `HeightPixels`<sup>Optional</sup> <a name="HeightPixels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.heightPixels"></a>

```csharp
public double HeightPixels { get; set; }
```

- *Type:* double

The height of the video in pixels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#height_pixels TranscoderJobTemplate#height_pixels}

---

##### `Hlg`<sup>Optional</sup> <a name="Hlg" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.hlg"></a>

```csharp
public TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg Hlg { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg</a>

hlg block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#hlg TranscoderJobTemplate#hlg}

---

##### `PixelFormat`<sup>Optional</sup> <a name="PixelFormat" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.pixelFormat"></a>

```csharp
public string PixelFormat { get; set; }
```

- *Type:* string

Pixel format to use. The default is 'yuv420p'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#pixel_format TranscoderJobTemplate#pixel_format}

---

##### `Preset`<sup>Optional</sup> <a name="Preset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.preset"></a>

```csharp
public string Preset { get; set; }
```

- *Type:* string

Enforces the specified codec preset. The default is 'veryfast'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#preset TranscoderJobTemplate#preset}

---

##### `Profile`<sup>Optional</sup> <a name="Profile" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.profile"></a>

```csharp
public string Profile { get; set; }
```

- *Type:* string

Enforces the specified codec profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#profile TranscoderJobTemplate#profile}

---

##### `RateControlMode`<sup>Optional</sup> <a name="RateControlMode" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.rateControlMode"></a>

```csharp
public string RateControlMode { get; set; }
```

- *Type:* string

Specify the mode. The default is 'vbr'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#rate_control_mode TranscoderJobTemplate#rate_control_mode}

---

##### `Sdr`<sup>Optional</sup> <a name="Sdr" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.sdr"></a>

```csharp
public TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr Sdr { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr</a>

sdr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#sdr TranscoderJobTemplate#sdr}

---

##### `VbvFullnessBits`<sup>Optional</sup> <a name="VbvFullnessBits" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.vbvFullnessBits"></a>

```csharp
public double VbvFullnessBits { get; set; }
```

- *Type:* double

Initial fullness of the Video Buffering Verifier (VBV) buffer in bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#vbv_fullness_bits TranscoderJobTemplate#vbv_fullness_bits}

---

##### `VbvSizeBits`<sup>Optional</sup> <a name="VbvSizeBits" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.vbvSizeBits"></a>

```csharp
public double VbvSizeBits { get; set; }
```

- *Type:* double

Size of the Video Buffering Verifier (VBV) buffer in bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#vbv_size_bits TranscoderJobTemplate#vbv_size_bits}

---

##### `WidthPixels`<sup>Optional</sup> <a name="WidthPixels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264.property.widthPixels"></a>

```csharp
public double WidthPixels { get; set; }
```

- *Type:* double

The width of the video in pixels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#width_pixels TranscoderJobTemplate#width_pixels}

---

### TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg <a name="TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg {

};
```


### TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr <a name="TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr {

};
```


### TranscoderJobTemplateConfigEncryptions <a name="TranscoderJobTemplateConfigEncryptions" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigEncryptions {
    string Id,
    TranscoderJobTemplateConfigEncryptionsAes128 Aes128 = null,
    TranscoderJobTemplateConfigEncryptionsDrmSystems DrmSystems = null,
    TranscoderJobTemplateConfigEncryptionsMpegCenc MpegCenc = null,
    TranscoderJobTemplateConfigEncryptionsSampleAes SampleAes = null,
    TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource SecretManagerKeySource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.id">Id</a></code> | <code>string</code> | Identifier for this set of encryption options. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.aes128">Aes128</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128">TranscoderJobTemplateConfigEncryptionsAes128</a></code> | aes128 block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.drmSystems">DrmSystems</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems">TranscoderJobTemplateConfigEncryptionsDrmSystems</a></code> | drm_systems block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.mpegCenc">MpegCenc</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCenc">TranscoderJobTemplateConfigEncryptionsMpegCenc</a></code> | mpeg_cenc block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.sampleAes">SampleAes</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAes">TranscoderJobTemplateConfigEncryptionsSampleAes</a></code> | sample_aes block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.secretManagerKeySource">SecretManagerKeySource</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource">TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource</a></code> | secret_manager_key_source block. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Identifier for this set of encryption options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#id TranscoderJobTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Aes128`<sup>Optional</sup> <a name="Aes128" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.aes128"></a>

```csharp
public TranscoderJobTemplateConfigEncryptionsAes128 Aes128 { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128">TranscoderJobTemplateConfigEncryptionsAes128</a>

aes128 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#aes128 TranscoderJobTemplate#aes128}

---

##### `DrmSystems`<sup>Optional</sup> <a name="DrmSystems" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.drmSystems"></a>

```csharp
public TranscoderJobTemplateConfigEncryptionsDrmSystems DrmSystems { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems">TranscoderJobTemplateConfigEncryptionsDrmSystems</a>

drm_systems block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#drm_systems TranscoderJobTemplate#drm_systems}

---

##### `MpegCenc`<sup>Optional</sup> <a name="MpegCenc" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.mpegCenc"></a>

```csharp
public TranscoderJobTemplateConfigEncryptionsMpegCenc MpegCenc { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCenc">TranscoderJobTemplateConfigEncryptionsMpegCenc</a>

mpeg_cenc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#mpeg_cenc TranscoderJobTemplate#mpeg_cenc}

---

##### `SampleAes`<sup>Optional</sup> <a name="SampleAes" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.sampleAes"></a>

```csharp
public TranscoderJobTemplateConfigEncryptionsSampleAes SampleAes { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAes">TranscoderJobTemplateConfigEncryptionsSampleAes</a>

sample_aes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#sample_aes TranscoderJobTemplate#sample_aes}

---

##### `SecretManagerKeySource`<sup>Optional</sup> <a name="SecretManagerKeySource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptions.property.secretManagerKeySource"></a>

```csharp
public TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource SecretManagerKeySource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource">TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource</a>

secret_manager_key_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#secret_manager_key_source TranscoderJobTemplate#secret_manager_key_source}

---

### TranscoderJobTemplateConfigEncryptionsAes128 <a name="TranscoderJobTemplateConfigEncryptionsAes128" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigEncryptionsAes128 {

};
```


### TranscoderJobTemplateConfigEncryptionsDrmSystems <a name="TranscoderJobTemplateConfigEncryptionsDrmSystems" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigEncryptionsDrmSystems {
    TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey Clearkey = null,
    TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay Fairplay = null,
    TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready Playready = null,
    TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine Widevine = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems.property.clearkey">Clearkey</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey">TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey</a></code> | clearkey block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems.property.fairplay">Fairplay</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay">TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay</a></code> | fairplay block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems.property.playready">Playready</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready">TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready</a></code> | playready block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems.property.widevine">Widevine</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine">TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine</a></code> | widevine block. |

---

##### `Clearkey`<sup>Optional</sup> <a name="Clearkey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems.property.clearkey"></a>

```csharp
public TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey Clearkey { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey">TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey</a>

clearkey block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#clearkey TranscoderJobTemplate#clearkey}

---

##### `Fairplay`<sup>Optional</sup> <a name="Fairplay" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems.property.fairplay"></a>

```csharp
public TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay Fairplay { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay">TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay</a>

fairplay block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#fairplay TranscoderJobTemplate#fairplay}

---

##### `Playready`<sup>Optional</sup> <a name="Playready" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems.property.playready"></a>

```csharp
public TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready Playready { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready">TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready</a>

playready block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#playready TranscoderJobTemplate#playready}

---

##### `Widevine`<sup>Optional</sup> <a name="Widevine" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems.property.widevine"></a>

```csharp
public TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine Widevine { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine">TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine</a>

widevine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#widevine TranscoderJobTemplate#widevine}

---

### TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey <a name="TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey {

};
```


### TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay <a name="TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay {

};
```


### TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready <a name="TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready {

};
```


### TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine <a name="TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine {

};
```


### TranscoderJobTemplateConfigEncryptionsMpegCenc <a name="TranscoderJobTemplateConfigEncryptionsMpegCenc" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCenc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCenc.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigEncryptionsMpegCenc {
    string Scheme
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCenc.property.scheme">Scheme</a></code> | <code>string</code> | Specify the encryption scheme. |

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCenc.property.scheme"></a>

```csharp
public string Scheme { get; set; }
```

- *Type:* string

Specify the encryption scheme.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#scheme TranscoderJobTemplate#scheme}

---

### TranscoderJobTemplateConfigEncryptionsSampleAes <a name="TranscoderJobTemplateConfigEncryptionsSampleAes" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigEncryptionsSampleAes {

};
```


### TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource <a name="TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource {
    string SecretVersion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource.property.secretVersion">SecretVersion</a></code> | <code>string</code> | The name of the Secret Version containing the encryption key in the following format: projects/{project}/secrets/{secret_id}/versions/{version_number}. |

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource.property.secretVersion"></a>

```csharp
public string SecretVersion { get; set; }
```

- *Type:* string

The name of the Secret Version containing the encryption key in the following format: projects/{project}/secrets/{secret_id}/versions/{version_number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#secret_version TranscoderJobTemplate#secret_version}

---

### TranscoderJobTemplateConfigInputs <a name="TranscoderJobTemplateConfigInputs" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigInputs {
    string Key = null,
    string Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputs.property.key">Key</a></code> | <code>string</code> | A unique key for this input. Must be specified when using advanced mapping and edit lists. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputs.property.uri">Uri</a></code> | <code>string</code> | URI of the media. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputs.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

A unique key for this input. Must be specified when using advanced mapping and edit lists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#key TranscoderJobTemplate#key}

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputs.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

URI of the media.

Input files must be at least 5 seconds in duration and stored in Cloud Storage (for example, gs://bucket/inputs/file.mp4).
If empty, the value is populated from Job.input_uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#uri TranscoderJobTemplate#uri}

---

### TranscoderJobTemplateConfigManifests <a name="TranscoderJobTemplateConfigManifests" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigManifests {
    string FileName = null,
    string[] MuxStreams = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests.property.fileName">FileName</a></code> | <code>string</code> | The name of the generated file. The default is 'manifest'. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests.property.muxStreams">MuxStreams</a></code> | <code>string[]</code> | List of user supplied MuxStream.key values that should appear in this manifest. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests.property.type">Type</a></code> | <code>string</code> | Type of the manifest. Possible values: ["MANIFEST_TYPE_UNSPECIFIED", "HLS", "DASH"]. |

---

##### `FileName`<sup>Optional</sup> <a name="FileName" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests.property.fileName"></a>

```csharp
public string FileName { get; set; }
```

- *Type:* string

The name of the generated file. The default is 'manifest'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#file_name TranscoderJobTemplate#file_name}

---

##### `MuxStreams`<sup>Optional</sup> <a name="MuxStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests.property.muxStreams"></a>

```csharp
public string[] MuxStreams { get; set; }
```

- *Type:* string[]

List of user supplied MuxStream.key values that should appear in this manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#mux_streams TranscoderJobTemplate#mux_streams}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifests.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type of the manifest. Possible values: ["MANIFEST_TYPE_UNSPECIFIED", "HLS", "DASH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#type TranscoderJobTemplate#type}

---

### TranscoderJobTemplateConfigMuxStreams <a name="TranscoderJobTemplateConfigMuxStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigMuxStreams {
    string Container = null,
    string[] ElementaryStreams = null,
    string EncryptionId = null,
    string FileName = null,
    string Key = null,
    TranscoderJobTemplateConfigMuxStreamsSegmentSettings SegmentSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.container">Container</a></code> | <code>string</code> | The container format. The default is 'mp4'. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.elementaryStreams">ElementaryStreams</a></code> | <code>string[]</code> | List of ElementaryStream.key values multiplexed in this stream. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.encryptionId">EncryptionId</a></code> | <code>string</code> | Identifier of the encryption configuration to use. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.fileName">FileName</a></code> | <code>string</code> | The name of the generated file. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.key">Key</a></code> | <code>string</code> | A unique key for this multiplexed stream. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.segmentSettings">SegmentSettings</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettings">TranscoderJobTemplateConfigMuxStreamsSegmentSettings</a></code> | segment_settings block. |

---

##### `Container`<sup>Optional</sup> <a name="Container" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.container"></a>

```csharp
public string Container { get; set; }
```

- *Type:* string

The container format. The default is 'mp4'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#container TranscoderJobTemplate#container}

---

##### `ElementaryStreams`<sup>Optional</sup> <a name="ElementaryStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.elementaryStreams"></a>

```csharp
public string[] ElementaryStreams { get; set; }
```

- *Type:* string[]

List of ElementaryStream.key values multiplexed in this stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#elementary_streams TranscoderJobTemplate#elementary_streams}

---

##### `EncryptionId`<sup>Optional</sup> <a name="EncryptionId" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.encryptionId"></a>

```csharp
public string EncryptionId { get; set; }
```

- *Type:* string

Identifier of the encryption configuration to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#encryption_id TranscoderJobTemplate#encryption_id}

---

##### `FileName`<sup>Optional</sup> <a name="FileName" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.fileName"></a>

```csharp
public string FileName { get; set; }
```

- *Type:* string

The name of the generated file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#file_name TranscoderJobTemplate#file_name}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

A unique key for this multiplexed stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#key TranscoderJobTemplate#key}

---

##### `SegmentSettings`<sup>Optional</sup> <a name="SegmentSettings" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreams.property.segmentSettings"></a>

```csharp
public TranscoderJobTemplateConfigMuxStreamsSegmentSettings SegmentSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettings">TranscoderJobTemplateConfigMuxStreamsSegmentSettings</a>

segment_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#segment_settings TranscoderJobTemplate#segment_settings}

---

### TranscoderJobTemplateConfigMuxStreamsSegmentSettings <a name="TranscoderJobTemplateConfigMuxStreamsSegmentSettings" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigMuxStreamsSegmentSettings {
    string SegmentDuration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettings.property.segmentDuration">SegmentDuration</a></code> | <code>string</code> | Duration of the segments in seconds. The default is '6.0s'. |

---

##### `SegmentDuration`<sup>Optional</sup> <a name="SegmentDuration" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettings.property.segmentDuration"></a>

```csharp
public string SegmentDuration { get; set; }
```

- *Type:* string

Duration of the segments in seconds. The default is '6.0s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#segment_duration TranscoderJobTemplate#segment_duration}

---

### TranscoderJobTemplateConfigOutput <a name="TranscoderJobTemplateConfigOutput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigOutput {
    string Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutput.property.uri">Uri</a></code> | <code>string</code> | URI for the output file(s). For example, gs://my-bucket/outputs/. |

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutput.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

URI for the output file(s). For example, gs://my-bucket/outputs/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#uri TranscoderJobTemplate#uri}

---

### TranscoderJobTemplateConfigOverlays <a name="TranscoderJobTemplateConfigOverlays" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlays"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlays.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigOverlays {
    object Animations = null,
    TranscoderJobTemplateConfigOverlaysImage Image = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlays.property.animations">Animations</a></code> | <code>object</code> | animations block. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlays.property.image">Image</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImage">TranscoderJobTemplateConfigOverlaysImage</a></code> | image block. |

---

##### `Animations`<sup>Optional</sup> <a name="Animations" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlays.property.animations"></a>

```csharp
public object Animations { get; set; }
```

- *Type:* object

animations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#animations TranscoderJobTemplate#animations}

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlays.property.image"></a>

```csharp
public TranscoderJobTemplateConfigOverlaysImage Image { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImage">TranscoderJobTemplateConfigOverlaysImage</a>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#image TranscoderJobTemplate#image}

---

### TranscoderJobTemplateConfigOverlaysAnimations <a name="TranscoderJobTemplateConfigOverlaysAnimations" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigOverlaysAnimations {
    TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade AnimationFade = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimations.property.animationFade">AnimationFade</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade</a></code> | animation_fade block. |

---

##### `AnimationFade`<sup>Optional</sup> <a name="AnimationFade" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimations.property.animationFade"></a>

```csharp
public TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade AnimationFade { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade</a>

animation_fade block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#animation_fade TranscoderJobTemplate#animation_fade}

---

### TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade <a name="TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade {
    string FadeType,
    string EndTimeOffset = null,
    string StartTimeOffset = null,
    TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy Xy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.fadeType">FadeType</a></code> | <code>string</code> | Required. Type of fade animation: 'FADE_IN' or 'FADE_OUT'. The possible values are:. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.endTimeOffset">EndTimeOffset</a></code> | <code>string</code> | The time to end the fade animation, in seconds. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.startTimeOffset">StartTimeOffset</a></code> | <code>string</code> | The time to start the fade animation, in seconds. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.xy">Xy</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy</a></code> | xy block. |

---

##### `FadeType`<sup>Required</sup> <a name="FadeType" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.fadeType"></a>

```csharp
public string FadeType { get; set; }
```

- *Type:* string

Required. Type of fade animation: 'FADE_IN' or 'FADE_OUT'. The possible values are:.

* 'FADE_TYPE_UNSPECIFIED': The fade type is not specified.
* 'FADE_IN': Fade the overlay object into view.
* 'FADE_OUT': Fade the overlay object out of view. Possible values: ["FADE_TYPE_UNSPECIFIED", "FADE_IN", "FADE_OUT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#fade_type TranscoderJobTemplate#fade_type}

---

##### `EndTimeOffset`<sup>Optional</sup> <a name="EndTimeOffset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.endTimeOffset"></a>

```csharp
public string EndTimeOffset { get; set; }
```

- *Type:* string

The time to end the fade animation, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#end_time_offset TranscoderJobTemplate#end_time_offset}

---

##### `StartTimeOffset`<sup>Optional</sup> <a name="StartTimeOffset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.startTimeOffset"></a>

```csharp
public string StartTimeOffset { get; set; }
```

- *Type:* string

The time to start the fade animation, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#start_time_offset TranscoderJobTemplate#start_time_offset}

---

##### `Xy`<sup>Optional</sup> <a name="Xy" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade.property.xy"></a>

```csharp
public TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy Xy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy</a>

xy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#xy TranscoderJobTemplate#xy}

---

### TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy <a name="TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy {
    double X = null,
    double Y = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy.property.x">X</a></code> | <code>double</code> | Normalized x coordinate. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy.property.y">Y</a></code> | <code>double</code> | Normalized y coordinate. |

---

##### `X`<sup>Optional</sup> <a name="X" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy.property.x"></a>

```csharp
public double X { get; set; }
```

- *Type:* double

Normalized x coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#x TranscoderJobTemplate#x}

---

##### `Y`<sup>Optional</sup> <a name="Y" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy.property.y"></a>

```csharp
public double Y { get; set; }
```

- *Type:* double

Normalized y coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#y TranscoderJobTemplate#y}

---

### TranscoderJobTemplateConfigOverlaysImage <a name="TranscoderJobTemplateConfigOverlaysImage" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigOverlaysImage {
    string Uri
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImage.property.uri">Uri</a></code> | <code>string</code> | URI of the image in Cloud Storage. For example, gs://bucket/inputs/image.png. |

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImage.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

URI of the image in Cloud Storage. For example, gs://bucket/inputs/image.png.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#uri TranscoderJobTemplate#uri}

---

### TranscoderJobTemplateConfigPubsubDestination <a name="TranscoderJobTemplateConfigPubsubDestination" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestination.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigPubsubDestination {
    string Topic = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestination.property.topic">Topic</a></code> | <code>string</code> | The name of the Pub/Sub topic to publish job completion notification to. For example: projects/{project}/topics/{topic}. |

---

##### `Topic`<sup>Optional</sup> <a name="Topic" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestination.property.topic"></a>

```csharp
public string Topic { get; set; }
```

- *Type:* string

The name of the Pub/Sub topic to publish job completion notification to. For example: projects/{project}/topics/{topic}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#topic TranscoderJobTemplate#topic}

---

### TranscoderJobTemplateTimeouts <a name="TranscoderJobTemplateTimeouts" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#create TranscoderJobTemplate#create}. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#delete TranscoderJobTemplate#delete}. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#update TranscoderJobTemplate#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#create TranscoderJobTemplate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#delete TranscoderJobTemplate#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/transcoder_job_template#update TranscoderJobTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### TranscoderJobTemplateConfigAdBreaksList <a name="TranscoderJobTemplateConfigAdBreaksList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigAdBreaksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.get"></a>

```csharp
private TranscoderJobTemplateConfigAdBreaksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TranscoderJobTemplateConfigAdBreaksOutputReference <a name="TranscoderJobTemplateConfigAdBreaksOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigAdBreaksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.resetStartTimeOffset">ResetStartTimeOffset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStartTimeOffset` <a name="ResetStartTimeOffset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.resetStartTimeOffset"></a>

```csharp
private void ResetStartTimeOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.property.startTimeOffsetInput">StartTimeOffsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.property.startTimeOffset">StartTimeOffset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StartTimeOffsetInput`<sup>Optional</sup> <a name="StartTimeOffsetInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.property.startTimeOffsetInput"></a>

```csharp
public string StartTimeOffsetInput { get; }
```

- *Type:* string

---

##### `StartTimeOffset`<sup>Required</sup> <a name="StartTimeOffset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.property.startTimeOffset"></a>

```csharp
public string StartTimeOffset { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TranscoderJobTemplateConfigAOutputReference <a name="TranscoderJobTemplateConfigAOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putAdBreaks">PutAdBreaks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putEditList">PutEditList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putElementaryStreams">PutElementaryStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putEncryptions">PutEncryptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putInputs">PutInputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putManifests">PutManifests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putMuxStreams">PutMuxStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putOutput">PutOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putOverlays">PutOverlays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putPubsubDestination">PutPubsubDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetAdBreaks">ResetAdBreaks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetEditList">ResetEditList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetElementaryStreams">ResetElementaryStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetEncryptions">ResetEncryptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetInputs">ResetInputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetManifests">ResetManifests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetMuxStreams">ResetMuxStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetOutput">ResetOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetOverlays">ResetOverlays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetPubsubDestination">ResetPubsubDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdBreaks` <a name="PutAdBreaks" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putAdBreaks"></a>

```csharp
private void PutAdBreaks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putAdBreaks.parameter.value"></a>

- *Type:* object

---

##### `PutEditList` <a name="PutEditList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putEditList"></a>

```csharp
private void PutEditList(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putEditList.parameter.value"></a>

- *Type:* object

---

##### `PutElementaryStreams` <a name="PutElementaryStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putElementaryStreams"></a>

```csharp
private void PutElementaryStreams(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putElementaryStreams.parameter.value"></a>

- *Type:* object

---

##### `PutEncryptions` <a name="PutEncryptions" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putEncryptions"></a>

```csharp
private void PutEncryptions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putEncryptions.parameter.value"></a>

- *Type:* object

---

##### `PutInputs` <a name="PutInputs" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putInputs"></a>

```csharp
private void PutInputs(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putInputs.parameter.value"></a>

- *Type:* object

---

##### `PutManifests` <a name="PutManifests" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putManifests"></a>

```csharp
private void PutManifests(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putManifests.parameter.value"></a>

- *Type:* object

---

##### `PutMuxStreams` <a name="PutMuxStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putMuxStreams"></a>

```csharp
private void PutMuxStreams(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putMuxStreams.parameter.value"></a>

- *Type:* object

---

##### `PutOutput` <a name="PutOutput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putOutput"></a>

```csharp
private void PutOutput(TranscoderJobTemplateConfigOutput Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putOutput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutput">TranscoderJobTemplateConfigOutput</a>

---

##### `PutOverlays` <a name="PutOverlays" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putOverlays"></a>

```csharp
private void PutOverlays(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putOverlays.parameter.value"></a>

- *Type:* object

---

##### `PutPubsubDestination` <a name="PutPubsubDestination" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putPubsubDestination"></a>

```csharp
private void PutPubsubDestination(TranscoderJobTemplateConfigPubsubDestination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.putPubsubDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestination">TranscoderJobTemplateConfigPubsubDestination</a>

---

##### `ResetAdBreaks` <a name="ResetAdBreaks" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetAdBreaks"></a>

```csharp
private void ResetAdBreaks()
```

##### `ResetEditList` <a name="ResetEditList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetEditList"></a>

```csharp
private void ResetEditList()
```

##### `ResetElementaryStreams` <a name="ResetElementaryStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetElementaryStreams"></a>

```csharp
private void ResetElementaryStreams()
```

##### `ResetEncryptions` <a name="ResetEncryptions" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetEncryptions"></a>

```csharp
private void ResetEncryptions()
```

##### `ResetInputs` <a name="ResetInputs" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetInputs"></a>

```csharp
private void ResetInputs()
```

##### `ResetManifests` <a name="ResetManifests" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetManifests"></a>

```csharp
private void ResetManifests()
```

##### `ResetMuxStreams` <a name="ResetMuxStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetMuxStreams"></a>

```csharp
private void ResetMuxStreams()
```

##### `ResetOutput` <a name="ResetOutput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetOutput"></a>

```csharp
private void ResetOutput()
```

##### `ResetOverlays` <a name="ResetOverlays" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetOverlays"></a>

```csharp
private void ResetOverlays()
```

##### `ResetPubsubDestination` <a name="ResetPubsubDestination" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.resetPubsubDestination"></a>

```csharp
private void ResetPubsubDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.adBreaks">AdBreaks</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList">TranscoderJobTemplateConfigAdBreaksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.editList">EditList</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList">TranscoderJobTemplateConfigEditListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.elementaryStreams">ElementaryStreams</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList">TranscoderJobTemplateConfigElementaryStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.encryptions">Encryptions</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList">TranscoderJobTemplateConfigEncryptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.inputs">Inputs</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList">TranscoderJobTemplateConfigInputsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.manifests">Manifests</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList">TranscoderJobTemplateConfigManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.muxStreams">MuxStreams</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList">TranscoderJobTemplateConfigMuxStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.output">Output</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference">TranscoderJobTemplateConfigOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.overlays">Overlays</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList">TranscoderJobTemplateConfigOverlaysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.pubsubDestination">PubsubDestination</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference">TranscoderJobTemplateConfigPubsubDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.adBreaksInput">AdBreaksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.editListInput">EditListInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.elementaryStreamsInput">ElementaryStreamsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.encryptionsInput">EncryptionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.inputsInput">InputsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.manifestsInput">ManifestsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.muxStreamsInput">MuxStreamsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.outputInput">OutputInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutput">TranscoderJobTemplateConfigOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.overlaysInput">OverlaysInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.pubsubDestinationInput">PubsubDestinationInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestination">TranscoderJobTemplateConfigPubsubDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA">TranscoderJobTemplateConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdBreaks`<sup>Required</sup> <a name="AdBreaks" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.adBreaks"></a>

```csharp
public TranscoderJobTemplateConfigAdBreaksList AdBreaks { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAdBreaksList">TranscoderJobTemplateConfigAdBreaksList</a>

---

##### `EditList`<sup>Required</sup> <a name="EditList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.editList"></a>

```csharp
public TranscoderJobTemplateConfigEditListStructList EditList { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList">TranscoderJobTemplateConfigEditListStructList</a>

---

##### `ElementaryStreams`<sup>Required</sup> <a name="ElementaryStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.elementaryStreams"></a>

```csharp
public TranscoderJobTemplateConfigElementaryStreamsList ElementaryStreams { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList">TranscoderJobTemplateConfigElementaryStreamsList</a>

---

##### `Encryptions`<sup>Required</sup> <a name="Encryptions" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.encryptions"></a>

```csharp
public TranscoderJobTemplateConfigEncryptionsList Encryptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList">TranscoderJobTemplateConfigEncryptionsList</a>

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.inputs"></a>

```csharp
public TranscoderJobTemplateConfigInputsList Inputs { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList">TranscoderJobTemplateConfigInputsList</a>

---

##### `Manifests`<sup>Required</sup> <a name="Manifests" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.manifests"></a>

```csharp
public TranscoderJobTemplateConfigManifestsList Manifests { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList">TranscoderJobTemplateConfigManifestsList</a>

---

##### `MuxStreams`<sup>Required</sup> <a name="MuxStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.muxStreams"></a>

```csharp
public TranscoderJobTemplateConfigMuxStreamsList MuxStreams { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList">TranscoderJobTemplateConfigMuxStreamsList</a>

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.output"></a>

```csharp
public TranscoderJobTemplateConfigOutputOutputReference Output { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference">TranscoderJobTemplateConfigOutputOutputReference</a>

---

##### `Overlays`<sup>Required</sup> <a name="Overlays" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.overlays"></a>

```csharp
public TranscoderJobTemplateConfigOverlaysList Overlays { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList">TranscoderJobTemplateConfigOverlaysList</a>

---

##### `PubsubDestination`<sup>Required</sup> <a name="PubsubDestination" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.pubsubDestination"></a>

```csharp
public TranscoderJobTemplateConfigPubsubDestinationOutputReference PubsubDestination { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference">TranscoderJobTemplateConfigPubsubDestinationOutputReference</a>

---

##### `AdBreaksInput`<sup>Optional</sup> <a name="AdBreaksInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.adBreaksInput"></a>

```csharp
public object AdBreaksInput { get; }
```

- *Type:* object

---

##### `EditListInput`<sup>Optional</sup> <a name="EditListInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.editListInput"></a>

```csharp
public object EditListInput { get; }
```

- *Type:* object

---

##### `ElementaryStreamsInput`<sup>Optional</sup> <a name="ElementaryStreamsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.elementaryStreamsInput"></a>

```csharp
public object ElementaryStreamsInput { get; }
```

- *Type:* object

---

##### `EncryptionsInput`<sup>Optional</sup> <a name="EncryptionsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.encryptionsInput"></a>

```csharp
public object EncryptionsInput { get; }
```

- *Type:* object

---

##### `InputsInput`<sup>Optional</sup> <a name="InputsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.inputsInput"></a>

```csharp
public object InputsInput { get; }
```

- *Type:* object

---

##### `ManifestsInput`<sup>Optional</sup> <a name="ManifestsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.manifestsInput"></a>

```csharp
public object ManifestsInput { get; }
```

- *Type:* object

---

##### `MuxStreamsInput`<sup>Optional</sup> <a name="MuxStreamsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.muxStreamsInput"></a>

```csharp
public object MuxStreamsInput { get; }
```

- *Type:* object

---

##### `OutputInput`<sup>Optional</sup> <a name="OutputInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.outputInput"></a>

```csharp
public TranscoderJobTemplateConfigOutput OutputInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutput">TranscoderJobTemplateConfigOutput</a>

---

##### `OverlaysInput`<sup>Optional</sup> <a name="OverlaysInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.overlaysInput"></a>

```csharp
public object OverlaysInput { get; }
```

- *Type:* object

---

##### `PubsubDestinationInput`<sup>Optional</sup> <a name="PubsubDestinationInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.pubsubDestinationInput"></a>

```csharp
public TranscoderJobTemplateConfigPubsubDestination PubsubDestinationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestination">TranscoderJobTemplateConfigPubsubDestination</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigAOutputReference.property.internalValue"></a>

```csharp
public TranscoderJobTemplateConfigA InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigA">TranscoderJobTemplateConfigA</a>

---


### TranscoderJobTemplateConfigEditListStructList <a name="TranscoderJobTemplateConfigEditListStructList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigEditListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.get"></a>

```csharp
private TranscoderJobTemplateConfigEditListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TranscoderJobTemplateConfigEditListStructOutputReference <a name="TranscoderJobTemplateConfigEditListStructOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigEditListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.resetInputs">ResetInputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.resetStartTimeOffset">ResetStartTimeOffset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInputs` <a name="ResetInputs" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.resetInputs"></a>

```csharp
private void ResetInputs()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetStartTimeOffset` <a name="ResetStartTimeOffset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.resetStartTimeOffset"></a>

```csharp
private void ResetStartTimeOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.inputsInput">InputsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.startTimeOffsetInput">StartTimeOffsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.inputs">Inputs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.startTimeOffset">StartTimeOffset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InputsInput`<sup>Optional</sup> <a name="InputsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.inputsInput"></a>

```csharp
public string[] InputsInput { get; }
```

- *Type:* string[]

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `StartTimeOffsetInput`<sup>Optional</sup> <a name="StartTimeOffsetInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.startTimeOffsetInput"></a>

```csharp
public string StartTimeOffsetInput { get; }
```

- *Type:* string

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.inputs"></a>

```csharp
public string[] Inputs { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `StartTimeOffset`<sup>Required</sup> <a name="StartTimeOffset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.startTimeOffset"></a>

```csharp
public string StartTimeOffset { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEditListStructOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference <a name="TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetChannelCount">ResetChannelCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetChannelLayout">ResetChannelLayout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetCodec">ResetCodec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetSampleRateHertz">ResetSampleRateHertz</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChannelCount` <a name="ResetChannelCount" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetChannelCount"></a>

```csharp
private void ResetChannelCount()
```

##### `ResetChannelLayout` <a name="ResetChannelLayout" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetChannelLayout"></a>

```csharp
private void ResetChannelLayout()
```

##### `ResetCodec` <a name="ResetCodec" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetCodec"></a>

```csharp
private void ResetCodec()
```

##### `ResetSampleRateHertz` <a name="ResetSampleRateHertz" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.resetSampleRateHertz"></a>

```csharp
private void ResetSampleRateHertz()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.bitrateBpsInput">BitrateBpsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelCountInput">ChannelCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelLayoutInput">ChannelLayoutInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.codecInput">CodecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.sampleRateHertzInput">SampleRateHertzInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.bitrateBps">BitrateBps</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelCount">ChannelCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelLayout">ChannelLayout</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.codec">Codec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.sampleRateHertz">SampleRateHertz</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream">TranscoderJobTemplateConfigElementaryStreamsAudioStream</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BitrateBpsInput`<sup>Optional</sup> <a name="BitrateBpsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.bitrateBpsInput"></a>

```csharp
public double BitrateBpsInput { get; }
```

- *Type:* double

---

##### `ChannelCountInput`<sup>Optional</sup> <a name="ChannelCountInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelCountInput"></a>

```csharp
public double ChannelCountInput { get; }
```

- *Type:* double

---

##### `ChannelLayoutInput`<sup>Optional</sup> <a name="ChannelLayoutInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelLayoutInput"></a>

```csharp
public string[] ChannelLayoutInput { get; }
```

- *Type:* string[]

---

##### `CodecInput`<sup>Optional</sup> <a name="CodecInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.codecInput"></a>

```csharp
public string CodecInput { get; }
```

- *Type:* string

---

##### `SampleRateHertzInput`<sup>Optional</sup> <a name="SampleRateHertzInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.sampleRateHertzInput"></a>

```csharp
public double SampleRateHertzInput { get; }
```

- *Type:* double

---

##### `BitrateBps`<sup>Required</sup> <a name="BitrateBps" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.bitrateBps"></a>

```csharp
public double BitrateBps { get; }
```

- *Type:* double

---

##### `ChannelCount`<sup>Required</sup> <a name="ChannelCount" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelCount"></a>

```csharp
public double ChannelCount { get; }
```

- *Type:* double

---

##### `ChannelLayout`<sup>Required</sup> <a name="ChannelLayout" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.channelLayout"></a>

```csharp
public string[] ChannelLayout { get; }
```

- *Type:* string[]

---

##### `Codec`<sup>Required</sup> <a name="Codec" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.codec"></a>

```csharp
public string Codec { get; }
```

- *Type:* string

---

##### `SampleRateHertz`<sup>Required</sup> <a name="SampleRateHertz" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.sampleRateHertz"></a>

```csharp
public double SampleRateHertz { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference.property.internalValue"></a>

```csharp
public TranscoderJobTemplateConfigElementaryStreamsAudioStream InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream">TranscoderJobTemplateConfigElementaryStreamsAudioStream</a>

---


### TranscoderJobTemplateConfigElementaryStreamsList <a name="TranscoderJobTemplateConfigElementaryStreamsList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigElementaryStreamsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.get"></a>

```csharp
private TranscoderJobTemplateConfigElementaryStreamsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TranscoderJobTemplateConfigElementaryStreamsOutputReference <a name="TranscoderJobTemplateConfigElementaryStreamsOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigElementaryStreamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.putAudioStream">PutAudioStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.putVideoStream">PutVideoStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.resetAudioStream">ResetAudioStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.resetVideoStream">ResetVideoStream</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAudioStream` <a name="PutAudioStream" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.putAudioStream"></a>

```csharp
private void PutAudioStream(TranscoderJobTemplateConfigElementaryStreamsAudioStream Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.putAudioStream.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream">TranscoderJobTemplateConfigElementaryStreamsAudioStream</a>

---

##### `PutVideoStream` <a name="PutVideoStream" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.putVideoStream"></a>

```csharp
private void PutVideoStream(TranscoderJobTemplateConfigElementaryStreamsVideoStream Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.putVideoStream.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStream">TranscoderJobTemplateConfigElementaryStreamsVideoStream</a>

---

##### `ResetAudioStream` <a name="ResetAudioStream" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.resetAudioStream"></a>

```csharp
private void ResetAudioStream()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetVideoStream` <a name="ResetVideoStream" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.resetVideoStream"></a>

```csharp
private void ResetVideoStream()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.audioStream">AudioStream</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference">TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.videoStream">VideoStream</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference">TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.audioStreamInput">AudioStreamInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream">TranscoderJobTemplateConfigElementaryStreamsAudioStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.videoStreamInput">VideoStreamInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStream">TranscoderJobTemplateConfigElementaryStreamsVideoStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AudioStream`<sup>Required</sup> <a name="AudioStream" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.audioStream"></a>

```csharp
public TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference AudioStream { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference">TranscoderJobTemplateConfigElementaryStreamsAudioStreamOutputReference</a>

---

##### `VideoStream`<sup>Required</sup> <a name="VideoStream" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.videoStream"></a>

```csharp
public TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference VideoStream { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference">TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference</a>

---

##### `AudioStreamInput`<sup>Optional</sup> <a name="AudioStreamInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.audioStreamInput"></a>

```csharp
public TranscoderJobTemplateConfigElementaryStreamsAudioStream AudioStreamInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsAudioStream">TranscoderJobTemplateConfigElementaryStreamsAudioStream</a>

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `VideoStreamInput`<sup>Optional</sup> <a name="VideoStreamInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.videoStreamInput"></a>

```csharp
public TranscoderJobTemplateConfigElementaryStreamsVideoStream VideoStreamInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStream">TranscoderJobTemplateConfigElementaryStreamsVideoStream</a>

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference <a name="TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.internalValue"></a>

```csharp
public TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg</a>

---


### TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference <a name="TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.putHlg">PutHlg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.putSdr">PutSdr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetCrfLevel">ResetCrfLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetEntropyCoder">ResetEntropyCoder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetGopDuration">ResetGopDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetHeightPixels">ResetHeightPixels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetHlg">ResetHlg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetPixelFormat">ResetPixelFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetPreset">ResetPreset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetProfile">ResetProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetRateControlMode">ResetRateControlMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetSdr">ResetSdr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetVbvFullnessBits">ResetVbvFullnessBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetVbvSizeBits">ResetVbvSizeBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetWidthPixels">ResetWidthPixels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHlg` <a name="PutHlg" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.putHlg"></a>

```csharp
private void PutHlg(TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.putHlg.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg</a>

---

##### `PutSdr` <a name="PutSdr" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.putSdr"></a>

```csharp
private void PutSdr(TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.putSdr.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr</a>

---

##### `ResetCrfLevel` <a name="ResetCrfLevel" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetCrfLevel"></a>

```csharp
private void ResetCrfLevel()
```

##### `ResetEntropyCoder` <a name="ResetEntropyCoder" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetEntropyCoder"></a>

```csharp
private void ResetEntropyCoder()
```

##### `ResetGopDuration` <a name="ResetGopDuration" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetGopDuration"></a>

```csharp
private void ResetGopDuration()
```

##### `ResetHeightPixels` <a name="ResetHeightPixels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetHeightPixels"></a>

```csharp
private void ResetHeightPixels()
```

##### `ResetHlg` <a name="ResetHlg" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetHlg"></a>

```csharp
private void ResetHlg()
```

##### `ResetPixelFormat` <a name="ResetPixelFormat" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetPixelFormat"></a>

```csharp
private void ResetPixelFormat()
```

##### `ResetPreset` <a name="ResetPreset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetPreset"></a>

```csharp
private void ResetPreset()
```

##### `ResetProfile` <a name="ResetProfile" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetProfile"></a>

```csharp
private void ResetProfile()
```

##### `ResetRateControlMode` <a name="ResetRateControlMode" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetRateControlMode"></a>

```csharp
private void ResetRateControlMode()
```

##### `ResetSdr` <a name="ResetSdr" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetSdr"></a>

```csharp
private void ResetSdr()
```

##### `ResetVbvFullnessBits` <a name="ResetVbvFullnessBits" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetVbvFullnessBits"></a>

```csharp
private void ResetVbvFullnessBits()
```

##### `ResetVbvSizeBits` <a name="ResetVbvSizeBits" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetVbvSizeBits"></a>

```csharp
private void ResetVbvSizeBits()
```

##### `ResetWidthPixels` <a name="ResetWidthPixels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.resetWidthPixels"></a>

```csharp
private void ResetWidthPixels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.hlg">Hlg</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.sdr">Sdr</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.bitrateBpsInput">BitrateBpsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.crfLevelInput">CrfLevelInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.entropyCoderInput">EntropyCoderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.frameRateInput">FrameRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.gopDurationInput">GopDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.heightPixelsInput">HeightPixelsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.hlgInput">HlgInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.pixelFormatInput">PixelFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.presetInput">PresetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.profileInput">ProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.rateControlModeInput">RateControlModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.sdrInput">SdrInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvFullnessBitsInput">VbvFullnessBitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvSizeBitsInput">VbvSizeBitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.widthPixelsInput">WidthPixelsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.bitrateBps">BitrateBps</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.crfLevel">CrfLevel</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.entropyCoder">EntropyCoder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.frameRate">FrameRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.gopDuration">GopDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.heightPixels">HeightPixels</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.pixelFormat">PixelFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.preset">Preset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.profile">Profile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.rateControlMode">RateControlMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvFullnessBits">VbvFullnessBits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvSizeBits">VbvSizeBits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.widthPixels">WidthPixels</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Hlg`<sup>Required</sup> <a name="Hlg" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.hlg"></a>

```csharp
public TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference Hlg { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264HlgOutputReference</a>

---

##### `Sdr`<sup>Required</sup> <a name="Sdr" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.sdr"></a>

```csharp
public TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference Sdr { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference</a>

---

##### `BitrateBpsInput`<sup>Optional</sup> <a name="BitrateBpsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.bitrateBpsInput"></a>

```csharp
public double BitrateBpsInput { get; }
```

- *Type:* double

---

##### `CrfLevelInput`<sup>Optional</sup> <a name="CrfLevelInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.crfLevelInput"></a>

```csharp
public double CrfLevelInput { get; }
```

- *Type:* double

---

##### `EntropyCoderInput`<sup>Optional</sup> <a name="EntropyCoderInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.entropyCoderInput"></a>

```csharp
public string EntropyCoderInput { get; }
```

- *Type:* string

---

##### `FrameRateInput`<sup>Optional</sup> <a name="FrameRateInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.frameRateInput"></a>

```csharp
public double FrameRateInput { get; }
```

- *Type:* double

---

##### `GopDurationInput`<sup>Optional</sup> <a name="GopDurationInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.gopDurationInput"></a>

```csharp
public string GopDurationInput { get; }
```

- *Type:* string

---

##### `HeightPixelsInput`<sup>Optional</sup> <a name="HeightPixelsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.heightPixelsInput"></a>

```csharp
public double HeightPixelsInput { get; }
```

- *Type:* double

---

##### `HlgInput`<sup>Optional</sup> <a name="HlgInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.hlgInput"></a>

```csharp
public TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg HlgInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Hlg</a>

---

##### `PixelFormatInput`<sup>Optional</sup> <a name="PixelFormatInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.pixelFormatInput"></a>

```csharp
public string PixelFormatInput { get; }
```

- *Type:* string

---

##### `PresetInput`<sup>Optional</sup> <a name="PresetInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.presetInput"></a>

```csharp
public string PresetInput { get; }
```

- *Type:* string

---

##### `ProfileInput`<sup>Optional</sup> <a name="ProfileInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.profileInput"></a>

```csharp
public string ProfileInput { get; }
```

- *Type:* string

---

##### `RateControlModeInput`<sup>Optional</sup> <a name="RateControlModeInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.rateControlModeInput"></a>

```csharp
public string RateControlModeInput { get; }
```

- *Type:* string

---

##### `SdrInput`<sup>Optional</sup> <a name="SdrInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.sdrInput"></a>

```csharp
public TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr SdrInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr</a>

---

##### `VbvFullnessBitsInput`<sup>Optional</sup> <a name="VbvFullnessBitsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvFullnessBitsInput"></a>

```csharp
public double VbvFullnessBitsInput { get; }
```

- *Type:* double

---

##### `VbvSizeBitsInput`<sup>Optional</sup> <a name="VbvSizeBitsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvSizeBitsInput"></a>

```csharp
public double VbvSizeBitsInput { get; }
```

- *Type:* double

---

##### `WidthPixelsInput`<sup>Optional</sup> <a name="WidthPixelsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.widthPixelsInput"></a>

```csharp
public double WidthPixelsInput { get; }
```

- *Type:* double

---

##### `BitrateBps`<sup>Required</sup> <a name="BitrateBps" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.bitrateBps"></a>

```csharp
public double BitrateBps { get; }
```

- *Type:* double

---

##### `CrfLevel`<sup>Required</sup> <a name="CrfLevel" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.crfLevel"></a>

```csharp
public double CrfLevel { get; }
```

- *Type:* double

---

##### `EntropyCoder`<sup>Required</sup> <a name="EntropyCoder" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.entropyCoder"></a>

```csharp
public string EntropyCoder { get; }
```

- *Type:* string

---

##### `FrameRate`<sup>Required</sup> <a name="FrameRate" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.frameRate"></a>

```csharp
public double FrameRate { get; }
```

- *Type:* double

---

##### `GopDuration`<sup>Required</sup> <a name="GopDuration" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.gopDuration"></a>

```csharp
public string GopDuration { get; }
```

- *Type:* string

---

##### `HeightPixels`<sup>Required</sup> <a name="HeightPixels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.heightPixels"></a>

```csharp
public double HeightPixels { get; }
```

- *Type:* double

---

##### `PixelFormat`<sup>Required</sup> <a name="PixelFormat" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.pixelFormat"></a>

```csharp
public string PixelFormat { get; }
```

- *Type:* string

---

##### `Preset`<sup>Required</sup> <a name="Preset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.preset"></a>

```csharp
public string Preset { get; }
```

- *Type:* string

---

##### `Profile`<sup>Required</sup> <a name="Profile" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.profile"></a>

```csharp
public string Profile { get; }
```

- *Type:* string

---

##### `RateControlMode`<sup>Required</sup> <a name="RateControlMode" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.rateControlMode"></a>

```csharp
public string RateControlMode { get; }
```

- *Type:* string

---

##### `VbvFullnessBits`<sup>Required</sup> <a name="VbvFullnessBits" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvFullnessBits"></a>

```csharp
public double VbvFullnessBits { get; }
```

- *Type:* double

---

##### `VbvSizeBits`<sup>Required</sup> <a name="VbvSizeBits" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvSizeBits"></a>

```csharp
public double VbvSizeBits { get; }
```

- *Type:* double

---

##### `WidthPixels`<sup>Required</sup> <a name="WidthPixels" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.widthPixels"></a>

```csharp
public double WidthPixels { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference.property.internalValue"></a>

```csharp
public TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264</a>

---


### TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference <a name="TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.internalValue"></a>

```csharp
public TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264Sdr</a>

---


### TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference <a name="TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.putH264">PutH264</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.resetH264">ResetH264</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutH264` <a name="PutH264" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.putH264"></a>

```csharp
private void PutH264(TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264</a>

---

##### `ResetH264` <a name="ResetH264" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.resetH264"></a>

```csharp
private void ResetH264()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.h264">H264</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.h264Input">H264Input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStream">TranscoderJobTemplateConfigElementaryStreamsVideoStream</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `H264`<sup>Required</sup> <a name="H264" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.h264"></a>

```csharp
public TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference H264 { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264OutputReference</a>

---

##### `H264Input`<sup>Optional</sup> <a name="H264Input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.h264Input"></a>

```csharp
public TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264 H264Input { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264">TranscoderJobTemplateConfigElementaryStreamsVideoStreamH264</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStreamOutputReference.property.internalValue"></a>

```csharp
public TranscoderJobTemplateConfigElementaryStreamsVideoStream InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigElementaryStreamsVideoStream">TranscoderJobTemplateConfigElementaryStreamsVideoStream</a>

---


### TranscoderJobTemplateConfigEncryptionsAes128OutputReference <a name="TranscoderJobTemplateConfigEncryptionsAes128OutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigEncryptionsAes128OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128">TranscoderJobTemplateConfigEncryptionsAes128</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference.property.internalValue"></a>

```csharp
public TranscoderJobTemplateConfigEncryptionsAes128 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128">TranscoderJobTemplateConfigEncryptionsAes128</a>

---


### TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference <a name="TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey">TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference.property.internalValue"></a>

```csharp
public TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey">TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey</a>

---


### TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference <a name="TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay">TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference.property.internalValue"></a>

```csharp
public TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay">TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay</a>

---


### TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference <a name="TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putClearkey">PutClearkey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putFairplay">PutFairplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putPlayready">PutPlayready</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putWidevine">PutWidevine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetClearkey">ResetClearkey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetFairplay">ResetFairplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetPlayready">ResetPlayready</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetWidevine">ResetWidevine</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClearkey` <a name="PutClearkey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putClearkey"></a>

```csharp
private void PutClearkey(TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putClearkey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey">TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey</a>

---

##### `PutFairplay` <a name="PutFairplay" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putFairplay"></a>

```csharp
private void PutFairplay(TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putFairplay.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay">TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay</a>

---

##### `PutPlayready` <a name="PutPlayready" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putPlayready"></a>

```csharp
private void PutPlayready(TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putPlayready.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready">TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready</a>

---

##### `PutWidevine` <a name="PutWidevine" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putWidevine"></a>

```csharp
private void PutWidevine(TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.putWidevine.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine">TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine</a>

---

##### `ResetClearkey` <a name="ResetClearkey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetClearkey"></a>

```csharp
private void ResetClearkey()
```

##### `ResetFairplay` <a name="ResetFairplay" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetFairplay"></a>

```csharp
private void ResetFairplay()
```

##### `ResetPlayready` <a name="ResetPlayready" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetPlayready"></a>

```csharp
private void ResetPlayready()
```

##### `ResetWidevine` <a name="ResetWidevine" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.resetWidevine"></a>

```csharp
private void ResetWidevine()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.clearkey">Clearkey</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference">TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.fairplay">Fairplay</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference">TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.playready">Playready</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference">TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.widevine">Widevine</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference">TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.clearkeyInput">ClearkeyInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey">TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.fairplayInput">FairplayInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay">TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.playreadyInput">PlayreadyInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready">TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.widevineInput">WidevineInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine">TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems">TranscoderJobTemplateConfigEncryptionsDrmSystems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Clearkey`<sup>Required</sup> <a name="Clearkey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.clearkey"></a>

```csharp
public TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference Clearkey { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference">TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkeyOutputReference</a>

---

##### `Fairplay`<sup>Required</sup> <a name="Fairplay" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.fairplay"></a>

```csharp
public TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference Fairplay { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference">TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplayOutputReference</a>

---

##### `Playready`<sup>Required</sup> <a name="Playready" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.playready"></a>

```csharp
public TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference Playready { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference">TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference</a>

---

##### `Widevine`<sup>Required</sup> <a name="Widevine" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.widevine"></a>

```csharp
public TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference Widevine { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference">TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference</a>

---

##### `ClearkeyInput`<sup>Optional</sup> <a name="ClearkeyInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.clearkeyInput"></a>

```csharp
public TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey ClearkeyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey">TranscoderJobTemplateConfigEncryptionsDrmSystemsClearkey</a>

---

##### `FairplayInput`<sup>Optional</sup> <a name="FairplayInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.fairplayInput"></a>

```csharp
public TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay FairplayInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay">TranscoderJobTemplateConfigEncryptionsDrmSystemsFairplay</a>

---

##### `PlayreadyInput`<sup>Optional</sup> <a name="PlayreadyInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.playreadyInput"></a>

```csharp
public TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready PlayreadyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready">TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready</a>

---

##### `WidevineInput`<sup>Optional</sup> <a name="WidevineInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.widevineInput"></a>

```csharp
public TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine WidevineInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine">TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference.property.internalValue"></a>

```csharp
public TranscoderJobTemplateConfigEncryptionsDrmSystems InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems">TranscoderJobTemplateConfigEncryptionsDrmSystems</a>

---


### TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference <a name="TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready">TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.internalValue"></a>

```csharp
public TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready">TranscoderJobTemplateConfigEncryptionsDrmSystemsPlayready</a>

---


### TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference <a name="TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine">TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevineOutputReference.property.internalValue"></a>

```csharp
public TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine">TranscoderJobTemplateConfigEncryptionsDrmSystemsWidevine</a>

---


### TranscoderJobTemplateConfigEncryptionsList <a name="TranscoderJobTemplateConfigEncryptionsList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigEncryptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.get"></a>

```csharp
private TranscoderJobTemplateConfigEncryptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference <a name="TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.schemeInput">SchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.scheme">Scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCenc">TranscoderJobTemplateConfigEncryptionsMpegCenc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.schemeInput"></a>

```csharp
public string SchemeInput { get; }
```

- *Type:* string

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.scheme"></a>

```csharp
public string Scheme { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference.property.internalValue"></a>

```csharp
public TranscoderJobTemplateConfigEncryptionsMpegCenc InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCenc">TranscoderJobTemplateConfigEncryptionsMpegCenc</a>

---


### TranscoderJobTemplateConfigEncryptionsOutputReference <a name="TranscoderJobTemplateConfigEncryptionsOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigEncryptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putAes128">PutAes128</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putDrmSystems">PutDrmSystems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putMpegCenc">PutMpegCenc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putSampleAes">PutSampleAes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putSecretManagerKeySource">PutSecretManagerKeySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resetAes128">ResetAes128</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resetDrmSystems">ResetDrmSystems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resetMpegCenc">ResetMpegCenc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resetSampleAes">ResetSampleAes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resetSecretManagerKeySource">ResetSecretManagerKeySource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAes128` <a name="PutAes128" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putAes128"></a>

```csharp
private void PutAes128(TranscoderJobTemplateConfigEncryptionsAes128 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putAes128.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128">TranscoderJobTemplateConfigEncryptionsAes128</a>

---

##### `PutDrmSystems` <a name="PutDrmSystems" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putDrmSystems"></a>

```csharp
private void PutDrmSystems(TranscoderJobTemplateConfigEncryptionsDrmSystems Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putDrmSystems.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems">TranscoderJobTemplateConfigEncryptionsDrmSystems</a>

---

##### `PutMpegCenc` <a name="PutMpegCenc" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putMpegCenc"></a>

```csharp
private void PutMpegCenc(TranscoderJobTemplateConfigEncryptionsMpegCenc Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putMpegCenc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCenc">TranscoderJobTemplateConfigEncryptionsMpegCenc</a>

---

##### `PutSampleAes` <a name="PutSampleAes" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putSampleAes"></a>

```csharp
private void PutSampleAes(TranscoderJobTemplateConfigEncryptionsSampleAes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putSampleAes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAes">TranscoderJobTemplateConfigEncryptionsSampleAes</a>

---

##### `PutSecretManagerKeySource` <a name="PutSecretManagerKeySource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putSecretManagerKeySource"></a>

```csharp
private void PutSecretManagerKeySource(TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.putSecretManagerKeySource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource">TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource</a>

---

##### `ResetAes128` <a name="ResetAes128" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resetAes128"></a>

```csharp
private void ResetAes128()
```

##### `ResetDrmSystems` <a name="ResetDrmSystems" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resetDrmSystems"></a>

```csharp
private void ResetDrmSystems()
```

##### `ResetMpegCenc` <a name="ResetMpegCenc" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resetMpegCenc"></a>

```csharp
private void ResetMpegCenc()
```

##### `ResetSampleAes` <a name="ResetSampleAes" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resetSampleAes"></a>

```csharp
private void ResetSampleAes()
```

##### `ResetSecretManagerKeySource` <a name="ResetSecretManagerKeySource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.resetSecretManagerKeySource"></a>

```csharp
private void ResetSecretManagerKeySource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.aes128">Aes128</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference">TranscoderJobTemplateConfigEncryptionsAes128OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.drmSystems">DrmSystems</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference">TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.mpegCenc">MpegCenc</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference">TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.sampleAes">SampleAes</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference">TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.secretManagerKeySource">SecretManagerKeySource</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference">TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.aes128Input">Aes128Input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128">TranscoderJobTemplateConfigEncryptionsAes128</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.drmSystemsInput">DrmSystemsInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems">TranscoderJobTemplateConfigEncryptionsDrmSystems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.mpegCencInput">MpegCencInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCenc">TranscoderJobTemplateConfigEncryptionsMpegCenc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.sampleAesInput">SampleAesInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAes">TranscoderJobTemplateConfigEncryptionsSampleAes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.secretManagerKeySourceInput">SecretManagerKeySourceInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource">TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Aes128`<sup>Required</sup> <a name="Aes128" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.aes128"></a>

```csharp
public TranscoderJobTemplateConfigEncryptionsAes128OutputReference Aes128 { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128OutputReference">TranscoderJobTemplateConfigEncryptionsAes128OutputReference</a>

---

##### `DrmSystems`<sup>Required</sup> <a name="DrmSystems" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.drmSystems"></a>

```csharp
public TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference DrmSystems { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference">TranscoderJobTemplateConfigEncryptionsDrmSystemsOutputReference</a>

---

##### `MpegCenc`<sup>Required</sup> <a name="MpegCenc" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.mpegCenc"></a>

```csharp
public TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference MpegCenc { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference">TranscoderJobTemplateConfigEncryptionsMpegCencOutputReference</a>

---

##### `SampleAes`<sup>Required</sup> <a name="SampleAes" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.sampleAes"></a>

```csharp
public TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference SampleAes { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference">TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference</a>

---

##### `SecretManagerKeySource`<sup>Required</sup> <a name="SecretManagerKeySource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.secretManagerKeySource"></a>

```csharp
public TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference SecretManagerKeySource { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference">TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference</a>

---

##### `Aes128Input`<sup>Optional</sup> <a name="Aes128Input" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.aes128Input"></a>

```csharp
public TranscoderJobTemplateConfigEncryptionsAes128 Aes128Input { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsAes128">TranscoderJobTemplateConfigEncryptionsAes128</a>

---

##### `DrmSystemsInput`<sup>Optional</sup> <a name="DrmSystemsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.drmSystemsInput"></a>

```csharp
public TranscoderJobTemplateConfigEncryptionsDrmSystems DrmSystemsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsDrmSystems">TranscoderJobTemplateConfigEncryptionsDrmSystems</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MpegCencInput`<sup>Optional</sup> <a name="MpegCencInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.mpegCencInput"></a>

```csharp
public TranscoderJobTemplateConfigEncryptionsMpegCenc MpegCencInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsMpegCenc">TranscoderJobTemplateConfigEncryptionsMpegCenc</a>

---

##### `SampleAesInput`<sup>Optional</sup> <a name="SampleAesInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.sampleAesInput"></a>

```csharp
public TranscoderJobTemplateConfigEncryptionsSampleAes SampleAesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAes">TranscoderJobTemplateConfigEncryptionsSampleAes</a>

---

##### `SecretManagerKeySourceInput`<sup>Optional</sup> <a name="SecretManagerKeySourceInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.secretManagerKeySourceInput"></a>

```csharp
public TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource SecretManagerKeySourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource">TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference <a name="TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAes">TranscoderJobTemplateConfigEncryptionsSampleAes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAesOutputReference.property.internalValue"></a>

```csharp
public TranscoderJobTemplateConfigEncryptionsSampleAes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSampleAes">TranscoderJobTemplateConfigEncryptionsSampleAes</a>

---


### TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference <a name="TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.secretVersionInput">SecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.secretVersion">SecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource">TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretVersionInput`<sup>Optional</sup> <a name="SecretVersionInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.secretVersionInput"></a>

```csharp
public string SecretVersionInput { get; }
```

- *Type:* string

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.secretVersion"></a>

```csharp
public string SecretVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySourceOutputReference.property.internalValue"></a>

```csharp
public TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource">TranscoderJobTemplateConfigEncryptionsSecretManagerKeySource</a>

---


### TranscoderJobTemplateConfigInputsList <a name="TranscoderJobTemplateConfigInputsList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigInputsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.get"></a>

```csharp
private TranscoderJobTemplateConfigInputsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TranscoderJobTemplateConfigInputsOutputReference <a name="TranscoderJobTemplateConfigInputsOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigInputsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.resetUri"></a>

```csharp
private void ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigInputsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TranscoderJobTemplateConfigManifestsList <a name="TranscoderJobTemplateConfigManifestsList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigManifestsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.get"></a>

```csharp
private TranscoderJobTemplateConfigManifestsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TranscoderJobTemplateConfigManifestsOutputReference <a name="TranscoderJobTemplateConfigManifestsOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigManifestsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.resetFileName">ResetFileName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.resetMuxStreams">ResetMuxStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFileName` <a name="ResetFileName" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.resetFileName"></a>

```csharp
private void ResetFileName()
```

##### `ResetMuxStreams` <a name="ResetMuxStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.resetMuxStreams"></a>

```csharp
private void ResetMuxStreams()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.fileNameInput">FileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.muxStreamsInput">MuxStreamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.fileName">FileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.muxStreams">MuxStreams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FileNameInput`<sup>Optional</sup> <a name="FileNameInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.fileNameInput"></a>

```csharp
public string FileNameInput { get; }
```

- *Type:* string

---

##### `MuxStreamsInput`<sup>Optional</sup> <a name="MuxStreamsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.muxStreamsInput"></a>

```csharp
public string[] MuxStreamsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `FileName`<sup>Required</sup> <a name="FileName" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.fileName"></a>

```csharp
public string FileName { get; }
```

- *Type:* string

---

##### `MuxStreams`<sup>Required</sup> <a name="MuxStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.muxStreams"></a>

```csharp
public string[] MuxStreams { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigManifestsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TranscoderJobTemplateConfigMuxStreamsList <a name="TranscoderJobTemplateConfigMuxStreamsList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigMuxStreamsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.get"></a>

```csharp
private TranscoderJobTemplateConfigMuxStreamsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TranscoderJobTemplateConfigMuxStreamsOutputReference <a name="TranscoderJobTemplateConfigMuxStreamsOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigMuxStreamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.putSegmentSettings">PutSegmentSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetContainer">ResetContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetElementaryStreams">ResetElementaryStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetEncryptionId">ResetEncryptionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetFileName">ResetFileName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetSegmentSettings">ResetSegmentSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSegmentSettings` <a name="PutSegmentSettings" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.putSegmentSettings"></a>

```csharp
private void PutSegmentSettings(TranscoderJobTemplateConfigMuxStreamsSegmentSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.putSegmentSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettings">TranscoderJobTemplateConfigMuxStreamsSegmentSettings</a>

---

##### `ResetContainer` <a name="ResetContainer" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetContainer"></a>

```csharp
private void ResetContainer()
```

##### `ResetElementaryStreams` <a name="ResetElementaryStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetElementaryStreams"></a>

```csharp
private void ResetElementaryStreams()
```

##### `ResetEncryptionId` <a name="ResetEncryptionId" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetEncryptionId"></a>

```csharp
private void ResetEncryptionId()
```

##### `ResetFileName` <a name="ResetFileName" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetFileName"></a>

```csharp
private void ResetFileName()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetSegmentSettings` <a name="ResetSegmentSettings" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.resetSegmentSettings"></a>

```csharp
private void ResetSegmentSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.segmentSettings">SegmentSettings</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference">TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.containerInput">ContainerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.elementaryStreamsInput">ElementaryStreamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.encryptionIdInput">EncryptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.fileNameInput">FileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.segmentSettingsInput">SegmentSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettings">TranscoderJobTemplateConfigMuxStreamsSegmentSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.container">Container</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.elementaryStreams">ElementaryStreams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.encryptionId">EncryptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.fileName">FileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SegmentSettings`<sup>Required</sup> <a name="SegmentSettings" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.segmentSettings"></a>

```csharp
public TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference SegmentSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference">TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference</a>

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.containerInput"></a>

```csharp
public string ContainerInput { get; }
```

- *Type:* string

---

##### `ElementaryStreamsInput`<sup>Optional</sup> <a name="ElementaryStreamsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.elementaryStreamsInput"></a>

```csharp
public string[] ElementaryStreamsInput { get; }
```

- *Type:* string[]

---

##### `EncryptionIdInput`<sup>Optional</sup> <a name="EncryptionIdInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.encryptionIdInput"></a>

```csharp
public string EncryptionIdInput { get; }
```

- *Type:* string

---

##### `FileNameInput`<sup>Optional</sup> <a name="FileNameInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.fileNameInput"></a>

```csharp
public string FileNameInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `SegmentSettingsInput`<sup>Optional</sup> <a name="SegmentSettingsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.segmentSettingsInput"></a>

```csharp
public TranscoderJobTemplateConfigMuxStreamsSegmentSettings SegmentSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettings">TranscoderJobTemplateConfigMuxStreamsSegmentSettings</a>

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.container"></a>

```csharp
public string Container { get; }
```

- *Type:* string

---

##### `ElementaryStreams`<sup>Required</sup> <a name="ElementaryStreams" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.elementaryStreams"></a>

```csharp
public string[] ElementaryStreams { get; }
```

- *Type:* string[]

---

##### `EncryptionId`<sup>Required</sup> <a name="EncryptionId" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.encryptionId"></a>

```csharp
public string EncryptionId { get; }
```

- *Type:* string

---

##### `FileName`<sup>Required</sup> <a name="FileName" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.fileName"></a>

```csharp
public string FileName { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference <a name="TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.resetSegmentDuration">ResetSegmentDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSegmentDuration` <a name="ResetSegmentDuration" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.resetSegmentDuration"></a>

```csharp
private void ResetSegmentDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.segmentDurationInput">SegmentDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.segmentDuration">SegmentDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettings">TranscoderJobTemplateConfigMuxStreamsSegmentSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SegmentDurationInput`<sup>Optional</sup> <a name="SegmentDurationInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.segmentDurationInput"></a>

```csharp
public string SegmentDurationInput { get; }
```

- *Type:* string

---

##### `SegmentDuration`<sup>Required</sup> <a name="SegmentDuration" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.segmentDuration"></a>

```csharp
public string SegmentDuration { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettingsOutputReference.property.internalValue"></a>

```csharp
public TranscoderJobTemplateConfigMuxStreamsSegmentSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigMuxStreamsSegmentSettings">TranscoderJobTemplateConfigMuxStreamsSegmentSettings</a>

---


### TranscoderJobTemplateConfigOutputOutputReference <a name="TranscoderJobTemplateConfigOutputOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.resetUri"></a>

```csharp
private void ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutput">TranscoderJobTemplateConfigOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutputOutputReference.property.internalValue"></a>

```csharp
public TranscoderJobTemplateConfigOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOutput">TranscoderJobTemplateConfigOutput</a>

---


### TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference <a name="TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.putXy">PutXy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resetEndTimeOffset">ResetEndTimeOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resetStartTimeOffset">ResetStartTimeOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resetXy">ResetXy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutXy` <a name="PutXy" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.putXy"></a>

```csharp
private void PutXy(TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.putXy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy</a>

---

##### `ResetEndTimeOffset` <a name="ResetEndTimeOffset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resetEndTimeOffset"></a>

```csharp
private void ResetEndTimeOffset()
```

##### `ResetStartTimeOffset` <a name="ResetStartTimeOffset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resetStartTimeOffset"></a>

```csharp
private void ResetStartTimeOffset()
```

##### `ResetXy` <a name="ResetXy" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.resetXy"></a>

```csharp
private void ResetXy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.xy">Xy</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.endTimeOffsetInput">EndTimeOffsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.fadeTypeInput">FadeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.startTimeOffsetInput">StartTimeOffsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.xyInput">XyInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.endTimeOffset">EndTimeOffset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.fadeType">FadeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.startTimeOffset">StartTimeOffset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Xy`<sup>Required</sup> <a name="Xy" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.xy"></a>

```csharp
public TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference Xy { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference</a>

---

##### `EndTimeOffsetInput`<sup>Optional</sup> <a name="EndTimeOffsetInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.endTimeOffsetInput"></a>

```csharp
public string EndTimeOffsetInput { get; }
```

- *Type:* string

---

##### `FadeTypeInput`<sup>Optional</sup> <a name="FadeTypeInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.fadeTypeInput"></a>

```csharp
public string FadeTypeInput { get; }
```

- *Type:* string

---

##### `StartTimeOffsetInput`<sup>Optional</sup> <a name="StartTimeOffsetInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.startTimeOffsetInput"></a>

```csharp
public string StartTimeOffsetInput { get; }
```

- *Type:* string

---

##### `XyInput`<sup>Optional</sup> <a name="XyInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.xyInput"></a>

```csharp
public TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy XyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy</a>

---

##### `EndTimeOffset`<sup>Required</sup> <a name="EndTimeOffset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.endTimeOffset"></a>

```csharp
public string EndTimeOffset { get; }
```

- *Type:* string

---

##### `FadeType`<sup>Required</sup> <a name="FadeType" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.fadeType"></a>

```csharp
public string FadeType { get; }
```

- *Type:* string

---

##### `StartTimeOffset`<sup>Required</sup> <a name="StartTimeOffset" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.startTimeOffset"></a>

```csharp
public string StartTimeOffset { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference.property.internalValue"></a>

```csharp
public TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade</a>

---


### TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference <a name="TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.resetX">ResetX</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.resetY">ResetY</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetX` <a name="ResetX" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.resetX"></a>

```csharp
private void ResetX()
```

##### `ResetY` <a name="ResetY" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.resetY"></a>

```csharp
private void ResetY()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.xInput">XInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.yInput">YInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.x">X</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.y">Y</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `XInput`<sup>Optional</sup> <a name="XInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.xInput"></a>

```csharp
public double XInput { get; }
```

- *Type:* double

---

##### `YInput`<sup>Optional</sup> <a name="YInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.yInput"></a>

```csharp
public double YInput { get; }
```

- *Type:* double

---

##### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.x"></a>

```csharp
public double X { get; }
```

- *Type:* double

---

##### `Y`<sup>Required</sup> <a name="Y" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.y"></a>

```csharp
public double Y { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.internalValue"></a>

```csharp
public TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeXy</a>

---


### TranscoderJobTemplateConfigOverlaysAnimationsList <a name="TranscoderJobTemplateConfigOverlaysAnimationsList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigOverlaysAnimationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.get"></a>

```csharp
private TranscoderJobTemplateConfigOverlaysAnimationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TranscoderJobTemplateConfigOverlaysAnimationsOutputReference <a name="TranscoderJobTemplateConfigOverlaysAnimationsOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigOverlaysAnimationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.putAnimationFade">PutAnimationFade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.resetAnimationFade">ResetAnimationFade</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnimationFade` <a name="PutAnimationFade" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.putAnimationFade"></a>

```csharp
private void PutAnimationFade(TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.putAnimationFade.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade</a>

---

##### `ResetAnimationFade` <a name="ResetAnimationFade" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.resetAnimationFade"></a>

```csharp
private void ResetAnimationFade()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.animationFade">AnimationFade</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.animationFadeInput">AnimationFadeInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AnimationFade`<sup>Required</sup> <a name="AnimationFade" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.animationFade"></a>

```csharp
public TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference AnimationFade { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFadeOutputReference</a>

---

##### `AnimationFadeInput`<sup>Optional</sup> <a name="AnimationFadeInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.animationFadeInput"></a>

```csharp
public TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade AnimationFadeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade">TranscoderJobTemplateConfigOverlaysAnimationsAnimationFade</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TranscoderJobTemplateConfigOverlaysImageOutputReference <a name="TranscoderJobTemplateConfigOverlaysImageOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigOverlaysImageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImage">TranscoderJobTemplateConfigOverlaysImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference.property.internalValue"></a>

```csharp
public TranscoderJobTemplateConfigOverlaysImage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImage">TranscoderJobTemplateConfigOverlaysImage</a>

---


### TranscoderJobTemplateConfigOverlaysList <a name="TranscoderJobTemplateConfigOverlaysList" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigOverlaysList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.get"></a>

```csharp
private TranscoderJobTemplateConfigOverlaysOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TranscoderJobTemplateConfigOverlaysOutputReference <a name="TranscoderJobTemplateConfigOverlaysOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigOverlaysOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.putAnimations">PutAnimations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.putImage">PutImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.resetAnimations">ResetAnimations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.resetImage">ResetImage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnimations` <a name="PutAnimations" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.putAnimations"></a>

```csharp
private void PutAnimations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.putAnimations.parameter.value"></a>

- *Type:* object

---

##### `PutImage` <a name="PutImage" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.putImage"></a>

```csharp
private void PutImage(TranscoderJobTemplateConfigOverlaysImage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.putImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImage">TranscoderJobTemplateConfigOverlaysImage</a>

---

##### `ResetAnimations` <a name="ResetAnimations" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.resetAnimations"></a>

```csharp
private void ResetAnimations()
```

##### `ResetImage` <a name="ResetImage" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.resetImage"></a>

```csharp
private void ResetImage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.animations">Animations</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList">TranscoderJobTemplateConfigOverlaysAnimationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.image">Image</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference">TranscoderJobTemplateConfigOverlaysImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.animationsInput">AnimationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.imageInput">ImageInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImage">TranscoderJobTemplateConfigOverlaysImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Animations`<sup>Required</sup> <a name="Animations" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.animations"></a>

```csharp
public TranscoderJobTemplateConfigOverlaysAnimationsList Animations { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysAnimationsList">TranscoderJobTemplateConfigOverlaysAnimationsList</a>

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.image"></a>

```csharp
public TranscoderJobTemplateConfigOverlaysImageOutputReference Image { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImageOutputReference">TranscoderJobTemplateConfigOverlaysImageOutputReference</a>

---

##### `AnimationsInput`<sup>Optional</sup> <a name="AnimationsInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.animationsInput"></a>

```csharp
public object AnimationsInput { get; }
```

- *Type:* object

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.imageInput"></a>

```csharp
public TranscoderJobTemplateConfigOverlaysImage ImageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysImage">TranscoderJobTemplateConfigOverlaysImage</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigOverlaysOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TranscoderJobTemplateConfigPubsubDestinationOutputReference <a name="TranscoderJobTemplateConfigPubsubDestinationOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateConfigPubsubDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.resetTopic">ResetTopic</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTopic` <a name="ResetTopic" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.resetTopic"></a>

```csharp
private void ResetTopic()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.property.topicInput">TopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.property.topic">Topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestination">TranscoderJobTemplateConfigPubsubDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TopicInput`<sup>Optional</sup> <a name="TopicInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.property.topicInput"></a>

```csharp
public string TopicInput { get; }
```

- *Type:* string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.property.topic"></a>

```csharp
public string Topic { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestinationOutputReference.property.internalValue"></a>

```csharp
public TranscoderJobTemplateConfigPubsubDestination InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateConfigPubsubDestination">TranscoderJobTemplateConfigPubsubDestination</a>

---


### TranscoderJobTemplateTimeoutsOutputReference <a name="TranscoderJobTemplateTimeoutsOutputReference" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTemplateTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJobTemplate.TranscoderJobTemplateTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



