# `cloudQuotasQuotaPreference` Submodule <a name="`cloudQuotasQuotaPreference` Submodule" id="@cdktf/provider-google.cloudQuotasQuotaPreference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudQuotasQuotaPreference <a name="CloudQuotasQuotaPreference" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/cloud_quotas_quota_preference google_cloud_quotas_quota_preference}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudQuotasQuotaPreference(Construct Scope, string Id, CloudQuotasQuotaPreferenceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig">CloudQuotasQuotaPreferenceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig">CloudQuotasQuotaPreferenceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.putQuotaConfig">PutQuotaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetContactEmail">ResetContactEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetDimensions">ResetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetIgnoreSafetyChecks">ResetIgnoreSafetyChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetJustification">ResetJustification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetParent">ResetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetQuotaId">ResetQuotaId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetService">ResetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutQuotaConfig` <a name="PutQuotaConfig" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.putQuotaConfig"></a>

```csharp
private void PutQuotaConfig(CloudQuotasQuotaPreferenceQuotaConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.putQuotaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig">CloudQuotasQuotaPreferenceQuotaConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.putTimeouts"></a>

```csharp
private void PutTimeouts(CloudQuotasQuotaPreferenceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts">CloudQuotasQuotaPreferenceTimeouts</a>

---

##### `ResetContactEmail` <a name="ResetContactEmail" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetContactEmail"></a>

```csharp
private void ResetContactEmail()
```

##### `ResetDimensions` <a name="ResetDimensions" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetDimensions"></a>

```csharp
private void ResetDimensions()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIgnoreSafetyChecks` <a name="ResetIgnoreSafetyChecks" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetIgnoreSafetyChecks"></a>

```csharp
private void ResetIgnoreSafetyChecks()
```

##### `ResetJustification` <a name="ResetJustification" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetJustification"></a>

```csharp
private void ResetJustification()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetParent` <a name="ResetParent" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetParent"></a>

```csharp
private void ResetParent()
```

##### `ResetQuotaId` <a name="ResetQuotaId" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetQuotaId"></a>

```csharp
private void ResetQuotaId()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetService"></a>

```csharp
private void ResetService()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudQuotasQuotaPreference resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CloudQuotasQuotaPreference.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CloudQuotasQuotaPreference.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CloudQuotasQuotaPreference.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CloudQuotasQuotaPreference.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CloudQuotasQuotaPreference resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudQuotasQuotaPreference to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudQuotasQuotaPreference that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/cloud_quotas_quota_preference#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CloudQuotasQuotaPreference to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.quotaConfig">QuotaConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference">CloudQuotasQuotaPreferenceQuotaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.reconciling">Reconciling</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference">CloudQuotasQuotaPreferenceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.contactEmailInput">ContactEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.dimensionsInput">DimensionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.ignoreSafetyChecksInput">IgnoreSafetyChecksInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.justificationInput">JustificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.quotaConfigInput">QuotaConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig">CloudQuotasQuotaPreferenceQuotaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.quotaIdInput">QuotaIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.contactEmail">ContactEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.dimensions">Dimensions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.ignoreSafetyChecks">IgnoreSafetyChecks</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.justification">Justification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.quotaId">QuotaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.service">Service</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `QuotaConfig`<sup>Required</sup> <a name="QuotaConfig" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.quotaConfig"></a>

```csharp
public CloudQuotasQuotaPreferenceQuotaConfigOutputReference QuotaConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference">CloudQuotasQuotaPreferenceQuotaConfigOutputReference</a>

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.reconciling"></a>

```csharp
public IResolvable Reconciling { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.timeouts"></a>

```csharp
public CloudQuotasQuotaPreferenceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference">CloudQuotasQuotaPreferenceTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `ContactEmailInput`<sup>Optional</sup> <a name="ContactEmailInput" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.contactEmailInput"></a>

```csharp
public string ContactEmailInput { get; }
```

- *Type:* string

---

##### `DimensionsInput`<sup>Optional</sup> <a name="DimensionsInput" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.dimensionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DimensionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IgnoreSafetyChecksInput`<sup>Optional</sup> <a name="IgnoreSafetyChecksInput" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.ignoreSafetyChecksInput"></a>

```csharp
public string IgnoreSafetyChecksInput { get; }
```

- *Type:* string

---

##### `JustificationInput`<sup>Optional</sup> <a name="JustificationInput" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.justificationInput"></a>

```csharp
public string JustificationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `QuotaConfigInput`<sup>Optional</sup> <a name="QuotaConfigInput" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.quotaConfigInput"></a>

```csharp
public CloudQuotasQuotaPreferenceQuotaConfig QuotaConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig">CloudQuotasQuotaPreferenceQuotaConfig</a>

---

##### `QuotaIdInput`<sup>Optional</sup> <a name="QuotaIdInput" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.quotaIdInput"></a>

```csharp
public string QuotaIdInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ContactEmail`<sup>Required</sup> <a name="ContactEmail" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.contactEmail"></a>

```csharp
public string ContactEmail { get; }
```

- *Type:* string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.dimensions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Dimensions { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IgnoreSafetyChecks`<sup>Required</sup> <a name="IgnoreSafetyChecks" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.ignoreSafetyChecks"></a>

```csharp
public string IgnoreSafetyChecks { get; }
```

- *Type:* string

---

##### `Justification`<sup>Required</sup> <a name="Justification" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.justification"></a>

```csharp
public string Justification { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `QuotaId`<sup>Required</sup> <a name="QuotaId" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.quotaId"></a>

```csharp
public string QuotaId { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudQuotasQuotaPreferenceConfig <a name="CloudQuotasQuotaPreferenceConfig" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudQuotasQuotaPreferenceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    CloudQuotasQuotaPreferenceQuotaConfig QuotaConfig,
    string ContactEmail = null,
    System.Collections.Generic.IDictionary<string, string> Dimensions = null,
    string Id = null,
    string IgnoreSafetyChecks = null,
    string Justification = null,
    string Name = null,
    string Parent = null,
    string QuotaId = null,
    string Service = null,
    CloudQuotasQuotaPreferenceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.quotaConfig">QuotaConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig">CloudQuotasQuotaPreferenceQuotaConfig</a></code> | quota_config block. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.contactEmail">ContactEmail</a></code> | <code>string</code> | An email address that can be used for quota related communication between the Google Cloud and the user in case the Google Cloud needs further information to make a decision on whether the user preferred quota can be granted. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.dimensions">Dimensions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The dimensions that this quota preference applies to. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/cloud_quotas_quota_preference#id CloudQuotasQuotaPreference#id}. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.ignoreSafetyChecks">IgnoreSafetyChecks</a></code> | <code>string</code> | The list of quota safety checks to be ignored. Default value: "QUOTA_SAFETY_CHECK_UNSPECIFIED" Possible values: ["QUOTA_SAFETY_CHECK_UNSPECIFIED", "QUOTA_DECREASE_BELOW_USAGE", "QUOTA_DECREASE_PERCENTAGE_TOO_HIGH"]. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.justification">Justification</a></code> | <code>string</code> | The reason / justification for this quota preference. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.name">Name</a></code> | <code>string</code> | The resource name of the quota preference. Required except in the CREATE requests. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.parent">Parent</a></code> | <code>string</code> | The parent of the quota preference. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.quotaId">QuotaId</a></code> | <code>string</code> | The id of the quota to which the quota preference is applied. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.service">Service</a></code> | <code>string</code> | The name of the service to which the quota preference is applied. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts">CloudQuotasQuotaPreferenceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `QuotaConfig`<sup>Required</sup> <a name="QuotaConfig" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.quotaConfig"></a>

```csharp
public CloudQuotasQuotaPreferenceQuotaConfig QuotaConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig">CloudQuotasQuotaPreferenceQuotaConfig</a>

quota_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/cloud_quotas_quota_preference#quota_config CloudQuotasQuotaPreference#quota_config}

---

##### `ContactEmail`<sup>Optional</sup> <a name="ContactEmail" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.contactEmail"></a>

```csharp
public string ContactEmail { get; set; }
```

- *Type:* string

An email address that can be used for quota related communication between the Google Cloud and the user in case the Google Cloud needs further information to make a decision on whether the user preferred quota can be granted.

The Google account for the email address must have quota update permission for the project, folder or organization this quota preference is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/cloud_quotas_quota_preference#contact_email CloudQuotasQuotaPreference#contact_email}

---

##### `Dimensions`<sup>Optional</sup> <a name="Dimensions" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.dimensions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Dimensions { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The dimensions that this quota preference applies to.

The key of the map entry is the name of a dimension, such as "region", "zone", "network_id", and the value of the map entry is the dimension value. If a dimension is missing from the map of dimensions, the quota preference applies to all the dimension values except for those that have other quota preferences configured for the specific value.

NOTE: QuotaPreferences can only be applied across all values of "user" and "resource" dimension. Do not set values for "user" or "resource" in the dimension map.

Example: '{"provider": "Foo Inc"}' where "provider" is a service specific dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/cloud_quotas_quota_preference#dimensions CloudQuotasQuotaPreference#dimensions}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/cloud_quotas_quota_preference#id CloudQuotasQuotaPreference#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreSafetyChecks`<sup>Optional</sup> <a name="IgnoreSafetyChecks" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.ignoreSafetyChecks"></a>

```csharp
public string IgnoreSafetyChecks { get; set; }
```

- *Type:* string

The list of quota safety checks to be ignored. Default value: "QUOTA_SAFETY_CHECK_UNSPECIFIED" Possible values: ["QUOTA_SAFETY_CHECK_UNSPECIFIED", "QUOTA_DECREASE_BELOW_USAGE", "QUOTA_DECREASE_PERCENTAGE_TOO_HIGH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/cloud_quotas_quota_preference#ignore_safety_checks CloudQuotasQuotaPreference#ignore_safety_checks}

---

##### `Justification`<sup>Optional</sup> <a name="Justification" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.justification"></a>

```csharp
public string Justification { get; set; }
```

- *Type:* string

The reason / justification for this quota preference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/cloud_quotas_quota_preference#justification CloudQuotasQuotaPreference#justification}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The resource name of the quota preference. Required except in the CREATE requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/cloud_quotas_quota_preference#name CloudQuotasQuotaPreference#name}

---

##### `Parent`<sup>Optional</sup> <a name="Parent" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

The parent of the quota preference.

Allowed parents are "projects/[project-id / number]" or "folders/[folder-id / number]" or "organizations/[org-id / number]".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/cloud_quotas_quota_preference#parent CloudQuotasQuotaPreference#parent}

---

##### `QuotaId`<sup>Optional</sup> <a name="QuotaId" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.quotaId"></a>

```csharp
public string QuotaId { get; set; }
```

- *Type:* string

The id of the quota to which the quota preference is applied.

A quota id is unique in the service.
Example: 'CPUS-per-project-region'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/cloud_quotas_quota_preference#quota_id CloudQuotasQuotaPreference#quota_id}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

The name of the service to which the quota preference is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/cloud_quotas_quota_preference#service CloudQuotasQuotaPreference#service}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.timeouts"></a>

```csharp
public CloudQuotasQuotaPreferenceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts">CloudQuotasQuotaPreferenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/cloud_quotas_quota_preference#timeouts CloudQuotasQuotaPreference#timeouts}

---

### CloudQuotasQuotaPreferenceQuotaConfig <a name="CloudQuotasQuotaPreferenceQuotaConfig" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudQuotasQuotaPreferenceQuotaConfig {
    string PreferredValue,
    System.Collections.Generic.IDictionary<string, string> Annotations = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig.property.preferredValue">PreferredValue</a></code> | <code>string</code> | The preferred value. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The annotations map for clients to store small amounts of arbitrary data. |

---

##### `PreferredValue`<sup>Required</sup> <a name="PreferredValue" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig.property.preferredValue"></a>

```csharp
public string PreferredValue { get; set; }
```

- *Type:* string

The preferred value.

Must be greater than or equal to -1. If set to -1, it means the value is "unlimited".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/cloud_quotas_quota_preference#preferred_value CloudQuotasQuotaPreference#preferred_value}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The annotations map for clients to store small amounts of arbitrary data.

Do not put PII or other sensitive information here. See https://google.aip.dev/128#annotations.

An object containing a list of "key: value" pairs. Example: '{ "name": "wrench", "mass": "1.3kg", "count": "3" }'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/cloud_quotas_quota_preference#annotations CloudQuotasQuotaPreference#annotations}

---

### CloudQuotasQuotaPreferenceTimeouts <a name="CloudQuotasQuotaPreferenceTimeouts" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudQuotasQuotaPreferenceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/cloud_quotas_quota_preference#create CloudQuotasQuotaPreference#create}. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/cloud_quotas_quota_preference#delete CloudQuotasQuotaPreference#delete}. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/cloud_quotas_quota_preference#update CloudQuotasQuotaPreference#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/cloud_quotas_quota_preference#create CloudQuotasQuotaPreference#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/cloud_quotas_quota_preference#delete CloudQuotasQuotaPreference#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/cloud_quotas_quota_preference#update CloudQuotasQuotaPreference#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudQuotasQuotaPreferenceQuotaConfigOutputReference <a name="CloudQuotasQuotaPreferenceQuotaConfigOutputReference" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudQuotasQuotaPreferenceQuotaConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.grantedValue">GrantedValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.requestOrigin">RequestOrigin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.stateDetail">StateDetail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.traceId">TraceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.preferredValueInput">PreferredValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.preferredValue">PreferredValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig">CloudQuotasQuotaPreferenceQuotaConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GrantedValue`<sup>Required</sup> <a name="GrantedValue" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.grantedValue"></a>

```csharp
public string GrantedValue { get; }
```

- *Type:* string

---

##### `RequestOrigin`<sup>Required</sup> <a name="RequestOrigin" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.requestOrigin"></a>

```csharp
public string RequestOrigin { get; }
```

- *Type:* string

---

##### `StateDetail`<sup>Required</sup> <a name="StateDetail" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.stateDetail"></a>

```csharp
public string StateDetail { get; }
```

- *Type:* string

---

##### `TraceId`<sup>Required</sup> <a name="TraceId" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.traceId"></a>

```csharp
public string TraceId { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PreferredValueInput`<sup>Optional</sup> <a name="PreferredValueInput" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.preferredValueInput"></a>

```csharp
public string PreferredValueInput { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PreferredValue`<sup>Required</sup> <a name="PreferredValue" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.preferredValue"></a>

```csharp
public string PreferredValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.internalValue"></a>

```csharp
public CloudQuotasQuotaPreferenceQuotaConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig">CloudQuotasQuotaPreferenceQuotaConfig</a>

---


### CloudQuotasQuotaPreferenceTimeoutsOutputReference <a name="CloudQuotasQuotaPreferenceTimeoutsOutputReference" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudQuotasQuotaPreferenceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



