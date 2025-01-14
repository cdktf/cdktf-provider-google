# `transcoderJob` Submodule <a name="`transcoderJob` Submodule" id="@cdktf/provider-google.transcoderJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TranscoderJob <a name="TranscoderJob" id="@cdktf/provider-google.transcoderJob.TranscoderJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job google_transcoder_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJob(Construct Scope, string Id, TranscoderJobConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfig">TranscoderJobConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.transcoderJob.TranscoderJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfig">TranscoderJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.resetTemplateId">ResetTemplateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJob.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.transcoderJob.TranscoderJob.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.transcoderJob.TranscoderJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJob.TranscoderJob.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.transcoderJob.TranscoderJob.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.transcoderJob.TranscoderJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.transcoderJob.TranscoderJob.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.transcoderJob.TranscoderJob.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.transcoderJob.TranscoderJob.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.transcoderJob.TranscoderJob.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.transcoderJob.TranscoderJob.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.transcoderJob.TranscoderJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.transcoderJob.TranscoderJob.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.transcoderJob.TranscoderJob.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.transcoderJob.TranscoderJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.transcoderJob.TranscoderJob.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.transcoderJob.TranscoderJob.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.transcoderJob.TranscoderJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.transcoderJob.TranscoderJob.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.transcoderJob.TranscoderJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.transcoderJob.TranscoderJob.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.transcoderJob.TranscoderJob.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.transcoderJob.TranscoderJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-google.transcoderJob.TranscoderJob.putConfig"></a>

