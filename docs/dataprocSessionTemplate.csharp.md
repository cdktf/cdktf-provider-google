# `dataprocSessionTemplate` Submodule <a name="`dataprocSessionTemplate` Submodule" id="@cdktf/provider-google.dataprocSessionTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataprocSessionTemplate <a name="DataprocSessionTemplate" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template google_dataproc_session_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocSessionTemplate(Construct Scope, string Id, DataprocSessionTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig">DataprocSessionTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig">DataprocSessionTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.putEnvironmentConfig">PutEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.putJupyterSession">PutJupyterSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.putRuntimeConfig">PutRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.putSparkConnectSession">PutSparkConnectSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetEnvironmentConfig">ResetEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetJupyterSession">ResetJupyterSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetRuntimeConfig">ResetRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetSparkConnectSession">ResetSparkConnectSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEnvironmentConfig` <a name="PutEnvironmentConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.putEnvironmentConfig"></a>

```csharp
private void PutEnvironmentConfig(DataprocSessionTemplateEnvironmentConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.putEnvironmentConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfig">DataprocSessionTemplateEnvironmentConfig</a>

---

##### `PutJupyterSession` <a name="PutJupyterSession" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.putJupyterSession"></a>

```csharp
private void PutJupyterSession(DataprocSessionTemplateJupyterSession Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.putJupyterSession.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSession">DataprocSessionTemplateJupyterSession</a>

---

##### `PutRuntimeConfig` <a name="PutRuntimeConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.putRuntimeConfig"></a>

```csharp
private void PutRuntimeConfig(DataprocSessionTemplateRuntimeConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.putRuntimeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig">DataprocSessionTemplateRuntimeConfig</a>

---

##### `PutSparkConnectSession` <a name="PutSparkConnectSession" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.putSparkConnectSession"></a>

```csharp
private void PutSparkConnectSession(DataprocSessionTemplateSparkConnectSession Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.putSparkConnectSession.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSession">DataprocSessionTemplateSparkConnectSession</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.putTimeouts"></a>

```csharp
private void PutTimeouts(DataprocSessionTemplateTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeouts">DataprocSessionTemplateTimeouts</a>

---

##### `ResetEnvironmentConfig` <a name="ResetEnvironmentConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetEnvironmentConfig"></a>

```csharp
private void ResetEnvironmentConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetJupyterSession` <a name="ResetJupyterSession" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetJupyterSession"></a>

```csharp
private void ResetJupyterSession()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRuntimeConfig` <a name="ResetRuntimeConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetRuntimeConfig"></a>

```csharp
private void ResetRuntimeConfig()
```

##### `ResetSparkConnectSession` <a name="ResetSparkConnectSession" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetSparkConnectSession"></a>

```csharp
private void ResetSparkConnectSession()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataprocSessionTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataprocSessionTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataprocSessionTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataprocSessionTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataprocSessionTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataprocSessionTemplate resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataprocSessionTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataprocSessionTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataprocSessionTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.creator">Creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.environmentConfig">EnvironmentConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference">DataprocSessionTemplateEnvironmentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.jupyterSession">JupyterSession</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference">DataprocSessionTemplateJupyterSessionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.runtimeConfig">RuntimeConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference">DataprocSessionTemplateRuntimeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.sparkConnectSession">SparkConnectSession</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference">DataprocSessionTemplateSparkConnectSessionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference">DataprocSessionTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.environmentConfigInput">EnvironmentConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfig">DataprocSessionTemplateEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.jupyterSessionInput">JupyterSessionInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSession">DataprocSessionTemplateJupyterSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.runtimeConfigInput">RuntimeConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig">DataprocSessionTemplateRuntimeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.sparkConnectSessionInput">SparkConnectSessionInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSession">DataprocSessionTemplateSparkConnectSession</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.creator"></a>

```csharp
public string Creator { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EnvironmentConfig`<sup>Required</sup> <a name="EnvironmentConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.environmentConfig"></a>

```csharp
public DataprocSessionTemplateEnvironmentConfigOutputReference EnvironmentConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference">DataprocSessionTemplateEnvironmentConfigOutputReference</a>

---

##### `JupyterSession`<sup>Required</sup> <a name="JupyterSession" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.jupyterSession"></a>

```csharp
public DataprocSessionTemplateJupyterSessionOutputReference JupyterSession { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference">DataprocSessionTemplateJupyterSessionOutputReference</a>

---

##### `RuntimeConfig`<sup>Required</sup> <a name="RuntimeConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.runtimeConfig"></a>

```csharp
public DataprocSessionTemplateRuntimeConfigOutputReference RuntimeConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference">DataprocSessionTemplateRuntimeConfigOutputReference</a>

---

##### `SparkConnectSession`<sup>Required</sup> <a name="SparkConnectSession" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.sparkConnectSession"></a>

```csharp
public DataprocSessionTemplateSparkConnectSessionOutputReference SparkConnectSession { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference">DataprocSessionTemplateSparkConnectSessionOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.timeouts"></a>

```csharp
public DataprocSessionTemplateTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference">DataprocSessionTemplateTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `EnvironmentConfigInput`<sup>Optional</sup> <a name="EnvironmentConfigInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.environmentConfigInput"></a>

```csharp
public DataprocSessionTemplateEnvironmentConfig EnvironmentConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfig">DataprocSessionTemplateEnvironmentConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `JupyterSessionInput`<sup>Optional</sup> <a name="JupyterSessionInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.jupyterSessionInput"></a>

```csharp
public DataprocSessionTemplateJupyterSession JupyterSessionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSession">DataprocSessionTemplateJupyterSession</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RuntimeConfigInput`<sup>Optional</sup> <a name="RuntimeConfigInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.runtimeConfigInput"></a>

```csharp
public DataprocSessionTemplateRuntimeConfig RuntimeConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig">DataprocSessionTemplateRuntimeConfig</a>

---

##### `SparkConnectSessionInput`<sup>Optional</sup> <a name="SparkConnectSessionInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.sparkConnectSessionInput"></a>

```csharp
public DataprocSessionTemplateSparkConnectSession SparkConnectSessionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSession">DataprocSessionTemplateSparkConnectSession</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataprocSessionTemplateConfig <a name="DataprocSessionTemplateConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocSessionTemplateConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    DataprocSessionTemplateEnvironmentConfig EnvironmentConfig = null,
    string Id = null,
    DataprocSessionTemplateJupyterSession JupyterSession = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Location = null,
    string Project = null,
    DataprocSessionTemplateRuntimeConfig RuntimeConfig = null,
    DataprocSessionTemplateSparkConnectSession SparkConnectSession = null,
    DataprocSessionTemplateTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.name">Name</a></code> | <code>string</code> | The resource name of the session template in the following format: projects/{project}/locations/{location}/sessionTemplates/{template_id}. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.environmentConfig">EnvironmentConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfig">DataprocSessionTemplateEnvironmentConfig</a></code> | environment_config block. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#id DataprocSessionTemplate#id}. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.jupyterSession">JupyterSession</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSession">DataprocSessionTemplateJupyterSession</a></code> | jupyter_session block. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels to associate with this session template. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.location">Location</a></code> | <code>string</code> | The location in which the session template will be created in. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#project DataprocSessionTemplate#project}. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.runtimeConfig">RuntimeConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig">DataprocSessionTemplateRuntimeConfig</a></code> | runtime_config block. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.sparkConnectSession">SparkConnectSession</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSession">DataprocSessionTemplateSparkConnectSession</a></code> | spark_connect_session block. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeouts">DataprocSessionTemplateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The resource name of the session template in the following format: projects/{project}/locations/{location}/sessionTemplates/{template_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#name DataprocSessionTemplate#name}

---

##### `EnvironmentConfig`<sup>Optional</sup> <a name="EnvironmentConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.environmentConfig"></a>

```csharp
public DataprocSessionTemplateEnvironmentConfig EnvironmentConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfig">DataprocSessionTemplateEnvironmentConfig</a>

environment_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#environment_config DataprocSessionTemplate#environment_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#id DataprocSessionTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `JupyterSession`<sup>Optional</sup> <a name="JupyterSession" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.jupyterSession"></a>

```csharp
public DataprocSessionTemplateJupyterSession JupyterSession { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSession">DataprocSessionTemplateJupyterSession</a>

jupyter_session block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#jupyter_session DataprocSessionTemplate#jupyter_session}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels to associate with this session template.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#labels DataprocSessionTemplate#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location in which the session template will be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#location DataprocSessionTemplate#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#project DataprocSessionTemplate#project}.

---

##### `RuntimeConfig`<sup>Optional</sup> <a name="RuntimeConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.runtimeConfig"></a>

```csharp
public DataprocSessionTemplateRuntimeConfig RuntimeConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig">DataprocSessionTemplateRuntimeConfig</a>

runtime_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#runtime_config DataprocSessionTemplate#runtime_config}

---

##### `SparkConnectSession`<sup>Optional</sup> <a name="SparkConnectSession" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.sparkConnectSession"></a>

```csharp
public DataprocSessionTemplateSparkConnectSession SparkConnectSession { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSession">DataprocSessionTemplateSparkConnectSession</a>

spark_connect_session block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#spark_connect_session DataprocSessionTemplate#spark_connect_session}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateConfig.property.timeouts"></a>

```csharp
public DataprocSessionTemplateTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeouts">DataprocSessionTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#timeouts DataprocSessionTemplate#timeouts}

---

### DataprocSessionTemplateEnvironmentConfig <a name="DataprocSessionTemplateEnvironmentConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocSessionTemplateEnvironmentConfig {
    DataprocSessionTemplateEnvironmentConfigExecutionConfig ExecutionConfig = null,
    DataprocSessionTemplateEnvironmentConfigPeripheralsConfig PeripheralsConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfig.property.executionConfig">ExecutionConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig">DataprocSessionTemplateEnvironmentConfigExecutionConfig</a></code> | execution_config block. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfig.property.peripheralsConfig">PeripheralsConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfig">DataprocSessionTemplateEnvironmentConfigPeripheralsConfig</a></code> | peripherals_config block. |

---

##### `ExecutionConfig`<sup>Optional</sup> <a name="ExecutionConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfig.property.executionConfig"></a>

```csharp
public DataprocSessionTemplateEnvironmentConfigExecutionConfig ExecutionConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig">DataprocSessionTemplateEnvironmentConfigExecutionConfig</a>

execution_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#execution_config DataprocSessionTemplate#execution_config}

---

##### `PeripheralsConfig`<sup>Optional</sup> <a name="PeripheralsConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfig.property.peripheralsConfig"></a>

```csharp
public DataprocSessionTemplateEnvironmentConfigPeripheralsConfig PeripheralsConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfig">DataprocSessionTemplateEnvironmentConfigPeripheralsConfig</a>

peripherals_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#peripherals_config DataprocSessionTemplate#peripherals_config}

---

### DataprocSessionTemplateEnvironmentConfigExecutionConfig <a name="DataprocSessionTemplateEnvironmentConfigExecutionConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocSessionTemplateEnvironmentConfigExecutionConfig {
    string KmsKey = null,
    string[] NetworkTags = null,
    string ServiceAccount = null,
    string StagingBucket = null,
    string SubnetworkUri = null,
    string Ttl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig.property.kmsKey">KmsKey</a></code> | <code>string</code> | The Cloud KMS key to use for encryption. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig.property.networkTags">NetworkTags</a></code> | <code>string[]</code> | Tags used for network traffic control. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | Service account that used to execute workload. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig.property.stagingBucket">StagingBucket</a></code> | <code>string</code> | A Cloud Storage bucket used to stage workload dependencies, config files, and store workload output and other ephemeral data, such as Spark history files. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig.property.subnetworkUri">SubnetworkUri</a></code> | <code>string</code> | Subnetwork configuration for workload execution. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig.property.ttl">Ttl</a></code> | <code>string</code> | The duration after which the workload will be terminated. |

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig.property.kmsKey"></a>

```csharp
public string KmsKey { get; set; }
```

- *Type:* string

The Cloud KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#kms_key DataprocSessionTemplate#kms_key}

---

##### `NetworkTags`<sup>Optional</sup> <a name="NetworkTags" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig.property.networkTags"></a>

```csharp
public string[] NetworkTags { get; set; }
```

- *Type:* string[]

Tags used for network traffic control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#network_tags DataprocSessionTemplate#network_tags}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

Service account that used to execute workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#service_account DataprocSessionTemplate#service_account}

---

##### `StagingBucket`<sup>Optional</sup> <a name="StagingBucket" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig.property.stagingBucket"></a>

```csharp
public string StagingBucket { get; set; }
```

- *Type:* string

A Cloud Storage bucket used to stage workload dependencies, config files, and store workload output and other ephemeral data, such as Spark history files.

If you do not specify a staging bucket,
Cloud Dataproc will determine a Cloud Storage location according to the region where your workload is running,
and then create and manage project-level, per-location staging and temporary buckets.
This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#staging_bucket DataprocSessionTemplate#staging_bucket}

---

##### `SubnetworkUri`<sup>Optional</sup> <a name="SubnetworkUri" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig.property.subnetworkUri"></a>

```csharp
public string SubnetworkUri { get; set; }
```

- *Type:* string

Subnetwork configuration for workload execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#subnetwork_uri DataprocSessionTemplate#subnetwork_uri}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig.property.ttl"></a>

```csharp
public string Ttl { get; set; }
```

- *Type:* string

The duration after which the workload will be terminated.

When the workload exceeds this duration, it will be unconditionally terminated without waiting for ongoing
work to finish. If ttl is not specified for a session workload, the workload will be allowed to run until it
exits naturally (or run forever without exiting). If ttl is not specified for an interactive session,
it defaults to 24 hours. If ttl is not specified for a batch that uses 2.1+ runtime version, it defaults to 4 hours.
Minimum value is 10 minutes; maximum value is 14 days. If both ttl and idleTtl are specified (for an interactive session),
the conditions are treated as OR conditions: the workload will be terminated when it has been idle for idleTtl or
when ttl has been exceeded, whichever occurs first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#ttl DataprocSessionTemplate#ttl}

---

### DataprocSessionTemplateEnvironmentConfigPeripheralsConfig <a name="DataprocSessionTemplateEnvironmentConfigPeripheralsConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocSessionTemplateEnvironmentConfigPeripheralsConfig {
    string MetastoreService = null,
    DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig SparkHistoryServerConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfig.property.metastoreService">MetastoreService</a></code> | <code>string</code> | Resource name of an existing Dataproc Metastore service. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfig.property.sparkHistoryServerConfig">SparkHistoryServerConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a></code> | spark_history_server_config block. |

---

##### `MetastoreService`<sup>Optional</sup> <a name="MetastoreService" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfig.property.metastoreService"></a>

```csharp
public string MetastoreService { get; set; }
```

- *Type:* string

Resource name of an existing Dataproc Metastore service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#metastore_service DataprocSessionTemplate#metastore_service}

---

##### `SparkHistoryServerConfig`<sup>Optional</sup> <a name="SparkHistoryServerConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfig.property.sparkHistoryServerConfig"></a>

```csharp
public DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig SparkHistoryServerConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

spark_history_server_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#spark_history_server_config DataprocSessionTemplate#spark_history_server_config}

---

### DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig <a name="DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig {
    string DataprocCluster = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig.property.dataprocCluster">DataprocCluster</a></code> | <code>string</code> | Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload. |

---

##### `DataprocCluster`<sup>Optional</sup> <a name="DataprocCluster" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig.property.dataprocCluster"></a>

```csharp
public string DataprocCluster { get; set; }
```

- *Type:* string

Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#dataproc_cluster DataprocSessionTemplate#dataproc_cluster}

---

### DataprocSessionTemplateJupyterSession <a name="DataprocSessionTemplateJupyterSession" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSession"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSession.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocSessionTemplateJupyterSession {
    string DisplayName = null,
    string Kernel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSession.property.displayName">DisplayName</a></code> | <code>string</code> | Display name, shown in the Jupyter kernelspec card. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSession.property.kernel">Kernel</a></code> | <code>string</code> | Kernel to be used with Jupyter interactive session. Possible values: ["PYTHON", "SCALA"]. |

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSession.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Display name, shown in the Jupyter kernelspec card.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#display_name DataprocSessionTemplate#display_name}

---

##### `Kernel`<sup>Optional</sup> <a name="Kernel" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSession.property.kernel"></a>

```csharp
public string Kernel { get; set; }
```

- *Type:* string

Kernel to be used with Jupyter interactive session. Possible values: ["PYTHON", "SCALA"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#kernel DataprocSessionTemplate#kernel}

---

### DataprocSessionTemplateRuntimeConfig <a name="DataprocSessionTemplateRuntimeConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocSessionTemplateRuntimeConfig {
    string ContainerImage = null,
    System.Collections.Generic.IDictionary<string, string> Properties = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig.property.containerImage">ContainerImage</a></code> | <code>string</code> | Optional custom container image for the job runtime environment. If not specified, a default container image will be used. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A mapping of property names to values, which are used to configure workload execution. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig.property.version">Version</a></code> | <code>string</code> | Version of the session runtime. |

---

##### `ContainerImage`<sup>Optional</sup> <a name="ContainerImage" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig.property.containerImage"></a>

```csharp
public string ContainerImage { get; set; }
```

- *Type:* string

Optional custom container image for the job runtime environment. If not specified, a default container image will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#container_image DataprocSessionTemplate#container_image}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A mapping of property names to values, which are used to configure workload execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#properties DataprocSessionTemplate#properties}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Version of the session runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#version DataprocSessionTemplate#version}

---

### DataprocSessionTemplateSparkConnectSession <a name="DataprocSessionTemplateSparkConnectSession" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSession"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSession.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocSessionTemplateSparkConnectSession {

};
```


### DataprocSessionTemplateTimeouts <a name="DataprocSessionTemplateTimeouts" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocSessionTemplateTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#create DataprocSessionTemplate#create}. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#delete DataprocSessionTemplate#delete}. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#update DataprocSessionTemplate#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#create DataprocSessionTemplate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#delete DataprocSessionTemplate#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/dataproc_session_template#update DataprocSessionTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference <a name="DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetNetworkTags">ResetNetworkTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetStagingBucket">ResetStagingBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetSubnetworkUri">ResetSubnetworkUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetKmsKey"></a>

```csharp
private void ResetKmsKey()
```

##### `ResetNetworkTags` <a name="ResetNetworkTags" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetNetworkTags"></a>

```csharp
private void ResetNetworkTags()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetServiceAccount"></a>

```csharp
private void ResetServiceAccount()
```

##### `ResetStagingBucket` <a name="ResetStagingBucket" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetStagingBucket"></a>

```csharp
private void ResetStagingBucket()
```

##### `ResetSubnetworkUri` <a name="ResetSubnetworkUri" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetSubnetworkUri"></a>

```csharp
private void ResetSubnetworkUri()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.resetTtl"></a>

```csharp
private void ResetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.networkTagsInput">NetworkTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.stagingBucketInput">StagingBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUriInput">SubnetworkUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.ttlInput">TtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.networkTags">NetworkTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.stagingBucket">StagingBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUri">SubnetworkUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.ttl">Ttl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig">DataprocSessionTemplateEnvironmentConfigExecutionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.kmsKeyInput"></a>

```csharp
public string KmsKeyInput { get; }
```

- *Type:* string

---

##### `NetworkTagsInput`<sup>Optional</sup> <a name="NetworkTagsInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.networkTagsInput"></a>

```csharp
public string[] NetworkTagsInput { get; }
```

- *Type:* string[]

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.serviceAccountInput"></a>

```csharp
public string ServiceAccountInput { get; }
```

- *Type:* string

---

##### `StagingBucketInput`<sup>Optional</sup> <a name="StagingBucketInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.stagingBucketInput"></a>

```csharp
public string StagingBucketInput { get; }
```

- *Type:* string

---

##### `SubnetworkUriInput`<sup>Optional</sup> <a name="SubnetworkUriInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUriInput"></a>

```csharp
public string SubnetworkUriInput { get; }
```

- *Type:* string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.ttlInput"></a>

```csharp
public string TtlInput { get; }
```

- *Type:* string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `NetworkTags`<sup>Required</sup> <a name="NetworkTags" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.networkTags"></a>

```csharp
public string[] NetworkTags { get; }
```

- *Type:* string[]

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `StagingBucket`<sup>Required</sup> <a name="StagingBucket" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.stagingBucket"></a>

```csharp
public string StagingBucket { get; }
```

- *Type:* string

---

##### `SubnetworkUri`<sup>Required</sup> <a name="SubnetworkUri" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.subnetworkUri"></a>

```csharp
public string SubnetworkUri { get; }
```

- *Type:* string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.ttl"></a>

```csharp
public string Ttl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocSessionTemplateEnvironmentConfigExecutionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig">DataprocSessionTemplateEnvironmentConfigExecutionConfig</a>

---


### DataprocSessionTemplateEnvironmentConfigOutputReference <a name="DataprocSessionTemplateEnvironmentConfigOutputReference" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocSessionTemplateEnvironmentConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.putExecutionConfig">PutExecutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.putPeripheralsConfig">PutPeripheralsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.resetExecutionConfig">ResetExecutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.resetPeripheralsConfig">ResetPeripheralsConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExecutionConfig` <a name="PutExecutionConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.putExecutionConfig"></a>

```csharp
private void PutExecutionConfig(DataprocSessionTemplateEnvironmentConfigExecutionConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.putExecutionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig">DataprocSessionTemplateEnvironmentConfigExecutionConfig</a>

---

##### `PutPeripheralsConfig` <a name="PutPeripheralsConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.putPeripheralsConfig"></a>

```csharp
private void PutPeripheralsConfig(DataprocSessionTemplateEnvironmentConfigPeripheralsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.putPeripheralsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfig">DataprocSessionTemplateEnvironmentConfigPeripheralsConfig</a>

---

##### `ResetExecutionConfig` <a name="ResetExecutionConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.resetExecutionConfig"></a>

```csharp
private void ResetExecutionConfig()
```

##### `ResetPeripheralsConfig` <a name="ResetPeripheralsConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.resetPeripheralsConfig"></a>

```csharp
private void ResetPeripheralsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.property.executionConfig">ExecutionConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference">DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.property.peripheralsConfig">PeripheralsConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference">DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.property.executionConfigInput">ExecutionConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig">DataprocSessionTemplateEnvironmentConfigExecutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.property.peripheralsConfigInput">PeripheralsConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfig">DataprocSessionTemplateEnvironmentConfigPeripheralsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfig">DataprocSessionTemplateEnvironmentConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExecutionConfig`<sup>Required</sup> <a name="ExecutionConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.property.executionConfig"></a>

```csharp
public DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference ExecutionConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference">DataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference</a>

---

##### `PeripheralsConfig`<sup>Required</sup> <a name="PeripheralsConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.property.peripheralsConfig"></a>

```csharp
public DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference PeripheralsConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference">DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference</a>

---

##### `ExecutionConfigInput`<sup>Optional</sup> <a name="ExecutionConfigInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.property.executionConfigInput"></a>

```csharp
public DataprocSessionTemplateEnvironmentConfigExecutionConfig ExecutionConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigExecutionConfig">DataprocSessionTemplateEnvironmentConfigExecutionConfig</a>

---

##### `PeripheralsConfigInput`<sup>Optional</sup> <a name="PeripheralsConfigInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.property.peripheralsConfigInput"></a>

```csharp
public DataprocSessionTemplateEnvironmentConfigPeripheralsConfig PeripheralsConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfig">DataprocSessionTemplateEnvironmentConfigPeripheralsConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocSessionTemplateEnvironmentConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfig">DataprocSessionTemplateEnvironmentConfig</a>

---


### DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference <a name="DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.putSparkHistoryServerConfig">PutSparkHistoryServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.resetMetastoreService">ResetMetastoreService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.resetSparkHistoryServerConfig">ResetSparkHistoryServerConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSparkHistoryServerConfig` <a name="PutSparkHistoryServerConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.putSparkHistoryServerConfig"></a>

```csharp
private void PutSparkHistoryServerConfig(DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.putSparkHistoryServerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

---

##### `ResetMetastoreService` <a name="ResetMetastoreService" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.resetMetastoreService"></a>

```csharp
private void ResetMetastoreService()
```

##### `ResetSparkHistoryServerConfig` <a name="ResetSparkHistoryServerConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.resetSparkHistoryServerConfig"></a>

```csharp
private void ResetSparkHistoryServerConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfig">SparkHistoryServerConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference">DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreServiceInput">MetastoreServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfigInput">SparkHistoryServerConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreService">MetastoreService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfig">DataprocSessionTemplateEnvironmentConfigPeripheralsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SparkHistoryServerConfig`<sup>Required</sup> <a name="SparkHistoryServerConfig" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfig"></a>

```csharp
public DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference SparkHistoryServerConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference">DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference</a>

---

##### `MetastoreServiceInput`<sup>Optional</sup> <a name="MetastoreServiceInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreServiceInput"></a>

```csharp
public string MetastoreServiceInput { get; }
```

- *Type:* string

---

##### `SparkHistoryServerConfigInput`<sup>Optional</sup> <a name="SparkHistoryServerConfigInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.sparkHistoryServerConfigInput"></a>

```csharp
public DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig SparkHistoryServerConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

---

##### `MetastoreService`<sup>Required</sup> <a name="MetastoreService" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.metastoreService"></a>

```csharp
public string MetastoreService { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocSessionTemplateEnvironmentConfigPeripheralsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfig">DataprocSessionTemplateEnvironmentConfigPeripheralsConfig</a>

---


### DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference <a name="DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resetDataprocCluster">ResetDataprocCluster</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataprocCluster` <a name="ResetDataprocCluster" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.resetDataprocCluster"></a>

```csharp
private void ResetDataprocCluster()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocClusterInput">DataprocClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocCluster">DataprocCluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataprocClusterInput`<sup>Optional</sup> <a name="DataprocClusterInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocClusterInput"></a>

```csharp
public string DataprocClusterInput { get; }
```

- *Type:* string

---

##### `DataprocCluster`<sup>Required</sup> <a name="DataprocCluster" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.dataprocCluster"></a>

```csharp
public string DataprocCluster { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig">DataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig</a>

---


### DataprocSessionTemplateJupyterSessionOutputReference <a name="DataprocSessionTemplateJupyterSessionOutputReference" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocSessionTemplateJupyterSessionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.resetKernel">ResetKernel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetKernel` <a name="ResetKernel" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.resetKernel"></a>

```csharp
private void ResetKernel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.property.kernelInput">KernelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.property.kernel">Kernel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSession">DataprocSessionTemplateJupyterSession</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `KernelInput`<sup>Optional</sup> <a name="KernelInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.property.kernelInput"></a>

```csharp
public string KernelInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Kernel`<sup>Required</sup> <a name="Kernel" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.property.kernel"></a>

```csharp
public string Kernel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSessionOutputReference.property.internalValue"></a>

```csharp
public DataprocSessionTemplateJupyterSession InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateJupyterSession">DataprocSessionTemplateJupyterSession</a>

---


### DataprocSessionTemplateRuntimeConfigOutputReference <a name="DataprocSessionTemplateRuntimeConfigOutputReference" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocSessionTemplateRuntimeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.resetContainerImage">ResetContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContainerImage` <a name="ResetContainerImage" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.resetContainerImage"></a>

```csharp
private void ResetContainerImage()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.resetProperties"></a>

```csharp
private void ResetProperties()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.effectiveProperties">EffectiveProperties</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.containerImageInput">ContainerImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.containerImage">ContainerImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig">DataprocSessionTemplateRuntimeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EffectiveProperties`<sup>Required</sup> <a name="EffectiveProperties" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.effectiveProperties"></a>

```csharp
public StringMap EffectiveProperties { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `ContainerImageInput`<sup>Optional</sup> <a name="ContainerImageInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.containerImageInput"></a>

```csharp
public string ContainerImageInput { get; }
```

- *Type:* string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.propertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `ContainerImage`<sup>Required</sup> <a name="ContainerImage" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.containerImage"></a>

```csharp
public string ContainerImage { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocSessionTemplateRuntimeConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateRuntimeConfig">DataprocSessionTemplateRuntimeConfig</a>

---


### DataprocSessionTemplateSparkConnectSessionOutputReference <a name="DataprocSessionTemplateSparkConnectSessionOutputReference" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocSessionTemplateSparkConnectSessionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSession">DataprocSessionTemplateSparkConnectSession</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSessionOutputReference.property.internalValue"></a>

```csharp
public DataprocSessionTemplateSparkConnectSession InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateSparkConnectSession">DataprocSessionTemplateSparkConnectSession</a>

---


### DataprocSessionTemplateTimeoutsOutputReference <a name="DataprocSessionTemplateTimeoutsOutputReference" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocSessionTemplateTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocSessionTemplate.DataprocSessionTemplateTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



