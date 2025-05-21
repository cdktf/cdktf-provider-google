# `dataprocGdcSparkApplication` Submodule <a name="`dataprocGdcSparkApplication` Submodule" id="@cdktf/provider-google.dataprocGdcSparkApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataprocGdcSparkApplication <a name="DataprocGdcSparkApplication" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application google_dataproc_gdc_spark_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocGdcSparkApplication(Construct Scope, string Id, DataprocGdcSparkApplicationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig">DataprocGdcSparkApplicationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig">DataprocGdcSparkApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putPysparkApplicationConfig">PutPysparkApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putSparkApplicationConfig">PutSparkApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putSparkRApplicationConfig">PutSparkRApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putSparkSqlApplicationConfig">PutSparkSqlApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetApplicationEnvironment">ResetApplicationEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetDependencyImages">ResetDependencyImages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetPysparkApplicationConfig">ResetPysparkApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetSparkApplicationConfig">ResetSparkApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetSparkRApplicationConfig">ResetSparkRApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetSparkSqlApplicationConfig">ResetSparkSqlApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPysparkApplicationConfig` <a name="PutPysparkApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putPysparkApplicationConfig"></a>

```csharp
private void PutPysparkApplicationConfig(DataprocGdcSparkApplicationPysparkApplicationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putPysparkApplicationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig">DataprocGdcSparkApplicationPysparkApplicationConfig</a>

---

##### `PutSparkApplicationConfig` <a name="PutSparkApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putSparkApplicationConfig"></a>

```csharp
private void PutSparkApplicationConfig(DataprocGdcSparkApplicationSparkApplicationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putSparkApplicationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig">DataprocGdcSparkApplicationSparkApplicationConfig</a>

---

##### `PutSparkRApplicationConfig` <a name="PutSparkRApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putSparkRApplicationConfig"></a>

```csharp
private void PutSparkRApplicationConfig(DataprocGdcSparkApplicationSparkRApplicationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putSparkRApplicationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig">DataprocGdcSparkApplicationSparkRApplicationConfig</a>

---

##### `PutSparkSqlApplicationConfig` <a name="PutSparkSqlApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putSparkSqlApplicationConfig"></a>

```csharp
private void PutSparkSqlApplicationConfig(DataprocGdcSparkApplicationSparkSqlApplicationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putSparkSqlApplicationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig">DataprocGdcSparkApplicationSparkSqlApplicationConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putTimeouts"></a>

```csharp
private void PutTimeouts(DataprocGdcSparkApplicationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeouts">DataprocGdcSparkApplicationTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetApplicationEnvironment` <a name="ResetApplicationEnvironment" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetApplicationEnvironment"></a>

```csharp
private void ResetApplicationEnvironment()
```

##### `ResetDependencyImages` <a name="ResetDependencyImages" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetDependencyImages"></a>

```csharp
private void ResetDependencyImages()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetProperties"></a>

```csharp
private void ResetProperties()
```

##### `ResetPysparkApplicationConfig` <a name="ResetPysparkApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetPysparkApplicationConfig"></a>

```csharp
private void ResetPysparkApplicationConfig()
```

##### `ResetSparkApplicationConfig` <a name="ResetSparkApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetSparkApplicationConfig"></a>

```csharp
private void ResetSparkApplicationConfig()
```

##### `ResetSparkRApplicationConfig` <a name="ResetSparkRApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetSparkRApplicationConfig"></a>

```csharp
private void ResetSparkRApplicationConfig()
```

##### `ResetSparkSqlApplicationConfig` <a name="ResetSparkSqlApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetSparkSqlApplicationConfig"></a>

```csharp
private void ResetSparkSqlApplicationConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.resetVersion"></a>

```csharp
private void ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataprocGdcSparkApplication resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataprocGdcSparkApplication.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataprocGdcSparkApplication.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataprocGdcSparkApplication.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataprocGdcSparkApplication.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataprocGdcSparkApplication resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataprocGdcSparkApplication to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataprocGdcSparkApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataprocGdcSparkApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.monitoringEndpoint">MonitoringEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.outputUri">OutputUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.pysparkApplicationConfig">PysparkApplicationConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference">DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.reconciling">Reconciling</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkApplicationConfig">SparkApplicationConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference">DataprocGdcSparkApplicationSparkApplicationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkRApplicationConfig">SparkRApplicationConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference">DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkSqlApplicationConfig">SparkSqlApplicationConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference">DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.stateMessage">StateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference">DataprocGdcSparkApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.applicationEnvironmentInput">ApplicationEnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.dependencyImagesInput">DependencyImagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.propertiesInput">PropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.pysparkApplicationConfigInput">PysparkApplicationConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig">DataprocGdcSparkApplicationPysparkApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.serviceinstanceInput">ServiceinstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkApplicationConfigInput">SparkApplicationConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig">DataprocGdcSparkApplicationSparkApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkApplicationIdInput">SparkApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkRApplicationConfigInput">SparkRApplicationConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig">DataprocGdcSparkApplicationSparkRApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkSqlApplicationConfigInput">SparkSqlApplicationConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig">DataprocGdcSparkApplicationSparkSqlApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.applicationEnvironment">ApplicationEnvironment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.dependencyImages">DependencyImages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.serviceinstance">Serviceinstance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkApplicationId">SparkApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.version">Version</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `MonitoringEndpoint`<sup>Required</sup> <a name="MonitoringEndpoint" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.monitoringEndpoint"></a>

```csharp
public string MonitoringEndpoint { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OutputUri`<sup>Required</sup> <a name="OutputUri" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.outputUri"></a>

```csharp
public string OutputUri { get; }
```

- *Type:* string

---

##### `PysparkApplicationConfig`<sup>Required</sup> <a name="PysparkApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.pysparkApplicationConfig"></a>

```csharp
public DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference PysparkApplicationConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference">DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference</a>

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.reconciling"></a>

```csharp
public IResolvable Reconciling { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SparkApplicationConfig`<sup>Required</sup> <a name="SparkApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkApplicationConfig"></a>

```csharp
public DataprocGdcSparkApplicationSparkApplicationConfigOutputReference SparkApplicationConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference">DataprocGdcSparkApplicationSparkApplicationConfigOutputReference</a>

---

##### `SparkRApplicationConfig`<sup>Required</sup> <a name="SparkRApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkRApplicationConfig"></a>

```csharp
public DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference SparkRApplicationConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference">DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference</a>

---

##### `SparkSqlApplicationConfig`<sup>Required</sup> <a name="SparkSqlApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkSqlApplicationConfig"></a>

```csharp
public DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference SparkSqlApplicationConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference">DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.stateMessage"></a>

```csharp
public string StateMessage { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.timeouts"></a>

```csharp
public DataprocGdcSparkApplicationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference">DataprocGdcSparkApplicationTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ApplicationEnvironmentInput`<sup>Optional</sup> <a name="ApplicationEnvironmentInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.applicationEnvironmentInput"></a>

```csharp
public string ApplicationEnvironmentInput { get; }
```

- *Type:* string

---

##### `DependencyImagesInput`<sup>Optional</sup> <a name="DependencyImagesInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.dependencyImagesInput"></a>

```csharp
public string[] DependencyImagesInput { get; }
```

- *Type:* string[]

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.propertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PysparkApplicationConfigInput`<sup>Optional</sup> <a name="PysparkApplicationConfigInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.pysparkApplicationConfigInput"></a>

```csharp
public DataprocGdcSparkApplicationPysparkApplicationConfig PysparkApplicationConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig">DataprocGdcSparkApplicationPysparkApplicationConfig</a>

---

##### `ServiceinstanceInput`<sup>Optional</sup> <a name="ServiceinstanceInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.serviceinstanceInput"></a>

```csharp
public string ServiceinstanceInput { get; }
```

- *Type:* string

---

##### `SparkApplicationConfigInput`<sup>Optional</sup> <a name="SparkApplicationConfigInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkApplicationConfigInput"></a>

```csharp
public DataprocGdcSparkApplicationSparkApplicationConfig SparkApplicationConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig">DataprocGdcSparkApplicationSparkApplicationConfig</a>

---

##### `SparkApplicationIdInput`<sup>Optional</sup> <a name="SparkApplicationIdInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkApplicationIdInput"></a>

```csharp
public string SparkApplicationIdInput { get; }
```

- *Type:* string

---

##### `SparkRApplicationConfigInput`<sup>Optional</sup> <a name="SparkRApplicationConfigInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkRApplicationConfigInput"></a>

```csharp
public DataprocGdcSparkApplicationSparkRApplicationConfig SparkRApplicationConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig">DataprocGdcSparkApplicationSparkRApplicationConfig</a>

---

##### `SparkSqlApplicationConfigInput`<sup>Optional</sup> <a name="SparkSqlApplicationConfigInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkSqlApplicationConfigInput"></a>

```csharp
public DataprocGdcSparkApplicationSparkSqlApplicationConfig SparkSqlApplicationConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig">DataprocGdcSparkApplicationSparkSqlApplicationConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ApplicationEnvironment`<sup>Required</sup> <a name="ApplicationEnvironment" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.applicationEnvironment"></a>

```csharp
public string ApplicationEnvironment { get; }
```

- *Type:* string

---

##### `DependencyImages`<sup>Required</sup> <a name="DependencyImages" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.dependencyImages"></a>

```csharp
public string[] DependencyImages { get; }
```

- *Type:* string[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Serviceinstance`<sup>Required</sup> <a name="Serviceinstance" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.serviceinstance"></a>

```csharp
public string Serviceinstance { get; }
```

- *Type:* string

---

##### `SparkApplicationId`<sup>Required</sup> <a name="SparkApplicationId" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.sparkApplicationId"></a>

```csharp
public string SparkApplicationId { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplication.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataprocGdcSparkApplicationConfig <a name="DataprocGdcSparkApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocGdcSparkApplicationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Serviceinstance,
    string SparkApplicationId,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    string ApplicationEnvironment = null,
    string[] DependencyImages = null,
    string DisplayName = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Namespace = null,
    string Project = null,
    System.Collections.Generic.IDictionary<string, string> Properties = null,
    DataprocGdcSparkApplicationPysparkApplicationConfig PysparkApplicationConfig = null,
    DataprocGdcSparkApplicationSparkApplicationConfig SparkApplicationConfig = null,
    DataprocGdcSparkApplicationSparkRApplicationConfig SparkRApplicationConfig = null,
    DataprocGdcSparkApplicationSparkSqlApplicationConfig SparkSqlApplicationConfig = null,
    DataprocGdcSparkApplicationTimeouts Timeouts = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.location">Location</a></code> | <code>string</code> | The location of the spark application. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.serviceinstance">Serviceinstance</a></code> | <code>string</code> | The id of the service instance to which this spark application belongs. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.sparkApplicationId">SparkApplicationId</a></code> | <code>string</code> | The id of the application. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The annotations to associate with this application. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.applicationEnvironment">ApplicationEnvironment</a></code> | <code>string</code> | An ApplicationEnvironment from which to inherit configuration properties. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.dependencyImages">DependencyImages</a></code> | <code>string[]</code> | List of container image uris for additional file dependencies. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.displayName">DisplayName</a></code> | <code>string</code> | User-provided human-readable name to be used in user interfaces. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#id DataprocGdcSparkApplication#id}. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels to associate with this application. Labels may be used for filtering and billing tracking. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.namespace">Namespace</a></code> | <code>string</code> | The Kubernetes namespace in which to create the application. This namespace must already exist on the cluster. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#project DataprocGdcSparkApplication#project}. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | application-specific properties. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.pysparkApplicationConfig">PysparkApplicationConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig">DataprocGdcSparkApplicationPysparkApplicationConfig</a></code> | pyspark_application_config block. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.sparkApplicationConfig">SparkApplicationConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig">DataprocGdcSparkApplicationSparkApplicationConfig</a></code> | spark_application_config block. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.sparkRApplicationConfig">SparkRApplicationConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig">DataprocGdcSparkApplicationSparkRApplicationConfig</a></code> | spark_r_application_config block. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.sparkSqlApplicationConfig">SparkSqlApplicationConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig">DataprocGdcSparkApplicationSparkSqlApplicationConfig</a></code> | spark_sql_application_config block. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeouts">DataprocGdcSparkApplicationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.version">Version</a></code> | <code>string</code> | The Dataproc version of this application. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the spark application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#location DataprocGdcSparkApplication#location}

---

##### `Serviceinstance`<sup>Required</sup> <a name="Serviceinstance" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.serviceinstance"></a>

```csharp
public string Serviceinstance { get; set; }
```

- *Type:* string

The id of the service instance to which this spark application belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#serviceinstance DataprocGdcSparkApplication#serviceinstance}

---

##### `SparkApplicationId`<sup>Required</sup> <a name="SparkApplicationId" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.sparkApplicationId"></a>

```csharp
public string SparkApplicationId { get; set; }
```

- *Type:* string

The id of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#spark_application_id DataprocGdcSparkApplication#spark_application_id}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The annotations to associate with this application.

Annotations may be used to store client information, but are not used by the server.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#annotations DataprocGdcSparkApplication#annotations}

---

##### `ApplicationEnvironment`<sup>Optional</sup> <a name="ApplicationEnvironment" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.applicationEnvironment"></a>

```csharp
public string ApplicationEnvironment { get; set; }
```

- *Type:* string

An ApplicationEnvironment from which to inherit configuration properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#application_environment DataprocGdcSparkApplication#application_environment}

---

##### `DependencyImages`<sup>Optional</sup> <a name="DependencyImages" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.dependencyImages"></a>

```csharp
public string[] DependencyImages { get; set; }
```

- *Type:* string[]

List of container image uris for additional file dependencies.

Dependent files are sequentially copied from each image. If a file with the same name exists in 2 images then the file from later image is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#dependency_images DataprocGdcSparkApplication#dependency_images}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

User-provided human-readable name to be used in user interfaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#display_name DataprocGdcSparkApplication#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#id DataprocGdcSparkApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels to associate with this application. Labels may be used for filtering and billing tracking.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#labels DataprocGdcSparkApplication#labels}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

The Kubernetes namespace in which to create the application. This namespace must already exist on the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#namespace DataprocGdcSparkApplication#namespace}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#project DataprocGdcSparkApplication#project}.

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

application-specific properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#properties DataprocGdcSparkApplication#properties}

---

##### `PysparkApplicationConfig`<sup>Optional</sup> <a name="PysparkApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.pysparkApplicationConfig"></a>

```csharp
public DataprocGdcSparkApplicationPysparkApplicationConfig PysparkApplicationConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig">DataprocGdcSparkApplicationPysparkApplicationConfig</a>

pyspark_application_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#pyspark_application_config DataprocGdcSparkApplication#pyspark_application_config}

---

##### `SparkApplicationConfig`<sup>Optional</sup> <a name="SparkApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.sparkApplicationConfig"></a>

```csharp
public DataprocGdcSparkApplicationSparkApplicationConfig SparkApplicationConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig">DataprocGdcSparkApplicationSparkApplicationConfig</a>

spark_application_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#spark_application_config DataprocGdcSparkApplication#spark_application_config}

---

##### `SparkRApplicationConfig`<sup>Optional</sup> <a name="SparkRApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.sparkRApplicationConfig"></a>

```csharp
public DataprocGdcSparkApplicationSparkRApplicationConfig SparkRApplicationConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig">DataprocGdcSparkApplicationSparkRApplicationConfig</a>

spark_r_application_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#spark_r_application_config DataprocGdcSparkApplication#spark_r_application_config}

---

##### `SparkSqlApplicationConfig`<sup>Optional</sup> <a name="SparkSqlApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.sparkSqlApplicationConfig"></a>

```csharp
public DataprocGdcSparkApplicationSparkSqlApplicationConfig SparkSqlApplicationConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig">DataprocGdcSparkApplicationSparkSqlApplicationConfig</a>

spark_sql_application_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#spark_sql_application_config DataprocGdcSparkApplication#spark_sql_application_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.timeouts"></a>

```csharp
public DataprocGdcSparkApplicationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeouts">DataprocGdcSparkApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#timeouts DataprocGdcSparkApplication#timeouts}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

The Dataproc version of this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#version DataprocGdcSparkApplication#version}

---

### DataprocGdcSparkApplicationPysparkApplicationConfig <a name="DataprocGdcSparkApplicationPysparkApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocGdcSparkApplicationPysparkApplicationConfig {
    string MainPythonFileUri,
    string[] ArchiveUris = null,
    string[] Args = null,
    string[] FileUris = null,
    string[] JarFileUris = null,
    string[] PythonFileUris = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig.property.mainPythonFileUri">MainPythonFileUri</a></code> | <code>string</code> | The HCFS URI of the main Python file to use as the driver. Must be a .py file. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig.property.archiveUris">ArchiveUris</a></code> | <code>string[]</code> | HCFS URIs of archives to be extracted into the working directory of each executor. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig.property.args">Args</a></code> | <code>string[]</code> | The arguments to pass to the driver. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig.property.fileUris">FileUris</a></code> | <code>string[]</code> | HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig.property.jarFileUris">JarFileUris</a></code> | <code>string[]</code> | HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig.property.pythonFileUris">PythonFileUris</a></code> | <code>string[]</code> | HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip. |

---

##### `MainPythonFileUri`<sup>Required</sup> <a name="MainPythonFileUri" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig.property.mainPythonFileUri"></a>

```csharp
public string MainPythonFileUri { get; set; }
```

- *Type:* string

The HCFS URI of the main Python file to use as the driver. Must be a .py file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#main_python_file_uri DataprocGdcSparkApplication#main_python_file_uri}

---

##### `ArchiveUris`<sup>Optional</sup> <a name="ArchiveUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig.property.archiveUris"></a>

```csharp
public string[] ArchiveUris { get; set; }
```

- *Type:* string[]

HCFS URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#archive_uris DataprocGdcSparkApplication#archive_uris}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig.property.args"></a>

```csharp
public string[] Args { get; set; }
```

- *Type:* string[]

The arguments to pass to the driver.

Do not include arguments, such as '--conf', that can be set as job properties, since a collision may occur that causes an incorrect job submission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#args DataprocGdcSparkApplication#args}

---

##### `FileUris`<sup>Optional</sup> <a name="FileUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig.property.fileUris"></a>

```csharp
public string[] FileUris { get; set; }
```

- *Type:* string[]

HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#file_uris DataprocGdcSparkApplication#file_uris}

---

##### `JarFileUris`<sup>Optional</sup> <a name="JarFileUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig.property.jarFileUris"></a>

```csharp
public string[] JarFileUris { get; set; }
```

- *Type:* string[]

HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#jar_file_uris DataprocGdcSparkApplication#jar_file_uris}

---

##### `PythonFileUris`<sup>Optional</sup> <a name="PythonFileUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig.property.pythonFileUris"></a>

```csharp
public string[] PythonFileUris { get; set; }
```

- *Type:* string[]

HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#python_file_uris DataprocGdcSparkApplication#python_file_uris}

---

### DataprocGdcSparkApplicationSparkApplicationConfig <a name="DataprocGdcSparkApplicationSparkApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocGdcSparkApplicationSparkApplicationConfig {
    string[] ArchiveUris = null,
    string[] Args = null,
    string[] FileUris = null,
    string[] JarFileUris = null,
    string MainClass = null,
    string MainJarFileUri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig.property.archiveUris">ArchiveUris</a></code> | <code>string[]</code> | HCFS URIs of archives to be extracted into the working directory of each executor. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig.property.args">Args</a></code> | <code>string[]</code> | The arguments to pass to the driver. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig.property.fileUris">FileUris</a></code> | <code>string[]</code> | HCFS URIs of files to be placed in the working directory of each executor. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig.property.jarFileUris">JarFileUris</a></code> | <code>string[]</code> | HCFS URIs of jar files to add to the classpath of the Spark driver and tasks. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig.property.mainClass">MainClass</a></code> | <code>string</code> | The name of the driver main class. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig.property.mainJarFileUri">MainJarFileUri</a></code> | <code>string</code> | The HCFS URI of the jar file that contains the main class. |

---

##### `ArchiveUris`<sup>Optional</sup> <a name="ArchiveUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig.property.archiveUris"></a>

```csharp
public string[] ArchiveUris { get; set; }
```

- *Type:* string[]

HCFS URIs of archives to be extracted into the working directory of each executor.

Supported file types: '.jar', '.tar', '.tar.gz', '.tgz', and '.zip'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#archive_uris DataprocGdcSparkApplication#archive_uris}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig.property.args"></a>

```csharp
public string[] Args { get; set; }
```

- *Type:* string[]

The arguments to pass to the driver.

Do not include arguments that can be set as application properties, such as '--conf', since a collision can occur that causes an incorrect application submission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#args DataprocGdcSparkApplication#args}

---

##### `FileUris`<sup>Optional</sup> <a name="FileUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig.property.fileUris"></a>

```csharp
public string[] FileUris { get; set; }
```

- *Type:* string[]

HCFS URIs of files to be placed in the working directory of each executor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#file_uris DataprocGdcSparkApplication#file_uris}

---

##### `JarFileUris`<sup>Optional</sup> <a name="JarFileUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig.property.jarFileUris"></a>

```csharp
public string[] JarFileUris { get; set; }
```

- *Type:* string[]

HCFS URIs of jar files to add to the classpath of the Spark driver and tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#jar_file_uris DataprocGdcSparkApplication#jar_file_uris}

---

##### `MainClass`<sup>Optional</sup> <a name="MainClass" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig.property.mainClass"></a>

```csharp
public string MainClass { get; set; }
```

- *Type:* string

The name of the driver main class.

The jar file that contains the class must be in the classpath or specified in 'jar_file_uris'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#main_class DataprocGdcSparkApplication#main_class}

---

##### `MainJarFileUri`<sup>Optional</sup> <a name="MainJarFileUri" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig.property.mainJarFileUri"></a>

```csharp
public string MainJarFileUri { get; set; }
```

- *Type:* string

The HCFS URI of the jar file that contains the main class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#main_jar_file_uri DataprocGdcSparkApplication#main_jar_file_uri}

---

### DataprocGdcSparkApplicationSparkRApplicationConfig <a name="DataprocGdcSparkApplicationSparkRApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocGdcSparkApplicationSparkRApplicationConfig {
    string MainRFileUri,
    string[] ArchiveUris = null,
    string[] Args = null,
    string[] FileUris = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig.property.mainRFileUri">MainRFileUri</a></code> | <code>string</code> | The HCFS URI of the main R file to use as the driver. Must be a .R file. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig.property.archiveUris">ArchiveUris</a></code> | <code>string[]</code> | HCFS URIs of archives to be extracted into the working directory of each executor. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig.property.args">Args</a></code> | <code>string[]</code> | The arguments to pass to the driver. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig.property.fileUris">FileUris</a></code> | <code>string[]</code> | HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks. |

---

##### `MainRFileUri`<sup>Required</sup> <a name="MainRFileUri" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig.property.mainRFileUri"></a>

```csharp
public string MainRFileUri { get; set; }
```

- *Type:* string

The HCFS URI of the main R file to use as the driver. Must be a .R file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#main_r_file_uri DataprocGdcSparkApplication#main_r_file_uri}

---

##### `ArchiveUris`<sup>Optional</sup> <a name="ArchiveUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig.property.archiveUris"></a>

```csharp
public string[] ArchiveUris { get; set; }
```

- *Type:* string[]

HCFS URIs of archives to be extracted into the working directory of each executor.

Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#archive_uris DataprocGdcSparkApplication#archive_uris}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig.property.args"></a>

```csharp
public string[] Args { get; set; }
```

- *Type:* string[]

The arguments to pass to the driver.

Do not include arguments, such as '--conf', that can be set as job properties, since a collision may occur that causes an incorrect job submission.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#args DataprocGdcSparkApplication#args}

---

##### `FileUris`<sup>Optional</sup> <a name="FileUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig.property.fileUris"></a>

```csharp
public string[] FileUris { get; set; }
```

- *Type:* string[]

HCFS URIs of files to be placed in the working directory of each executor. Useful for naively parallel tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#file_uris DataprocGdcSparkApplication#file_uris}

---

### DataprocGdcSparkApplicationSparkSqlApplicationConfig <a name="DataprocGdcSparkApplicationSparkSqlApplicationConfig" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocGdcSparkApplicationSparkSqlApplicationConfig {
    string[] JarFileUris = null,
    string QueryFileUri = null,
    DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct QueryList = null,
    System.Collections.Generic.IDictionary<string, string> ScriptVariables = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig.property.jarFileUris">JarFileUris</a></code> | <code>string[]</code> | HCFS URIs of jar files to be added to the Spark CLASSPATH. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig.property.queryFileUri">QueryFileUri</a></code> | <code>string</code> | The HCFS URI of the script that contains SQL queries. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig.property.queryList">QueryList</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct">DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct</a></code> | query_list block. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig.property.scriptVariables">ScriptVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Mapping of query variable names to values (equivalent to the Spark SQL command: SET 'name="value";'). |

---

##### `JarFileUris`<sup>Optional</sup> <a name="JarFileUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig.property.jarFileUris"></a>

```csharp
public string[] JarFileUris { get; set; }
```

- *Type:* string[]

HCFS URIs of jar files to be added to the Spark CLASSPATH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#jar_file_uris DataprocGdcSparkApplication#jar_file_uris}

---

##### `QueryFileUri`<sup>Optional</sup> <a name="QueryFileUri" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig.property.queryFileUri"></a>

```csharp
public string QueryFileUri { get; set; }
```

- *Type:* string

The HCFS URI of the script that contains SQL queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#query_file_uri DataprocGdcSparkApplication#query_file_uri}

---

##### `QueryList`<sup>Optional</sup> <a name="QueryList" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig.property.queryList"></a>

```csharp
public DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct QueryList { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct">DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct</a>

query_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#query_list DataprocGdcSparkApplication#query_list}

---

##### `ScriptVariables`<sup>Optional</sup> <a name="ScriptVariables" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig.property.scriptVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ScriptVariables { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Mapping of query variable names to values (equivalent to the Spark SQL command: SET 'name="value";').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#script_variables DataprocGdcSparkApplication#script_variables}

---

### DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct <a name="DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct {
    string[] Queries
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct.property.queries">Queries</a></code> | <code>string[]</code> | The queries to run. |

---

##### `Queries`<sup>Required</sup> <a name="Queries" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct.property.queries"></a>

```csharp
public string[] Queries { get; set; }
```

- *Type:* string[]

The queries to run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#queries DataprocGdcSparkApplication#queries}

---

### DataprocGdcSparkApplicationTimeouts <a name="DataprocGdcSparkApplicationTimeouts" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocGdcSparkApplicationTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#create DataprocGdcSparkApplication#create}. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#delete DataprocGdcSparkApplication#delete}. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#update DataprocGdcSparkApplication#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#create DataprocGdcSparkApplication#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#delete DataprocGdcSparkApplication#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/dataproc_gdc_spark_application#update DataprocGdcSparkApplication#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference <a name="DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetArchiveUris">ResetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetFileUris">ResetFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetJarFileUris">ResetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetPythonFileUris">ResetPythonFileUris</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArchiveUris` <a name="ResetArchiveUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetArchiveUris"></a>

```csharp
private void ResetArchiveUris()
```

##### `ResetArgs` <a name="ResetArgs" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetArgs"></a>

```csharp
private void ResetArgs()
```

##### `ResetFileUris` <a name="ResetFileUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetFileUris"></a>

```csharp
private void ResetFileUris()
```

##### `ResetJarFileUris` <a name="ResetJarFileUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetJarFileUris"></a>

```csharp
private void ResetJarFileUris()
```

##### `ResetPythonFileUris` <a name="ResetPythonFileUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.resetPythonFileUris"></a>

```csharp
private void ResetPythonFileUris()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.archiveUrisInput">ArchiveUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.argsInput">ArgsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.fileUrisInput">FileUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.jarFileUrisInput">JarFileUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.mainPythonFileUriInput">MainPythonFileUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.pythonFileUrisInput">PythonFileUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.archiveUris">ArchiveUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.args">Args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.fileUris">FileUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.jarFileUris">JarFileUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.mainPythonFileUri">MainPythonFileUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.pythonFileUris">PythonFileUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig">DataprocGdcSparkApplicationPysparkApplicationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArchiveUrisInput`<sup>Optional</sup> <a name="ArchiveUrisInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.archiveUrisInput"></a>

```csharp
public string[] ArchiveUrisInput { get; }
```

- *Type:* string[]

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.argsInput"></a>

```csharp
public string[] ArgsInput { get; }
```

- *Type:* string[]

---

##### `FileUrisInput`<sup>Optional</sup> <a name="FileUrisInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.fileUrisInput"></a>

```csharp
public string[] FileUrisInput { get; }
```

- *Type:* string[]

---

##### `JarFileUrisInput`<sup>Optional</sup> <a name="JarFileUrisInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.jarFileUrisInput"></a>

```csharp
public string[] JarFileUrisInput { get; }
```

- *Type:* string[]

---

##### `MainPythonFileUriInput`<sup>Optional</sup> <a name="MainPythonFileUriInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.mainPythonFileUriInput"></a>

```csharp
public string MainPythonFileUriInput { get; }
```

- *Type:* string

---

##### `PythonFileUrisInput`<sup>Optional</sup> <a name="PythonFileUrisInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.pythonFileUrisInput"></a>

```csharp
public string[] PythonFileUrisInput { get; }
```

- *Type:* string[]

---

##### `ArchiveUris`<sup>Required</sup> <a name="ArchiveUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.archiveUris"></a>

```csharp
public string[] ArchiveUris { get; }
```

- *Type:* string[]

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.args"></a>

```csharp
public string[] Args { get; }
```

- *Type:* string[]

---

##### `FileUris`<sup>Required</sup> <a name="FileUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.fileUris"></a>

```csharp
public string[] FileUris { get; }
```

- *Type:* string[]

---

##### `JarFileUris`<sup>Required</sup> <a name="JarFileUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.jarFileUris"></a>

```csharp
public string[] JarFileUris { get; }
```

- *Type:* string[]

---

##### `MainPythonFileUri`<sup>Required</sup> <a name="MainPythonFileUri" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.mainPythonFileUri"></a>

```csharp
public string MainPythonFileUri { get; }
```

- *Type:* string

---

##### `PythonFileUris`<sup>Required</sup> <a name="PythonFileUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.pythonFileUris"></a>

```csharp
public string[] PythonFileUris { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocGdcSparkApplicationPysparkApplicationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationPysparkApplicationConfig">DataprocGdcSparkApplicationPysparkApplicationConfig</a>

---


### DataprocGdcSparkApplicationSparkApplicationConfigOutputReference <a name="DataprocGdcSparkApplicationSparkApplicationConfigOutputReference" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocGdcSparkApplicationSparkApplicationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetArchiveUris">ResetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetFileUris">ResetFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetJarFileUris">ResetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetMainClass">ResetMainClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetMainJarFileUri">ResetMainJarFileUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArchiveUris` <a name="ResetArchiveUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetArchiveUris"></a>

```csharp
private void ResetArchiveUris()
```

##### `ResetArgs` <a name="ResetArgs" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetArgs"></a>

```csharp
private void ResetArgs()
```

##### `ResetFileUris` <a name="ResetFileUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetFileUris"></a>

```csharp
private void ResetFileUris()
```

##### `ResetJarFileUris` <a name="ResetJarFileUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetJarFileUris"></a>

```csharp
private void ResetJarFileUris()
```

##### `ResetMainClass` <a name="ResetMainClass" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetMainClass"></a>

```csharp
private void ResetMainClass()
```

##### `ResetMainJarFileUri` <a name="ResetMainJarFileUri" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.resetMainJarFileUri"></a>

```csharp
private void ResetMainJarFileUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.archiveUrisInput">ArchiveUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.argsInput">ArgsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.fileUrisInput">FileUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.jarFileUrisInput">JarFileUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.mainClassInput">MainClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.mainJarFileUriInput">MainJarFileUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.archiveUris">ArchiveUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.args">Args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.fileUris">FileUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.jarFileUris">JarFileUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.mainClass">MainClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.mainJarFileUri">MainJarFileUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig">DataprocGdcSparkApplicationSparkApplicationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArchiveUrisInput`<sup>Optional</sup> <a name="ArchiveUrisInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.archiveUrisInput"></a>

```csharp
public string[] ArchiveUrisInput { get; }
```

- *Type:* string[]

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.argsInput"></a>

```csharp
public string[] ArgsInput { get; }
```

- *Type:* string[]

---

##### `FileUrisInput`<sup>Optional</sup> <a name="FileUrisInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.fileUrisInput"></a>

```csharp
public string[] FileUrisInput { get; }
```

- *Type:* string[]

---

##### `JarFileUrisInput`<sup>Optional</sup> <a name="JarFileUrisInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.jarFileUrisInput"></a>

```csharp
public string[] JarFileUrisInput { get; }
```

- *Type:* string[]

---

##### `MainClassInput`<sup>Optional</sup> <a name="MainClassInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.mainClassInput"></a>

```csharp
public string MainClassInput { get; }
```

- *Type:* string

---

##### `MainJarFileUriInput`<sup>Optional</sup> <a name="MainJarFileUriInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.mainJarFileUriInput"></a>

```csharp
public string MainJarFileUriInput { get; }
```

- *Type:* string

---

##### `ArchiveUris`<sup>Required</sup> <a name="ArchiveUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.archiveUris"></a>

```csharp
public string[] ArchiveUris { get; }
```

- *Type:* string[]

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.args"></a>

```csharp
public string[] Args { get; }
```

- *Type:* string[]

---

##### `FileUris`<sup>Required</sup> <a name="FileUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.fileUris"></a>

```csharp
public string[] FileUris { get; }
```

- *Type:* string[]

---

##### `JarFileUris`<sup>Required</sup> <a name="JarFileUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.jarFileUris"></a>

```csharp
public string[] JarFileUris { get; }
```

- *Type:* string[]

---

##### `MainClass`<sup>Required</sup> <a name="MainClass" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.mainClass"></a>

```csharp
public string MainClass { get; }
```

- *Type:* string

---

##### `MainJarFileUri`<sup>Required</sup> <a name="MainJarFileUri" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.mainJarFileUri"></a>

```csharp
public string MainJarFileUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocGdcSparkApplicationSparkApplicationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkApplicationConfig">DataprocGdcSparkApplicationSparkApplicationConfig</a>

---


### DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference <a name="DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.resetArchiveUris">ResetArchiveUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.resetFileUris">ResetFileUris</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArchiveUris` <a name="ResetArchiveUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.resetArchiveUris"></a>

```csharp
private void ResetArchiveUris()
```

##### `ResetArgs` <a name="ResetArgs" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.resetArgs"></a>

```csharp
private void ResetArgs()
```

##### `ResetFileUris` <a name="ResetFileUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.resetFileUris"></a>

```csharp
private void ResetFileUris()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.archiveUrisInput">ArchiveUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.argsInput">ArgsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.fileUrisInput">FileUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.mainRFileUriInput">MainRFileUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.archiveUris">ArchiveUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.args">Args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.fileUris">FileUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.mainRFileUri">MainRFileUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig">DataprocGdcSparkApplicationSparkRApplicationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArchiveUrisInput`<sup>Optional</sup> <a name="ArchiveUrisInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.archiveUrisInput"></a>

```csharp
public string[] ArchiveUrisInput { get; }
```

- *Type:* string[]

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.argsInput"></a>

```csharp
public string[] ArgsInput { get; }
```

- *Type:* string[]

---

##### `FileUrisInput`<sup>Optional</sup> <a name="FileUrisInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.fileUrisInput"></a>

```csharp
public string[] FileUrisInput { get; }
```

- *Type:* string[]

---

##### `MainRFileUriInput`<sup>Optional</sup> <a name="MainRFileUriInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.mainRFileUriInput"></a>

```csharp
public string MainRFileUriInput { get; }
```

- *Type:* string

---

##### `ArchiveUris`<sup>Required</sup> <a name="ArchiveUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.archiveUris"></a>

```csharp
public string[] ArchiveUris { get; }
```

- *Type:* string[]

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.args"></a>

```csharp
public string[] Args { get; }
```

- *Type:* string[]

---

##### `FileUris`<sup>Required</sup> <a name="FileUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.fileUris"></a>

```csharp
public string[] FileUris { get; }
```

- *Type:* string[]

---

##### `MainRFileUri`<sup>Required</sup> <a name="MainRFileUri" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.mainRFileUri"></a>

```csharp
public string MainRFileUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocGdcSparkApplicationSparkRApplicationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkRApplicationConfig">DataprocGdcSparkApplicationSparkRApplicationConfig</a>

---


### DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference <a name="DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.putQueryList">PutQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resetJarFileUris">ResetJarFileUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resetQueryFileUri">ResetQueryFileUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resetQueryList">ResetQueryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resetScriptVariables">ResetScriptVariables</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutQueryList` <a name="PutQueryList" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.putQueryList"></a>

```csharp
private void PutQueryList(DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.putQueryList.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct">DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct</a>

---

##### `ResetJarFileUris` <a name="ResetJarFileUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resetJarFileUris"></a>

```csharp
private void ResetJarFileUris()
```

##### `ResetQueryFileUri` <a name="ResetQueryFileUri" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resetQueryFileUri"></a>

```csharp
private void ResetQueryFileUri()
```

##### `ResetQueryList` <a name="ResetQueryList" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resetQueryList"></a>

```csharp
private void ResetQueryList()
```

##### `ResetScriptVariables` <a name="ResetScriptVariables" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.resetScriptVariables"></a>

```csharp
private void ResetScriptVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.queryList">QueryList</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference">DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.jarFileUrisInput">JarFileUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.queryFileUriInput">QueryFileUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.queryListInput">QueryListInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct">DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.scriptVariablesInput">ScriptVariablesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.jarFileUris">JarFileUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.queryFileUri">QueryFileUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.scriptVariables">ScriptVariables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig">DataprocGdcSparkApplicationSparkSqlApplicationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `QueryList`<sup>Required</sup> <a name="QueryList" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.queryList"></a>

```csharp
public DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference QueryList { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference">DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference</a>

---

##### `JarFileUrisInput`<sup>Optional</sup> <a name="JarFileUrisInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.jarFileUrisInput"></a>

```csharp
public string[] JarFileUrisInput { get; }
```

- *Type:* string[]

---

##### `QueryFileUriInput`<sup>Optional</sup> <a name="QueryFileUriInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.queryFileUriInput"></a>

```csharp
public string QueryFileUriInput { get; }
```

- *Type:* string

---

##### `QueryListInput`<sup>Optional</sup> <a name="QueryListInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.queryListInput"></a>

```csharp
public DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct QueryListInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct">DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct</a>

---

##### `ScriptVariablesInput`<sup>Optional</sup> <a name="ScriptVariablesInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.scriptVariablesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ScriptVariablesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `JarFileUris`<sup>Required</sup> <a name="JarFileUris" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.jarFileUris"></a>

```csharp
public string[] JarFileUris { get; }
```

- *Type:* string[]

---

##### `QueryFileUri`<sup>Required</sup> <a name="QueryFileUri" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.queryFileUri"></a>

```csharp
public string QueryFileUri { get; }
```

- *Type:* string

---

##### `ScriptVariables`<sup>Required</sup> <a name="ScriptVariables" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.scriptVariables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ScriptVariables { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigOutputReference.property.internalValue"></a>

```csharp
public DataprocGdcSparkApplicationSparkSqlApplicationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfig">DataprocGdcSparkApplicationSparkSqlApplicationConfig</a>

---


### DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference <a name="DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.queriesInput">QueriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.queries">Queries</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct">DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `QueriesInput`<sup>Optional</sup> <a name="QueriesInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.queriesInput"></a>

```csharp
public string[] QueriesInput { get; }
```

- *Type:* string[]

---

##### `Queries`<sup>Required</sup> <a name="Queries" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.queries"></a>

```csharp
public string[] Queries { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStructOutputReference.property.internalValue"></a>

```csharp
public DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct">DataprocGdcSparkApplicationSparkSqlApplicationConfigQueryListStruct</a>

---


### DataprocGdcSparkApplicationTimeoutsOutputReference <a name="DataprocGdcSparkApplicationTimeoutsOutputReference" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocGdcSparkApplicationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocGdcSparkApplication.DataprocGdcSparkApplicationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



