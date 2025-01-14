# `dataprocGdcApplicationEnvironment` Submodule <a name="`dataprocGdcApplicationEnvironment` Submodule" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataprocGdcApplicationEnvironment <a name="DataprocGdcApplicationEnvironment" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_gdc_application_environment google_dataproc_gdc_application_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocGdcApplicationEnvironment(Construct Scope, string Id, DataprocGdcApplicationEnvironmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig">DataprocGdcApplicationEnvironmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig">DataprocGdcApplicationEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.putSparkApplicationEnvironmentConfig">PutSparkApplicationEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetApplicationEnvironmentId">ResetApplicationEnvironmentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetSparkApplicationEnvironmentConfig">ResetSparkApplicationEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSparkApplicationEnvironmentConfig` <a name="PutSparkApplicationEnvironmentConfig" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.putSparkApplicationEnvironmentConfig"></a>

```csharp
private void PutSparkApplicationEnvironmentConfig(DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.putSparkApplicationEnvironmentConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.putTimeouts"></a>

```csharp
private void PutTimeouts(DataprocGdcApplicationEnvironmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeouts">DataprocGdcApplicationEnvironmentTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetApplicationEnvironmentId` <a name="ResetApplicationEnvironmentId" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetApplicationEnvironmentId"></a>

```csharp
private void ResetApplicationEnvironmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetSparkApplicationEnvironmentConfig` <a name="ResetSparkApplicationEnvironmentConfig" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetSparkApplicationEnvironmentConfig"></a>

```csharp
private void ResetSparkApplicationEnvironmentConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataprocGdcApplicationEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataprocGdcApplicationEnvironment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataprocGdcApplicationEnvironment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataprocGdcApplicationEnvironment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataprocGdcApplicationEnvironment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataprocGdcApplicationEnvironment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataprocGdcApplicationEnvironment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataprocGdcApplicationEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_gdc_application_environment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataprocGdcApplicationEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.sparkApplicationEnvironmentConfig">SparkApplicationEnvironmentConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference">DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference">DataprocGdcApplicationEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.applicationEnvironmentIdInput">ApplicationEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.serviceinstanceInput">ServiceinstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.sparkApplicationEnvironmentConfigInput">SparkApplicationEnvironmentConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.applicationEnvironmentId">ApplicationEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.serviceinstance">Serviceinstance</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SparkApplicationEnvironmentConfig`<sup>Required</sup> <a name="SparkApplicationEnvironmentConfig" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.sparkApplicationEnvironmentConfig"></a>

```csharp
public DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference SparkApplicationEnvironmentConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference">DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.timeouts"></a>

```csharp
public DataprocGdcApplicationEnvironmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference">DataprocGdcApplicationEnvironmentTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ApplicationEnvironmentIdInput`<sup>Optional</sup> <a name="ApplicationEnvironmentIdInput" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.applicationEnvironmentIdInput"></a>

```csharp
public string ApplicationEnvironmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ServiceinstanceInput`<sup>Optional</sup> <a name="ServiceinstanceInput" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.serviceinstanceInput"></a>

```csharp
public string ServiceinstanceInput { get; }
```

- *Type:* string

---

##### `SparkApplicationEnvironmentConfigInput`<sup>Optional</sup> <a name="SparkApplicationEnvironmentConfigInput" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.sparkApplicationEnvironmentConfigInput"></a>

```csharp
public DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig SparkApplicationEnvironmentConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ApplicationEnvironmentId`<sup>Required</sup> <a name="ApplicationEnvironmentId" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.applicationEnvironmentId"></a>

```csharp
public string ApplicationEnvironmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Serviceinstance`<sup>Required</sup> <a name="Serviceinstance" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.serviceinstance"></a>

```csharp
public string Serviceinstance { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataprocGdcApplicationEnvironmentConfig <a name="DataprocGdcApplicationEnvironmentConfig" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocGdcApplicationEnvironmentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Serviceinstance,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    string ApplicationEnvironmentId = null,
    string DisplayName = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Namespace = null,
    string Project = null,
    DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig SparkApplicationEnvironmentConfig = null,
    DataprocGdcApplicationEnvironmentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.location">Location</a></code> | <code>string</code> | The location of the application environment. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.serviceinstance">Serviceinstance</a></code> | <code>string</code> | The id of the service instance to which this application environment belongs. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The annotations to associate with this application environment. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.applicationEnvironmentId">ApplicationEnvironmentId</a></code> | <code>string</code> | The id of the application environment. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.displayName">DisplayName</a></code> | <code>string</code> | User-provided human-readable name to be used in user interfaces. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_gdc_application_environment#id DataprocGdcApplicationEnvironment#id}. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels to associate with this application environment. Labels may be used for filtering and billing tracking. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.namespace">Namespace</a></code> | <code>string</code> | The name of the namespace in which to create this ApplicationEnvironment. This namespace must already exist in the cluster. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_gdc_application_environment#project DataprocGdcApplicationEnvironment#project}. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.sparkApplicationEnvironmentConfig">SparkApplicationEnvironmentConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a></code> | spark_application_environment_config block. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeouts">DataprocGdcApplicationEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the application environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_gdc_application_environment#location DataprocGdcApplicationEnvironment#location}

---

##### `Serviceinstance`<sup>Required</sup> <a name="Serviceinstance" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.serviceinstance"></a>

```csharp
public string Serviceinstance { get; set; }
```

- *Type:* string

The id of the service instance to which this application environment belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_gdc_application_environment#serviceinstance DataprocGdcApplicationEnvironment#serviceinstance}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The annotations to associate with this application environment.

Annotations may be used to store client information, but are not used by the server.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_gdc_application_environment#annotations DataprocGdcApplicationEnvironment#annotations}

---

##### `ApplicationEnvironmentId`<sup>Optional</sup> <a name="ApplicationEnvironmentId" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.applicationEnvironmentId"></a>

```csharp
public string ApplicationEnvironmentId { get; set; }
```

- *Type:* string

The id of the application environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_gdc_application_environment#application_environment_id DataprocGdcApplicationEnvironment#application_environment_id}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

User-provided human-readable name to be used in user interfaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_gdc_application_environment#display_name DataprocGdcApplicationEnvironment#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_gdc_application_environment#id DataprocGdcApplicationEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels to associate with this application environment. Labels may be used for filtering and billing tracking.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_gdc_application_environment#labels DataprocGdcApplicationEnvironment#labels}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

The name of the namespace in which to create this ApplicationEnvironment. This namespace must already exist in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_gdc_application_environment#namespace DataprocGdcApplicationEnvironment#namespace}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_gdc_application_environment#project DataprocGdcApplicationEnvironment#project}.

---

##### `SparkApplicationEnvironmentConfig`<sup>Optional</sup> <a name="SparkApplicationEnvironmentConfig" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.sparkApplicationEnvironmentConfig"></a>

```csharp
public DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig SparkApplicationEnvironmentConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a>

spark_application_environment_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_gdc_application_environment#spark_application_environment_config DataprocGdcApplicationEnvironment#spark_application_environment_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentConfig.property.timeouts"></a>

```csharp
public DataprocGdcApplicationEnvironmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeouts">DataprocGdcApplicationEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_gdc_application_environment#timeouts DataprocGdcApplicationEnvironment#timeouts}

---

### DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig <a name="DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig {
    System.Collections.Generic.IDictionary<string, string> DefaultProperties = null,
    string DefaultVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig.property.defaultProperties">DefaultProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map of default Spark properties to apply to workloads in this application environment. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig.property.defaultVersion">DefaultVersion</a></code> | <code>string</code> | The default Dataproc version to use for applications submitted to this application environment. |

---

##### `DefaultProperties`<sup>Optional</sup> <a name="DefaultProperties" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig.property.defaultProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefaultProperties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map of default Spark properties to apply to workloads in this application environment.

These defaults may be overridden by per-application properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_gdc_application_environment#default_properties DataprocGdcApplicationEnvironment#default_properties}

---

##### `DefaultVersion`<sup>Optional</sup> <a name="DefaultVersion" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig.property.defaultVersion"></a>

```csharp
public string DefaultVersion { get; set; }
```

- *Type:* string

The default Dataproc version to use for applications submitted to this application environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_gdc_application_environment#default_version DataprocGdcApplicationEnvironment#default_version}

---

### DataprocGdcApplicationEnvironmentTimeouts <a name="DataprocGdcApplicationEnvironmentTimeouts" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocGdcApplicationEnvironmentTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_gdc_application_environment#create DataprocGdcApplicationEnvironment#create}. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_gdc_application_environment#delete DataprocGdcApplicationEnvironment#delete}. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_gdc_application_environment#update DataprocGdcApplicationEnvironment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_gdc_application_environment#create DataprocGdcApplicationEnvironment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_gdc_application_environment#delete DataprocGdcApplicationEnvironment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataproc_gdc_application_environment#update DataprocGdcApplicationEnvironment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference <a name="DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resetDefaultProperties">ResetDefaultProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resetDefaultVersion">ResetDefaultVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefaultProperties` <a name="ResetDefaultProperties" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resetDefaultProperties"></a>

```csharp
private void ResetDefaultProperties()
```

##### `ResetDefaultVersion` <a name="ResetDefaultVersion" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resetDefaultVersion"></a>

```csharp
private void ResetDefaultVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultPropertiesInput">DefaultPropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultVersionInput">DefaultVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultProperties">DefaultProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultVersion">DefaultVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultPropertiesInput`<sup>Optional</sup> <a name="DefaultPropertiesInput" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultPropertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefaultPropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DefaultVersionInput`<sup>Optional</sup> <a name="DefaultVersionInput" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultVersionInput"></a>

```csharp
public string DefaultVersionInput { get; }
```

- *Type:* string

---

##### `DefaultProperties`<sup>Required</sup> <a name="DefaultProperties" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefaultProperties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DefaultVersion`<sup>Required</sup> <a name="DefaultVersion" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultVersion"></a>

```csharp
public string DefaultVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">DataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a>

---


### DataprocGdcApplicationEnvironmentTimeoutsOutputReference <a name="DataprocGdcApplicationEnvironmentTimeoutsOutputReference" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocGdcApplicationEnvironmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocGdcApplicationEnvironment.DataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



