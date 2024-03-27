# `healthcareHl7V2Store` Submodule <a name="`healthcareHl7V2Store` Submodule" id="@cdktf/provider-google.healthcareHl7V2Store"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthcareHl7V2Store <a name="HealthcareHl7V2Store" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/healthcare_hl7_v2_store google_healthcare_hl7_v2_store}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcareHl7V2Store(Construct Scope, string Id, HealthcareHl7V2StoreConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig">HealthcareHl7V2StoreConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig">HealthcareHl7V2StoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putNotificationConfig">PutNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putNotificationConfigs">PutNotificationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putParserConfig">PutParserConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetNotificationConfig">ResetNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetNotificationConfigs">ResetNotificationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetParserConfig">ResetParserConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetRejectDuplicateMessage">ResetRejectDuplicateMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNotificationConfig` <a name="PutNotificationConfig" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putNotificationConfig"></a>

```csharp
private void PutNotificationConfig(HealthcareHl7V2StoreNotificationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putNotificationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig">HealthcareHl7V2StoreNotificationConfig</a>

---

##### `PutNotificationConfigs` <a name="PutNotificationConfigs" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putNotificationConfigs"></a>

```csharp
private void PutNotificationConfigs(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putNotificationConfigs.parameter.value"></a>

- *Type:* object

---

##### `PutParserConfig` <a name="PutParserConfig" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putParserConfig"></a>

```csharp
private void PutParserConfig(HealthcareHl7V2StoreParserConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putParserConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig">HealthcareHl7V2StoreParserConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putTimeouts"></a>

```csharp
private void PutTimeouts(HealthcareHl7V2StoreTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts">HealthcareHl7V2StoreTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetNotificationConfig` <a name="ResetNotificationConfig" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetNotificationConfig"></a>

```csharp
private void ResetNotificationConfig()
```

##### `ResetNotificationConfigs` <a name="ResetNotificationConfigs" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetNotificationConfigs"></a>

```csharp
private void ResetNotificationConfigs()
```

##### `ResetParserConfig` <a name="ResetParserConfig" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetParserConfig"></a>

```csharp
private void ResetParserConfig()
```

##### `ResetRejectDuplicateMessage` <a name="ResetRejectDuplicateMessage" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetRejectDuplicateMessage"></a>

```csharp
private void ResetRejectDuplicateMessage()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a HealthcareHl7V2Store resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

HealthcareHl7V2Store.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

HealthcareHl7V2Store.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

HealthcareHl7V2Store.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

HealthcareHl7V2Store.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a HealthcareHl7V2Store resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HealthcareHl7V2Store to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HealthcareHl7V2Store that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/healthcare_hl7_v2_store#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the HealthcareHl7V2Store to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.notificationConfig">NotificationConfig</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference">HealthcareHl7V2StoreNotificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.notificationConfigs">NotificationConfigs</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList">HealthcareHl7V2StoreNotificationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.parserConfig">ParserConfig</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference">HealthcareHl7V2StoreParserConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference">HealthcareHl7V2StoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.datasetInput">DatasetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.notificationConfigInput">NotificationConfigInput</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig">HealthcareHl7V2StoreNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.notificationConfigsInput">NotificationConfigsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.parserConfigInput">ParserConfigInput</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig">HealthcareHl7V2StoreParserConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.rejectDuplicateMessageInput">RejectDuplicateMessageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.dataset">Dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.rejectDuplicateMessage">RejectDuplicateMessage</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `NotificationConfig`<sup>Required</sup> <a name="NotificationConfig" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.notificationConfig"></a>

```csharp
public HealthcareHl7V2StoreNotificationConfigOutputReference NotificationConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference">HealthcareHl7V2StoreNotificationConfigOutputReference</a>

---

##### `NotificationConfigs`<sup>Required</sup> <a name="NotificationConfigs" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.notificationConfigs"></a>

```csharp
public HealthcareHl7V2StoreNotificationConfigsList NotificationConfigs { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList">HealthcareHl7V2StoreNotificationConfigsList</a>

---

##### `ParserConfig`<sup>Required</sup> <a name="ParserConfig" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.parserConfig"></a>

```csharp
public HealthcareHl7V2StoreParserConfigOutputReference ParserConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference">HealthcareHl7V2StoreParserConfigOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.timeouts"></a>

```csharp
public HealthcareHl7V2StoreTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference">HealthcareHl7V2StoreTimeoutsOutputReference</a>

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.datasetInput"></a>

```csharp
public string DatasetInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NotificationConfigInput`<sup>Optional</sup> <a name="NotificationConfigInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.notificationConfigInput"></a>

```csharp
public HealthcareHl7V2StoreNotificationConfig NotificationConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig">HealthcareHl7V2StoreNotificationConfig</a>

---

##### `NotificationConfigsInput`<sup>Optional</sup> <a name="NotificationConfigsInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.notificationConfigsInput"></a>

```csharp
public object NotificationConfigsInput { get; }
```

- *Type:* object

---

##### `ParserConfigInput`<sup>Optional</sup> <a name="ParserConfigInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.parserConfigInput"></a>

```csharp
public HealthcareHl7V2StoreParserConfig ParserConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig">HealthcareHl7V2StoreParserConfig</a>

---

##### `RejectDuplicateMessageInput`<sup>Optional</sup> <a name="RejectDuplicateMessageInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.rejectDuplicateMessageInput"></a>

```csharp
public object RejectDuplicateMessageInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.dataset"></a>

```csharp
public string Dataset { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RejectDuplicateMessage`<sup>Required</sup> <a name="RejectDuplicateMessage" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.rejectDuplicateMessage"></a>

```csharp
public object RejectDuplicateMessage { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HealthcareHl7V2StoreConfig <a name="HealthcareHl7V2StoreConfig" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcareHl7V2StoreConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Dataset,
    string Name,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    HealthcareHl7V2StoreNotificationConfig NotificationConfig = null,
    object NotificationConfigs = null,
    HealthcareHl7V2StoreParserConfig ParserConfig = null,
    object RejectDuplicateMessage = null,
    HealthcareHl7V2StoreTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.dataset">Dataset</a></code> | <code>string</code> | Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.name">Name</a></code> | <code>string</code> | The resource name for the Hl7V2Store. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/healthcare_hl7_v2_store#id HealthcareHl7V2Store#id}. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | User-supplied key-value pairs used to organize HL7v2 stores. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.notificationConfig">NotificationConfig</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig">HealthcareHl7V2StoreNotificationConfig</a></code> | notification_config block. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.notificationConfigs">NotificationConfigs</a></code> | <code>object</code> | notification_configs block. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.parserConfig">ParserConfig</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig">HealthcareHl7V2StoreParserConfig</a></code> | parser_config block. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.rejectDuplicateMessage">RejectDuplicateMessage</a></code> | <code>object</code> | Determines whether duplicate messages are allowed. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts">HealthcareHl7V2StoreTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.dataset"></a>

```csharp
public string Dataset { get; set; }
```

- *Type:* string

Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/healthcare_hl7_v2_store#dataset HealthcareHl7V2Store#dataset}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The resource name for the Hl7V2Store.

** Changing this property may recreate the Hl7v2 store (removing all data) **

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/healthcare_hl7_v2_store#name HealthcareHl7V2Store#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/healthcare_hl7_v2_store#id HealthcareHl7V2Store#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

User-supplied key-value pairs used to organize HL7v2 stores.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must
conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128
bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be associated with a given store.

An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/healthcare_hl7_v2_store#labels HealthcareHl7V2Store#labels}

---

##### `NotificationConfig`<sup>Optional</sup> <a name="NotificationConfig" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.notificationConfig"></a>

```csharp
public HealthcareHl7V2StoreNotificationConfig NotificationConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig">HealthcareHl7V2StoreNotificationConfig</a>

notification_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/healthcare_hl7_v2_store#notification_config HealthcareHl7V2Store#notification_config}

---

##### `NotificationConfigs`<sup>Optional</sup> <a name="NotificationConfigs" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.notificationConfigs"></a>

```csharp
public object NotificationConfigs { get; set; }
```

- *Type:* object

notification_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/healthcare_hl7_v2_store#notification_configs HealthcareHl7V2Store#notification_configs}

---

##### `ParserConfig`<sup>Optional</sup> <a name="ParserConfig" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.parserConfig"></a>

```csharp
public HealthcareHl7V2StoreParserConfig ParserConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig">HealthcareHl7V2StoreParserConfig</a>

parser_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/healthcare_hl7_v2_store#parser_config HealthcareHl7V2Store#parser_config}

---

##### `RejectDuplicateMessage`<sup>Optional</sup> <a name="RejectDuplicateMessage" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.rejectDuplicateMessage"></a>

```csharp
public object RejectDuplicateMessage { get; set; }
```

- *Type:* object

Determines whether duplicate messages are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/healthcare_hl7_v2_store#reject_duplicate_message HealthcareHl7V2Store#reject_duplicate_message}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.timeouts"></a>

```csharp
public HealthcareHl7V2StoreTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts">HealthcareHl7V2StoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/healthcare_hl7_v2_store#timeouts HealthcareHl7V2Store#timeouts}

---

### HealthcareHl7V2StoreNotificationConfig <a name="HealthcareHl7V2StoreNotificationConfig" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcareHl7V2StoreNotificationConfig {
    string PubsubTopic
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig.property.pubsubTopic">PubsubTopic</a></code> | <code>string</code> | The Cloud Pub/Sub topic that notifications of changes are published on. |

---

##### `PubsubTopic`<sup>Required</sup> <a name="PubsubTopic" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig.property.pubsubTopic"></a>

```csharp
public string PubsubTopic { get; set; }
```

- *Type:* string

The Cloud Pub/Sub topic that notifications of changes are published on.

Supplied by the client.
PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.
It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message
was published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a
project. service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com must have publisher permissions on the given
Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/healthcare_hl7_v2_store#pubsub_topic HealthcareHl7V2Store#pubsub_topic}

---

### HealthcareHl7V2StoreNotificationConfigs <a name="HealthcareHl7V2StoreNotificationConfigs" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcareHl7V2StoreNotificationConfigs {
    string PubsubTopic,
    string Filter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs.property.pubsubTopic">PubsubTopic</a></code> | <code>string</code> | The Cloud Pub/Sub topic that notifications of changes are published on. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs.property.filter">Filter</a></code> | <code>string</code> | Restricts notifications sent for messages matching a filter. If this is empty, all messages are matched. Syntax: https://cloud.google.com/appengine/docs/standard/python/search/query_strings. |

---

##### `PubsubTopic`<sup>Required</sup> <a name="PubsubTopic" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs.property.pubsubTopic"></a>

```csharp
public string PubsubTopic { get; set; }
```

- *Type:* string

The Cloud Pub/Sub topic that notifications of changes are published on.

Supplied by the client.
PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.
It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message
was published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a
project. service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com must have publisher permissions on the given
Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail.

If a notification cannot be published to Cloud Pub/Sub, errors will be logged to Stackdriver

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/healthcare_hl7_v2_store#pubsub_topic HealthcareHl7V2Store#pubsub_topic}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

Restricts notifications sent for messages matching a filter. If this is empty, all messages are matched. Syntax: https://cloud.google.com/appengine/docs/standard/python/search/query_strings.

Fields/functions available for filtering are:

* messageType, from the MSH-9.1 field. For example, NOT messageType = "ADT".
* send_date or sendDate, the YYYY-MM-DD date the message was sent in the dataset's timeZone, from the MSH-7 segment. For example, send_date < "2017-01-02".
* sendTime, the timestamp when the message was sent, using the RFC3339 time format for comparisons, from the MSH-7 segment. For example, sendTime < "2017-01-02T00:00:00-05:00".
* sendFacility, the care center that the message came from, from the MSH-4 segment. For example, sendFacility = "ABC".
* PatientId(value, type), which matches if the message lists a patient having an ID of the given value and type in the PID-2, PID-3, or PID-4 segments. For example, PatientId("123456", "MRN").
* labels.x, a string value of the label with key x as set using the Message.labels map. For example, labels."priority"="high". The operator :* can be used to assert the existence of a label. For example, labels."priority":*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/healthcare_hl7_v2_store#filter HealthcareHl7V2Store#filter}

---

### HealthcareHl7V2StoreParserConfig <a name="HealthcareHl7V2StoreParserConfig" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcareHl7V2StoreParserConfig {
    object AllowNullHeader = null,
    string Schema = null,
    string SegmentTerminator = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig.property.allowNullHeader">AllowNullHeader</a></code> | <code>object</code> | Determines whether messages with no header are allowed. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig.property.schema">Schema</a></code> | <code>string</code> | JSON encoded string for schemas used to parse messages in this store if schematized parsing is desired. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig.property.segmentTerminator">SegmentTerminator</a></code> | <code>string</code> | Byte(s) to be used as the segment terminator. If this is unset, '\r' will be used as segment terminator. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig.property.version">Version</a></code> | <code>string</code> | The version of the unschematized parser to be used when a custom 'schema' is not set. |

---

##### `AllowNullHeader`<sup>Optional</sup> <a name="AllowNullHeader" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig.property.allowNullHeader"></a>

```csharp
public object AllowNullHeader { get; set; }
```

- *Type:* object

Determines whether messages with no header are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/healthcare_hl7_v2_store#allow_null_header HealthcareHl7V2Store#allow_null_header}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

JSON encoded string for schemas used to parse messages in this store if schematized parsing is desired.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/healthcare_hl7_v2_store#schema HealthcareHl7V2Store#schema}

---

##### `SegmentTerminator`<sup>Optional</sup> <a name="SegmentTerminator" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig.property.segmentTerminator"></a>

```csharp
public string SegmentTerminator { get; set; }
```

- *Type:* string

Byte(s) to be used as the segment terminator. If this is unset, '\r' will be used as segment terminator.

A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/healthcare_hl7_v2_store#segment_terminator HealthcareHl7V2Store#segment_terminator}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

The version of the unschematized parser to be used when a custom 'schema' is not set.

Default value: "V1" Possible values: ["V1", "V2", "V3"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/healthcare_hl7_v2_store#version HealthcareHl7V2Store#version}

---

### HealthcareHl7V2StoreTimeouts <a name="HealthcareHl7V2StoreTimeouts" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcareHl7V2StoreTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/healthcare_hl7_v2_store#create HealthcareHl7V2Store#create}. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/healthcare_hl7_v2_store#delete HealthcareHl7V2Store#delete}. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/healthcare_hl7_v2_store#update HealthcareHl7V2Store#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/healthcare_hl7_v2_store#create HealthcareHl7V2Store#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/healthcare_hl7_v2_store#delete HealthcareHl7V2Store#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/healthcare_hl7_v2_store#update HealthcareHl7V2Store#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HealthcareHl7V2StoreNotificationConfigOutputReference <a name="HealthcareHl7V2StoreNotificationConfigOutputReference" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcareHl7V2StoreNotificationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.property.pubsubTopicInput">PubsubTopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.property.pubsubTopic">PubsubTopic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig">HealthcareHl7V2StoreNotificationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PubsubTopicInput`<sup>Optional</sup> <a name="PubsubTopicInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.property.pubsubTopicInput"></a>

```csharp
public string PubsubTopicInput { get; }
```

- *Type:* string

---

##### `PubsubTopic`<sup>Required</sup> <a name="PubsubTopic" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.property.pubsubTopic"></a>

```csharp
public string PubsubTopic { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.property.internalValue"></a>

```csharp
public HealthcareHl7V2StoreNotificationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig">HealthcareHl7V2StoreNotificationConfig</a>

---


### HealthcareHl7V2StoreNotificationConfigsList <a name="HealthcareHl7V2StoreNotificationConfigsList" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcareHl7V2StoreNotificationConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.get"></a>

```csharp
private HealthcareHl7V2StoreNotificationConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HealthcareHl7V2StoreNotificationConfigsOutputReference <a name="HealthcareHl7V2StoreNotificationConfigsOutputReference" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcareHl7V2StoreNotificationConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.resetFilter"></a>

```csharp
private void ResetFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.pubsubTopicInput">PubsubTopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.pubsubTopic">PubsubTopic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `PubsubTopicInput`<sup>Optional</sup> <a name="PubsubTopicInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.pubsubTopicInput"></a>

```csharp
public string PubsubTopicInput { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `PubsubTopic`<sup>Required</sup> <a name="PubsubTopic" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.pubsubTopic"></a>

```csharp
public string PubsubTopic { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### HealthcareHl7V2StoreParserConfigOutputReference <a name="HealthcareHl7V2StoreParserConfigOutputReference" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcareHl7V2StoreParserConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.resetAllowNullHeader">ResetAllowNullHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.resetSchema">ResetSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.resetSegmentTerminator">ResetSegmentTerminator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowNullHeader` <a name="ResetAllowNullHeader" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.resetAllowNullHeader"></a>

```csharp
private void ResetAllowNullHeader()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.resetSchema"></a>

```csharp
private void ResetSchema()
```

##### `ResetSegmentTerminator` <a name="ResetSegmentTerminator" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.resetSegmentTerminator"></a>

```csharp
private void ResetSegmentTerminator()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.allowNullHeaderInput">AllowNullHeaderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.segmentTerminatorInput">SegmentTerminatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.allowNullHeader">AllowNullHeader</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.segmentTerminator">SegmentTerminator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig">HealthcareHl7V2StoreParserConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowNullHeaderInput`<sup>Optional</sup> <a name="AllowNullHeaderInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.allowNullHeaderInput"></a>

```csharp
public object AllowNullHeaderInput { get; }
```

- *Type:* object

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `SegmentTerminatorInput`<sup>Optional</sup> <a name="SegmentTerminatorInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.segmentTerminatorInput"></a>

```csharp
public string SegmentTerminatorInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `AllowNullHeader`<sup>Required</sup> <a name="AllowNullHeader" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.allowNullHeader"></a>

```csharp
public object AllowNullHeader { get; }
```

- *Type:* object

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `SegmentTerminator`<sup>Required</sup> <a name="SegmentTerminator" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.segmentTerminator"></a>

```csharp
public string SegmentTerminator { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.internalValue"></a>

```csharp
public HealthcareHl7V2StoreParserConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig">HealthcareHl7V2StoreParserConfig</a>

---


### HealthcareHl7V2StoreTimeoutsOutputReference <a name="HealthcareHl7V2StoreTimeoutsOutputReference" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcareHl7V2StoreTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