```csharp
private void PutConfig(TranscoderJobConfigA Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJob.TranscoderJob.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA">TranscoderJobConfigA</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.transcoderJob.TranscoderJob.putTimeouts"></a>

```csharp
private void PutTimeouts(TranscoderJobTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJob.TranscoderJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeouts">TranscoderJobTimeouts</a>

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-google.transcoderJob.TranscoderJob.resetConfig"></a>

```csharp
private void ResetConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.transcoderJob.TranscoderJob.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.transcoderJob.TranscoderJob.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.transcoderJob.TranscoderJob.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTemplateId` <a name="ResetTemplateId" id="@cdktf/provider-google.transcoderJob.TranscoderJob.resetTemplateId"></a>

```csharp
private void ResetTemplateId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.transcoderJob.TranscoderJob.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a TranscoderJob resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.transcoderJob.TranscoderJob.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

TranscoderJob.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.transcoderJob.TranscoderJob.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.transcoderJob.TranscoderJob.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

TranscoderJob.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.transcoderJob.TranscoderJob.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJob.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

TranscoderJob.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.transcoderJob.TranscoderJob.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.transcoderJob.TranscoderJob.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

TranscoderJob.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a TranscoderJob resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.transcoderJob.TranscoderJob.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.transcoderJob.TranscoderJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TranscoderJob to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.transcoderJob.TranscoderJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TranscoderJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.transcoderJob.TranscoderJob.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the TranscoderJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference">TranscoderJobConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference">TranscoderJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA">TranscoderJobConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.templateIdInput">TemplateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.templateId">TemplateId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.config"></a>

```csharp
public TranscoderJobConfigAOutputReference Config { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference">TranscoderJobConfigAOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.timeouts"></a>

```csharp
public TranscoderJobTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference">TranscoderJobTimeoutsOutputReference</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.configInput"></a>

```csharp
public TranscoderJobConfigA ConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA">TranscoderJobConfigA</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TemplateIdInput`<sup>Optional</sup> <a name="TemplateIdInput" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.templateIdInput"></a>

```csharp
public string TemplateIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `TemplateId`<sup>Required</sup> <a name="TemplateId" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.templateId"></a>

```csharp
public string TemplateId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJob.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.transcoderJob.TranscoderJob.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TranscoderJobConfig <a name="TranscoderJobConfig" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    TranscoderJobConfigA Config = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    string TemplateId = null,
    TranscoderJobTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.location">Location</a></code> | <code>string</code> | The location of the transcoding job resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA">TranscoderJobConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#id TranscoderJob#id}. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels associated with this job. You can use these to organize and group your jobs. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#project TranscoderJob#project}. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.templateId">TemplateId</a></code> | <code>string</code> | Specify the templateId to use for populating Job.config. The default is preset/web-hd, which is the only supported preset. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeouts">TranscoderJobTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the transcoding job resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#location TranscoderJob#location}

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.config"></a>

```csharp
public TranscoderJobConfigA Config { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA">TranscoderJobConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#config TranscoderJob#config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#id TranscoderJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels associated with this job. You can use these to organize and group your jobs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#labels TranscoderJob#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#project TranscoderJob#project}.

---

##### `TemplateId`<sup>Optional</sup> <a name="TemplateId" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.templateId"></a>

```csharp
public string TemplateId { get; set; }
```

- *Type:* string

Specify the templateId to use for populating Job.config. The default is preset/web-hd, which is the only supported preset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#template_id TranscoderJob#template_id}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfig.property.timeouts"></a>

```csharp
public TranscoderJobTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeouts">TranscoderJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#timeouts TranscoderJob#timeouts}

---

### TranscoderJobConfigA <a name="TranscoderJobConfigA" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigA {
    object AdBreaks = null,
    object EditList = null,
    object ElementaryStreams = null,
    object Encryptions = null,
    object Inputs = null,
    object Manifests = null,
    object MuxStreams = null,
    TranscoderJobConfigOutput Output = null,
    object Overlays = null,
    TranscoderJobConfigPubsubDestination PubsubDestination = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.adBreaks">AdBreaks</a></code> | <code>object</code> | ad_breaks block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.editList">EditList</a></code> | <code>object</code> | edit_list block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.elementaryStreams">ElementaryStreams</a></code> | <code>object</code> | elementary_streams block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.encryptions">Encryptions</a></code> | <code>object</code> | encryptions block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.inputs">Inputs</a></code> | <code>object</code> | inputs block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.manifests">Manifests</a></code> | <code>object</code> | manifests block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.muxStreams">MuxStreams</a></code> | <code>object</code> | mux_streams block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.output">Output</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutput">TranscoderJobConfigOutput</a></code> | output block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.overlays">Overlays</a></code> | <code>object</code> | overlays block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.pubsubDestination">PubsubDestination</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestination">TranscoderJobConfigPubsubDestination</a></code> | pubsub_destination block. |

---

##### `AdBreaks`<sup>Optional</sup> <a name="AdBreaks" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.adBreaks"></a>

```csharp
public object AdBreaks { get; set; }
```

- *Type:* object

ad_breaks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#ad_breaks TranscoderJob#ad_breaks}

---

##### `EditList`<sup>Optional</sup> <a name="EditList" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.editList"></a>

```csharp
public object EditList { get; set; }
```

- *Type:* object

edit_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#edit_list TranscoderJob#edit_list}

---

##### `ElementaryStreams`<sup>Optional</sup> <a name="ElementaryStreams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.elementaryStreams"></a>

```csharp
public object ElementaryStreams { get; set; }
```

- *Type:* object

elementary_streams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#elementary_streams TranscoderJob#elementary_streams}

---

##### `Encryptions`<sup>Optional</sup> <a name="Encryptions" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.encryptions"></a>

```csharp
public object Encryptions { get; set; }
```

- *Type:* object

encryptions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#encryptions TranscoderJob#encryptions}

---

##### `Inputs`<sup>Optional</sup> <a name="Inputs" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.inputs"></a>

```csharp
public object Inputs { get; set; }
```

- *Type:* object

inputs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#inputs TranscoderJob#inputs}

---

##### `Manifests`<sup>Optional</sup> <a name="Manifests" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.manifests"></a>

```csharp
public object Manifests { get; set; }
```

- *Type:* object

manifests block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#manifests TranscoderJob#manifests}

---

##### `MuxStreams`<sup>Optional</sup> <a name="MuxStreams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.muxStreams"></a>

```csharp
public object MuxStreams { get; set; }
```

- *Type:* object

mux_streams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#mux_streams TranscoderJob#mux_streams}

---

##### `Output`<sup>Optional</sup> <a name="Output" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.output"></a>

```csharp
public TranscoderJobConfigOutput Output { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutput">TranscoderJobConfigOutput</a>

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#output TranscoderJob#output}

---

##### `Overlays`<sup>Optional</sup> <a name="Overlays" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.overlays"></a>

```csharp
public object Overlays { get; set; }
```

- *Type:* object

overlays block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#overlays TranscoderJob#overlays}

---

##### `PubsubDestination`<sup>Optional</sup> <a name="PubsubDestination" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigA.property.pubsubDestination"></a>

```csharp
public TranscoderJobConfigPubsubDestination PubsubDestination { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestination">TranscoderJobConfigPubsubDestination</a>

pubsub_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#pubsub_destination TranscoderJob#pubsub_destination}

---

### TranscoderJobConfigAdBreaks <a name="TranscoderJobConfigAdBreaks" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigAdBreaks {
    string StartTimeOffset = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaks.property.startTimeOffset">StartTimeOffset</a></code> | <code>string</code> | Start time in seconds for the ad break, relative to the output file timeline. |

---

##### `StartTimeOffset`<sup>Optional</sup> <a name="StartTimeOffset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaks.property.startTimeOffset"></a>

```csharp
public string StartTimeOffset { get; set; }
```

- *Type:* string

Start time in seconds for the ad break, relative to the output file timeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#start_time_offset TranscoderJob#start_time_offset}

---

### TranscoderJobConfigEditListStruct <a name="TranscoderJobConfigEditListStruct" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStruct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigEditListStruct {
    string[] Inputs = null,
    string Key = null,
    string StartTimeOffset = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStruct.property.inputs">Inputs</a></code> | <code>string[]</code> | List of values identifying files that should be used in this atom. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStruct.property.key">Key</a></code> | <code>string</code> | A unique key for this atom. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStruct.property.startTimeOffset">StartTimeOffset</a></code> | <code>string</code> | Start time in seconds for the atom, relative to the input file timeline. The default is '0s'. |

---

##### `Inputs`<sup>Optional</sup> <a name="Inputs" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStruct.property.inputs"></a>

```csharp
public string[] Inputs { get; set; }
```

- *Type:* string[]

List of values identifying files that should be used in this atom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#inputs TranscoderJob#inputs}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStruct.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

A unique key for this atom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#key TranscoderJob#key}

---

##### `StartTimeOffset`<sup>Optional</sup> <a name="StartTimeOffset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStruct.property.startTimeOffset"></a>

```csharp
public string StartTimeOffset { get; set; }
```

- *Type:* string

Start time in seconds for the atom, relative to the input file timeline. The default is '0s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#start_time_offset TranscoderJob#start_time_offset}

---

### TranscoderJobConfigElementaryStreams <a name="TranscoderJobConfigElementaryStreams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreams.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigElementaryStreams {
    TranscoderJobConfigElementaryStreamsAudioStream AudioStream = null,
    string Key = null,
    TranscoderJobConfigElementaryStreamsVideoStream VideoStream = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreams.property.audioStream">AudioStream</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream">TranscoderJobConfigElementaryStreamsAudioStream</a></code> | audio_stream block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreams.property.key">Key</a></code> | <code>string</code> | A unique key for this atom. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreams.property.videoStream">VideoStream</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStream">TranscoderJobConfigElementaryStreamsVideoStream</a></code> | video_stream block. |

---

##### `AudioStream`<sup>Optional</sup> <a name="AudioStream" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreams.property.audioStream"></a>

```csharp
public TranscoderJobConfigElementaryStreamsAudioStream AudioStream { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream">TranscoderJobConfigElementaryStreamsAudioStream</a>

audio_stream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#audio_stream TranscoderJob#audio_stream}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreams.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

A unique key for this atom.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#key TranscoderJob#key}

---

##### `VideoStream`<sup>Optional</sup> <a name="VideoStream" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreams.property.videoStream"></a>

```csharp
public TranscoderJobConfigElementaryStreamsVideoStream VideoStream { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStream">TranscoderJobConfigElementaryStreamsVideoStream</a>

video_stream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#video_stream TranscoderJob#video_stream}

---

### TranscoderJobConfigElementaryStreamsAudioStream <a name="TranscoderJobConfigElementaryStreamsAudioStream" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigElementaryStreamsAudioStream {
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
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream.property.bitrateBps">BitrateBps</a></code> | <code>double</code> | Audio bitrate in bits per second. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream.property.channelCount">ChannelCount</a></code> | <code>double</code> | Number of audio channels. The default is '2'. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream.property.channelLayout">ChannelLayout</a></code> | <code>string[]</code> | A list of channel names specifying layout of the audio channels. The default is ["fl", "fr"]. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream.property.codec">Codec</a></code> | <code>string</code> | The codec for this audio stream. The default is 'aac'. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream.property.sampleRateHertz">SampleRateHertz</a></code> | <code>double</code> | The audio sample rate in Hertz. The default is '48000'. |

---

##### `BitrateBps`<sup>Required</sup> <a name="BitrateBps" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream.property.bitrateBps"></a>

```csharp
public double BitrateBps { get; set; }
```

- *Type:* double

Audio bitrate in bits per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#bitrate_bps TranscoderJob#bitrate_bps}

---

##### `ChannelCount`<sup>Optional</sup> <a name="ChannelCount" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream.property.channelCount"></a>

```csharp
public double ChannelCount { get; set; }
```

- *Type:* double

Number of audio channels. The default is '2'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#channel_count TranscoderJob#channel_count}

---

##### `ChannelLayout`<sup>Optional</sup> <a name="ChannelLayout" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream.property.channelLayout"></a>

```csharp
public string[] ChannelLayout { get; set; }
```

- *Type:* string[]

A list of channel names specifying layout of the audio channels. The default is ["fl", "fr"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#channel_layout TranscoderJob#channel_layout}

---

##### `Codec`<sup>Optional</sup> <a name="Codec" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream.property.codec"></a>

```csharp
public string Codec { get; set; }
```

- *Type:* string

The codec for this audio stream. The default is 'aac'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#codec TranscoderJob#codec}

---

##### `SampleRateHertz`<sup>Optional</sup> <a name="SampleRateHertz" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream.property.sampleRateHertz"></a>

```csharp
public double SampleRateHertz { get; set; }
```

- *Type:* double

The audio sample rate in Hertz. The default is '48000'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#sample_rate_hertz TranscoderJob#sample_rate_hertz}

---

### TranscoderJobConfigElementaryStreamsVideoStream <a name="TranscoderJobConfigElementaryStreamsVideoStream" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStream.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigElementaryStreamsVideoStream {
    TranscoderJobConfigElementaryStreamsVideoStreamH264 H264 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStream.property.h264">H264</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264">TranscoderJobConfigElementaryStreamsVideoStreamH264</a></code> | h264 block. |

---

##### `H264`<sup>Optional</sup> <a name="H264" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStream.property.h264"></a>

```csharp
public TranscoderJobConfigElementaryStreamsVideoStreamH264 H264 { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264">TranscoderJobConfigElementaryStreamsVideoStreamH264</a>

h264 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#h264 TranscoderJob#h264}

---

### TranscoderJobConfigElementaryStreamsVideoStreamH264 <a name="TranscoderJobConfigElementaryStreamsVideoStreamH264" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigElementaryStreamsVideoStreamH264 {
    double BitrateBps,
    double FrameRate,
    double CrfLevel = null,
    string EntropyCoder = null,
    string GopDuration = null,
    double HeightPixels = null,
    TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg Hlg = null,
    string PixelFormat = null,
    string Preset = null,
    string Profile = null,
    string RateControlMode = null,
    TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr Sdr = null,
    double VbvFullnessBits = null,
    double VbvSizeBits = null,
    double WidthPixels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.bitrateBps">BitrateBps</a></code> | <code>double</code> | The video bitrate in bits per second. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.frameRate">FrameRate</a></code> | <code>double</code> | The target video frame rate in frames per second (FPS). |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.crfLevel">CrfLevel</a></code> | <code>double</code> | Target CRF level. The default is '21'. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.entropyCoder">EntropyCoder</a></code> | <code>string</code> | The entropy coder to use. The default is 'cabac'. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.gopDuration">GopDuration</a></code> | <code>string</code> | Select the GOP size based on the specified duration. The default is '3s'. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.heightPixels">HeightPixels</a></code> | <code>double</code> | The height of the video in pixels. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.hlg">Hlg</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg</a></code> | hlg block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.pixelFormat">PixelFormat</a></code> | <code>string</code> | Pixel format to use. The default is 'yuv420p'. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.preset">Preset</a></code> | <code>string</code> | Enforces the specified codec preset. The default is 'veryfast'. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.profile">Profile</a></code> | <code>string</code> | Enforces the specified codec profile. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.rateControlMode">RateControlMode</a></code> | <code>string</code> | Specify the mode. The default is 'vbr'. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.sdr">Sdr</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr</a></code> | sdr block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.vbvFullnessBits">VbvFullnessBits</a></code> | <code>double</code> | Initial fullness of the Video Buffering Verifier (VBV) buffer in bits. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.vbvSizeBits">VbvSizeBits</a></code> | <code>double</code> | Size of the Video Buffering Verifier (VBV) buffer in bits. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.widthPixels">WidthPixels</a></code> | <code>double</code> | The width of the video in pixels. |

---

##### `BitrateBps`<sup>Required</sup> <a name="BitrateBps" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.bitrateBps"></a>

```csharp
public double BitrateBps { get; set; }
```

- *Type:* double

The video bitrate in bits per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#bitrate_bps TranscoderJob#bitrate_bps}

---

##### `FrameRate`<sup>Required</sup> <a name="FrameRate" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.frameRate"></a>

```csharp
public double FrameRate { get; set; }
```

- *Type:* double

The target video frame rate in frames per second (FPS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#frame_rate TranscoderJob#frame_rate}

---

##### `CrfLevel`<sup>Optional</sup> <a name="CrfLevel" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.crfLevel"></a>

```csharp
public double CrfLevel { get; set; }
```

- *Type:* double

Target CRF level. The default is '21'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#crf_level TranscoderJob#crf_level}

---

##### `EntropyCoder`<sup>Optional</sup> <a name="EntropyCoder" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.entropyCoder"></a>

```csharp
public string EntropyCoder { get; set; }
```

- *Type:* string

The entropy coder to use. The default is 'cabac'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#entropy_coder TranscoderJob#entropy_coder}

---

##### `GopDuration`<sup>Optional</sup> <a name="GopDuration" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.gopDuration"></a>

```csharp
public string GopDuration { get; set; }
```

- *Type:* string

Select the GOP size based on the specified duration. The default is '3s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#gop_duration TranscoderJob#gop_duration}

---

##### `HeightPixels`<sup>Optional</sup> <a name="HeightPixels" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.heightPixels"></a>

```csharp
public double HeightPixels { get; set; }
```

- *Type:* double

The height of the video in pixels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#height_pixels TranscoderJob#height_pixels}

---

##### `Hlg`<sup>Optional</sup> <a name="Hlg" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.hlg"></a>

```csharp
public TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg Hlg { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg</a>

hlg block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#hlg TranscoderJob#hlg}

---

##### `PixelFormat`<sup>Optional</sup> <a name="PixelFormat" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.pixelFormat"></a>

```csharp
public string PixelFormat { get; set; }
```

- *Type:* string

Pixel format to use. The default is 'yuv420p'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#pixel_format TranscoderJob#pixel_format}

---

##### `Preset`<sup>Optional</sup> <a name="Preset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.preset"></a>

```csharp
public string Preset { get; set; }
```

- *Type:* string

Enforces the specified codec preset. The default is 'veryfast'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#preset TranscoderJob#preset}

---

##### `Profile`<sup>Optional</sup> <a name="Profile" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.profile"></a>

```csharp
public string Profile { get; set; }
```

- *Type:* string

Enforces the specified codec profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#profile TranscoderJob#profile}

---

##### `RateControlMode`<sup>Optional</sup> <a name="RateControlMode" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.rateControlMode"></a>

```csharp
public string RateControlMode { get; set; }
```

- *Type:* string

Specify the mode. The default is 'vbr'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#rate_control_mode TranscoderJob#rate_control_mode}

---

##### `Sdr`<sup>Optional</sup> <a name="Sdr" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.sdr"></a>

```csharp
public TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr Sdr { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr</a>

sdr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#sdr TranscoderJob#sdr}

---

##### `VbvFullnessBits`<sup>Optional</sup> <a name="VbvFullnessBits" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.vbvFullnessBits"></a>

```csharp
public double VbvFullnessBits { get; set; }
```

- *Type:* double

Initial fullness of the Video Buffering Verifier (VBV) buffer in bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#vbv_fullness_bits TranscoderJob#vbv_fullness_bits}

---

##### `VbvSizeBits`<sup>Optional</sup> <a name="VbvSizeBits" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.vbvSizeBits"></a>

```csharp
public double VbvSizeBits { get; set; }
```

- *Type:* double

Size of the Video Buffering Verifier (VBV) buffer in bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#vbv_size_bits TranscoderJob#vbv_size_bits}

---

##### `WidthPixels`<sup>Optional</sup> <a name="WidthPixels" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264.property.widthPixels"></a>

```csharp
public double WidthPixels { get; set; }
```

- *Type:* double

The width of the video in pixels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#width_pixels TranscoderJob#width_pixels}

---

### TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg <a name="TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg {

};
```


### TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr <a name="TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr {

};
```


### TranscoderJobConfigEncryptions <a name="TranscoderJobConfigEncryptions" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigEncryptions {
    string Id,
    TranscoderJobConfigEncryptionsAes128 Aes128 = null,
    TranscoderJobConfigEncryptionsDrmSystems DrmSystems = null,
    TranscoderJobConfigEncryptionsMpegCenc MpegCenc = null,
    TranscoderJobConfigEncryptionsSampleAes SampleAes = null,
    TranscoderJobConfigEncryptionsSecretManagerKeySource SecretManagerKeySource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions.property.id">Id</a></code> | <code>string</code> | Identifier for this set of encryption options. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions.property.aes128">Aes128</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128">TranscoderJobConfigEncryptionsAes128</a></code> | aes128 block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions.property.drmSystems">DrmSystems</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems">TranscoderJobConfigEncryptionsDrmSystems</a></code> | drm_systems block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions.property.mpegCenc">MpegCenc</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCenc">TranscoderJobConfigEncryptionsMpegCenc</a></code> | mpeg_cenc block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions.property.sampleAes">SampleAes</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAes">TranscoderJobConfigEncryptionsSampleAes</a></code> | sample_aes block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions.property.secretManagerKeySource">SecretManagerKeySource</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySource">TranscoderJobConfigEncryptionsSecretManagerKeySource</a></code> | secret_manager_key_source block. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Identifier for this set of encryption options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#id TranscoderJob#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Aes128`<sup>Optional</sup> <a name="Aes128" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions.property.aes128"></a>

```csharp
public TranscoderJobConfigEncryptionsAes128 Aes128 { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128">TranscoderJobConfigEncryptionsAes128</a>

aes128 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#aes128 TranscoderJob#aes128}

---

##### `DrmSystems`<sup>Optional</sup> <a name="DrmSystems" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions.property.drmSystems"></a>

```csharp
public TranscoderJobConfigEncryptionsDrmSystems DrmSystems { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems">TranscoderJobConfigEncryptionsDrmSystems</a>

drm_systems block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#drm_systems TranscoderJob#drm_systems}

---

##### `MpegCenc`<sup>Optional</sup> <a name="MpegCenc" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions.property.mpegCenc"></a>

```csharp
public TranscoderJobConfigEncryptionsMpegCenc MpegCenc { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCenc">TranscoderJobConfigEncryptionsMpegCenc</a>

mpeg_cenc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#mpeg_cenc TranscoderJob#mpeg_cenc}

---

##### `SampleAes`<sup>Optional</sup> <a name="SampleAes" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions.property.sampleAes"></a>

```csharp
public TranscoderJobConfigEncryptionsSampleAes SampleAes { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAes">TranscoderJobConfigEncryptionsSampleAes</a>

sample_aes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#sample_aes TranscoderJob#sample_aes}

---

##### `SecretManagerKeySource`<sup>Optional</sup> <a name="SecretManagerKeySource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptions.property.secretManagerKeySource"></a>

```csharp
public TranscoderJobConfigEncryptionsSecretManagerKeySource SecretManagerKeySource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySource">TranscoderJobConfigEncryptionsSecretManagerKeySource</a>

secret_manager_key_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#secret_manager_key_source TranscoderJob#secret_manager_key_source}

---

### TranscoderJobConfigEncryptionsAes128 <a name="TranscoderJobConfigEncryptionsAes128" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigEncryptionsAes128 {

};
```


### TranscoderJobConfigEncryptionsDrmSystems <a name="TranscoderJobConfigEncryptionsDrmSystems" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigEncryptionsDrmSystems {
    TranscoderJobConfigEncryptionsDrmSystemsClearkey Clearkey = null,
    TranscoderJobConfigEncryptionsDrmSystemsFairplay Fairplay = null,
    TranscoderJobConfigEncryptionsDrmSystemsPlayready Playready = null,
    TranscoderJobConfigEncryptionsDrmSystemsWidevine Widevine = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems.property.clearkey">Clearkey</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkey">TranscoderJobConfigEncryptionsDrmSystemsClearkey</a></code> | clearkey block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems.property.fairplay">Fairplay</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplay">TranscoderJobConfigEncryptionsDrmSystemsFairplay</a></code> | fairplay block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems.property.playready">Playready</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayready">TranscoderJobConfigEncryptionsDrmSystemsPlayready</a></code> | playready block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems.property.widevine">Widevine</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevine">TranscoderJobConfigEncryptionsDrmSystemsWidevine</a></code> | widevine block. |

---

##### `Clearkey`<sup>Optional</sup> <a name="Clearkey" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems.property.clearkey"></a>

```csharp
public TranscoderJobConfigEncryptionsDrmSystemsClearkey Clearkey { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkey">TranscoderJobConfigEncryptionsDrmSystemsClearkey</a>

clearkey block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#clearkey TranscoderJob#clearkey}

---

##### `Fairplay`<sup>Optional</sup> <a name="Fairplay" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems.property.fairplay"></a>

```csharp
public TranscoderJobConfigEncryptionsDrmSystemsFairplay Fairplay { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplay">TranscoderJobConfigEncryptionsDrmSystemsFairplay</a>

fairplay block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#fairplay TranscoderJob#fairplay}

---

##### `Playready`<sup>Optional</sup> <a name="Playready" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems.property.playready"></a>

```csharp
public TranscoderJobConfigEncryptionsDrmSystemsPlayready Playready { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayready">TranscoderJobConfigEncryptionsDrmSystemsPlayready</a>

playready block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#playready TranscoderJob#playready}

---

##### `Widevine`<sup>Optional</sup> <a name="Widevine" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems.property.widevine"></a>

```csharp
public TranscoderJobConfigEncryptionsDrmSystemsWidevine Widevine { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevine">TranscoderJobConfigEncryptionsDrmSystemsWidevine</a>

widevine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#widevine TranscoderJob#widevine}

---

### TranscoderJobConfigEncryptionsDrmSystemsClearkey <a name="TranscoderJobConfigEncryptionsDrmSystemsClearkey" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigEncryptionsDrmSystemsClearkey {

};
```


### TranscoderJobConfigEncryptionsDrmSystemsFairplay <a name="TranscoderJobConfigEncryptionsDrmSystemsFairplay" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplay.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigEncryptionsDrmSystemsFairplay {

};
```


### TranscoderJobConfigEncryptionsDrmSystemsPlayready <a name="TranscoderJobConfigEncryptionsDrmSystemsPlayready" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayready"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayready.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigEncryptionsDrmSystemsPlayready {

};
```


### TranscoderJobConfigEncryptionsDrmSystemsWidevine <a name="TranscoderJobConfigEncryptionsDrmSystemsWidevine" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevine"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevine.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigEncryptionsDrmSystemsWidevine {

};
```


### TranscoderJobConfigEncryptionsMpegCenc <a name="TranscoderJobConfigEncryptionsMpegCenc" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCenc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCenc.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigEncryptionsMpegCenc {
    string Scheme
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCenc.property.scheme">Scheme</a></code> | <code>string</code> | Specify the encryption scheme. |

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCenc.property.scheme"></a>

```csharp
public string Scheme { get; set; }
```

- *Type:* string

Specify the encryption scheme.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#scheme TranscoderJob#scheme}

---

### TranscoderJobConfigEncryptionsSampleAes <a name="TranscoderJobConfigEncryptionsSampleAes" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigEncryptionsSampleAes {

};
```


### TranscoderJobConfigEncryptionsSecretManagerKeySource <a name="TranscoderJobConfigEncryptionsSecretManagerKeySource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigEncryptionsSecretManagerKeySource {
    string SecretVersion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySource.property.secretVersion">SecretVersion</a></code> | <code>string</code> | The name of the Secret Version containing the encryption key in the following format: projects/{project}/secrets/{secret_id}/versions/{version_number}. |

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySource.property.secretVersion"></a>

```csharp
public string SecretVersion { get; set; }
```

- *Type:* string

The name of the Secret Version containing the encryption key in the following format: projects/{project}/secrets/{secret_id}/versions/{version_number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#secret_version TranscoderJob#secret_version}

---

### TranscoderJobConfigInputs <a name="TranscoderJobConfigInputs" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigInputs {
    string Key = null,
    string Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputs.property.key">Key</a></code> | <code>string</code> | A unique key for this input. Must be specified when using advanced mapping and edit lists. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputs.property.uri">Uri</a></code> | <code>string</code> | URI of the media. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputs.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

A unique key for this input. Must be specified when using advanced mapping and edit lists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#key TranscoderJob#key}

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputs.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

URI of the media.

Input files must be at least 5 seconds in duration and stored in Cloud Storage (for example, gs://bucket/inputs/file.mp4).
If empty, the value is populated from Job.input_uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#uri TranscoderJob#uri}

---

### TranscoderJobConfigManifests <a name="TranscoderJobConfigManifests" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifests"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifests.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigManifests {
    string FileName = null,
    string[] MuxStreams = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifests.property.fileName">FileName</a></code> | <code>string</code> | The name of the generated file. The default is 'manifest'. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifests.property.muxStreams">MuxStreams</a></code> | <code>string[]</code> | List of user supplied MuxStream.key values that should appear in this manifest. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifests.property.type">Type</a></code> | <code>string</code> | Type of the manifest. Possible values: ["MANIFEST_TYPE_UNSPECIFIED", "HLS", "DASH"]. |

---

##### `FileName`<sup>Optional</sup> <a name="FileName" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifests.property.fileName"></a>

```csharp
public string FileName { get; set; }
```

- *Type:* string

The name of the generated file. The default is 'manifest'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#file_name TranscoderJob#file_name}

---

##### `MuxStreams`<sup>Optional</sup> <a name="MuxStreams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifests.property.muxStreams"></a>

```csharp
public string[] MuxStreams { get; set; }
```

- *Type:* string[]

List of user supplied MuxStream.key values that should appear in this manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#mux_streams TranscoderJob#mux_streams}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifests.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type of the manifest. Possible values: ["MANIFEST_TYPE_UNSPECIFIED", "HLS", "DASH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#type TranscoderJob#type}

---

### TranscoderJobConfigMuxStreams <a name="TranscoderJobConfigMuxStreams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigMuxStreams {
    string Container = null,
    string[] ElementaryStreams = null,
    string EncryptionId = null,
    string FileName = null,
    string Key = null,
    TranscoderJobConfigMuxStreamsSegmentSettings SegmentSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams.property.container">Container</a></code> | <code>string</code> | The container format. The default is 'mp4'. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams.property.elementaryStreams">ElementaryStreams</a></code> | <code>string[]</code> | List of ElementaryStream.key values multiplexed in this stream. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams.property.encryptionId">EncryptionId</a></code> | <code>string</code> | Identifier of the encryption configuration to use. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams.property.fileName">FileName</a></code> | <code>string</code> | The name of the generated file. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams.property.key">Key</a></code> | <code>string</code> | A unique key for this multiplexed stream. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams.property.segmentSettings">SegmentSettings</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettings">TranscoderJobConfigMuxStreamsSegmentSettings</a></code> | segment_settings block. |

---

##### `Container`<sup>Optional</sup> <a name="Container" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams.property.container"></a>

```csharp
public string Container { get; set; }
```

- *Type:* string

The container format. The default is 'mp4'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#container TranscoderJob#container}

---

##### `ElementaryStreams`<sup>Optional</sup> <a name="ElementaryStreams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams.property.elementaryStreams"></a>

```csharp
public string[] ElementaryStreams { get; set; }
```

- *Type:* string[]

List of ElementaryStream.key values multiplexed in this stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#elementary_streams TranscoderJob#elementary_streams}

---

##### `EncryptionId`<sup>Optional</sup> <a name="EncryptionId" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams.property.encryptionId"></a>

```csharp
public string EncryptionId { get; set; }
```

- *Type:* string

Identifier of the encryption configuration to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#encryption_id TranscoderJob#encryption_id}

---

##### `FileName`<sup>Optional</sup> <a name="FileName" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams.property.fileName"></a>

```csharp
public string FileName { get; set; }
```

- *Type:* string

The name of the generated file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#file_name TranscoderJob#file_name}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

A unique key for this multiplexed stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#key TranscoderJob#key}

---

##### `SegmentSettings`<sup>Optional</sup> <a name="SegmentSettings" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreams.property.segmentSettings"></a>

```csharp
public TranscoderJobConfigMuxStreamsSegmentSettings SegmentSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettings">TranscoderJobConfigMuxStreamsSegmentSettings</a>

segment_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#segment_settings TranscoderJob#segment_settings}

---

### TranscoderJobConfigMuxStreamsSegmentSettings <a name="TranscoderJobConfigMuxStreamsSegmentSettings" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigMuxStreamsSegmentSettings {
    string SegmentDuration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettings.property.segmentDuration">SegmentDuration</a></code> | <code>string</code> | Duration of the segments in seconds. The default is '6.0s'. |

---

##### `SegmentDuration`<sup>Optional</sup> <a name="SegmentDuration" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettings.property.segmentDuration"></a>

```csharp
public string SegmentDuration { get; set; }
```

- *Type:* string

Duration of the segments in seconds. The default is '6.0s'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#segment_duration TranscoderJob#segment_duration}

---

### TranscoderJobConfigOutput <a name="TranscoderJobConfigOutput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigOutput {
    string Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutput.property.uri">Uri</a></code> | <code>string</code> | URI for the output file(s). For example, gs://my-bucket/outputs/. |

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutput.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

URI for the output file(s). For example, gs://my-bucket/outputs/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#uri TranscoderJob#uri}

---

### TranscoderJobConfigOverlays <a name="TranscoderJobConfigOverlays" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlays"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlays.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigOverlays {
    object Animations = null,
    TranscoderJobConfigOverlaysImage Image = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlays.property.animations">Animations</a></code> | <code>object</code> | animations block. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlays.property.image">Image</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImage">TranscoderJobConfigOverlaysImage</a></code> | image block. |

---

##### `Animations`<sup>Optional</sup> <a name="Animations" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlays.property.animations"></a>

```csharp
public object Animations { get; set; }
```

- *Type:* object

animations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#animations TranscoderJob#animations}

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlays.property.image"></a>

```csharp
public TranscoderJobConfigOverlaysImage Image { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImage">TranscoderJobConfigOverlaysImage</a>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#image TranscoderJob#image}

---

### TranscoderJobConfigOverlaysAnimations <a name="TranscoderJobConfigOverlaysAnimations" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigOverlaysAnimations {
    TranscoderJobConfigOverlaysAnimationsAnimationFade AnimationFade = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimations.property.animationFade">AnimationFade</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade">TranscoderJobConfigOverlaysAnimationsAnimationFade</a></code> | animation_fade block. |

---

##### `AnimationFade`<sup>Optional</sup> <a name="AnimationFade" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimations.property.animationFade"></a>

```csharp
public TranscoderJobConfigOverlaysAnimationsAnimationFade AnimationFade { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade">TranscoderJobConfigOverlaysAnimationsAnimationFade</a>

animation_fade block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#animation_fade TranscoderJob#animation_fade}

---

### TranscoderJobConfigOverlaysAnimationsAnimationFade <a name="TranscoderJobConfigOverlaysAnimationsAnimationFade" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigOverlaysAnimationsAnimationFade {
    string FadeType,
    string EndTimeOffset = null,
    string StartTimeOffset = null,
    TranscoderJobConfigOverlaysAnimationsAnimationFadeXy Xy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade.property.fadeType">FadeType</a></code> | <code>string</code> | Required. Type of fade animation: 'FADE_IN' or 'FADE_OUT'. The possible values are:. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade.property.endTimeOffset">EndTimeOffset</a></code> | <code>string</code> | The time to end the fade animation, in seconds. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade.property.startTimeOffset">StartTimeOffset</a></code> | <code>string</code> | The time to start the fade animation, in seconds. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade.property.xy">Xy</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobConfigOverlaysAnimationsAnimationFadeXy</a></code> | xy block. |

---

##### `FadeType`<sup>Required</sup> <a name="FadeType" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade.property.fadeType"></a>

```csharp
public string FadeType { get; set; }
```

- *Type:* string

Required. Type of fade animation: 'FADE_IN' or 'FADE_OUT'. The possible values are:.

* 'FADE_TYPE_UNSPECIFIED': The fade type is not specified.
* 'FADE_IN': Fade the overlay object into view.
* 'FADE_OUT': Fade the overlay object out of view. Possible values: ["FADE_TYPE_UNSPECIFIED", "FADE_IN", "FADE_OUT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#fade_type TranscoderJob#fade_type}

---

##### `EndTimeOffset`<sup>Optional</sup> <a name="EndTimeOffset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade.property.endTimeOffset"></a>

```csharp
public string EndTimeOffset { get; set; }
```

- *Type:* string

The time to end the fade animation, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#end_time_offset TranscoderJob#end_time_offset}

---

##### `StartTimeOffset`<sup>Optional</sup> <a name="StartTimeOffset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade.property.startTimeOffset"></a>

```csharp
public string StartTimeOffset { get; set; }
```

- *Type:* string

The time to start the fade animation, in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#start_time_offset TranscoderJob#start_time_offset}

---

##### `Xy`<sup>Optional</sup> <a name="Xy" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade.property.xy"></a>

```csharp
public TranscoderJobConfigOverlaysAnimationsAnimationFadeXy Xy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobConfigOverlaysAnimationsAnimationFadeXy</a>

xy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#xy TranscoderJob#xy}

---

### TranscoderJobConfigOverlaysAnimationsAnimationFadeXy <a name="TranscoderJobConfigOverlaysAnimationsAnimationFadeXy" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigOverlaysAnimationsAnimationFadeXy {
    double X = null,
    double Y = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXy.property.x">X</a></code> | <code>double</code> | Normalized x coordinate. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXy.property.y">Y</a></code> | <code>double</code> | Normalized y coordinate. |

---

##### `X`<sup>Optional</sup> <a name="X" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXy.property.x"></a>

```csharp
public double X { get; set; }
```

- *Type:* double

Normalized x coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#x TranscoderJob#x}

---

##### `Y`<sup>Optional</sup> <a name="Y" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXy.property.y"></a>

```csharp
public double Y { get; set; }
```

- *Type:* double

Normalized y coordinate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#y TranscoderJob#y}

---

### TranscoderJobConfigOverlaysImage <a name="TranscoderJobConfigOverlaysImage" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigOverlaysImage {
    string Uri
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImage.property.uri">Uri</a></code> | <code>string</code> | URI of the image in Cloud Storage. For example, gs://bucket/inputs/image.png. |

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImage.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

URI of the image in Cloud Storage. For example, gs://bucket/inputs/image.png.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#uri TranscoderJob#uri}

---

### TranscoderJobConfigPubsubDestination <a name="TranscoderJobConfigPubsubDestination" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestination.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigPubsubDestination {
    string Topic = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestination.property.topic">Topic</a></code> | <code>string</code> | The name of the Pub/Sub topic to publish job completion notification to. For example: projects/{project}/topics/{topic}. |

---

##### `Topic`<sup>Optional</sup> <a name="Topic" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestination.property.topic"></a>

```csharp
public string Topic { get; set; }
```

- *Type:* string

The name of the Pub/Sub topic to publish job completion notification to. For example: projects/{project}/topics/{topic}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#topic TranscoderJob#topic}

---

### TranscoderJobTimeouts <a name="TranscoderJobTimeouts" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#create TranscoderJob#create}. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#delete TranscoderJob#delete}. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#update TranscoderJob#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#create TranscoderJob#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#delete TranscoderJob#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/transcoder_job#update TranscoderJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### TranscoderJobConfigAdBreaksList <a name="TranscoderJobConfigAdBreaksList" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigAdBreaksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.get"></a>

```csharp
private TranscoderJobConfigAdBreaksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TranscoderJobConfigAdBreaksOutputReference <a name="TranscoderJobConfigAdBreaksOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigAdBreaksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.resetStartTimeOffset">ResetStartTimeOffset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStartTimeOffset` <a name="ResetStartTimeOffset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.resetStartTimeOffset"></a>

```csharp
private void ResetStartTimeOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.property.startTimeOffsetInput">StartTimeOffsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.property.startTimeOffset">StartTimeOffset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StartTimeOffsetInput`<sup>Optional</sup> <a name="StartTimeOffsetInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.property.startTimeOffsetInput"></a>

```csharp
public string StartTimeOffsetInput { get; }
```

- *Type:* string

---

##### `StartTimeOffset`<sup>Required</sup> <a name="StartTimeOffset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.property.startTimeOffset"></a>

```csharp
public string StartTimeOffset { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TranscoderJobConfigAOutputReference <a name="TranscoderJobConfigAOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putAdBreaks">PutAdBreaks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putEditList">PutEditList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putElementaryStreams">PutElementaryStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putEncryptions">PutEncryptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putInputs">PutInputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putManifests">PutManifests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putMuxStreams">PutMuxStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putOutput">PutOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putOverlays">PutOverlays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putPubsubDestination">PutPubsubDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetAdBreaks">ResetAdBreaks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetEditList">ResetEditList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetElementaryStreams">ResetElementaryStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetEncryptions">ResetEncryptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetInputs">ResetInputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetManifests">ResetManifests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetMuxStreams">ResetMuxStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetOutput">ResetOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetOverlays">ResetOverlays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetPubsubDestination">ResetPubsubDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdBreaks` <a name="PutAdBreaks" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putAdBreaks"></a>

```csharp
private void PutAdBreaks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putAdBreaks.parameter.value"></a>

- *Type:* object

---

##### `PutEditList` <a name="PutEditList" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putEditList"></a>

```csharp
private void PutEditList(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putEditList.parameter.value"></a>

- *Type:* object

---

##### `PutElementaryStreams` <a name="PutElementaryStreams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putElementaryStreams"></a>

```csharp
private void PutElementaryStreams(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putElementaryStreams.parameter.value"></a>

- *Type:* object

---

##### `PutEncryptions` <a name="PutEncryptions" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putEncryptions"></a>

```csharp
private void PutEncryptions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putEncryptions.parameter.value"></a>

- *Type:* object

---

##### `PutInputs` <a name="PutInputs" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putInputs"></a>

```csharp
private void PutInputs(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putInputs.parameter.value"></a>

- *Type:* object

---

##### `PutManifests` <a name="PutManifests" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putManifests"></a>

```csharp
private void PutManifests(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putManifests.parameter.value"></a>

- *Type:* object

---

##### `PutMuxStreams` <a name="PutMuxStreams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putMuxStreams"></a>

```csharp
private void PutMuxStreams(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putMuxStreams.parameter.value"></a>

- *Type:* object

---

##### `PutOutput` <a name="PutOutput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putOutput"></a>

```csharp
private void PutOutput(TranscoderJobConfigOutput Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putOutput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutput">TranscoderJobConfigOutput</a>

---

##### `PutOverlays` <a name="PutOverlays" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putOverlays"></a>

```csharp
private void PutOverlays(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putOverlays.parameter.value"></a>

- *Type:* object

---

##### `PutPubsubDestination` <a name="PutPubsubDestination" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putPubsubDestination"></a>

```csharp
private void PutPubsubDestination(TranscoderJobConfigPubsubDestination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.putPubsubDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestination">TranscoderJobConfigPubsubDestination</a>

---

##### `ResetAdBreaks` <a name="ResetAdBreaks" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetAdBreaks"></a>

```csharp
private void ResetAdBreaks()
```

##### `ResetEditList` <a name="ResetEditList" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetEditList"></a>

```csharp
private void ResetEditList()
```

##### `ResetElementaryStreams` <a name="ResetElementaryStreams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetElementaryStreams"></a>

```csharp
private void ResetElementaryStreams()
```

##### `ResetEncryptions` <a name="ResetEncryptions" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetEncryptions"></a>

```csharp
private void ResetEncryptions()
```

##### `ResetInputs` <a name="ResetInputs" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetInputs"></a>

```csharp
private void ResetInputs()
```

##### `ResetManifests` <a name="ResetManifests" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetManifests"></a>

```csharp
private void ResetManifests()
```

##### `ResetMuxStreams` <a name="ResetMuxStreams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetMuxStreams"></a>

```csharp
private void ResetMuxStreams()
```

##### `ResetOutput` <a name="ResetOutput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetOutput"></a>

```csharp
private void ResetOutput()
```

##### `ResetOverlays` <a name="ResetOverlays" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetOverlays"></a>

```csharp
private void ResetOverlays()
```

##### `ResetPubsubDestination` <a name="ResetPubsubDestination" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.resetPubsubDestination"></a>

```csharp
private void ResetPubsubDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.adBreaks">AdBreaks</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList">TranscoderJobConfigAdBreaksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.editList">EditList</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList">TranscoderJobConfigEditListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.elementaryStreams">ElementaryStreams</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList">TranscoderJobConfigElementaryStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.encryptions">Encryptions</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList">TranscoderJobConfigEncryptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.inputs">Inputs</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList">TranscoderJobConfigInputsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.manifests">Manifests</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList">TranscoderJobConfigManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.muxStreams">MuxStreams</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList">TranscoderJobConfigMuxStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.output">Output</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference">TranscoderJobConfigOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.overlays">Overlays</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList">TranscoderJobConfigOverlaysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.pubsubDestination">PubsubDestination</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference">TranscoderJobConfigPubsubDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.adBreaksInput">AdBreaksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.editListInput">EditListInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.elementaryStreamsInput">ElementaryStreamsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.encryptionsInput">EncryptionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.inputsInput">InputsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.manifestsInput">ManifestsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.muxStreamsInput">MuxStreamsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.outputInput">OutputInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutput">TranscoderJobConfigOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.overlaysInput">OverlaysInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.pubsubDestinationInput">PubsubDestinationInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestination">TranscoderJobConfigPubsubDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA">TranscoderJobConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdBreaks`<sup>Required</sup> <a name="AdBreaks" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.adBreaks"></a>

```csharp
public TranscoderJobConfigAdBreaksList AdBreaks { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigAdBreaksList">TranscoderJobConfigAdBreaksList</a>

---

##### `EditList`<sup>Required</sup> <a name="EditList" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.editList"></a>

```csharp
public TranscoderJobConfigEditListStructList EditList { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList">TranscoderJobConfigEditListStructList</a>

---

##### `ElementaryStreams`<sup>Required</sup> <a name="ElementaryStreams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.elementaryStreams"></a>

```csharp
public TranscoderJobConfigElementaryStreamsList ElementaryStreams { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList">TranscoderJobConfigElementaryStreamsList</a>

---

##### `Encryptions`<sup>Required</sup> <a name="Encryptions" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.encryptions"></a>

```csharp
public TranscoderJobConfigEncryptionsList Encryptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList">TranscoderJobConfigEncryptionsList</a>

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.inputs"></a>

```csharp
public TranscoderJobConfigInputsList Inputs { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList">TranscoderJobConfigInputsList</a>

---

##### `Manifests`<sup>Required</sup> <a name="Manifests" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.manifests"></a>

```csharp
public TranscoderJobConfigManifestsList Manifests { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList">TranscoderJobConfigManifestsList</a>

---

##### `MuxStreams`<sup>Required</sup> <a name="MuxStreams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.muxStreams"></a>

```csharp
public TranscoderJobConfigMuxStreamsList MuxStreams { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList">TranscoderJobConfigMuxStreamsList</a>

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.output"></a>

```csharp
public TranscoderJobConfigOutputOutputReference Output { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference">TranscoderJobConfigOutputOutputReference</a>

---

##### `Overlays`<sup>Required</sup> <a name="Overlays" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.overlays"></a>

```csharp
public TranscoderJobConfigOverlaysList Overlays { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList">TranscoderJobConfigOverlaysList</a>

---

##### `PubsubDestination`<sup>Required</sup> <a name="PubsubDestination" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.pubsubDestination"></a>

```csharp
public TranscoderJobConfigPubsubDestinationOutputReference PubsubDestination { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference">TranscoderJobConfigPubsubDestinationOutputReference</a>

---

##### `AdBreaksInput`<sup>Optional</sup> <a name="AdBreaksInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.adBreaksInput"></a>

```csharp
public object AdBreaksInput { get; }
```

- *Type:* object

---

##### `EditListInput`<sup>Optional</sup> <a name="EditListInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.editListInput"></a>

```csharp
public object EditListInput { get; }
```

- *Type:* object

---

##### `ElementaryStreamsInput`<sup>Optional</sup> <a name="ElementaryStreamsInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.elementaryStreamsInput"></a>

```csharp
public object ElementaryStreamsInput { get; }
```

- *Type:* object

---

##### `EncryptionsInput`<sup>Optional</sup> <a name="EncryptionsInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.encryptionsInput"></a>

```csharp
public object EncryptionsInput { get; }
```

- *Type:* object

---

##### `InputsInput`<sup>Optional</sup> <a name="InputsInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.inputsInput"></a>

```csharp
public object InputsInput { get; }
```

- *Type:* object

---

##### `ManifestsInput`<sup>Optional</sup> <a name="ManifestsInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.manifestsInput"></a>

```csharp
public object ManifestsInput { get; }
```

- *Type:* object

---

##### `MuxStreamsInput`<sup>Optional</sup> <a name="MuxStreamsInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.muxStreamsInput"></a>

```csharp
public object MuxStreamsInput { get; }
```

- *Type:* object

---

##### `OutputInput`<sup>Optional</sup> <a name="OutputInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.outputInput"></a>

```csharp
public TranscoderJobConfigOutput OutputInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutput">TranscoderJobConfigOutput</a>

---

##### `OverlaysInput`<sup>Optional</sup> <a name="OverlaysInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.overlaysInput"></a>

```csharp
public object OverlaysInput { get; }
```

- *Type:* object

---

##### `PubsubDestinationInput`<sup>Optional</sup> <a name="PubsubDestinationInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.pubsubDestinationInput"></a>

```csharp
public TranscoderJobConfigPubsubDestination PubsubDestinationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestination">TranscoderJobConfigPubsubDestination</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigAOutputReference.property.internalValue"></a>

```csharp
public TranscoderJobConfigA InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigA">TranscoderJobConfigA</a>

---


### TranscoderJobConfigEditListStructList <a name="TranscoderJobConfigEditListStructList" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigEditListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.get"></a>

```csharp
private TranscoderJobConfigEditListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TranscoderJobConfigEditListStructOutputReference <a name="TranscoderJobConfigEditListStructOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigEditListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.resetInputs">ResetInputs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.resetStartTimeOffset">ResetStartTimeOffset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInputs` <a name="ResetInputs" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.resetInputs"></a>

```csharp
private void ResetInputs()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetStartTimeOffset` <a name="ResetStartTimeOffset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.resetStartTimeOffset"></a>

```csharp
private void ResetStartTimeOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.inputsInput">InputsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.startTimeOffsetInput">StartTimeOffsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.inputs">Inputs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.startTimeOffset">StartTimeOffset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InputsInput`<sup>Optional</sup> <a name="InputsInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.inputsInput"></a>

```csharp
public string[] InputsInput { get; }
```

- *Type:* string[]

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `StartTimeOffsetInput`<sup>Optional</sup> <a name="StartTimeOffsetInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.startTimeOffsetInput"></a>

```csharp
public string StartTimeOffsetInput { get; }
```

- *Type:* string

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.inputs"></a>

```csharp
public string[] Inputs { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `StartTimeOffset`<sup>Required</sup> <a name="StartTimeOffset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.startTimeOffset"></a>

```csharp
public string StartTimeOffset { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEditListStructOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TranscoderJobConfigElementaryStreamsAudioStreamOutputReference <a name="TranscoderJobConfigElementaryStreamsAudioStreamOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigElementaryStreamsAudioStreamOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resetChannelCount">ResetChannelCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resetChannelLayout">ResetChannelLayout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resetCodec">ResetCodec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resetSampleRateHertz">ResetSampleRateHertz</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChannelCount` <a name="ResetChannelCount" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resetChannelCount"></a>

```csharp
private void ResetChannelCount()
```

##### `ResetChannelLayout` <a name="ResetChannelLayout" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resetChannelLayout"></a>

```csharp
private void ResetChannelLayout()
```

##### `ResetCodec` <a name="ResetCodec" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resetCodec"></a>

```csharp
private void ResetCodec()
```

##### `ResetSampleRateHertz` <a name="ResetSampleRateHertz" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.resetSampleRateHertz"></a>

```csharp
private void ResetSampleRateHertz()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.bitrateBpsInput">BitrateBpsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.channelCountInput">ChannelCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.channelLayoutInput">ChannelLayoutInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.codecInput">CodecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.sampleRateHertzInput">SampleRateHertzInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.bitrateBps">BitrateBps</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.channelCount">ChannelCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.channelLayout">ChannelLayout</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.codec">Codec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.sampleRateHertz">SampleRateHertz</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream">TranscoderJobConfigElementaryStreamsAudioStream</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BitrateBpsInput`<sup>Optional</sup> <a name="BitrateBpsInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.bitrateBpsInput"></a>

```csharp
public double BitrateBpsInput { get; }
```

- *Type:* double

---

##### `ChannelCountInput`<sup>Optional</sup> <a name="ChannelCountInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.channelCountInput"></a>

```csharp
public double ChannelCountInput { get; }
```

- *Type:* double

---

##### `ChannelLayoutInput`<sup>Optional</sup> <a name="ChannelLayoutInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.channelLayoutInput"></a>

```csharp
public string[] ChannelLayoutInput { get; }
```

- *Type:* string[]

---

##### `CodecInput`<sup>Optional</sup> <a name="CodecInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.codecInput"></a>

```csharp
public string CodecInput { get; }
```

- *Type:* string

---

##### `SampleRateHertzInput`<sup>Optional</sup> <a name="SampleRateHertzInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.sampleRateHertzInput"></a>

```csharp
public double SampleRateHertzInput { get; }
```

- *Type:* double

---

##### `BitrateBps`<sup>Required</sup> <a name="BitrateBps" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.bitrateBps"></a>

```csharp
public double BitrateBps { get; }
```

- *Type:* double

---

##### `ChannelCount`<sup>Required</sup> <a name="ChannelCount" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.channelCount"></a>

```csharp
public double ChannelCount { get; }
```

- *Type:* double

---

##### `ChannelLayout`<sup>Required</sup> <a name="ChannelLayout" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.channelLayout"></a>

```csharp
public string[] ChannelLayout { get; }
```

- *Type:* string[]

---

##### `Codec`<sup>Required</sup> <a name="Codec" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.codec"></a>

```csharp
public string Codec { get; }
```

- *Type:* string

---

##### `SampleRateHertz`<sup>Required</sup> <a name="SampleRateHertz" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.sampleRateHertz"></a>

```csharp
public double SampleRateHertz { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference.property.internalValue"></a>

```csharp
public TranscoderJobConfigElementaryStreamsAudioStream InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream">TranscoderJobConfigElementaryStreamsAudioStream</a>

---


### TranscoderJobConfigElementaryStreamsList <a name="TranscoderJobConfigElementaryStreamsList" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigElementaryStreamsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.get"></a>

```csharp
private TranscoderJobConfigElementaryStreamsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TranscoderJobConfigElementaryStreamsOutputReference <a name="TranscoderJobConfigElementaryStreamsOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigElementaryStreamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.putAudioStream">PutAudioStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.putVideoStream">PutVideoStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.resetAudioStream">ResetAudioStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.resetVideoStream">ResetVideoStream</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAudioStream` <a name="PutAudioStream" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.putAudioStream"></a>

```csharp
private void PutAudioStream(TranscoderJobConfigElementaryStreamsAudioStream Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.putAudioStream.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream">TranscoderJobConfigElementaryStreamsAudioStream</a>

---

##### `PutVideoStream` <a name="PutVideoStream" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.putVideoStream"></a>

```csharp
private void PutVideoStream(TranscoderJobConfigElementaryStreamsVideoStream Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.putVideoStream.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStream">TranscoderJobConfigElementaryStreamsVideoStream</a>

---

##### `ResetAudioStream` <a name="ResetAudioStream" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.resetAudioStream"></a>

```csharp
private void ResetAudioStream()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetVideoStream` <a name="ResetVideoStream" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.resetVideoStream"></a>

```csharp
private void ResetVideoStream()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.audioStream">AudioStream</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference">TranscoderJobConfigElementaryStreamsAudioStreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.videoStream">VideoStream</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference">TranscoderJobConfigElementaryStreamsVideoStreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.audioStreamInput">AudioStreamInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream">TranscoderJobConfigElementaryStreamsAudioStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.videoStreamInput">VideoStreamInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStream">TranscoderJobConfigElementaryStreamsVideoStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AudioStream`<sup>Required</sup> <a name="AudioStream" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.audioStream"></a>

```csharp
public TranscoderJobConfigElementaryStreamsAudioStreamOutputReference AudioStream { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStreamOutputReference">TranscoderJobConfigElementaryStreamsAudioStreamOutputReference</a>

---

##### `VideoStream`<sup>Required</sup> <a name="VideoStream" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.videoStream"></a>

```csharp
public TranscoderJobConfigElementaryStreamsVideoStreamOutputReference VideoStream { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference">TranscoderJobConfigElementaryStreamsVideoStreamOutputReference</a>

---

##### `AudioStreamInput`<sup>Optional</sup> <a name="AudioStreamInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.audioStreamInput"></a>

```csharp
public TranscoderJobConfigElementaryStreamsAudioStream AudioStreamInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsAudioStream">TranscoderJobConfigElementaryStreamsAudioStream</a>

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `VideoStreamInput`<sup>Optional</sup> <a name="VideoStreamInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.videoStreamInput"></a>

```csharp
public TranscoderJobConfigElementaryStreamsVideoStream VideoStreamInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStream">TranscoderJobConfigElementaryStreamsVideoStream</a>

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference <a name="TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference.property.internalValue"></a>

```csharp
public TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg</a>

---


### TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference <a name="TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.putHlg">PutHlg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.putSdr">PutSdr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetCrfLevel">ResetCrfLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetEntropyCoder">ResetEntropyCoder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetGopDuration">ResetGopDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetHeightPixels">ResetHeightPixels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetHlg">ResetHlg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetPixelFormat">ResetPixelFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetPreset">ResetPreset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetProfile">ResetProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetRateControlMode">ResetRateControlMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetSdr">ResetSdr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetVbvFullnessBits">ResetVbvFullnessBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetVbvSizeBits">ResetVbvSizeBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetWidthPixels">ResetWidthPixels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHlg` <a name="PutHlg" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.putHlg"></a>

```csharp
private void PutHlg(TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.putHlg.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg</a>

---

##### `PutSdr` <a name="PutSdr" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.putSdr"></a>

```csharp
private void PutSdr(TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.putSdr.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr</a>

---

##### `ResetCrfLevel` <a name="ResetCrfLevel" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetCrfLevel"></a>

```csharp
private void ResetCrfLevel()
```

##### `ResetEntropyCoder` <a name="ResetEntropyCoder" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetEntropyCoder"></a>

```csharp
private void ResetEntropyCoder()
```

##### `ResetGopDuration` <a name="ResetGopDuration" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetGopDuration"></a>

```csharp
private void ResetGopDuration()
```

##### `ResetHeightPixels` <a name="ResetHeightPixels" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetHeightPixels"></a>

```csharp
private void ResetHeightPixels()
```

##### `ResetHlg` <a name="ResetHlg" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetHlg"></a>

```csharp
private void ResetHlg()
```

##### `ResetPixelFormat` <a name="ResetPixelFormat" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetPixelFormat"></a>

```csharp
private void ResetPixelFormat()
```

##### `ResetPreset` <a name="ResetPreset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetPreset"></a>

```csharp
private void ResetPreset()
```

##### `ResetProfile` <a name="ResetProfile" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetProfile"></a>

```csharp
private void ResetProfile()
```

##### `ResetRateControlMode` <a name="ResetRateControlMode" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetRateControlMode"></a>

```csharp
private void ResetRateControlMode()
```

##### `ResetSdr` <a name="ResetSdr" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetSdr"></a>

```csharp
private void ResetSdr()
```

##### `ResetVbvFullnessBits` <a name="ResetVbvFullnessBits" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetVbvFullnessBits"></a>

```csharp
private void ResetVbvFullnessBits()
```

##### `ResetVbvSizeBits` <a name="ResetVbvSizeBits" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetVbvSizeBits"></a>

```csharp
private void ResetVbvSizeBits()
```

##### `ResetWidthPixels` <a name="ResetWidthPixels" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.resetWidthPixels"></a>

```csharp
private void ResetWidthPixels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.hlg">Hlg</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference">TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.sdr">Sdr</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference">TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.bitrateBpsInput">BitrateBpsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.crfLevelInput">CrfLevelInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.entropyCoderInput">EntropyCoderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.frameRateInput">FrameRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.gopDurationInput">GopDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.heightPixelsInput">HeightPixelsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.hlgInput">HlgInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.pixelFormatInput">PixelFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.presetInput">PresetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.profileInput">ProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.rateControlModeInput">RateControlModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.sdrInput">SdrInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvFullnessBitsInput">VbvFullnessBitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvSizeBitsInput">VbvSizeBitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.widthPixelsInput">WidthPixelsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.bitrateBps">BitrateBps</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.crfLevel">CrfLevel</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.entropyCoder">EntropyCoder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.frameRate">FrameRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.gopDuration">GopDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.heightPixels">HeightPixels</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.pixelFormat">PixelFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.preset">Preset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.profile">Profile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.rateControlMode">RateControlMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvFullnessBits">VbvFullnessBits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvSizeBits">VbvSizeBits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.widthPixels">WidthPixels</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264">TranscoderJobConfigElementaryStreamsVideoStreamH264</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Hlg`<sup>Required</sup> <a name="Hlg" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.hlg"></a>

```csharp
public TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference Hlg { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference">TranscoderJobConfigElementaryStreamsVideoStreamH264HlgOutputReference</a>

---

##### `Sdr`<sup>Required</sup> <a name="Sdr" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.sdr"></a>

```csharp
public TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference Sdr { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference">TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference</a>

---

##### `BitrateBpsInput`<sup>Optional</sup> <a name="BitrateBpsInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.bitrateBpsInput"></a>

```csharp
public double BitrateBpsInput { get; }
```

- *Type:* double

---

##### `CrfLevelInput`<sup>Optional</sup> <a name="CrfLevelInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.crfLevelInput"></a>

```csharp
public double CrfLevelInput { get; }
```

- *Type:* double

---

##### `EntropyCoderInput`<sup>Optional</sup> <a name="EntropyCoderInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.entropyCoderInput"></a>

```csharp
public string EntropyCoderInput { get; }
```

- *Type:* string

---

##### `FrameRateInput`<sup>Optional</sup> <a name="FrameRateInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.frameRateInput"></a>

```csharp
public double FrameRateInput { get; }
```

- *Type:* double

---

##### `GopDurationInput`<sup>Optional</sup> <a name="GopDurationInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.gopDurationInput"></a>

```csharp
public string GopDurationInput { get; }
```

- *Type:* string

---

##### `HeightPixelsInput`<sup>Optional</sup> <a name="HeightPixelsInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.heightPixelsInput"></a>

```csharp
public double HeightPixelsInput { get; }
```

- *Type:* double

---

##### `HlgInput`<sup>Optional</sup> <a name="HlgInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.hlgInput"></a>

```csharp
public TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg HlgInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg">TranscoderJobConfigElementaryStreamsVideoStreamH264Hlg</a>

---

##### `PixelFormatInput`<sup>Optional</sup> <a name="PixelFormatInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.pixelFormatInput"></a>

```csharp
public string PixelFormatInput { get; }
```

- *Type:* string

---

##### `PresetInput`<sup>Optional</sup> <a name="PresetInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.presetInput"></a>

```csharp
public string PresetInput { get; }
```

- *Type:* string

---

##### `ProfileInput`<sup>Optional</sup> <a name="ProfileInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.profileInput"></a>

```csharp
public string ProfileInput { get; }
```

- *Type:* string

---

##### `RateControlModeInput`<sup>Optional</sup> <a name="RateControlModeInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.rateControlModeInput"></a>

```csharp
public string RateControlModeInput { get; }
```

- *Type:* string

---

##### `SdrInput`<sup>Optional</sup> <a name="SdrInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.sdrInput"></a>

```csharp
public TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr SdrInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr</a>

---

##### `VbvFullnessBitsInput`<sup>Optional</sup> <a name="VbvFullnessBitsInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvFullnessBitsInput"></a>

```csharp
public double VbvFullnessBitsInput { get; }
```

- *Type:* double

---

##### `VbvSizeBitsInput`<sup>Optional</sup> <a name="VbvSizeBitsInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvSizeBitsInput"></a>

```csharp
public double VbvSizeBitsInput { get; }
```

- *Type:* double

---

##### `WidthPixelsInput`<sup>Optional</sup> <a name="WidthPixelsInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.widthPixelsInput"></a>

```csharp
public double WidthPixelsInput { get; }
```

- *Type:* double

---

##### `BitrateBps`<sup>Required</sup> <a name="BitrateBps" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.bitrateBps"></a>

```csharp
public double BitrateBps { get; }
```

- *Type:* double

---

##### `CrfLevel`<sup>Required</sup> <a name="CrfLevel" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.crfLevel"></a>

```csharp
public double CrfLevel { get; }
```

- *Type:* double

---

##### `EntropyCoder`<sup>Required</sup> <a name="EntropyCoder" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.entropyCoder"></a>

```csharp
public string EntropyCoder { get; }
```

- *Type:* string

---

##### `FrameRate`<sup>Required</sup> <a name="FrameRate" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.frameRate"></a>

```csharp
public double FrameRate { get; }
```

- *Type:* double

---

##### `GopDuration`<sup>Required</sup> <a name="GopDuration" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.gopDuration"></a>

```csharp
public string GopDuration { get; }
```

- *Type:* string

---

##### `HeightPixels`<sup>Required</sup> <a name="HeightPixels" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.heightPixels"></a>

```csharp
public double HeightPixels { get; }
```

- *Type:* double

---

##### `PixelFormat`<sup>Required</sup> <a name="PixelFormat" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.pixelFormat"></a>

```csharp
public string PixelFormat { get; }
```

- *Type:* string

---

##### `Preset`<sup>Required</sup> <a name="Preset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.preset"></a>

```csharp
public string Preset { get; }
```

- *Type:* string

---

##### `Profile`<sup>Required</sup> <a name="Profile" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.profile"></a>

```csharp
public string Profile { get; }
```

- *Type:* string

---

##### `RateControlMode`<sup>Required</sup> <a name="RateControlMode" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.rateControlMode"></a>

```csharp
public string RateControlMode { get; }
```

- *Type:* string

---

##### `VbvFullnessBits`<sup>Required</sup> <a name="VbvFullnessBits" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvFullnessBits"></a>

```csharp
public double VbvFullnessBits { get; }
```

- *Type:* double

---

##### `VbvSizeBits`<sup>Required</sup> <a name="VbvSizeBits" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.vbvSizeBits"></a>

```csharp
public double VbvSizeBits { get; }
```

- *Type:* double

---

##### `WidthPixels`<sup>Required</sup> <a name="WidthPixels" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.widthPixels"></a>

```csharp
public double WidthPixels { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference.property.internalValue"></a>

```csharp
public TranscoderJobConfigElementaryStreamsVideoStreamH264 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264">TranscoderJobConfigElementaryStreamsVideoStreamH264</a>

---


### TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference <a name="TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264SdrOutputReference.property.internalValue"></a>

```csharp
public TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr">TranscoderJobConfigElementaryStreamsVideoStreamH264Sdr</a>

---


### TranscoderJobConfigElementaryStreamsVideoStreamOutputReference <a name="TranscoderJobConfigElementaryStreamsVideoStreamOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigElementaryStreamsVideoStreamOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.putH264">PutH264</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.resetH264">ResetH264</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutH264` <a name="PutH264" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.putH264"></a>

```csharp
private void PutH264(TranscoderJobConfigElementaryStreamsVideoStreamH264 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.putH264.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264">TranscoderJobConfigElementaryStreamsVideoStreamH264</a>

---

##### `ResetH264` <a name="ResetH264" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.resetH264"></a>

```csharp
private void ResetH264()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.h264">H264</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference">TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.h264Input">H264Input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264">TranscoderJobConfigElementaryStreamsVideoStreamH264</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStream">TranscoderJobConfigElementaryStreamsVideoStream</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `H264`<sup>Required</sup> <a name="H264" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.h264"></a>

```csharp
public TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference H264 { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference">TranscoderJobConfigElementaryStreamsVideoStreamH264OutputReference</a>

---

##### `H264Input`<sup>Optional</sup> <a name="H264Input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.h264Input"></a>

```csharp
public TranscoderJobConfigElementaryStreamsVideoStreamH264 H264Input { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamH264">TranscoderJobConfigElementaryStreamsVideoStreamH264</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStreamOutputReference.property.internalValue"></a>

```csharp
public TranscoderJobConfigElementaryStreamsVideoStream InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigElementaryStreamsVideoStream">TranscoderJobConfigElementaryStreamsVideoStream</a>

---


### TranscoderJobConfigEncryptionsAes128OutputReference <a name="TranscoderJobConfigEncryptionsAes128OutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigEncryptionsAes128OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128">TranscoderJobConfigEncryptionsAes128</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference.property.internalValue"></a>

```csharp
public TranscoderJobConfigEncryptionsAes128 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128">TranscoderJobConfigEncryptionsAes128</a>

---


### TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference <a name="TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkey">TranscoderJobConfigEncryptionsDrmSystemsClearkey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference.property.internalValue"></a>

```csharp
public TranscoderJobConfigEncryptionsDrmSystemsClearkey InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkey">TranscoderJobConfigEncryptionsDrmSystemsClearkey</a>

---


### TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference <a name="TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplay">TranscoderJobConfigEncryptionsDrmSystemsFairplay</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference.property.internalValue"></a>

```csharp
public TranscoderJobConfigEncryptionsDrmSystemsFairplay InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplay">TranscoderJobConfigEncryptionsDrmSystemsFairplay</a>

---


### TranscoderJobConfigEncryptionsDrmSystemsOutputReference <a name="TranscoderJobConfigEncryptionsDrmSystemsOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigEncryptionsDrmSystemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.putClearkey">PutClearkey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.putFairplay">PutFairplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.putPlayready">PutPlayready</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.putWidevine">PutWidevine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.resetClearkey">ResetClearkey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.resetFairplay">ResetFairplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.resetPlayready">ResetPlayready</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.resetWidevine">ResetWidevine</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClearkey` <a name="PutClearkey" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.putClearkey"></a>

```csharp
private void PutClearkey(TranscoderJobConfigEncryptionsDrmSystemsClearkey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.putClearkey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkey">TranscoderJobConfigEncryptionsDrmSystemsClearkey</a>

---

##### `PutFairplay` <a name="PutFairplay" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.putFairplay"></a>

```csharp
private void PutFairplay(TranscoderJobConfigEncryptionsDrmSystemsFairplay Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.putFairplay.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplay">TranscoderJobConfigEncryptionsDrmSystemsFairplay</a>

---

##### `PutPlayready` <a name="PutPlayready" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.putPlayready"></a>

```csharp
private void PutPlayready(TranscoderJobConfigEncryptionsDrmSystemsPlayready Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.putPlayready.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayready">TranscoderJobConfigEncryptionsDrmSystemsPlayready</a>

---

##### `PutWidevine` <a name="PutWidevine" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.putWidevine"></a>

```csharp
private void PutWidevine(TranscoderJobConfigEncryptionsDrmSystemsWidevine Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.putWidevine.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevine">TranscoderJobConfigEncryptionsDrmSystemsWidevine</a>

---

##### `ResetClearkey` <a name="ResetClearkey" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.resetClearkey"></a>

```csharp
private void ResetClearkey()
```

##### `ResetFairplay` <a name="ResetFairplay" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.resetFairplay"></a>

```csharp
private void ResetFairplay()
```

##### `ResetPlayready` <a name="ResetPlayready" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.resetPlayready"></a>

```csharp
private void ResetPlayready()
```

##### `ResetWidevine` <a name="ResetWidevine" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.resetWidevine"></a>

```csharp
private void ResetWidevine()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.clearkey">Clearkey</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference">TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.fairplay">Fairplay</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference">TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.playready">Playready</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference">TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.widevine">Widevine</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference">TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.clearkeyInput">ClearkeyInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkey">TranscoderJobConfigEncryptionsDrmSystemsClearkey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.fairplayInput">FairplayInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplay">TranscoderJobConfigEncryptionsDrmSystemsFairplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.playreadyInput">PlayreadyInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayready">TranscoderJobConfigEncryptionsDrmSystemsPlayready</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.widevineInput">WidevineInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevine">TranscoderJobConfigEncryptionsDrmSystemsWidevine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems">TranscoderJobConfigEncryptionsDrmSystems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Clearkey`<sup>Required</sup> <a name="Clearkey" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.clearkey"></a>

```csharp
public TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference Clearkey { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference">TranscoderJobConfigEncryptionsDrmSystemsClearkeyOutputReference</a>

---

##### `Fairplay`<sup>Required</sup> <a name="Fairplay" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.fairplay"></a>

```csharp
public TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference Fairplay { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference">TranscoderJobConfigEncryptionsDrmSystemsFairplayOutputReference</a>

---

##### `Playready`<sup>Required</sup> <a name="Playready" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.playready"></a>

```csharp
public TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference Playready { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference">TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference</a>

---

##### `Widevine`<sup>Required</sup> <a name="Widevine" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.widevine"></a>

```csharp
public TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference Widevine { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference">TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference</a>

---

##### `ClearkeyInput`<sup>Optional</sup> <a name="ClearkeyInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.clearkeyInput"></a>

```csharp
public TranscoderJobConfigEncryptionsDrmSystemsClearkey ClearkeyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsClearkey">TranscoderJobConfigEncryptionsDrmSystemsClearkey</a>

---

##### `FairplayInput`<sup>Optional</sup> <a name="FairplayInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.fairplayInput"></a>

```csharp
public TranscoderJobConfigEncryptionsDrmSystemsFairplay FairplayInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsFairplay">TranscoderJobConfigEncryptionsDrmSystemsFairplay</a>

---

##### `PlayreadyInput`<sup>Optional</sup> <a name="PlayreadyInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.playreadyInput"></a>

```csharp
public TranscoderJobConfigEncryptionsDrmSystemsPlayready PlayreadyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayready">TranscoderJobConfigEncryptionsDrmSystemsPlayready</a>

---

##### `WidevineInput`<sup>Optional</sup> <a name="WidevineInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.widevineInput"></a>

```csharp
public TranscoderJobConfigEncryptionsDrmSystemsWidevine WidevineInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevine">TranscoderJobConfigEncryptionsDrmSystemsWidevine</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference.property.internalValue"></a>

```csharp
public TranscoderJobConfigEncryptionsDrmSystems InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems">TranscoderJobConfigEncryptionsDrmSystems</a>

---


### TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference <a name="TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayready">TranscoderJobConfigEncryptionsDrmSystemsPlayready</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayreadyOutputReference.property.internalValue"></a>

```csharp
public TranscoderJobConfigEncryptionsDrmSystemsPlayready InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsPlayready">TranscoderJobConfigEncryptionsDrmSystemsPlayready</a>

---


### TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference <a name="TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevine">TranscoderJobConfigEncryptionsDrmSystemsWidevine</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevineOutputReference.property.internalValue"></a>

```csharp
public TranscoderJobConfigEncryptionsDrmSystemsWidevine InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsWidevine">TranscoderJobConfigEncryptionsDrmSystemsWidevine</a>

---


### TranscoderJobConfigEncryptionsList <a name="TranscoderJobConfigEncryptionsList" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigEncryptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.get"></a>

```csharp
private TranscoderJobConfigEncryptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TranscoderJobConfigEncryptionsMpegCencOutputReference <a name="TranscoderJobConfigEncryptionsMpegCencOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigEncryptionsMpegCencOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.property.schemeInput">SchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.property.scheme">Scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCenc">TranscoderJobConfigEncryptionsMpegCenc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.property.schemeInput"></a>

```csharp
public string SchemeInput { get; }
```

- *Type:* string

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.property.scheme"></a>

```csharp
public string Scheme { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference.property.internalValue"></a>

```csharp
public TranscoderJobConfigEncryptionsMpegCenc InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCenc">TranscoderJobConfigEncryptionsMpegCenc</a>

---


### TranscoderJobConfigEncryptionsOutputReference <a name="TranscoderJobConfigEncryptionsOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigEncryptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.putAes128">PutAes128</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.putDrmSystems">PutDrmSystems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.putMpegCenc">PutMpegCenc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.putSampleAes">PutSampleAes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.putSecretManagerKeySource">PutSecretManagerKeySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.resetAes128">ResetAes128</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.resetDrmSystems">ResetDrmSystems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.resetMpegCenc">ResetMpegCenc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.resetSampleAes">ResetSampleAes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.resetSecretManagerKeySource">ResetSecretManagerKeySource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAes128` <a name="PutAes128" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.putAes128"></a>

```csharp
private void PutAes128(TranscoderJobConfigEncryptionsAes128 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.putAes128.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128">TranscoderJobConfigEncryptionsAes128</a>

---

##### `PutDrmSystems` <a name="PutDrmSystems" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.putDrmSystems"></a>

```csharp
private void PutDrmSystems(TranscoderJobConfigEncryptionsDrmSystems Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.putDrmSystems.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems">TranscoderJobConfigEncryptionsDrmSystems</a>

---

##### `PutMpegCenc` <a name="PutMpegCenc" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.putMpegCenc"></a>

```csharp
private void PutMpegCenc(TranscoderJobConfigEncryptionsMpegCenc Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.putMpegCenc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCenc">TranscoderJobConfigEncryptionsMpegCenc</a>

---

##### `PutSampleAes` <a name="PutSampleAes" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.putSampleAes"></a>

```csharp
private void PutSampleAes(TranscoderJobConfigEncryptionsSampleAes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.putSampleAes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAes">TranscoderJobConfigEncryptionsSampleAes</a>

---

##### `PutSecretManagerKeySource` <a name="PutSecretManagerKeySource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.putSecretManagerKeySource"></a>

```csharp
private void PutSecretManagerKeySource(TranscoderJobConfigEncryptionsSecretManagerKeySource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.putSecretManagerKeySource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySource">TranscoderJobConfigEncryptionsSecretManagerKeySource</a>

---

##### `ResetAes128` <a name="ResetAes128" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.resetAes128"></a>

```csharp
private void ResetAes128()
```

##### `ResetDrmSystems` <a name="ResetDrmSystems" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.resetDrmSystems"></a>

```csharp
private void ResetDrmSystems()
```

##### `ResetMpegCenc` <a name="ResetMpegCenc" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.resetMpegCenc"></a>

```csharp
private void ResetMpegCenc()
```

##### `ResetSampleAes` <a name="ResetSampleAes" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.resetSampleAes"></a>

```csharp
private void ResetSampleAes()
```

##### `ResetSecretManagerKeySource` <a name="ResetSecretManagerKeySource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.resetSecretManagerKeySource"></a>

```csharp
private void ResetSecretManagerKeySource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.aes128">Aes128</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference">TranscoderJobConfigEncryptionsAes128OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.drmSystems">DrmSystems</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference">TranscoderJobConfigEncryptionsDrmSystemsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.mpegCenc">MpegCenc</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference">TranscoderJobConfigEncryptionsMpegCencOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.sampleAes">SampleAes</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference">TranscoderJobConfigEncryptionsSampleAesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.secretManagerKeySource">SecretManagerKeySource</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference">TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.aes128Input">Aes128Input</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128">TranscoderJobConfigEncryptionsAes128</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.drmSystemsInput">DrmSystemsInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems">TranscoderJobConfigEncryptionsDrmSystems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.mpegCencInput">MpegCencInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCenc">TranscoderJobConfigEncryptionsMpegCenc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.sampleAesInput">SampleAesInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAes">TranscoderJobConfigEncryptionsSampleAes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.secretManagerKeySourceInput">SecretManagerKeySourceInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySource">TranscoderJobConfigEncryptionsSecretManagerKeySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Aes128`<sup>Required</sup> <a name="Aes128" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.aes128"></a>

```csharp
public TranscoderJobConfigEncryptionsAes128OutputReference Aes128 { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128OutputReference">TranscoderJobConfigEncryptionsAes128OutputReference</a>

---

##### `DrmSystems`<sup>Required</sup> <a name="DrmSystems" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.drmSystems"></a>

```csharp
public TranscoderJobConfigEncryptionsDrmSystemsOutputReference DrmSystems { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystemsOutputReference">TranscoderJobConfigEncryptionsDrmSystemsOutputReference</a>

---

##### `MpegCenc`<sup>Required</sup> <a name="MpegCenc" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.mpegCenc"></a>

```csharp
public TranscoderJobConfigEncryptionsMpegCencOutputReference MpegCenc { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCencOutputReference">TranscoderJobConfigEncryptionsMpegCencOutputReference</a>

---

##### `SampleAes`<sup>Required</sup> <a name="SampleAes" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.sampleAes"></a>

```csharp
public TranscoderJobConfigEncryptionsSampleAesOutputReference SampleAes { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference">TranscoderJobConfigEncryptionsSampleAesOutputReference</a>

---

##### `SecretManagerKeySource`<sup>Required</sup> <a name="SecretManagerKeySource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.secretManagerKeySource"></a>

```csharp
public TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference SecretManagerKeySource { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference">TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference</a>

---

##### `Aes128Input`<sup>Optional</sup> <a name="Aes128Input" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.aes128Input"></a>

```csharp
public TranscoderJobConfigEncryptionsAes128 Aes128Input { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsAes128">TranscoderJobConfigEncryptionsAes128</a>

---

##### `DrmSystemsInput`<sup>Optional</sup> <a name="DrmSystemsInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.drmSystemsInput"></a>

```csharp
public TranscoderJobConfigEncryptionsDrmSystems DrmSystemsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsDrmSystems">TranscoderJobConfigEncryptionsDrmSystems</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MpegCencInput`<sup>Optional</sup> <a name="MpegCencInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.mpegCencInput"></a>

```csharp
public TranscoderJobConfigEncryptionsMpegCenc MpegCencInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsMpegCenc">TranscoderJobConfigEncryptionsMpegCenc</a>

---

##### `SampleAesInput`<sup>Optional</sup> <a name="SampleAesInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.sampleAesInput"></a>

```csharp
public TranscoderJobConfigEncryptionsSampleAes SampleAesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAes">TranscoderJobConfigEncryptionsSampleAes</a>

---

##### `SecretManagerKeySourceInput`<sup>Optional</sup> <a name="SecretManagerKeySourceInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.secretManagerKeySourceInput"></a>

```csharp
public TranscoderJobConfigEncryptionsSecretManagerKeySource SecretManagerKeySourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySource">TranscoderJobConfigEncryptionsSecretManagerKeySource</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TranscoderJobConfigEncryptionsSampleAesOutputReference <a name="TranscoderJobConfigEncryptionsSampleAesOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigEncryptionsSampleAesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAes">TranscoderJobConfigEncryptionsSampleAes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAesOutputReference.property.internalValue"></a>

```csharp
public TranscoderJobConfigEncryptionsSampleAes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSampleAes">TranscoderJobConfigEncryptionsSampleAes</a>

---


### TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference <a name="TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.secretVersionInput">SecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.secretVersion">SecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySource">TranscoderJobConfigEncryptionsSecretManagerKeySource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretVersionInput`<sup>Optional</sup> <a name="SecretVersionInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.secretVersionInput"></a>

```csharp
public string SecretVersionInput { get; }
```

- *Type:* string

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.secretVersion"></a>

```csharp
public string SecretVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySourceOutputReference.property.internalValue"></a>

```csharp
public TranscoderJobConfigEncryptionsSecretManagerKeySource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigEncryptionsSecretManagerKeySource">TranscoderJobConfigEncryptionsSecretManagerKeySource</a>

---


### TranscoderJobConfigInputsList <a name="TranscoderJobConfigInputsList" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigInputsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.get"></a>

```csharp
private TranscoderJobConfigInputsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TranscoderJobConfigInputsOutputReference <a name="TranscoderJobConfigInputsOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigInputsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.resetUri"></a>

```csharp
private void ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigInputsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TranscoderJobConfigManifestsList <a name="TranscoderJobConfigManifestsList" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigManifestsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.get"></a>

```csharp
private TranscoderJobConfigManifestsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TranscoderJobConfigManifestsOutputReference <a name="TranscoderJobConfigManifestsOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigManifestsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.resetFileName">ResetFileName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.resetMuxStreams">ResetMuxStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFileName` <a name="ResetFileName" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.resetFileName"></a>

```csharp
private void ResetFileName()
```

##### `ResetMuxStreams` <a name="ResetMuxStreams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.resetMuxStreams"></a>

```csharp
private void ResetMuxStreams()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.fileNameInput">FileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.muxStreamsInput">MuxStreamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.fileName">FileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.muxStreams">MuxStreams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FileNameInput`<sup>Optional</sup> <a name="FileNameInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.fileNameInput"></a>

```csharp
public string FileNameInput { get; }
```

- *Type:* string

---

##### `MuxStreamsInput`<sup>Optional</sup> <a name="MuxStreamsInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.muxStreamsInput"></a>

```csharp
public string[] MuxStreamsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `FileName`<sup>Required</sup> <a name="FileName" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.fileName"></a>

```csharp
public string FileName { get; }
```

- *Type:* string

---

##### `MuxStreams`<sup>Required</sup> <a name="MuxStreams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.muxStreams"></a>

```csharp
public string[] MuxStreams { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigManifestsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TranscoderJobConfigMuxStreamsList <a name="TranscoderJobConfigMuxStreamsList" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigMuxStreamsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.get"></a>

```csharp
private TranscoderJobConfigMuxStreamsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TranscoderJobConfigMuxStreamsOutputReference <a name="TranscoderJobConfigMuxStreamsOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigMuxStreamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.putSegmentSettings">PutSegmentSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.resetContainer">ResetContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.resetElementaryStreams">ResetElementaryStreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.resetEncryptionId">ResetEncryptionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.resetFileName">ResetFileName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.resetSegmentSettings">ResetSegmentSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSegmentSettings` <a name="PutSegmentSettings" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.putSegmentSettings"></a>

```csharp
private void PutSegmentSettings(TranscoderJobConfigMuxStreamsSegmentSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.putSegmentSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettings">TranscoderJobConfigMuxStreamsSegmentSettings</a>

---

##### `ResetContainer` <a name="ResetContainer" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.resetContainer"></a>

```csharp
private void ResetContainer()
```

##### `ResetElementaryStreams` <a name="ResetElementaryStreams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.resetElementaryStreams"></a>

```csharp
private void ResetElementaryStreams()
```

##### `ResetEncryptionId` <a name="ResetEncryptionId" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.resetEncryptionId"></a>

```csharp
private void ResetEncryptionId()
```

##### `ResetFileName` <a name="ResetFileName" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.resetFileName"></a>

```csharp
private void ResetFileName()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetSegmentSettings` <a name="ResetSegmentSettings" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.resetSegmentSettings"></a>

```csharp
private void ResetSegmentSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.segmentSettings">SegmentSettings</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference">TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.containerInput">ContainerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.elementaryStreamsInput">ElementaryStreamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.encryptionIdInput">EncryptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.fileNameInput">FileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.segmentSettingsInput">SegmentSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettings">TranscoderJobConfigMuxStreamsSegmentSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.container">Container</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.elementaryStreams">ElementaryStreams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.encryptionId">EncryptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.fileName">FileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SegmentSettings`<sup>Required</sup> <a name="SegmentSettings" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.segmentSettings"></a>

```csharp
public TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference SegmentSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference">TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference</a>

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.containerInput"></a>

```csharp
public string ContainerInput { get; }
```

- *Type:* string

---

##### `ElementaryStreamsInput`<sup>Optional</sup> <a name="ElementaryStreamsInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.elementaryStreamsInput"></a>

```csharp
public string[] ElementaryStreamsInput { get; }
```

- *Type:* string[]

---

##### `EncryptionIdInput`<sup>Optional</sup> <a name="EncryptionIdInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.encryptionIdInput"></a>

```csharp
public string EncryptionIdInput { get; }
```

- *Type:* string

---

##### `FileNameInput`<sup>Optional</sup> <a name="FileNameInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.fileNameInput"></a>

```csharp
public string FileNameInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `SegmentSettingsInput`<sup>Optional</sup> <a name="SegmentSettingsInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.segmentSettingsInput"></a>

```csharp
public TranscoderJobConfigMuxStreamsSegmentSettings SegmentSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettings">TranscoderJobConfigMuxStreamsSegmentSettings</a>

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.container"></a>

```csharp
public string Container { get; }
```

- *Type:* string

---

##### `ElementaryStreams`<sup>Required</sup> <a name="ElementaryStreams" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.elementaryStreams"></a>

```csharp
public string[] ElementaryStreams { get; }
```

- *Type:* string[]

---

##### `EncryptionId`<sup>Required</sup> <a name="EncryptionId" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.encryptionId"></a>

```csharp
public string EncryptionId { get; }
```

- *Type:* string

---

##### `FileName`<sup>Required</sup> <a name="FileName" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.fileName"></a>

```csharp
public string FileName { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference <a name="TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.resetSegmentDuration">ResetSegmentDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSegmentDuration` <a name="ResetSegmentDuration" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.resetSegmentDuration"></a>

```csharp
private void ResetSegmentDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.segmentDurationInput">SegmentDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.segmentDuration">SegmentDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettings">TranscoderJobConfigMuxStreamsSegmentSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SegmentDurationInput`<sup>Optional</sup> <a name="SegmentDurationInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.segmentDurationInput"></a>

```csharp
public string SegmentDurationInput { get; }
```

- *Type:* string

---

##### `SegmentDuration`<sup>Required</sup> <a name="SegmentDuration" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.segmentDuration"></a>

```csharp
public string SegmentDuration { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettingsOutputReference.property.internalValue"></a>

```csharp
public TranscoderJobConfigMuxStreamsSegmentSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigMuxStreamsSegmentSettings">TranscoderJobConfigMuxStreamsSegmentSettings</a>

---


### TranscoderJobConfigOutputOutputReference <a name="TranscoderJobConfigOutputOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.resetUri"></a>

```csharp
private void ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutput">TranscoderJobConfigOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutputOutputReference.property.internalValue"></a>

```csharp
public TranscoderJobConfigOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOutput">TranscoderJobConfigOutput</a>

---


### TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference <a name="TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.putXy">PutXy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.resetEndTimeOffset">ResetEndTimeOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.resetStartTimeOffset">ResetStartTimeOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.resetXy">ResetXy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutXy` <a name="PutXy" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.putXy"></a>

```csharp
private void PutXy(TranscoderJobConfigOverlaysAnimationsAnimationFadeXy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.putXy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobConfigOverlaysAnimationsAnimationFadeXy</a>

---

##### `ResetEndTimeOffset` <a name="ResetEndTimeOffset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.resetEndTimeOffset"></a>

```csharp
private void ResetEndTimeOffset()
```

##### `ResetStartTimeOffset` <a name="ResetStartTimeOffset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.resetStartTimeOffset"></a>

```csharp
private void ResetStartTimeOffset()
```

##### `ResetXy` <a name="ResetXy" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.resetXy"></a>

```csharp
private void ResetXy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.xy">Xy</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference">TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.endTimeOffsetInput">EndTimeOffsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.fadeTypeInput">FadeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.startTimeOffsetInput">StartTimeOffsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.xyInput">XyInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobConfigOverlaysAnimationsAnimationFadeXy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.endTimeOffset">EndTimeOffset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.fadeType">FadeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.startTimeOffset">StartTimeOffset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade">TranscoderJobConfigOverlaysAnimationsAnimationFade</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Xy`<sup>Required</sup> <a name="Xy" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.xy"></a>

```csharp
public TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference Xy { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference">TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference</a>

---

##### `EndTimeOffsetInput`<sup>Optional</sup> <a name="EndTimeOffsetInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.endTimeOffsetInput"></a>

```csharp
public string EndTimeOffsetInput { get; }
```

- *Type:* string

---

##### `FadeTypeInput`<sup>Optional</sup> <a name="FadeTypeInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.fadeTypeInput"></a>

```csharp
public string FadeTypeInput { get; }
```

- *Type:* string

---

##### `StartTimeOffsetInput`<sup>Optional</sup> <a name="StartTimeOffsetInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.startTimeOffsetInput"></a>

```csharp
public string StartTimeOffsetInput { get; }
```

- *Type:* string

---

##### `XyInput`<sup>Optional</sup> <a name="XyInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.xyInput"></a>

```csharp
public TranscoderJobConfigOverlaysAnimationsAnimationFadeXy XyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobConfigOverlaysAnimationsAnimationFadeXy</a>

---

##### `EndTimeOffset`<sup>Required</sup> <a name="EndTimeOffset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.endTimeOffset"></a>

```csharp
public string EndTimeOffset { get; }
```

- *Type:* string

---

##### `FadeType`<sup>Required</sup> <a name="FadeType" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.fadeType"></a>

```csharp
public string FadeType { get; }
```

- *Type:* string

---

##### `StartTimeOffset`<sup>Required</sup> <a name="StartTimeOffset" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.startTimeOffset"></a>

```csharp
public string StartTimeOffset { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference.property.internalValue"></a>

```csharp
public TranscoderJobConfigOverlaysAnimationsAnimationFade InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade">TranscoderJobConfigOverlaysAnimationsAnimationFade</a>

---


### TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference <a name="TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.resetX">ResetX</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.resetY">ResetY</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetX` <a name="ResetX" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.resetX"></a>

```csharp
private void ResetX()
```

##### `ResetY` <a name="ResetY" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.resetY"></a>

```csharp
private void ResetY()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.xInput">XInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.yInput">YInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.x">X</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.y">Y</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobConfigOverlaysAnimationsAnimationFadeXy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `XInput`<sup>Optional</sup> <a name="XInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.xInput"></a>

```csharp
public double XInput { get; }
```

- *Type:* double

---

##### `YInput`<sup>Optional</sup> <a name="YInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.yInput"></a>

```csharp
public double YInput { get; }
```

- *Type:* double

---

##### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.x"></a>

```csharp
public double X { get; }
```

- *Type:* double

---

##### `Y`<sup>Required</sup> <a name="Y" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.y"></a>

```csharp
public double Y { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXyOutputReference.property.internalValue"></a>

```csharp
public TranscoderJobConfigOverlaysAnimationsAnimationFadeXy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeXy">TranscoderJobConfigOverlaysAnimationsAnimationFadeXy</a>

---


### TranscoderJobConfigOverlaysAnimationsList <a name="TranscoderJobConfigOverlaysAnimationsList" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigOverlaysAnimationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.get"></a>

```csharp
private TranscoderJobConfigOverlaysAnimationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TranscoderJobConfigOverlaysAnimationsOutputReference <a name="TranscoderJobConfigOverlaysAnimationsOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigOverlaysAnimationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.putAnimationFade">PutAnimationFade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.resetAnimationFade">ResetAnimationFade</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnimationFade` <a name="PutAnimationFade" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.putAnimationFade"></a>

```csharp
private void PutAnimationFade(TranscoderJobConfigOverlaysAnimationsAnimationFade Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.putAnimationFade.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade">TranscoderJobConfigOverlaysAnimationsAnimationFade</a>

---

##### `ResetAnimationFade` <a name="ResetAnimationFade" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.resetAnimationFade"></a>

```csharp
private void ResetAnimationFade()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.property.animationFade">AnimationFade</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference">TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.property.animationFadeInput">AnimationFadeInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade">TranscoderJobConfigOverlaysAnimationsAnimationFade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AnimationFade`<sup>Required</sup> <a name="AnimationFade" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.property.animationFade"></a>

```csharp
public TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference AnimationFade { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference">TranscoderJobConfigOverlaysAnimationsAnimationFadeOutputReference</a>

---

##### `AnimationFadeInput`<sup>Optional</sup> <a name="AnimationFadeInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.property.animationFadeInput"></a>

```csharp
public TranscoderJobConfigOverlaysAnimationsAnimationFade AnimationFadeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsAnimationFade">TranscoderJobConfigOverlaysAnimationsAnimationFade</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TranscoderJobConfigOverlaysImageOutputReference <a name="TranscoderJobConfigOverlaysImageOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigOverlaysImageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImage">TranscoderJobConfigOverlaysImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference.property.internalValue"></a>

```csharp
public TranscoderJobConfigOverlaysImage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImage">TranscoderJobConfigOverlaysImage</a>

---


### TranscoderJobConfigOverlaysList <a name="TranscoderJobConfigOverlaysList" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigOverlaysList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.get"></a>

```csharp
private TranscoderJobConfigOverlaysOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TranscoderJobConfigOverlaysOutputReference <a name="TranscoderJobConfigOverlaysOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigOverlaysOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.putAnimations">PutAnimations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.putImage">PutImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.resetAnimations">ResetAnimations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.resetImage">ResetImage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnimations` <a name="PutAnimations" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.putAnimations"></a>

```csharp
private void PutAnimations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.putAnimations.parameter.value"></a>

- *Type:* object

---

##### `PutImage` <a name="PutImage" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.putImage"></a>

```csharp
private void PutImage(TranscoderJobConfigOverlaysImage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.putImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImage">TranscoderJobConfigOverlaysImage</a>

---

##### `ResetAnimations` <a name="ResetAnimations" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.resetAnimations"></a>

```csharp
private void ResetAnimations()
```

##### `ResetImage` <a name="ResetImage" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.resetImage"></a>

```csharp
private void ResetImage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.property.animations">Animations</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList">TranscoderJobConfigOverlaysAnimationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.property.image">Image</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference">TranscoderJobConfigOverlaysImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.property.animationsInput">AnimationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.property.imageInput">ImageInput</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImage">TranscoderJobConfigOverlaysImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Animations`<sup>Required</sup> <a name="Animations" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.property.animations"></a>

```csharp
public TranscoderJobConfigOverlaysAnimationsList Animations { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysAnimationsList">TranscoderJobConfigOverlaysAnimationsList</a>

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.property.image"></a>

```csharp
public TranscoderJobConfigOverlaysImageOutputReference Image { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImageOutputReference">TranscoderJobConfigOverlaysImageOutputReference</a>

---

##### `AnimationsInput`<sup>Optional</sup> <a name="AnimationsInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.property.animationsInput"></a>

```csharp
public object AnimationsInput { get; }
```

- *Type:* object

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.property.imageInput"></a>

```csharp
public TranscoderJobConfigOverlaysImage ImageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysImage">TranscoderJobConfigOverlaysImage</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigOverlaysOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### TranscoderJobConfigPubsubDestinationOutputReference <a name="TranscoderJobConfigPubsubDestinationOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobConfigPubsubDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.resetTopic">ResetTopic</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTopic` <a name="ResetTopic" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.resetTopic"></a>

```csharp
private void ResetTopic()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.property.topicInput">TopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.property.topic">Topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestination">TranscoderJobConfigPubsubDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TopicInput`<sup>Optional</sup> <a name="TopicInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.property.topicInput"></a>

```csharp
public string TopicInput { get; }
```

- *Type:* string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.property.topic"></a>

```csharp
public string Topic { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestinationOutputReference.property.internalValue"></a>

```csharp
public TranscoderJobConfigPubsubDestination InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.transcoderJob.TranscoderJobConfigPubsubDestination">TranscoderJobConfigPubsubDestination</a>

---


### TranscoderJobTimeoutsOutputReference <a name="TranscoderJobTimeoutsOutputReference" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new TranscoderJobTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.transcoderJob.TranscoderJobTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



