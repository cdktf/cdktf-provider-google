# `eventarcPipeline` Submodule <a name="`eventarcPipeline` Submodule" id="@cdktf/provider-google.eventarcPipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventarcPipeline <a name="EventarcPipeline" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline google_eventarc_pipeline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcPipeline(Construct Scope, string Id, EventarcPipelineConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig">EventarcPipelineConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig">EventarcPipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putDestinations">PutDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putInputPayloadFormat">PutInputPayloadFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putLoggingConfig">PutLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putMediations">PutMediations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putRetryPolicy">PutRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetCryptoKeyName">ResetCryptoKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetInputPayloadFormat">ResetInputPayloadFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetLoggingConfig">ResetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetMediations">ResetMediations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetRetryPolicy">ResetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDestinations` <a name="PutDestinations" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putDestinations"></a>

```csharp
private void PutDestinations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putDestinations.parameter.value"></a>

- *Type:* object

---

##### `PutInputPayloadFormat` <a name="PutInputPayloadFormat" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putInputPayloadFormat"></a>

```csharp
private void PutInputPayloadFormat(EventarcPipelineInputPayloadFormat Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putInputPayloadFormat.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormat">EventarcPipelineInputPayloadFormat</a>

---

##### `PutLoggingConfig` <a name="PutLoggingConfig" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putLoggingConfig"></a>

```csharp
private void PutLoggingConfig(EventarcPipelineLoggingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfig">EventarcPipelineLoggingConfig</a>

---

##### `PutMediations` <a name="PutMediations" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putMediations"></a>

```csharp
private void PutMediations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putMediations.parameter.value"></a>

- *Type:* object

---

##### `PutRetryPolicy` <a name="PutRetryPolicy" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putRetryPolicy"></a>

```csharp
private void PutRetryPolicy(EventarcPipelineRetryPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putRetryPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicy">EventarcPipelineRetryPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putTimeouts"></a>

```csharp
private void PutTimeouts(EventarcPipelineTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeouts">EventarcPipelineTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetCryptoKeyName` <a name="ResetCryptoKeyName" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetCryptoKeyName"></a>

```csharp
private void ResetCryptoKeyName()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInputPayloadFormat` <a name="ResetInputPayloadFormat" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetInputPayloadFormat"></a>

```csharp
private void ResetInputPayloadFormat()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLoggingConfig` <a name="ResetLoggingConfig" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetLoggingConfig"></a>

```csharp
private void ResetLoggingConfig()
```

##### `ResetMediations` <a name="ResetMediations" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetMediations"></a>

```csharp
private void ResetMediations()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRetryPolicy` <a name="ResetRetryPolicy" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetRetryPolicy"></a>

```csharp
private void ResetRetryPolicy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EventarcPipeline resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

EventarcPipeline.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

EventarcPipeline.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

EventarcPipeline.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

EventarcPipeline.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a EventarcPipeline resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EventarcPipeline to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EventarcPipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the EventarcPipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.destinations">Destinations</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList">EventarcPipelineDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.inputPayloadFormat">InputPayloadFormat</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference">EventarcPipelineInputPayloadFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference">EventarcPipelineLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.mediations">Mediations</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList">EventarcPipelineMediationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.retryPolicy">RetryPolicy</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference">EventarcPipelineRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference">EventarcPipelineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.cryptoKeyNameInput">CryptoKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.destinationsInput">DestinationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.inputPayloadFormatInput">InputPayloadFormatInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormat">EventarcPipelineInputPayloadFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.loggingConfigInput">LoggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfig">EventarcPipelineLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.mediationsInput">MediationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.pipelineIdInput">PipelineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.retryPolicyInput">RetryPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicy">EventarcPipelineRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.cryptoKeyName">CryptoKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.pipelineId">PipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.destinations"></a>

```csharp
public EventarcPipelineDestinationsList Destinations { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList">EventarcPipelineDestinationsList</a>

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `InputPayloadFormat`<sup>Required</sup> <a name="InputPayloadFormat" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.inputPayloadFormat"></a>

```csharp
public EventarcPipelineInputPayloadFormatOutputReference InputPayloadFormat { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference">EventarcPipelineInputPayloadFormatOutputReference</a>

---

##### `LoggingConfig`<sup>Required</sup> <a name="LoggingConfig" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.loggingConfig"></a>

```csharp
public EventarcPipelineLoggingConfigOutputReference LoggingConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference">EventarcPipelineLoggingConfigOutputReference</a>

---

##### `Mediations`<sup>Required</sup> <a name="Mediations" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.mediations"></a>

```csharp
public EventarcPipelineMediationsList Mediations { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList">EventarcPipelineMediationsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RetryPolicy`<sup>Required</sup> <a name="RetryPolicy" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.retryPolicy"></a>

```csharp
public EventarcPipelineRetryPolicyOutputReference RetryPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference">EventarcPipelineRetryPolicyOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.timeouts"></a>

```csharp
public EventarcPipelineTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference">EventarcPipelineTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CryptoKeyNameInput`<sup>Optional</sup> <a name="CryptoKeyNameInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.cryptoKeyNameInput"></a>

```csharp
public string CryptoKeyNameInput { get; }
```

- *Type:* string

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.destinationsInput"></a>

```csharp
public object DestinationsInput { get; }
```

- *Type:* object

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InputPayloadFormatInput`<sup>Optional</sup> <a name="InputPayloadFormatInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.inputPayloadFormatInput"></a>

```csharp
public EventarcPipelineInputPayloadFormat InputPayloadFormatInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormat">EventarcPipelineInputPayloadFormat</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `LoggingConfigInput`<sup>Optional</sup> <a name="LoggingConfigInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.loggingConfigInput"></a>

```csharp
public EventarcPipelineLoggingConfig LoggingConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfig">EventarcPipelineLoggingConfig</a>

---

##### `MediationsInput`<sup>Optional</sup> <a name="MediationsInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.mediationsInput"></a>

```csharp
public object MediationsInput { get; }
```

- *Type:* object

---

##### `PipelineIdInput`<sup>Optional</sup> <a name="PipelineIdInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.pipelineIdInput"></a>

```csharp
public string PipelineIdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RetryPolicyInput`<sup>Optional</sup> <a name="RetryPolicyInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.retryPolicyInput"></a>

```csharp
public EventarcPipelineRetryPolicy RetryPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicy">EventarcPipelineRetryPolicy</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CryptoKeyName`<sup>Required</sup> <a name="CryptoKeyName" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.cryptoKeyName"></a>

```csharp
public string CryptoKeyName { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.pipelineId"></a>

```csharp
public string PipelineId { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.eventarcPipeline.EventarcPipeline.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EventarcPipelineConfig <a name="EventarcPipelineConfig" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcPipelineConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Destinations,
    string Location,
    string PipelineId,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    string CryptoKeyName = null,
    string DisplayName = null,
    string Id = null,
    EventarcPipelineInputPayloadFormat InputPayloadFormat = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    EventarcPipelineLoggingConfig LoggingConfig = null,
    object Mediations = null,
    string Project = null,
    EventarcPipelineRetryPolicy RetryPolicy = null,
    EventarcPipelineTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.destinations">Destinations</a></code> | <code>object</code> | destinations block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.pipelineId">PipelineId</a></code> | <code>string</code> | The user-provided ID to be assigned to the Pipeline. It should match the format '^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$'. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | User-defined annotations. See https://google.aip.dev/128#annotations. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.cryptoKeyName">CryptoKeyName</a></code> | <code>string</code> | Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt the event data. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Display name of resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#id EventarcPipeline#id}. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.inputPayloadFormat">InputPayloadFormat</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormat">EventarcPipelineInputPayloadFormat</a></code> | input_payload_format block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | User labels attached to the Pipeline that can be used to group resources. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.loggingConfig">LoggingConfig</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfig">EventarcPipelineLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.mediations">Mediations</a></code> | <code>object</code> | mediations block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#project EventarcPipeline#project}. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.retryPolicy">RetryPolicy</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicy">EventarcPipelineRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeouts">EventarcPipelineTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.destinations"></a>

```csharp
public object Destinations { get; set; }
```

- *Type:* object

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#destinations EventarcPipeline#destinations}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#location EventarcPipeline#location}

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.pipelineId"></a>

```csharp
public string PipelineId { get; set; }
```

- *Type:* string

The user-provided ID to be assigned to the Pipeline. It should match the format '^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#pipeline_id EventarcPipeline#pipeline_id}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

User-defined annotations. See https://google.aip.dev/128#annotations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#annotations EventarcPipeline#annotations}

---

##### `CryptoKeyName`<sup>Optional</sup> <a name="CryptoKeyName" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.cryptoKeyName"></a>

```csharp
public string CryptoKeyName { get; set; }
```

- *Type:* string

Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt the event data.

If not set, an internal Google-owned key
will be used to encrypt messages. It must match the pattern
"projects/{project}/locations/{location}/keyRings/{keyring}/cryptoKeys/{key}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#crypto_key_name EventarcPipeline#crypto_key_name}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Display name of resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#display_name EventarcPipeline#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#id EventarcPipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InputPayloadFormat`<sup>Optional</sup> <a name="InputPayloadFormat" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.inputPayloadFormat"></a>

```csharp
public EventarcPipelineInputPayloadFormat InputPayloadFormat { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormat">EventarcPipelineInputPayloadFormat</a>

input_payload_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#input_payload_format EventarcPipeline#input_payload_format}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

User labels attached to the Pipeline that can be used to group resources.

An object containing a list of "key": value pairs. Example: {
"name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#labels EventarcPipeline#labels}

---

##### `LoggingConfig`<sup>Optional</sup> <a name="LoggingConfig" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.loggingConfig"></a>

```csharp
public EventarcPipelineLoggingConfig LoggingConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfig">EventarcPipelineLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#logging_config EventarcPipeline#logging_config}

---

##### `Mediations`<sup>Optional</sup> <a name="Mediations" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.mediations"></a>

```csharp
public object Mediations { get; set; }
```

- *Type:* object

mediations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#mediations EventarcPipeline#mediations}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#project EventarcPipeline#project}.

---

##### `RetryPolicy`<sup>Optional</sup> <a name="RetryPolicy" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.retryPolicy"></a>

```csharp
public EventarcPipelineRetryPolicy RetryPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicy">EventarcPipelineRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#retry_policy EventarcPipeline#retry_policy}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineConfig.property.timeouts"></a>

```csharp
public EventarcPipelineTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeouts">EventarcPipelineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#timeouts EventarcPipeline#timeouts}

---

### EventarcPipelineDestinations <a name="EventarcPipelineDestinations" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcPipelineDestinations {
    EventarcPipelineDestinationsAuthenticationConfig AuthenticationConfig = null,
    EventarcPipelineDestinationsHttpEndpoint HttpEndpoint = null,
    string MessageBus = null,
    EventarcPipelineDestinationsNetworkConfig NetworkConfig = null,
    EventarcPipelineDestinationsOutputPayloadFormat OutputPayloadFormat = null,
    string Topic = null,
    string Workflow = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations.property.authenticationConfig">AuthenticationConfig</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfig">EventarcPipelineDestinationsAuthenticationConfig</a></code> | authentication_config block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations.property.httpEndpoint">HttpEndpoint</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpoint">EventarcPipelineDestinationsHttpEndpoint</a></code> | http_endpoint block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations.property.messageBus">MessageBus</a></code> | <code>string</code> | The resource name of the Message Bus to which events should be published. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfig">EventarcPipelineDestinationsNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations.property.outputPayloadFormat">OutputPayloadFormat</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormat">EventarcPipelineDestinationsOutputPayloadFormat</a></code> | output_payload_format block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations.property.topic">Topic</a></code> | <code>string</code> | The resource name of the Pub/Sub topic to which events should be published. Format: 'projects/{project}/locations/{location}/topics/{topic}'. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations.property.workflow">Workflow</a></code> | <code>string</code> | The resource name of the Workflow whose Executions are triggered by the events. |

---

##### `AuthenticationConfig`<sup>Optional</sup> <a name="AuthenticationConfig" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations.property.authenticationConfig"></a>

```csharp
public EventarcPipelineDestinationsAuthenticationConfig AuthenticationConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfig">EventarcPipelineDestinationsAuthenticationConfig</a>

authentication_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#authentication_config EventarcPipeline#authentication_config}

---

##### `HttpEndpoint`<sup>Optional</sup> <a name="HttpEndpoint" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations.property.httpEndpoint"></a>

```csharp
public EventarcPipelineDestinationsHttpEndpoint HttpEndpoint { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpoint">EventarcPipelineDestinationsHttpEndpoint</a>

http_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#http_endpoint EventarcPipeline#http_endpoint}

---

##### `MessageBus`<sup>Optional</sup> <a name="MessageBus" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations.property.messageBus"></a>

```csharp
public string MessageBus { get; set; }
```

- *Type:* string

The resource name of the Message Bus to which events should be published.

The Message Bus resource should exist in the same project as
the Pipeline. Format:
'projects/{project}/locations/{location}/messageBuses/{message_bus}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#message_bus EventarcPipeline#message_bus}

---

##### `NetworkConfig`<sup>Optional</sup> <a name="NetworkConfig" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations.property.networkConfig"></a>

```csharp
public EventarcPipelineDestinationsNetworkConfig NetworkConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfig">EventarcPipelineDestinationsNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#network_config EventarcPipeline#network_config}

---

##### `OutputPayloadFormat`<sup>Optional</sup> <a name="OutputPayloadFormat" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations.property.outputPayloadFormat"></a>

```csharp
public EventarcPipelineDestinationsOutputPayloadFormat OutputPayloadFormat { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormat">EventarcPipelineDestinationsOutputPayloadFormat</a>

output_payload_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#output_payload_format EventarcPipeline#output_payload_format}

---

##### `Topic`<sup>Optional</sup> <a name="Topic" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations.property.topic"></a>

```csharp
public string Topic { get; set; }
```

- *Type:* string

The resource name of the Pub/Sub topic to which events should be published. Format: 'projects/{project}/locations/{location}/topics/{topic}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#topic EventarcPipeline#topic}

---

##### `Workflow`<sup>Optional</sup> <a name="Workflow" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinations.property.workflow"></a>

```csharp
public string Workflow { get; set; }
```

- *Type:* string

The resource name of the Workflow whose Executions are triggered by the events.

The Workflow resource should be deployed in the same
project as the Pipeline. Format:
'projects/{project}/locations/{location}/workflows/{workflow}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#workflow EventarcPipeline#workflow}

---

### EventarcPipelineDestinationsAuthenticationConfig <a name="EventarcPipelineDestinationsAuthenticationConfig" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcPipelineDestinationsAuthenticationConfig {
    EventarcPipelineDestinationsAuthenticationConfigGoogleOidc GoogleOidc = null,
    EventarcPipelineDestinationsAuthenticationConfigOauthToken OauthToken = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfig.property.googleOidc">GoogleOidc</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidc">EventarcPipelineDestinationsAuthenticationConfigGoogleOidc</a></code> | google_oidc block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfig.property.oauthToken">OauthToken</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthToken">EventarcPipelineDestinationsAuthenticationConfigOauthToken</a></code> | oauth_token block. |

---

##### `GoogleOidc`<sup>Optional</sup> <a name="GoogleOidc" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfig.property.googleOidc"></a>

```csharp
public EventarcPipelineDestinationsAuthenticationConfigGoogleOidc GoogleOidc { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidc">EventarcPipelineDestinationsAuthenticationConfigGoogleOidc</a>

google_oidc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#google_oidc EventarcPipeline#google_oidc}

---

##### `OauthToken`<sup>Optional</sup> <a name="OauthToken" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfig.property.oauthToken"></a>

```csharp
public EventarcPipelineDestinationsAuthenticationConfigOauthToken OauthToken { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthToken">EventarcPipelineDestinationsAuthenticationConfigOauthToken</a>

oauth_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#oauth_token EventarcPipeline#oauth_token}

---

### EventarcPipelineDestinationsAuthenticationConfigGoogleOidc <a name="EventarcPipelineDestinationsAuthenticationConfigGoogleOidc" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidc.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcPipelineDestinationsAuthenticationConfigGoogleOidc {
    string ServiceAccount,
    string Audience = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidc.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | Service account email used to generate the OIDC Token. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidc.property.audience">Audience</a></code> | <code>string</code> | Audience to be used to generate the OIDC Token. |

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidc.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

Service account email used to generate the OIDC Token.

The principal who calls this API must have
iam.serviceAccounts.actAs permission in the service account. See
https://cloud.google.com/iam/docs/understanding-service-accounts
for more information. Eventarc service agents must have
roles/roles/iam.serviceAccountTokenCreator role to allow the
Pipeline to create OpenID tokens for authenticated requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#service_account EventarcPipeline#service_account}

---

##### `Audience`<sup>Optional</sup> <a name="Audience" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidc.property.audience"></a>

```csharp
public string Audience { get; set; }
```

- *Type:* string

Audience to be used to generate the OIDC Token.

The audience claim
identifies the recipient that the JWT is intended for. If
unspecified, the destination URI will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#audience EventarcPipeline#audience}

---

### EventarcPipelineDestinationsAuthenticationConfigOauthToken <a name="EventarcPipelineDestinationsAuthenticationConfigOauthToken" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthToken.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcPipelineDestinationsAuthenticationConfigOauthToken {
    string ServiceAccount,
    string Scope = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthToken.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | Service account email used to generate the [OAuth token](https://developers.google.com/identity/protocols/OAuth2). The principal who calls this API must have iam.serviceAccounts.actAs permission in the service account. See https://cloud.google.com/iam/docs/understanding-service-accounts for more information. Eventarc service agents must have roles/roles/iam.serviceAccountTokenCreator role to allow Pipeline to create OAuth2 tokens for authenticated requests. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthToken.property.scope">Scope</a></code> | <code>string</code> | OAuth scope to be used for generating OAuth access token. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used. |

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthToken.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

Service account email used to generate the [OAuth token](https://developers.google.com/identity/protocols/OAuth2). The principal who calls this API must have iam.serviceAccounts.actAs permission in the service account. See https://cloud.google.com/iam/docs/understanding-service-accounts for more information. Eventarc service agents must have roles/roles/iam.serviceAccountTokenCreator role to allow Pipeline to create OAuth2 tokens for authenticated requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#service_account EventarcPipeline#service_account}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthToken.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

OAuth scope to be used for generating OAuth access token. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#scope EventarcPipeline#scope}

---

### EventarcPipelineDestinationsHttpEndpoint <a name="EventarcPipelineDestinationsHttpEndpoint" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcPipelineDestinationsHttpEndpoint {
    string Uri,
    string MessageBindingTemplate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpoint.property.uri">Uri</a></code> | <code>string</code> | The URI of the HTTP enpdoint. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpoint.property.messageBindingTemplate">MessageBindingTemplate</a></code> | <code>string</code> | The CEL expression used to modify how the destination-bound HTTP request is constructed. |

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpoint.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

The URI of the HTTP enpdoint.

The value must be a RFC2396 URI string.
Examples: 'https://svc.us-central1.p.local:8080/route'.
Only the HTTPS protocol is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#uri EventarcPipeline#uri}

---

##### `MessageBindingTemplate`<sup>Optional</sup> <a name="MessageBindingTemplate" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpoint.property.messageBindingTemplate"></a>

```csharp
public string MessageBindingTemplate { get; set; }
```

- *Type:* string

The CEL expression used to modify how the destination-bound HTTP request is constructed.

If a binding expression is not specified here, the message
is treated as a CloudEvent and is mapped to the HTTP request according
to the CloudEvent HTTP Protocol Binding Binary Content Mode
(https://github.com/cloudevents/spec/blob/main/cloudevents/bindings/http-protocol-binding.md#31-binary-content-mode).
In this representation, all fields except the 'data' and
'datacontenttype' field on the message are mapped to HTTP request
headers with a prefix of 'ce-'.

To construct the HTTP request payload and the value of the content-type
HTTP header, the payload format is defined as follows:

1) Use the output_payload_format_type on the Pipeline.Destination if it
   is set, else:
2) Use the input_payload_format_type on the Pipeline if it is set,
   else:
3) Treat the payload as opaque binary data.

The 'data' field of the message is converted to the payload format or
left as-is for case 3) and then attached as the payload of the HTTP
request. The 'content-type' header on the HTTP request is set to the
payload format type or left empty for case 3). However, if a mediation
has updated the 'datacontenttype' field on the message so that it is
not the same as the payload format type but it is still a prefix of the
payload format type, then the 'content-type' header on the HTTP request
is set to this 'datacontenttype' value. For example, if the
'datacontenttype' is "application/json" and the payload format type is
"application/json; charset=utf-8", then the 'content-type' header on
the HTTP request is set to "application/json; charset=utf-8".

If a non-empty binding expression is specified then this expression is
used to modify the default CloudEvent HTTP Protocol Binding Binary
Content representation.
The result of the CEL expression must be a map of key/value pairs
which is used as follows:

* If a map named 'headers' exists on the result of the expression,
  then its key/value pairs are directly mapped to the HTTP request
  headers. The headers values are constructed from the corresponding
  value type's canonical representation. If the 'headers' field doesn't
  exist then the resulting HTTP request will be the headers of the
  CloudEvent HTTP Binding Binary Content Mode representation of the final
  message. Note: If the specified binding expression, has updated the
  'datacontenttype' field on the message so that it is not the same as
  the payload format type but it is still a prefix of the payload format
  type, then the 'content-type' header in the 'headers' map is set to
  this 'datacontenttype' value.
* If a field named 'body' exists on the result of the expression then
  its value is directly mapped to the body of the request. If the value
  of the 'body' field is of type bytes or string then it is used for
  the HTTP request body as-is, with no conversion. If the body field is
  of any other type then it is converted to a JSON string. If the body
  field does not exist then the resulting payload of the HTTP request
  will be data value of the CloudEvent HTTP Binding Binary Content Mode
  representation of the final message as described earlier.
* Any other fields in the resulting expression will be ignored.

The CEL expression may access the incoming CloudEvent message in its
definition, as follows:

* The 'data' field of the incoming CloudEvent message can be accessed
  using the 'message.data' value. Subfields of 'message.data' may also be
  accessed if an input_payload_format has been specified on the Pipeline.
* Each attribute of the incoming CloudEvent message can be accessed
  using the 'message.' value, where  is replaced with the
  name of the attribute.
* Existing headers can be accessed in the CEL expression using the
  'headers' variable. The 'headers' variable defines a map of key/value
  pairs corresponding to the HTTP headers of the CloudEvent HTTP Binding
  Binary Content Mode representation of the final message as described
  earlier. For example, the following CEL expression can be used to
  construct an HTTP request by adding an additional header to the HTTP
  headers of the CloudEvent HTTP Binding Binary Content Mode
  representation of the final message and by overwriting the body of the
  request:

```
{
"headers": headers.merge({"new-header-key": "new-header-value"}),
"body": "new-body"
}
```

* The default binding for the message payload can be accessed using the
  'body' variable. It conatins a string representation of the message
  payload in the format specified by the 'output_payload_format' field.
  If the 'input_payload_format' field is not set, the 'body'
  variable contains the same message payload bytes that were published.

Additionally, the following CEL extension functions are provided for
use in this CEL expression:

* toBase64Url:
  map.toBase64Url() -> string
* Converts a CelValue to a base64url encoded string
* toJsonString: map.toJsonString() -> string
* Converts a CelValue to a JSON string
* merge:
  map1.merge(map2) -> map3
* Merges the passed CEL map with the existing CEL map the
  function is applied to.
* If the same key exists in both maps, if the key's value is type
  map both maps are merged else the value from the passed map is
  used.
* denormalize:
  map.denormalize() -> map
* Denormalizes a CEL map such that every value of type map or key
  in the map is expanded to return a single level map.
* The resulting keys are "." separated indices of the map keys.
* For example:
  {
  "a": 1,
  "b": {
  "c": 2,
  "d": 3
  }
  "e": [4, 5]
  }
  .denormalize()
  -> {
  "a": 1,
  "b.c": 2,
  "b.d": 3,
  "e.0": 4,
  "e.1": 5
  }
* setField:
  map.setField(key, value) -> message
* Sets the field of the message with the given key to the
  given value.
* If the field is not present it will be added.
* If the field is present it will be overwritten.
* The key can be a dot separated path to set a field in a nested
  message.
* Key must be of type string.
* Value may be any valid type.
* removeFields:
  map.removeFields([key1, key2, ...]) -> message
* Removes the fields of the map with the given keys.
* The keys can be a dot separated path to remove a field in a
  nested message.
* If a key is not found it will be ignored.
* Keys must be of type string.
* toMap:
  [map1, map2, ...].toMap() -> map
* Converts a CEL list of CEL maps to a single CEL map
* toCloudEventJsonWithPayloadFormat:
  message.toCloudEventJsonWithPayloadFormat() -> map
* Converts a message to the corresponding structure of JSON
  format for CloudEvents.
* It converts 'data' to destination payload format
  specified in 'output_payload_format'. If 'output_payload_format' is
  not set, the data will remain unchanged.
* It also sets the corresponding datacontenttype of
  the CloudEvent, as indicated by
  'output_payload_format'. If no
  'output_payload_format' is set it will use the value of the
  "datacontenttype" attribute on the CloudEvent if present, else
  remove "datacontenttype" attribute.
* This function expects that the content of the message will
  adhere to the standard CloudEvent format. If it doesn't then this
  function will fail.
* The result is a CEL map that corresponds to the JSON
  representation of the CloudEvent. To convert that data to a JSON
  string it can be chained with the toJsonString function.

The Pipeline expects that the message it receives adheres to the
standard CloudEvent format. If it doesn't then the outgoing message
request may fail with a persistent error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#message_binding_template EventarcPipeline#message_binding_template}

---

### EventarcPipelineDestinationsNetworkConfig <a name="EventarcPipelineDestinationsNetworkConfig" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcPipelineDestinationsNetworkConfig {
    string NetworkAttachment = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfig.property.networkAttachment">NetworkAttachment</a></code> | <code>string</code> | Name of the NetworkAttachment that allows access to the consumer VPC. |

---

##### `NetworkAttachment`<sup>Optional</sup> <a name="NetworkAttachment" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfig.property.networkAttachment"></a>

```csharp
public string NetworkAttachment { get; set; }
```

- *Type:* string

Name of the NetworkAttachment that allows access to the consumer VPC.

Format:
'projects/{PROJECT_ID}/regions/{REGION}/networkAttachments/{NETWORK_ATTACHMENT_NAME}'

Required for HTTP endpoint destinations. Must not be specified for
Workflows, MessageBus, or Topic destinations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#network_attachment EventarcPipeline#network_attachment}

---

### EventarcPipelineDestinationsOutputPayloadFormat <a name="EventarcPipelineDestinationsOutputPayloadFormat" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormat.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcPipelineDestinationsOutputPayloadFormat {
    EventarcPipelineDestinationsOutputPayloadFormatAvro Avro = null,
    EventarcPipelineDestinationsOutputPayloadFormatJson Json = null,
    EventarcPipelineDestinationsOutputPayloadFormatProtobuf Protobuf = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormat.property.avro">Avro</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvro">EventarcPipelineDestinationsOutputPayloadFormatAvro</a></code> | avro block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormat.property.json">Json</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJson">EventarcPipelineDestinationsOutputPayloadFormatJson</a></code> | json block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormat.property.protobuf">Protobuf</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobuf">EventarcPipelineDestinationsOutputPayloadFormatProtobuf</a></code> | protobuf block. |

---

##### `Avro`<sup>Optional</sup> <a name="Avro" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormat.property.avro"></a>

```csharp
public EventarcPipelineDestinationsOutputPayloadFormatAvro Avro { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvro">EventarcPipelineDestinationsOutputPayloadFormatAvro</a>

avro block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#avro EventarcPipeline#avro}

---

##### `Json`<sup>Optional</sup> <a name="Json" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormat.property.json"></a>

```csharp
public EventarcPipelineDestinationsOutputPayloadFormatJson Json { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJson">EventarcPipelineDestinationsOutputPayloadFormatJson</a>

json block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#json EventarcPipeline#json}

---

##### `Protobuf`<sup>Optional</sup> <a name="Protobuf" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormat.property.protobuf"></a>

```csharp
public EventarcPipelineDestinationsOutputPayloadFormatProtobuf Protobuf { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobuf">EventarcPipelineDestinationsOutputPayloadFormatProtobuf</a>

protobuf block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#protobuf EventarcPipeline#protobuf}

---

### EventarcPipelineDestinationsOutputPayloadFormatAvro <a name="EventarcPipelineDestinationsOutputPayloadFormatAvro" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvro"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvro.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcPipelineDestinationsOutputPayloadFormatAvro {
    string SchemaDefinition = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvro.property.schemaDefinition">SchemaDefinition</a></code> | <code>string</code> | The entire schema definition is stored in this field. |

---

##### `SchemaDefinition`<sup>Optional</sup> <a name="SchemaDefinition" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvro.property.schemaDefinition"></a>

```csharp
public string SchemaDefinition { get; set; }
```

- *Type:* string

The entire schema definition is stored in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#schema_definition EventarcPipeline#schema_definition}

---

### EventarcPipelineDestinationsOutputPayloadFormatJson <a name="EventarcPipelineDestinationsOutputPayloadFormatJson" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJson"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJson.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcPipelineDestinationsOutputPayloadFormatJson {

};
```


### EventarcPipelineDestinationsOutputPayloadFormatProtobuf <a name="EventarcPipelineDestinationsOutputPayloadFormatProtobuf" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobuf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobuf.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcPipelineDestinationsOutputPayloadFormatProtobuf {
    string SchemaDefinition = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobuf.property.schemaDefinition">SchemaDefinition</a></code> | <code>string</code> | The entire schema definition is stored in this field. |

---

##### `SchemaDefinition`<sup>Optional</sup> <a name="SchemaDefinition" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobuf.property.schemaDefinition"></a>

```csharp
public string SchemaDefinition { get; set; }
```

- *Type:* string

The entire schema definition is stored in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#schema_definition EventarcPipeline#schema_definition}

---

### EventarcPipelineInputPayloadFormat <a name="EventarcPipelineInputPayloadFormat" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormat.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcPipelineInputPayloadFormat {
    EventarcPipelineInputPayloadFormatAvro Avro = null,
    EventarcPipelineInputPayloadFormatJson Json = null,
    EventarcPipelineInputPayloadFormatProtobuf Protobuf = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormat.property.avro">Avro</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvro">EventarcPipelineInputPayloadFormatAvro</a></code> | avro block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormat.property.json">Json</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJson">EventarcPipelineInputPayloadFormatJson</a></code> | json block. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormat.property.protobuf">Protobuf</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobuf">EventarcPipelineInputPayloadFormatProtobuf</a></code> | protobuf block. |

---

##### `Avro`<sup>Optional</sup> <a name="Avro" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormat.property.avro"></a>

```csharp
public EventarcPipelineInputPayloadFormatAvro Avro { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvro">EventarcPipelineInputPayloadFormatAvro</a>

avro block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#avro EventarcPipeline#avro}

---

##### `Json`<sup>Optional</sup> <a name="Json" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormat.property.json"></a>

```csharp
public EventarcPipelineInputPayloadFormatJson Json { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJson">EventarcPipelineInputPayloadFormatJson</a>

json block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#json EventarcPipeline#json}

---

##### `Protobuf`<sup>Optional</sup> <a name="Protobuf" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormat.property.protobuf"></a>

```csharp
public EventarcPipelineInputPayloadFormatProtobuf Protobuf { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobuf">EventarcPipelineInputPayloadFormatProtobuf</a>

protobuf block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#protobuf EventarcPipeline#protobuf}

---

### EventarcPipelineInputPayloadFormatAvro <a name="EventarcPipelineInputPayloadFormatAvro" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvro"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvro.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcPipelineInputPayloadFormatAvro {
    string SchemaDefinition = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvro.property.schemaDefinition">SchemaDefinition</a></code> | <code>string</code> | The entire schema definition is stored in this field. |

---

##### `SchemaDefinition`<sup>Optional</sup> <a name="SchemaDefinition" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvro.property.schemaDefinition"></a>

```csharp
public string SchemaDefinition { get; set; }
```

- *Type:* string

The entire schema definition is stored in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#schema_definition EventarcPipeline#schema_definition}

---

### EventarcPipelineInputPayloadFormatJson <a name="EventarcPipelineInputPayloadFormatJson" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJson"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJson.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcPipelineInputPayloadFormatJson {

};
```


### EventarcPipelineInputPayloadFormatProtobuf <a name="EventarcPipelineInputPayloadFormatProtobuf" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobuf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobuf.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcPipelineInputPayloadFormatProtobuf {
    string SchemaDefinition = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobuf.property.schemaDefinition">SchemaDefinition</a></code> | <code>string</code> | The entire schema definition is stored in this field. |

---

##### `SchemaDefinition`<sup>Optional</sup> <a name="SchemaDefinition" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobuf.property.schemaDefinition"></a>

```csharp
public string SchemaDefinition { get; set; }
```

- *Type:* string

The entire schema definition is stored in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#schema_definition EventarcPipeline#schema_definition}

---

### EventarcPipelineLoggingConfig <a name="EventarcPipelineLoggingConfig" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcPipelineLoggingConfig {
    string LogSeverity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfig.property.logSeverity">LogSeverity</a></code> | <code>string</code> | The minimum severity of logs that will be sent to Stackdriver/Platform Telemetry. |

---

##### `LogSeverity`<sup>Optional</sup> <a name="LogSeverity" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfig.property.logSeverity"></a>

```csharp
public string LogSeverity { get; set; }
```

- *Type:* string

The minimum severity of logs that will be sent to Stackdriver/Platform Telemetry.

Logs at severitiy ≥ this value will be sent, unless it is NONE. Possible values: ["NONE", "DEBUG", "INFO", "NOTICE", "WARNING", "ERROR", "CRITICAL", "ALERT", "EMERGENCY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#log_severity EventarcPipeline#log_severity}

---

### EventarcPipelineMediations <a name="EventarcPipelineMediations" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcPipelineMediations {
    EventarcPipelineMediationsTransformation Transformation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediations.property.transformation">Transformation</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformation">EventarcPipelineMediationsTransformation</a></code> | transformation block. |

---

##### `Transformation`<sup>Optional</sup> <a name="Transformation" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediations.property.transformation"></a>

```csharp
public EventarcPipelineMediationsTransformation Transformation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformation">EventarcPipelineMediationsTransformation</a>

transformation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#transformation EventarcPipeline#transformation}

---

### EventarcPipelineMediationsTransformation <a name="EventarcPipelineMediationsTransformation" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcPipelineMediationsTransformation {
    string TransformationTemplate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformation.property.transformationTemplate">TransformationTemplate</a></code> | <code>string</code> | The CEL expression template to apply to transform messages. |

---

##### `TransformationTemplate`<sup>Optional</sup> <a name="TransformationTemplate" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformation.property.transformationTemplate"></a>

```csharp
public string TransformationTemplate { get; set; }
```

- *Type:* string

The CEL expression template to apply to transform messages.

The following CEL extension functions are provided for
use in this CEL expression:

* merge:
  map1.merge(map2) -> map3
* Merges the passed CEL map with the existing CEL map the
  function is applied to.
* If the same key exists in both maps, if the key's value is type
  map both maps are merged else the value from the passed map is
  used.
* denormalize:
  map.denormalize() -> map
* Denormalizes a CEL map such that every value of type map or key
  in the map is expanded to return a single level map.
* The resulting keys are "." separated indices of the map keys.
* For example:
  {
  "a": 1,
  "b": {
  "c": 2,
  "d": 3
  }
  "e": [4, 5]
  }
  .denormalize()
  -> {
  "a": 1,
  "b.c": 2,
  "b.d": 3,
  "e.0": 4,
  "e.1": 5
  }
* setField:
  map.setField(key, value) -> message
* Sets the field of the message with the given key to the
  given value.
* If the field is not present it will be added.
* If the field is present it will be overwritten.
* The key can be a dot separated path to set a field in a nested
  message.
* Key must be of type string.
* Value may be any valid type.
* removeFields:
  map.removeFields([key1, key2, ...]) -> message
* Removes the fields of the map with the given keys.
* The keys can be a dot separated path to remove a field in a
  nested message.
* If a key is not found it will be ignored.
* Keys must be of type string.
* toMap:
  [map1, map2, ...].toMap() -> map
* Converts a CEL list of CEL maps to a single CEL map
* toDestinationPayloadFormat():
  message.data.toDestinationPayloadFormat() -> string or bytes
* Converts the message data to the destination payload format
  specified in Pipeline.Destination.output_payload_format
* This function is meant to be applied to the message.data field.
* If the destination payload format is not set, the function will
  return the message data unchanged.
* toCloudEventJsonWithPayloadFormat:
  message.toCloudEventJsonWithPayloadFormat() -> map
* Converts a message to the corresponding structure of JSON
  format for CloudEvents
* This function applies toDestinationPayloadFormat() to the
  message data. It also sets the corresponding datacontenttype of
  the CloudEvent, as indicated by
  Pipeline.Destination.output_payload_format. If no
  output_payload_format is set it will use the existing
  datacontenttype on the CloudEvent if present, else leave
  datacontenttype absent.
* This function expects that the content of the message will
  adhere to the standard CloudEvent format. If it doesn't then this
  function will fail.
* The result is a CEL map that corresponds to the JSON
  representation of the CloudEvent. To convert that data to a JSON
  string it can be chained with the toJsonString function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#transformation_template EventarcPipeline#transformation_template}

---

### EventarcPipelineRetryPolicy <a name="EventarcPipelineRetryPolicy" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcPipelineRetryPolicy {
    double MaxAttempts = null,
    string MaxRetryDelay = null,
    string MinRetryDelay = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicy.property.maxAttempts">MaxAttempts</a></code> | <code>double</code> | The maximum number of delivery attempts for any message. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicy.property.maxRetryDelay">MaxRetryDelay</a></code> | <code>string</code> | The maximum amount of seconds to wait between retry attempts. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicy.property.minRetryDelay">MinRetryDelay</a></code> | <code>string</code> | The minimum amount of seconds to wait between retry attempts. |

---

##### `MaxAttempts`<sup>Optional</sup> <a name="MaxAttempts" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicy.property.maxAttempts"></a>

```csharp
public double MaxAttempts { get; set; }
```

- *Type:* double

The maximum number of delivery attempts for any message.

The value must
be between 1 and 100.
The default value for this field is 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#max_attempts EventarcPipeline#max_attempts}

---

##### `MaxRetryDelay`<sup>Optional</sup> <a name="MaxRetryDelay" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicy.property.maxRetryDelay"></a>

```csharp
public string MaxRetryDelay { get; set; }
```

- *Type:* string

The maximum amount of seconds to wait between retry attempts.

The value
must be between 1 and 600.
The default value for this field is 60.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#max_retry_delay EventarcPipeline#max_retry_delay}

---

##### `MinRetryDelay`<sup>Optional</sup> <a name="MinRetryDelay" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicy.property.minRetryDelay"></a>

```csharp
public string MinRetryDelay { get; set; }
```

- *Type:* string

The minimum amount of seconds to wait between retry attempts.

The value
must be between 1 and 600.
The default value for this field is 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#min_retry_delay EventarcPipeline#min_retry_delay}

---

### EventarcPipelineTimeouts <a name="EventarcPipelineTimeouts" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcPipelineTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#create EventarcPipeline#create}. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#delete EventarcPipeline#delete}. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#update EventarcPipeline#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#create EventarcPipeline#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#delete EventarcPipeline#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/eventarc_pipeline#update EventarcPipeline#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference <a name="EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.resetAudience">ResetAudience</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAudience` <a name="ResetAudience" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.resetAudience"></a>

```csharp
private void ResetAudience()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.audienceInput">AudienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.audience">Audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidc">EventarcPipelineDestinationsAuthenticationConfigGoogleOidc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AudienceInput`<sup>Optional</sup> <a name="AudienceInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.audienceInput"></a>

```csharp
public string AudienceInput { get; }
```

- *Type:* string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.serviceAccountInput"></a>

```csharp
public string ServiceAccountInput { get; }
```

- *Type:* string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.audience"></a>

```csharp
public string Audience { get; }
```

- *Type:* string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference.property.internalValue"></a>

```csharp
public EventarcPipelineDestinationsAuthenticationConfigGoogleOidc InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidc">EventarcPipelineDestinationsAuthenticationConfigGoogleOidc</a>

---


### EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference <a name="EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.resetScope"></a>

```csharp
private void ResetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthToken">EventarcPipelineDestinationsAuthenticationConfigOauthToken</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.serviceAccountInput"></a>

```csharp
public string ServiceAccountInput { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference.property.internalValue"></a>

```csharp
public EventarcPipelineDestinationsAuthenticationConfigOauthToken InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthToken">EventarcPipelineDestinationsAuthenticationConfigOauthToken</a>

---


### EventarcPipelineDestinationsAuthenticationConfigOutputReference <a name="EventarcPipelineDestinationsAuthenticationConfigOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcPipelineDestinationsAuthenticationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.putGoogleOidc">PutGoogleOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.putOauthToken">PutOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.resetGoogleOidc">ResetGoogleOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.resetOauthToken">ResetOauthToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGoogleOidc` <a name="PutGoogleOidc" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.putGoogleOidc"></a>

```csharp
private void PutGoogleOidc(EventarcPipelineDestinationsAuthenticationConfigGoogleOidc Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.putGoogleOidc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidc">EventarcPipelineDestinationsAuthenticationConfigGoogleOidc</a>

---

##### `PutOauthToken` <a name="PutOauthToken" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.putOauthToken"></a>

```csharp
private void PutOauthToken(EventarcPipelineDestinationsAuthenticationConfigOauthToken Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.putOauthToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthToken">EventarcPipelineDestinationsAuthenticationConfigOauthToken</a>

---

##### `ResetGoogleOidc` <a name="ResetGoogleOidc" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.resetGoogleOidc"></a>

```csharp
private void ResetGoogleOidc()
```

##### `ResetOauthToken` <a name="ResetOauthToken" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.resetOauthToken"></a>

```csharp
private void ResetOauthToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.property.googleOidc">GoogleOidc</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference">EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.property.oauthToken">OauthToken</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference">EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.property.googleOidcInput">GoogleOidcInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidc">EventarcPipelineDestinationsAuthenticationConfigGoogleOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.property.oauthTokenInput">OauthTokenInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthToken">EventarcPipelineDestinationsAuthenticationConfigOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfig">EventarcPipelineDestinationsAuthenticationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GoogleOidc`<sup>Required</sup> <a name="GoogleOidc" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.property.googleOidc"></a>

```csharp
public EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference GoogleOidc { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference">EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference</a>

---

##### `OauthToken`<sup>Required</sup> <a name="OauthToken" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.property.oauthToken"></a>

```csharp
public EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference OauthToken { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference">EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference</a>

---

##### `GoogleOidcInput`<sup>Optional</sup> <a name="GoogleOidcInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.property.googleOidcInput"></a>

```csharp
public EventarcPipelineDestinationsAuthenticationConfigGoogleOidc GoogleOidcInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigGoogleOidc">EventarcPipelineDestinationsAuthenticationConfigGoogleOidc</a>

---

##### `OauthTokenInput`<sup>Optional</sup> <a name="OauthTokenInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.property.oauthTokenInput"></a>

```csharp
public EventarcPipelineDestinationsAuthenticationConfigOauthToken OauthTokenInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOauthToken">EventarcPipelineDestinationsAuthenticationConfigOauthToken</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference.property.internalValue"></a>

```csharp
public EventarcPipelineDestinationsAuthenticationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfig">EventarcPipelineDestinationsAuthenticationConfig</a>

---


### EventarcPipelineDestinationsHttpEndpointOutputReference <a name="EventarcPipelineDestinationsHttpEndpointOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcPipelineDestinationsHttpEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.resetMessageBindingTemplate">ResetMessageBindingTemplate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMessageBindingTemplate` <a name="ResetMessageBindingTemplate" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.resetMessageBindingTemplate"></a>

```csharp
private void ResetMessageBindingTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.property.messageBindingTemplateInput">MessageBindingTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.property.messageBindingTemplate">MessageBindingTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpoint">EventarcPipelineDestinationsHttpEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MessageBindingTemplateInput`<sup>Optional</sup> <a name="MessageBindingTemplateInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.property.messageBindingTemplateInput"></a>

```csharp
public string MessageBindingTemplateInput { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `MessageBindingTemplate`<sup>Required</sup> <a name="MessageBindingTemplate" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.property.messageBindingTemplate"></a>

```csharp
public string MessageBindingTemplate { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference.property.internalValue"></a>

```csharp
public EventarcPipelineDestinationsHttpEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpoint">EventarcPipelineDestinationsHttpEndpoint</a>

---


### EventarcPipelineDestinationsList <a name="EventarcPipelineDestinationsList" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcPipelineDestinationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.get"></a>

```csharp
private EventarcPipelineDestinationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventarcPipelineDestinationsNetworkConfigOutputReference <a name="EventarcPipelineDestinationsNetworkConfigOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcPipelineDestinationsNetworkConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.resetNetworkAttachment">ResetNetworkAttachment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNetworkAttachment` <a name="ResetNetworkAttachment" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.resetNetworkAttachment"></a>

```csharp
private void ResetNetworkAttachment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.property.networkAttachmentInput">NetworkAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.property.networkAttachment">NetworkAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfig">EventarcPipelineDestinationsNetworkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkAttachmentInput`<sup>Optional</sup> <a name="NetworkAttachmentInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.property.networkAttachmentInput"></a>

```csharp
public string NetworkAttachmentInput { get; }
```

- *Type:* string

---

##### `NetworkAttachment`<sup>Required</sup> <a name="NetworkAttachment" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.property.networkAttachment"></a>

```csharp
public string NetworkAttachment { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference.property.internalValue"></a>

```csharp
public EventarcPipelineDestinationsNetworkConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfig">EventarcPipelineDestinationsNetworkConfig</a>

---


### EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference <a name="EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.resetSchemaDefinition">ResetSchemaDefinition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSchemaDefinition` <a name="ResetSchemaDefinition" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.resetSchemaDefinition"></a>

```csharp
private void ResetSchemaDefinition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.schemaDefinitionInput">SchemaDefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.schemaDefinition">SchemaDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvro">EventarcPipelineDestinationsOutputPayloadFormatAvro</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SchemaDefinitionInput`<sup>Optional</sup> <a name="SchemaDefinitionInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.schemaDefinitionInput"></a>

```csharp
public string SchemaDefinitionInput { get; }
```

- *Type:* string

---

##### `SchemaDefinition`<sup>Required</sup> <a name="SchemaDefinition" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.schemaDefinition"></a>

```csharp
public string SchemaDefinition { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference.property.internalValue"></a>

```csharp
public EventarcPipelineDestinationsOutputPayloadFormatAvro InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvro">EventarcPipelineDestinationsOutputPayloadFormatAvro</a>

---


### EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference <a name="EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJson">EventarcPipelineDestinationsOutputPayloadFormatJson</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference.property.internalValue"></a>

```csharp
public EventarcPipelineDestinationsOutputPayloadFormatJson InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJson">EventarcPipelineDestinationsOutputPayloadFormatJson</a>

---


### EventarcPipelineDestinationsOutputPayloadFormatOutputReference <a name="EventarcPipelineDestinationsOutputPayloadFormatOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcPipelineDestinationsOutputPayloadFormatOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.putAvro">PutAvro</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.putJson">PutJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.putProtobuf">PutProtobuf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.resetAvro">ResetAvro</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.resetJson">ResetJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.resetProtobuf">ResetProtobuf</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAvro` <a name="PutAvro" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.putAvro"></a>

```csharp
private void PutAvro(EventarcPipelineDestinationsOutputPayloadFormatAvro Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.putAvro.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvro">EventarcPipelineDestinationsOutputPayloadFormatAvro</a>

---

##### `PutJson` <a name="PutJson" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.putJson"></a>

```csharp
private void PutJson(EventarcPipelineDestinationsOutputPayloadFormatJson Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.putJson.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJson">EventarcPipelineDestinationsOutputPayloadFormatJson</a>

---

##### `PutProtobuf` <a name="PutProtobuf" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.putProtobuf"></a>

```csharp
private void PutProtobuf(EventarcPipelineDestinationsOutputPayloadFormatProtobuf Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.putProtobuf.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobuf">EventarcPipelineDestinationsOutputPayloadFormatProtobuf</a>

---

##### `ResetAvro` <a name="ResetAvro" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.resetAvro"></a>

```csharp
private void ResetAvro()
```

##### `ResetJson` <a name="ResetJson" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.resetJson"></a>

```csharp
private void ResetJson()
```

##### `ResetProtobuf` <a name="ResetProtobuf" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.resetProtobuf"></a>

```csharp
private void ResetProtobuf()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.avro">Avro</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference">EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.json">Json</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference">EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.protobuf">Protobuf</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference">EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.avroInput">AvroInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvro">EventarcPipelineDestinationsOutputPayloadFormatAvro</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.jsonInput">JsonInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJson">EventarcPipelineDestinationsOutputPayloadFormatJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.protobufInput">ProtobufInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobuf">EventarcPipelineDestinationsOutputPayloadFormatProtobuf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormat">EventarcPipelineDestinationsOutputPayloadFormat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Avro`<sup>Required</sup> <a name="Avro" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.avro"></a>

```csharp
public EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference Avro { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference">EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference</a>

---

##### `Json`<sup>Required</sup> <a name="Json" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.json"></a>

```csharp
public EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference Json { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference">EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference</a>

---

##### `Protobuf`<sup>Required</sup> <a name="Protobuf" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.protobuf"></a>

```csharp
public EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference Protobuf { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference">EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference</a>

---

##### `AvroInput`<sup>Optional</sup> <a name="AvroInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.avroInput"></a>

```csharp
public EventarcPipelineDestinationsOutputPayloadFormatAvro AvroInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatAvro">EventarcPipelineDestinationsOutputPayloadFormatAvro</a>

---

##### `JsonInput`<sup>Optional</sup> <a name="JsonInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.jsonInput"></a>

```csharp
public EventarcPipelineDestinationsOutputPayloadFormatJson JsonInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatJson">EventarcPipelineDestinationsOutputPayloadFormatJson</a>

---

##### `ProtobufInput`<sup>Optional</sup> <a name="ProtobufInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.protobufInput"></a>

```csharp
public EventarcPipelineDestinationsOutputPayloadFormatProtobuf ProtobufInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobuf">EventarcPipelineDestinationsOutputPayloadFormatProtobuf</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference.property.internalValue"></a>

```csharp
public EventarcPipelineDestinationsOutputPayloadFormat InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormat">EventarcPipelineDestinationsOutputPayloadFormat</a>

---


### EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference <a name="EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.resetSchemaDefinition">ResetSchemaDefinition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSchemaDefinition` <a name="ResetSchemaDefinition" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.resetSchemaDefinition"></a>

```csharp
private void ResetSchemaDefinition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.schemaDefinitionInput">SchemaDefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.schemaDefinition">SchemaDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobuf">EventarcPipelineDestinationsOutputPayloadFormatProtobuf</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SchemaDefinitionInput`<sup>Optional</sup> <a name="SchemaDefinitionInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.schemaDefinitionInput"></a>

```csharp
public string SchemaDefinitionInput { get; }
```

- *Type:* string

---

##### `SchemaDefinition`<sup>Required</sup> <a name="SchemaDefinition" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.schemaDefinition"></a>

```csharp
public string SchemaDefinition { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference.property.internalValue"></a>

```csharp
public EventarcPipelineDestinationsOutputPayloadFormatProtobuf InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatProtobuf">EventarcPipelineDestinationsOutputPayloadFormatProtobuf</a>

---


### EventarcPipelineDestinationsOutputReference <a name="EventarcPipelineDestinationsOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcPipelineDestinationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.putAuthenticationConfig">PutAuthenticationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.putHttpEndpoint">PutHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.putNetworkConfig">PutNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.putOutputPayloadFormat">PutOutputPayloadFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resetAuthenticationConfig">ResetAuthenticationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resetHttpEndpoint">ResetHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resetMessageBus">ResetMessageBus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resetNetworkConfig">ResetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resetOutputPayloadFormat">ResetOutputPayloadFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resetTopic">ResetTopic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resetWorkflow">ResetWorkflow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthenticationConfig` <a name="PutAuthenticationConfig" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.putAuthenticationConfig"></a>

```csharp
private void PutAuthenticationConfig(EventarcPipelineDestinationsAuthenticationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.putAuthenticationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfig">EventarcPipelineDestinationsAuthenticationConfig</a>

---

##### `PutHttpEndpoint` <a name="PutHttpEndpoint" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.putHttpEndpoint"></a>

```csharp
private void PutHttpEndpoint(EventarcPipelineDestinationsHttpEndpoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.putHttpEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpoint">EventarcPipelineDestinationsHttpEndpoint</a>

---

##### `PutNetworkConfig` <a name="PutNetworkConfig" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.putNetworkConfig"></a>

```csharp
private void PutNetworkConfig(EventarcPipelineDestinationsNetworkConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfig">EventarcPipelineDestinationsNetworkConfig</a>

---

##### `PutOutputPayloadFormat` <a name="PutOutputPayloadFormat" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.putOutputPayloadFormat"></a>

```csharp
private void PutOutputPayloadFormat(EventarcPipelineDestinationsOutputPayloadFormat Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.putOutputPayloadFormat.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormat">EventarcPipelineDestinationsOutputPayloadFormat</a>

---

##### `ResetAuthenticationConfig` <a name="ResetAuthenticationConfig" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resetAuthenticationConfig"></a>

```csharp
private void ResetAuthenticationConfig()
```

##### `ResetHttpEndpoint` <a name="ResetHttpEndpoint" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resetHttpEndpoint"></a>

```csharp
private void ResetHttpEndpoint()
```

##### `ResetMessageBus` <a name="ResetMessageBus" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resetMessageBus"></a>

```csharp
private void ResetMessageBus()
```

##### `ResetNetworkConfig` <a name="ResetNetworkConfig" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resetNetworkConfig"></a>

```csharp
private void ResetNetworkConfig()
```

##### `ResetOutputPayloadFormat` <a name="ResetOutputPayloadFormat" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resetOutputPayloadFormat"></a>

```csharp
private void ResetOutputPayloadFormat()
```

##### `ResetTopic` <a name="ResetTopic" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resetTopic"></a>

```csharp
private void ResetTopic()
```

##### `ResetWorkflow` <a name="ResetWorkflow" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.resetWorkflow"></a>

```csharp
private void ResetWorkflow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.authenticationConfig">AuthenticationConfig</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference">EventarcPipelineDestinationsAuthenticationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.httpEndpoint">HttpEndpoint</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference">EventarcPipelineDestinationsHttpEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference">EventarcPipelineDestinationsNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.outputPayloadFormat">OutputPayloadFormat</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference">EventarcPipelineDestinationsOutputPayloadFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.authenticationConfigInput">AuthenticationConfigInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfig">EventarcPipelineDestinationsAuthenticationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.httpEndpointInput">HttpEndpointInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpoint">EventarcPipelineDestinationsHttpEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.messageBusInput">MessageBusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.networkConfigInput">NetworkConfigInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfig">EventarcPipelineDestinationsNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.outputPayloadFormatInput">OutputPayloadFormatInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormat">EventarcPipelineDestinationsOutputPayloadFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.topicInput">TopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.workflowInput">WorkflowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.messageBus">MessageBus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.topic">Topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.workflow">Workflow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticationConfig`<sup>Required</sup> <a name="AuthenticationConfig" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.authenticationConfig"></a>

```csharp
public EventarcPipelineDestinationsAuthenticationConfigOutputReference AuthenticationConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfigOutputReference">EventarcPipelineDestinationsAuthenticationConfigOutputReference</a>

---

##### `HttpEndpoint`<sup>Required</sup> <a name="HttpEndpoint" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.httpEndpoint"></a>

```csharp
public EventarcPipelineDestinationsHttpEndpointOutputReference HttpEndpoint { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpointOutputReference">EventarcPipelineDestinationsHttpEndpointOutputReference</a>

---

##### `NetworkConfig`<sup>Required</sup> <a name="NetworkConfig" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.networkConfig"></a>

```csharp
public EventarcPipelineDestinationsNetworkConfigOutputReference NetworkConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfigOutputReference">EventarcPipelineDestinationsNetworkConfigOutputReference</a>

---

##### `OutputPayloadFormat`<sup>Required</sup> <a name="OutputPayloadFormat" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.outputPayloadFormat"></a>

```csharp
public EventarcPipelineDestinationsOutputPayloadFormatOutputReference OutputPayloadFormat { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormatOutputReference">EventarcPipelineDestinationsOutputPayloadFormatOutputReference</a>

---

##### `AuthenticationConfigInput`<sup>Optional</sup> <a name="AuthenticationConfigInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.authenticationConfigInput"></a>

```csharp
public EventarcPipelineDestinationsAuthenticationConfig AuthenticationConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsAuthenticationConfig">EventarcPipelineDestinationsAuthenticationConfig</a>

---

##### `HttpEndpointInput`<sup>Optional</sup> <a name="HttpEndpointInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.httpEndpointInput"></a>

```csharp
public EventarcPipelineDestinationsHttpEndpoint HttpEndpointInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsHttpEndpoint">EventarcPipelineDestinationsHttpEndpoint</a>

---

##### `MessageBusInput`<sup>Optional</sup> <a name="MessageBusInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.messageBusInput"></a>

```csharp
public string MessageBusInput { get; }
```

- *Type:* string

---

##### `NetworkConfigInput`<sup>Optional</sup> <a name="NetworkConfigInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.networkConfigInput"></a>

```csharp
public EventarcPipelineDestinationsNetworkConfig NetworkConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsNetworkConfig">EventarcPipelineDestinationsNetworkConfig</a>

---

##### `OutputPayloadFormatInput`<sup>Optional</sup> <a name="OutputPayloadFormatInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.outputPayloadFormatInput"></a>

```csharp
public EventarcPipelineDestinationsOutputPayloadFormat OutputPayloadFormatInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputPayloadFormat">EventarcPipelineDestinationsOutputPayloadFormat</a>

---

##### `TopicInput`<sup>Optional</sup> <a name="TopicInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.topicInput"></a>

```csharp
public string TopicInput { get; }
```

- *Type:* string

---

##### `WorkflowInput`<sup>Optional</sup> <a name="WorkflowInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.workflowInput"></a>

```csharp
public string WorkflowInput { get; }
```

- *Type:* string

---

##### `MessageBus`<sup>Required</sup> <a name="MessageBus" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.messageBus"></a>

```csharp
public string MessageBus { get; }
```

- *Type:* string

---

##### `Topic`<sup>Required</sup> <a name="Topic" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.topic"></a>

```csharp
public string Topic { get; }
```

- *Type:* string

---

##### `Workflow`<sup>Required</sup> <a name="Workflow" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.workflow"></a>

```csharp
public string Workflow { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineDestinationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventarcPipelineInputPayloadFormatAvroOutputReference <a name="EventarcPipelineInputPayloadFormatAvroOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcPipelineInputPayloadFormatAvroOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.resetSchemaDefinition">ResetSchemaDefinition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSchemaDefinition` <a name="ResetSchemaDefinition" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.resetSchemaDefinition"></a>

```csharp
private void ResetSchemaDefinition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.property.schemaDefinitionInput">SchemaDefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.property.schemaDefinition">SchemaDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvro">EventarcPipelineInputPayloadFormatAvro</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SchemaDefinitionInput`<sup>Optional</sup> <a name="SchemaDefinitionInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.property.schemaDefinitionInput"></a>

```csharp
public string SchemaDefinitionInput { get; }
```

- *Type:* string

---

##### `SchemaDefinition`<sup>Required</sup> <a name="SchemaDefinition" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.property.schemaDefinition"></a>

```csharp
public string SchemaDefinition { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference.property.internalValue"></a>

```csharp
public EventarcPipelineInputPayloadFormatAvro InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvro">EventarcPipelineInputPayloadFormatAvro</a>

---


### EventarcPipelineInputPayloadFormatJsonOutputReference <a name="EventarcPipelineInputPayloadFormatJsonOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcPipelineInputPayloadFormatJsonOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJson">EventarcPipelineInputPayloadFormatJson</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference.property.internalValue"></a>

```csharp
public EventarcPipelineInputPayloadFormatJson InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJson">EventarcPipelineInputPayloadFormatJson</a>

---


### EventarcPipelineInputPayloadFormatOutputReference <a name="EventarcPipelineInputPayloadFormatOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcPipelineInputPayloadFormatOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.putAvro">PutAvro</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.putJson">PutJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.putProtobuf">PutProtobuf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.resetAvro">ResetAvro</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.resetJson">ResetJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.resetProtobuf">ResetProtobuf</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAvro` <a name="PutAvro" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.putAvro"></a>

```csharp
private void PutAvro(EventarcPipelineInputPayloadFormatAvro Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.putAvro.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvro">EventarcPipelineInputPayloadFormatAvro</a>

---

##### `PutJson` <a name="PutJson" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.putJson"></a>

```csharp
private void PutJson(EventarcPipelineInputPayloadFormatJson Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.putJson.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJson">EventarcPipelineInputPayloadFormatJson</a>

---

##### `PutProtobuf` <a name="PutProtobuf" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.putProtobuf"></a>

```csharp
private void PutProtobuf(EventarcPipelineInputPayloadFormatProtobuf Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.putProtobuf.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobuf">EventarcPipelineInputPayloadFormatProtobuf</a>

---

##### `ResetAvro` <a name="ResetAvro" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.resetAvro"></a>

```csharp
private void ResetAvro()
```

##### `ResetJson` <a name="ResetJson" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.resetJson"></a>

```csharp
private void ResetJson()
```

##### `ResetProtobuf` <a name="ResetProtobuf" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.resetProtobuf"></a>

```csharp
private void ResetProtobuf()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.avro">Avro</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference">EventarcPipelineInputPayloadFormatAvroOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.json">Json</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference">EventarcPipelineInputPayloadFormatJsonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.protobuf">Protobuf</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference">EventarcPipelineInputPayloadFormatProtobufOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.avroInput">AvroInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvro">EventarcPipelineInputPayloadFormatAvro</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.jsonInput">JsonInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJson">EventarcPipelineInputPayloadFormatJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.protobufInput">ProtobufInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobuf">EventarcPipelineInputPayloadFormatProtobuf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormat">EventarcPipelineInputPayloadFormat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Avro`<sup>Required</sup> <a name="Avro" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.avro"></a>

```csharp
public EventarcPipelineInputPayloadFormatAvroOutputReference Avro { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvroOutputReference">EventarcPipelineInputPayloadFormatAvroOutputReference</a>

---

##### `Json`<sup>Required</sup> <a name="Json" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.json"></a>

```csharp
public EventarcPipelineInputPayloadFormatJsonOutputReference Json { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJsonOutputReference">EventarcPipelineInputPayloadFormatJsonOutputReference</a>

---

##### `Protobuf`<sup>Required</sup> <a name="Protobuf" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.protobuf"></a>

```csharp
public EventarcPipelineInputPayloadFormatProtobufOutputReference Protobuf { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference">EventarcPipelineInputPayloadFormatProtobufOutputReference</a>

---

##### `AvroInput`<sup>Optional</sup> <a name="AvroInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.avroInput"></a>

```csharp
public EventarcPipelineInputPayloadFormatAvro AvroInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatAvro">EventarcPipelineInputPayloadFormatAvro</a>

---

##### `JsonInput`<sup>Optional</sup> <a name="JsonInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.jsonInput"></a>

```csharp
public EventarcPipelineInputPayloadFormatJson JsonInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatJson">EventarcPipelineInputPayloadFormatJson</a>

---

##### `ProtobufInput`<sup>Optional</sup> <a name="ProtobufInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.protobufInput"></a>

```csharp
public EventarcPipelineInputPayloadFormatProtobuf ProtobufInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobuf">EventarcPipelineInputPayloadFormatProtobuf</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatOutputReference.property.internalValue"></a>

```csharp
public EventarcPipelineInputPayloadFormat InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormat">EventarcPipelineInputPayloadFormat</a>

---


### EventarcPipelineInputPayloadFormatProtobufOutputReference <a name="EventarcPipelineInputPayloadFormatProtobufOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcPipelineInputPayloadFormatProtobufOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.resetSchemaDefinition">ResetSchemaDefinition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSchemaDefinition` <a name="ResetSchemaDefinition" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.resetSchemaDefinition"></a>

```csharp
private void ResetSchemaDefinition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.property.schemaDefinitionInput">SchemaDefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.property.schemaDefinition">SchemaDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobuf">EventarcPipelineInputPayloadFormatProtobuf</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SchemaDefinitionInput`<sup>Optional</sup> <a name="SchemaDefinitionInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.property.schemaDefinitionInput"></a>

```csharp
public string SchemaDefinitionInput { get; }
```

- *Type:* string

---

##### `SchemaDefinition`<sup>Required</sup> <a name="SchemaDefinition" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.property.schemaDefinition"></a>

```csharp
public string SchemaDefinition { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobufOutputReference.property.internalValue"></a>

```csharp
public EventarcPipelineInputPayloadFormatProtobuf InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineInputPayloadFormatProtobuf">EventarcPipelineInputPayloadFormatProtobuf</a>

---


### EventarcPipelineLoggingConfigOutputReference <a name="EventarcPipelineLoggingConfigOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcPipelineLoggingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.resetLogSeverity">ResetLogSeverity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogSeverity` <a name="ResetLogSeverity" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.resetLogSeverity"></a>

```csharp
private void ResetLogSeverity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.property.logSeverityInput">LogSeverityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.property.logSeverity">LogSeverity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfig">EventarcPipelineLoggingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogSeverityInput`<sup>Optional</sup> <a name="LogSeverityInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.property.logSeverityInput"></a>

```csharp
public string LogSeverityInput { get; }
```

- *Type:* string

---

##### `LogSeverity`<sup>Required</sup> <a name="LogSeverity" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.property.logSeverity"></a>

```csharp
public string LogSeverity { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfigOutputReference.property.internalValue"></a>

```csharp
public EventarcPipelineLoggingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineLoggingConfig">EventarcPipelineLoggingConfig</a>

---


### EventarcPipelineMediationsList <a name="EventarcPipelineMediationsList" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcPipelineMediationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.get"></a>

```csharp
private EventarcPipelineMediationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventarcPipelineMediationsOutputReference <a name="EventarcPipelineMediationsOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcPipelineMediationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.putTransformation">PutTransformation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.resetTransformation">ResetTransformation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTransformation` <a name="PutTransformation" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.putTransformation"></a>

```csharp
private void PutTransformation(EventarcPipelineMediationsTransformation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.putTransformation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformation">EventarcPipelineMediationsTransformation</a>

---

##### `ResetTransformation` <a name="ResetTransformation" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.resetTransformation"></a>

```csharp
private void ResetTransformation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.property.transformation">Transformation</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference">EventarcPipelineMediationsTransformationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.property.transformationInput">TransformationInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformation">EventarcPipelineMediationsTransformation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Transformation`<sup>Required</sup> <a name="Transformation" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.property.transformation"></a>

```csharp
public EventarcPipelineMediationsTransformationOutputReference Transformation { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference">EventarcPipelineMediationsTransformationOutputReference</a>

---

##### `TransformationInput`<sup>Optional</sup> <a name="TransformationInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.property.transformationInput"></a>

```csharp
public EventarcPipelineMediationsTransformation TransformationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformation">EventarcPipelineMediationsTransformation</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### EventarcPipelineMediationsTransformationOutputReference <a name="EventarcPipelineMediationsTransformationOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcPipelineMediationsTransformationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.resetTransformationTemplate">ResetTransformationTemplate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTransformationTemplate` <a name="ResetTransformationTemplate" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.resetTransformationTemplate"></a>

```csharp
private void ResetTransformationTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.property.transformationTemplateInput">TransformationTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.property.transformationTemplate">TransformationTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformation">EventarcPipelineMediationsTransformation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TransformationTemplateInput`<sup>Optional</sup> <a name="TransformationTemplateInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.property.transformationTemplateInput"></a>

```csharp
public string TransformationTemplateInput { get; }
```

- *Type:* string

---

##### `TransformationTemplate`<sup>Required</sup> <a name="TransformationTemplate" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.property.transformationTemplate"></a>

```csharp
public string TransformationTemplate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformationOutputReference.property.internalValue"></a>

```csharp
public EventarcPipelineMediationsTransformation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineMediationsTransformation">EventarcPipelineMediationsTransformation</a>

---


### EventarcPipelineRetryPolicyOutputReference <a name="EventarcPipelineRetryPolicyOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcPipelineRetryPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.resetMaxAttempts">ResetMaxAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.resetMaxRetryDelay">ResetMaxRetryDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.resetMinRetryDelay">ResetMinRetryDelay</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxAttempts` <a name="ResetMaxAttempts" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.resetMaxAttempts"></a>

```csharp
private void ResetMaxAttempts()
```

##### `ResetMaxRetryDelay` <a name="ResetMaxRetryDelay" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.resetMaxRetryDelay"></a>

```csharp
private void ResetMaxRetryDelay()
```

##### `ResetMinRetryDelay` <a name="ResetMinRetryDelay" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.resetMinRetryDelay"></a>

```csharp
private void ResetMinRetryDelay()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.maxAttemptsInput">MaxAttemptsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.maxRetryDelayInput">MaxRetryDelayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.minRetryDelayInput">MinRetryDelayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.maxAttempts">MaxAttempts</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.maxRetryDelay">MaxRetryDelay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.minRetryDelay">MinRetryDelay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicy">EventarcPipelineRetryPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxAttemptsInput`<sup>Optional</sup> <a name="MaxAttemptsInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.maxAttemptsInput"></a>

```csharp
public double MaxAttemptsInput { get; }
```

- *Type:* double

---

##### `MaxRetryDelayInput`<sup>Optional</sup> <a name="MaxRetryDelayInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.maxRetryDelayInput"></a>

```csharp
public string MaxRetryDelayInput { get; }
```

- *Type:* string

---

##### `MinRetryDelayInput`<sup>Optional</sup> <a name="MinRetryDelayInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.minRetryDelayInput"></a>

```csharp
public string MinRetryDelayInput { get; }
```

- *Type:* string

---

##### `MaxAttempts`<sup>Required</sup> <a name="MaxAttempts" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.maxAttempts"></a>

```csharp
public double MaxAttempts { get; }
```

- *Type:* double

---

##### `MaxRetryDelay`<sup>Required</sup> <a name="MaxRetryDelay" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.maxRetryDelay"></a>

```csharp
public string MaxRetryDelay { get; }
```

- *Type:* string

---

##### `MinRetryDelay`<sup>Required</sup> <a name="MinRetryDelay" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.minRetryDelay"></a>

```csharp
public string MinRetryDelay { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicyOutputReference.property.internalValue"></a>

```csharp
public EventarcPipelineRetryPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineRetryPolicy">EventarcPipelineRetryPolicy</a>

---


### EventarcPipelineTimeoutsOutputReference <a name="EventarcPipelineTimeoutsOutputReference" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new EventarcPipelineTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.eventarcPipeline.EventarcPipelineTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



