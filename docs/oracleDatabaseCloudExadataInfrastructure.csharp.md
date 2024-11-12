# `oracleDatabaseCloudExadataInfrastructure` Submodule <a name="`oracleDatabaseCloudExadataInfrastructure` Submodule" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleDatabaseCloudExadataInfrastructure <a name="OracleDatabaseCloudExadataInfrastructure" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/oracle_database_cloud_exadata_infrastructure google_oracle_database_cloud_exadata_infrastructure}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseCloudExadataInfrastructure(Construct Scope, string Id, OracleDatabaseCloudExadataInfrastructureConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig">OracleDatabaseCloudExadataInfrastructureConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig">OracleDatabaseCloudExadataInfrastructureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetGcpOracleZone">ResetGcpOracleZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProperties` <a name="PutProperties" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.putProperties"></a>

```csharp
private void PutProperties(OracleDatabaseCloudExadataInfrastructureProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties">OracleDatabaseCloudExadataInfrastructureProperties</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.putTimeouts"></a>

```csharp
private void PutTimeouts(OracleDatabaseCloudExadataInfrastructureTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeouts">OracleDatabaseCloudExadataInfrastructureTimeouts</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetGcpOracleZone` <a name="ResetGcpOracleZone" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetGcpOracleZone"></a>

```csharp
private void ResetGcpOracleZone()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetProperties"></a>

```csharp
private void ResetProperties()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OracleDatabaseCloudExadataInfrastructure resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

OracleDatabaseCloudExadataInfrastructure.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

OracleDatabaseCloudExadataInfrastructure.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

OracleDatabaseCloudExadataInfrastructure.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

OracleDatabaseCloudExadataInfrastructure.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OracleDatabaseCloudExadataInfrastructure resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OracleDatabaseCloudExadataInfrastructure to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OracleDatabaseCloudExadataInfrastructure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/oracle_database_cloud_exadata_infrastructure#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OracleDatabaseCloudExadataInfrastructure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.entitlementId">EntitlementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference">OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference">OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.cloudExadataInfrastructureIdInput">CloudExadataInfrastructureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.gcpOracleZoneInput">GcpOracleZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.propertiesInput">PropertiesInput</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties">OracleDatabaseCloudExadataInfrastructureProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.cloudExadataInfrastructureId">CloudExadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.gcpOracleZone">GcpOracleZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EntitlementId`<sup>Required</sup> <a name="EntitlementId" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.entitlementId"></a>

```csharp
public string EntitlementId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.properties"></a>

```csharp
public OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference Properties { get; }
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference">OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.timeouts"></a>

```csharp
public OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference">OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference</a>

---

##### `CloudExadataInfrastructureIdInput`<sup>Optional</sup> <a name="CloudExadataInfrastructureIdInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.cloudExadataInfrastructureIdInput"></a>

```csharp
public string CloudExadataInfrastructureIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `GcpOracleZoneInput`<sup>Optional</sup> <a name="GcpOracleZoneInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.gcpOracleZoneInput"></a>

```csharp
public string GcpOracleZoneInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.propertiesInput"></a>

```csharp
public OracleDatabaseCloudExadataInfrastructureProperties PropertiesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties">OracleDatabaseCloudExadataInfrastructureProperties</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CloudExadataInfrastructureId`<sup>Required</sup> <a name="CloudExadataInfrastructureId" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.cloudExadataInfrastructureId"></a>

```csharp
public string CloudExadataInfrastructureId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `GcpOracleZone`<sup>Required</sup> <a name="GcpOracleZone" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.gcpOracleZone"></a>

```csharp
public string GcpOracleZone { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructure.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OracleDatabaseCloudExadataInfrastructureConfig <a name="OracleDatabaseCloudExadataInfrastructureConfig" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseCloudExadataInfrastructureConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CloudExadataInfrastructureId,
    string Location,
    string DisplayName = null,
    string GcpOracleZone = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    OracleDatabaseCloudExadataInfrastructureProperties Properties = null,
    OracleDatabaseCloudExadataInfrastructureTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.cloudExadataInfrastructureId">CloudExadataInfrastructureId</a></code> | <code>string</code> | The ID of the Exadata Infrastructure to create. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/DbServer'. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.displayName">DisplayName</a></code> | <code>string</code> | User friendly name for this resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.gcpOracleZone">GcpOracleZone</a></code> | <code>string</code> | GCP location where Oracle Exadata is hosted. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/oracle_database_cloud_exadata_infrastructure#id OracleDatabaseCloudExadataInfrastructure#id}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels or tags associated with the resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/oracle_database_cloud_exadata_infrastructure#project OracleDatabaseCloudExadataInfrastructure#project}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties">OracleDatabaseCloudExadataInfrastructureProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeouts">OracleDatabaseCloudExadataInfrastructureTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CloudExadataInfrastructureId`<sup>Required</sup> <a name="CloudExadataInfrastructureId" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.cloudExadataInfrastructureId"></a>

```csharp
public string CloudExadataInfrastructureId { get; set; }
```

- *Type:* string

The ID of the Exadata Infrastructure to create.

This value is restricted
to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/oracle_database_cloud_exadata_infrastructure#cloud_exadata_infrastructure_id OracleDatabaseCloudExadataInfrastructure#cloud_exadata_infrastructure_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/DbServer'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/oracle_database_cloud_exadata_infrastructure#location OracleDatabaseCloudExadataInfrastructure#location}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

User friendly name for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/oracle_database_cloud_exadata_infrastructure#display_name OracleDatabaseCloudExadataInfrastructure#display_name}

---

##### `GcpOracleZone`<sup>Optional</sup> <a name="GcpOracleZone" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.gcpOracleZone"></a>

```csharp
public string GcpOracleZone { get; set; }
```

- *Type:* string

GCP location where Oracle Exadata is hosted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/oracle_database_cloud_exadata_infrastructure#gcp_oracle_zone OracleDatabaseCloudExadataInfrastructure#gcp_oracle_zone}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/oracle_database_cloud_exadata_infrastructure#id OracleDatabaseCloudExadataInfrastructure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels or tags associated with the resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/oracle_database_cloud_exadata_infrastructure#labels OracleDatabaseCloudExadataInfrastructure#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/oracle_database_cloud_exadata_infrastructure#project OracleDatabaseCloudExadataInfrastructure#project}.

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.properties"></a>

```csharp
public OracleDatabaseCloudExadataInfrastructureProperties Properties { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties">OracleDatabaseCloudExadataInfrastructureProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/oracle_database_cloud_exadata_infrastructure#properties OracleDatabaseCloudExadataInfrastructure#properties}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureConfig.property.timeouts"></a>

```csharp
public OracleDatabaseCloudExadataInfrastructureTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeouts">OracleDatabaseCloudExadataInfrastructureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/oracle_database_cloud_exadata_infrastructure#timeouts OracleDatabaseCloudExadataInfrastructure#timeouts}

---

### OracleDatabaseCloudExadataInfrastructureProperties <a name="OracleDatabaseCloudExadataInfrastructureProperties" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseCloudExadataInfrastructureProperties {
    string Shape,
    double ComputeCount = null,
    object CustomerContacts = null,
    OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow MaintenanceWindow = null,
    double StorageCount = null,
    double TotalStorageSizeGb = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties.property.shape">Shape</a></code> | <code>string</code> | The shape of the Exadata Infrastructure. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties.property.computeCount">ComputeCount</a></code> | <code>double</code> | The number of compute servers for the Exadata Infrastructure. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties.property.customerContacts">CustomerContacts</a></code> | <code>object</code> | customer_contacts block. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow">OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties.property.storageCount">StorageCount</a></code> | <code>double</code> | The number of Cloud Exadata storage servers for the Exadata Infrastructure. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties.property.totalStorageSizeGb">TotalStorageSizeGb</a></code> | <code>double</code> | The total storage allocated to the Exadata Infrastructure resource, in gigabytes (GB). |

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties.property.shape"></a>

```csharp
public string Shape { get; set; }
```

- *Type:* string

The shape of the Exadata Infrastructure.

The shape determines the
amount of CPU, storage, and memory resources allocated to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/oracle_database_cloud_exadata_infrastructure#shape OracleDatabaseCloudExadataInfrastructure#shape}

---

##### `ComputeCount`<sup>Optional</sup> <a name="ComputeCount" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties.property.computeCount"></a>

```csharp
public double ComputeCount { get; set; }
```

- *Type:* double

The number of compute servers for the Exadata Infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/oracle_database_cloud_exadata_infrastructure#compute_count OracleDatabaseCloudExadataInfrastructure#compute_count}

---

##### `CustomerContacts`<sup>Optional</sup> <a name="CustomerContacts" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties.property.customerContacts"></a>

```csharp
public object CustomerContacts { get; set; }
```

- *Type:* object

customer_contacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/oracle_database_cloud_exadata_infrastructure#customer_contacts OracleDatabaseCloudExadataInfrastructure#customer_contacts}

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties.property.maintenanceWindow"></a>

```csharp
public OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow MaintenanceWindow { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow">OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/oracle_database_cloud_exadata_infrastructure#maintenance_window OracleDatabaseCloudExadataInfrastructure#maintenance_window}

---

##### `StorageCount`<sup>Optional</sup> <a name="StorageCount" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties.property.storageCount"></a>

```csharp
public double StorageCount { get; set; }
```

- *Type:* double

The number of Cloud Exadata storage servers for the Exadata Infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/oracle_database_cloud_exadata_infrastructure#storage_count OracleDatabaseCloudExadataInfrastructure#storage_count}

---

##### `TotalStorageSizeGb`<sup>Optional</sup> <a name="TotalStorageSizeGb" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties.property.totalStorageSizeGb"></a>

```csharp
public double TotalStorageSizeGb { get; set; }
```

- *Type:* double

The total storage allocated to the Exadata Infrastructure resource, in gigabytes (GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/oracle_database_cloud_exadata_infrastructure#total_storage_size_gb OracleDatabaseCloudExadataInfrastructure#total_storage_size_gb}

---

### OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts <a name="OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts {
    string Email
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts.property.email">Email</a></code> | <code>string</code> | The email address used by Oracle to send notifications regarding databases and infrastructure. |

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContacts.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

The email address used by Oracle to send notifications regarding databases and infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/oracle_database_cloud_exadata_infrastructure#email OracleDatabaseCloudExadataInfrastructure#email}

---

### OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow <a name="OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow {
    double CustomActionTimeoutMins = null,
    string[] DaysOfWeek = null,
    double[] HoursOfDay = null,
    object IsCustomActionTimeoutEnabled = null,
    double LeadTimeWeek = null,
    string[] Months = null,
    string PatchingMode = null,
    string Preference = null,
    double[] WeeksOfMonth = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.customActionTimeoutMins">CustomActionTimeoutMins</a></code> | <code>double</code> | Determines the amount of time the system will wait before the start of each database server patching operation. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.daysOfWeek">DaysOfWeek</a></code> | <code>string[]</code> | Days during the week when maintenance should be performed. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.hoursOfDay">HoursOfDay</a></code> | <code>double[]</code> | The window of hours during the day when maintenance should be performed. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.isCustomActionTimeoutEnabled">IsCustomActionTimeoutEnabled</a></code> | <code>object</code> | If true, enables the configuration of a custom action timeout (waiting period) between database server patching operations. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.leadTimeWeek">LeadTimeWeek</a></code> | <code>double</code> | Lead time window allows user to set a lead time to prepare for a down time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.months">Months</a></code> | <code>string[]</code> | Months during the year when maintenance should be performed. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.patchingMode">PatchingMode</a></code> | <code>string</code> | Cloud CloudExadataInfrastructure node patching method, either "ROLLING"  or "NONROLLING". Default value is ROLLING.   Possible values:  PATCHING_MODE_UNSPECIFIED ROLLING NON_ROLLING. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.preference">Preference</a></code> | <code>string</code> | The maintenance window scheduling preference.   Possible values:  MAINTENANCE_WINDOW_PREFERENCE_UNSPECIFIED CUSTOM_PREFERENCE NO_PREFERENCE. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>double[]</code> | Weeks during the month when maintenance should be performed. |

---

##### `CustomActionTimeoutMins`<sup>Optional</sup> <a name="CustomActionTimeoutMins" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.customActionTimeoutMins"></a>

```csharp
public double CustomActionTimeoutMins { get; set; }
```

- *Type:* double

Determines the amount of time the system will wait before the start of each database server patching operation.

Custom action timeout is in minutes and
valid value is between 15 to 120 (inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/oracle_database_cloud_exadata_infrastructure#custom_action_timeout_mins OracleDatabaseCloudExadataInfrastructure#custom_action_timeout_mins}

---

##### `DaysOfWeek`<sup>Optional</sup> <a name="DaysOfWeek" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.daysOfWeek"></a>

```csharp
public string[] DaysOfWeek { get; set; }
```

- *Type:* string[]

Days during the week when maintenance should be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/oracle_database_cloud_exadata_infrastructure#days_of_week OracleDatabaseCloudExadataInfrastructure#days_of_week}

---

##### `HoursOfDay`<sup>Optional</sup> <a name="HoursOfDay" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.hoursOfDay"></a>

```csharp
public double[] HoursOfDay { get; set; }
```

- *Type:* double[]

The window of hours during the day when maintenance should be performed.

The window is a 4 hour slot. Valid values are:
0 - represents time slot 0:00 - 3:59 UTC
4 - represents time slot 4:00 - 7:59 UTC
8 - represents time slot 8:00 - 11:59 UTC
12 - represents time slot 12:00 - 15:59 UTC
16 - represents time slot 16:00 - 19:59 UTC
20 - represents time slot 20:00 - 23:59 UTC

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/oracle_database_cloud_exadata_infrastructure#hours_of_day OracleDatabaseCloudExadataInfrastructure#hours_of_day}

---

##### `IsCustomActionTimeoutEnabled`<sup>Optional</sup> <a name="IsCustomActionTimeoutEnabled" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.isCustomActionTimeoutEnabled"></a>

```csharp
public object IsCustomActionTimeoutEnabled { get; set; }
```

- *Type:* object

If true, enables the configuration of a custom action timeout (waiting period) between database server patching operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/oracle_database_cloud_exadata_infrastructure#is_custom_action_timeout_enabled OracleDatabaseCloudExadataInfrastructure#is_custom_action_timeout_enabled}

---

##### `LeadTimeWeek`<sup>Optional</sup> <a name="LeadTimeWeek" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.leadTimeWeek"></a>

```csharp
public double LeadTimeWeek { get; set; }
```

- *Type:* double

Lead time window allows user to set a lead time to prepare for a down time.

The lead time is in weeks and valid value is between 1 to 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/oracle_database_cloud_exadata_infrastructure#lead_time_week OracleDatabaseCloudExadataInfrastructure#lead_time_week}

---

##### `Months`<sup>Optional</sup> <a name="Months" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.months"></a>

```csharp
public string[] Months { get; set; }
```

- *Type:* string[]

Months during the year when maintenance should be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/oracle_database_cloud_exadata_infrastructure#months OracleDatabaseCloudExadataInfrastructure#months}

---

##### `PatchingMode`<sup>Optional</sup> <a name="PatchingMode" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.patchingMode"></a>

```csharp
public string PatchingMode { get; set; }
```

- *Type:* string

Cloud CloudExadataInfrastructure node patching method, either "ROLLING"  or "NONROLLING". Default value is ROLLING.   Possible values:  PATCHING_MODE_UNSPECIFIED ROLLING NON_ROLLING.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/oracle_database_cloud_exadata_infrastructure#patching_mode OracleDatabaseCloudExadataInfrastructure#patching_mode}

---

##### `Preference`<sup>Optional</sup> <a name="Preference" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.preference"></a>

```csharp
public string Preference { get; set; }
```

- *Type:* string

The maintenance window scheduling preference.   Possible values:  MAINTENANCE_WINDOW_PREFERENCE_UNSPECIFIED CUSTOM_PREFERENCE NO_PREFERENCE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/oracle_database_cloud_exadata_infrastructure#preference OracleDatabaseCloudExadataInfrastructure#preference}

---

##### `WeeksOfMonth`<sup>Optional</sup> <a name="WeeksOfMonth" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow.property.weeksOfMonth"></a>

```csharp
public double[] WeeksOfMonth { get; set; }
```

- *Type:* double[]

Weeks during the month when maintenance should be performed.

Weeks start on
the 1st, 8th, 15th, and 22nd days of the month, and have a duration of 7
days. Weeks start and end based on calendar dates, not days of the week.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/oracle_database_cloud_exadata_infrastructure#weeks_of_month OracleDatabaseCloudExadataInfrastructure#weeks_of_month}

---

### OracleDatabaseCloudExadataInfrastructureTimeouts <a name="OracleDatabaseCloudExadataInfrastructureTimeouts" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseCloudExadataInfrastructureTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/oracle_database_cloud_exadata_infrastructure#create OracleDatabaseCloudExadataInfrastructure#create}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/oracle_database_cloud_exadata_infrastructure#delete OracleDatabaseCloudExadataInfrastructure#delete}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/oracle_database_cloud_exadata_infrastructure#update OracleDatabaseCloudExadataInfrastructure#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/oracle_database_cloud_exadata_infrastructure#create OracleDatabaseCloudExadataInfrastructure#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/oracle_database_cloud_exadata_infrastructure#delete OracleDatabaseCloudExadataInfrastructure#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/oracle_database_cloud_exadata_infrastructure#update OracleDatabaseCloudExadataInfrastructure#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList <a name="OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.get"></a>

```csharp
private OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference <a name="OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference <a name="OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetCustomActionTimeoutMins">ResetCustomActionTimeoutMins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetDaysOfWeek">ResetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetHoursOfDay">ResetHoursOfDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetIsCustomActionTimeoutEnabled">ResetIsCustomActionTimeoutEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetLeadTimeWeek">ResetLeadTimeWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetMonths">ResetMonths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetPatchingMode">ResetPatchingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetPreference">ResetPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetWeeksOfMonth">ResetWeeksOfMonth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomActionTimeoutMins` <a name="ResetCustomActionTimeoutMins" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetCustomActionTimeoutMins"></a>

```csharp
private void ResetCustomActionTimeoutMins()
```

##### `ResetDaysOfWeek` <a name="ResetDaysOfWeek" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetDaysOfWeek"></a>

```csharp
private void ResetDaysOfWeek()
```

##### `ResetHoursOfDay` <a name="ResetHoursOfDay" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetHoursOfDay"></a>

```csharp
private void ResetHoursOfDay()
```

##### `ResetIsCustomActionTimeoutEnabled` <a name="ResetIsCustomActionTimeoutEnabled" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetIsCustomActionTimeoutEnabled"></a>

```csharp
private void ResetIsCustomActionTimeoutEnabled()
```

##### `ResetLeadTimeWeek` <a name="ResetLeadTimeWeek" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetLeadTimeWeek"></a>

```csharp
private void ResetLeadTimeWeek()
```

##### `ResetMonths` <a name="ResetMonths" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetMonths"></a>

```csharp
private void ResetMonths()
```

##### `ResetPatchingMode` <a name="ResetPatchingMode" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetPatchingMode"></a>

```csharp
private void ResetPatchingMode()
```

##### `ResetPreference` <a name="ResetPreference" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetPreference"></a>

```csharp
private void ResetPreference()
```

##### `ResetWeeksOfMonth` <a name="ResetWeeksOfMonth" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.resetWeeksOfMonth"></a>

```csharp
private void ResetWeeksOfMonth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.customActionTimeoutMinsInput">CustomActionTimeoutMinsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.hoursOfDayInput">HoursOfDayInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabledInput">IsCustomActionTimeoutEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.leadTimeWeekInput">LeadTimeWeekInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.monthsInput">MonthsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.patchingModeInput">PatchingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.preferenceInput">PreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.weeksOfMonthInput">WeeksOfMonthInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.customActionTimeoutMins">CustomActionTimeoutMins</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.hoursOfDay">HoursOfDay</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled">IsCustomActionTimeoutEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.leadTimeWeek">LeadTimeWeek</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.months">Months</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.patchingMode">PatchingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.preference">Preference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow">OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomActionTimeoutMinsInput`<sup>Optional</sup> <a name="CustomActionTimeoutMinsInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.customActionTimeoutMinsInput"></a>

```csharp
public double CustomActionTimeoutMinsInput { get; }
```

- *Type:* double

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.daysOfWeekInput"></a>

```csharp
public string[] DaysOfWeekInput { get; }
```

- *Type:* string[]

---

##### `HoursOfDayInput`<sup>Optional</sup> <a name="HoursOfDayInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.hoursOfDayInput"></a>

```csharp
public double[] HoursOfDayInput { get; }
```

- *Type:* double[]

---

##### `IsCustomActionTimeoutEnabledInput`<sup>Optional</sup> <a name="IsCustomActionTimeoutEnabledInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabledInput"></a>

```csharp
public object IsCustomActionTimeoutEnabledInput { get; }
```

- *Type:* object

---

##### `LeadTimeWeekInput`<sup>Optional</sup> <a name="LeadTimeWeekInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.leadTimeWeekInput"></a>

```csharp
public double LeadTimeWeekInput { get; }
```

- *Type:* double

---

##### `MonthsInput`<sup>Optional</sup> <a name="MonthsInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.monthsInput"></a>

```csharp
public string[] MonthsInput { get; }
```

- *Type:* string[]

---

##### `PatchingModeInput`<sup>Optional</sup> <a name="PatchingModeInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.patchingModeInput"></a>

```csharp
public string PatchingModeInput { get; }
```

- *Type:* string

---

##### `PreferenceInput`<sup>Optional</sup> <a name="PreferenceInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.preferenceInput"></a>

```csharp
public string PreferenceInput { get; }
```

- *Type:* string

---

##### `WeeksOfMonthInput`<sup>Optional</sup> <a name="WeeksOfMonthInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.weeksOfMonthInput"></a>

```csharp
public double[] WeeksOfMonthInput { get; }
```

- *Type:* double[]

---

##### `CustomActionTimeoutMins`<sup>Required</sup> <a name="CustomActionTimeoutMins" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.customActionTimeoutMins"></a>

```csharp
public double CustomActionTimeoutMins { get; }
```

- *Type:* double

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```csharp
public string[] DaysOfWeek { get; }
```

- *Type:* string[]

---

##### `HoursOfDay`<sup>Required</sup> <a name="HoursOfDay" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```csharp
public double[] HoursOfDay { get; }
```

- *Type:* double[]

---

##### `IsCustomActionTimeoutEnabled`<sup>Required</sup> <a name="IsCustomActionTimeoutEnabled" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled"></a>

```csharp
public object IsCustomActionTimeoutEnabled { get; }
```

- *Type:* object

---

##### `LeadTimeWeek`<sup>Required</sup> <a name="LeadTimeWeek" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.leadTimeWeek"></a>

```csharp
public double LeadTimeWeek { get; }
```

- *Type:* double

---

##### `Months`<sup>Required</sup> <a name="Months" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.months"></a>

```csharp
public string[] Months { get; }
```

- *Type:* string[]

---

##### `PatchingMode`<sup>Required</sup> <a name="PatchingMode" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.patchingMode"></a>

```csharp
public string PatchingMode { get; }
```

- *Type:* string

---

##### `Preference`<sup>Required</sup> <a name="Preference" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.preference"></a>

```csharp
public string Preference { get; }
```

- *Type:* string

---

##### `WeeksOfMonth`<sup>Required</sup> <a name="WeeksOfMonth" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```csharp
public double[] WeeksOfMonth { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference.property.internalValue"></a>

```csharp
public OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow">OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow</a>

---


### OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference <a name="OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putCustomerContacts">PutCustomerContacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putMaintenanceWindow">PutMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetComputeCount">ResetComputeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetCustomerContacts">ResetCustomerContacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetMaintenanceWindow">ResetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetStorageCount">ResetStorageCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetTotalStorageSizeGb">ResetTotalStorageSizeGb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomerContacts` <a name="PutCustomerContacts" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putCustomerContacts"></a>

```csharp
private void PutCustomerContacts(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putCustomerContacts.parameter.value"></a>

- *Type:* object

---

##### `PutMaintenanceWindow` <a name="PutMaintenanceWindow" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putMaintenanceWindow"></a>

```csharp
private void PutMaintenanceWindow(OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow">OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow</a>

---

##### `ResetComputeCount` <a name="ResetComputeCount" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetComputeCount"></a>

```csharp
private void ResetComputeCount()
```

##### `ResetCustomerContacts` <a name="ResetCustomerContacts" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetCustomerContacts"></a>

```csharp
private void ResetCustomerContacts()
```

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetMaintenanceWindow"></a>

```csharp
private void ResetMaintenanceWindow()
```

##### `ResetStorageCount` <a name="ResetStorageCount" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetStorageCount"></a>

```csharp
private void ResetStorageCount()
```

##### `ResetTotalStorageSizeGb` <a name="ResetTotalStorageSizeGb" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.resetTotalStorageSizeGb"></a>

```csharp
private void ResetTotalStorageSizeGb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.activatedStorageCount">ActivatedStorageCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.additionalStorageCount">AdditionalStorageCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.availableStorageSizeGb">AvailableStorageSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.cpuCount">CpuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.customerContacts">CustomerContacts</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList">OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.dataStorageSizeTb">DataStorageSizeTb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.dbNodeStorageSizeGb">DbNodeStorageSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.dbServerVersion">DbServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference">OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxCpuCount">MaxCpuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxDataStorageTb">MaxDataStorageTb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxDbNodeStorageSizeGb">MaxDbNodeStorageSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxMemoryGb">MaxMemoryGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.memorySizeGb">MemorySizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.monthlyDbServerVersion">MonthlyDbServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.monthlyStorageServerVersion">MonthlyStorageServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.nextMaintenanceRunId">NextMaintenanceRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.nextMaintenanceRunTime">NextMaintenanceRunTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.nextSecurityMaintenanceRunTime">NextSecurityMaintenanceRunTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.ociUrl">OciUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.storageServerVersion">StorageServerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.computeCountInput">ComputeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.customerContactsInput">CustomerContactsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow">OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.shapeInput">ShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.storageCountInput">StorageCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.totalStorageSizeGbInput">TotalStorageSizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.computeCount">ComputeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.storageCount">StorageCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.totalStorageSizeGb">TotalStorageSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties">OracleDatabaseCloudExadataInfrastructureProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActivatedStorageCount`<sup>Required</sup> <a name="ActivatedStorageCount" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.activatedStorageCount"></a>

```csharp
public double ActivatedStorageCount { get; }
```

- *Type:* double

---

##### `AdditionalStorageCount`<sup>Required</sup> <a name="AdditionalStorageCount" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.additionalStorageCount"></a>

```csharp
public double AdditionalStorageCount { get; }
```

- *Type:* double

---

##### `AvailableStorageSizeGb`<sup>Required</sup> <a name="AvailableStorageSizeGb" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.availableStorageSizeGb"></a>

```csharp
public double AvailableStorageSizeGb { get; }
```

- *Type:* double

---

##### `CpuCount`<sup>Required</sup> <a name="CpuCount" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.cpuCount"></a>

```csharp
public double CpuCount { get; }
```

- *Type:* double

---

##### `CustomerContacts`<sup>Required</sup> <a name="CustomerContacts" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.customerContacts"></a>

```csharp
public OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList CustomerContacts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList">OracleDatabaseCloudExadataInfrastructurePropertiesCustomerContactsList</a>

---

##### `DataStorageSizeTb`<sup>Required</sup> <a name="DataStorageSizeTb" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.dataStorageSizeTb"></a>

```csharp
public double DataStorageSizeTb { get; }
```

- *Type:* double

---

##### `DbNodeStorageSizeGb`<sup>Required</sup> <a name="DbNodeStorageSizeGb" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.dbNodeStorageSizeGb"></a>

```csharp
public double DbNodeStorageSizeGb { get; }
```

- *Type:* double

---

##### `DbServerVersion`<sup>Required</sup> <a name="DbServerVersion" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.dbServerVersion"></a>

```csharp
public string DbServerVersion { get; }
```

- *Type:* string

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maintenanceWindow"></a>

```csharp
public OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference MaintenanceWindow { get; }
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference">OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindowOutputReference</a>

---

##### `MaxCpuCount`<sup>Required</sup> <a name="MaxCpuCount" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxCpuCount"></a>

```csharp
public double MaxCpuCount { get; }
```

- *Type:* double

---

##### `MaxDataStorageTb`<sup>Required</sup> <a name="MaxDataStorageTb" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxDataStorageTb"></a>

```csharp
public double MaxDataStorageTb { get; }
```

- *Type:* double

---

##### `MaxDbNodeStorageSizeGb`<sup>Required</sup> <a name="MaxDbNodeStorageSizeGb" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxDbNodeStorageSizeGb"></a>

```csharp
public double MaxDbNodeStorageSizeGb { get; }
```

- *Type:* double

---

##### `MaxMemoryGb`<sup>Required</sup> <a name="MaxMemoryGb" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maxMemoryGb"></a>

```csharp
public double MaxMemoryGb { get; }
```

- *Type:* double

---

##### `MemorySizeGb`<sup>Required</sup> <a name="MemorySizeGb" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.memorySizeGb"></a>

```csharp
public double MemorySizeGb { get; }
```

- *Type:* double

---

##### `MonthlyDbServerVersion`<sup>Required</sup> <a name="MonthlyDbServerVersion" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.monthlyDbServerVersion"></a>

```csharp
public string MonthlyDbServerVersion { get; }
```

- *Type:* string

---

##### `MonthlyStorageServerVersion`<sup>Required</sup> <a name="MonthlyStorageServerVersion" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.monthlyStorageServerVersion"></a>

```csharp
public string MonthlyStorageServerVersion { get; }
```

- *Type:* string

---

##### `NextMaintenanceRunId`<sup>Required</sup> <a name="NextMaintenanceRunId" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.nextMaintenanceRunId"></a>

```csharp
public string NextMaintenanceRunId { get; }
```

- *Type:* string

---

##### `NextMaintenanceRunTime`<sup>Required</sup> <a name="NextMaintenanceRunTime" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.nextMaintenanceRunTime"></a>

```csharp
public string NextMaintenanceRunTime { get; }
```

- *Type:* string

---

##### `NextSecurityMaintenanceRunTime`<sup>Required</sup> <a name="NextSecurityMaintenanceRunTime" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.nextSecurityMaintenanceRunTime"></a>

```csharp
public string NextSecurityMaintenanceRunTime { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `OciUrl`<sup>Required</sup> <a name="OciUrl" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.ociUrl"></a>

```csharp
public string OciUrl { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StorageServerVersion`<sup>Required</sup> <a name="StorageServerVersion" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.storageServerVersion"></a>

```csharp
public string StorageServerVersion { get; }
```

- *Type:* string

---

##### `ComputeCountInput`<sup>Optional</sup> <a name="ComputeCountInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.computeCountInput"></a>

```csharp
public double ComputeCountInput { get; }
```

- *Type:* double

---

##### `CustomerContactsInput`<sup>Optional</sup> <a name="CustomerContactsInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.customerContactsInput"></a>

```csharp
public object CustomerContactsInput { get; }
```

- *Type:* object

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.maintenanceWindowInput"></a>

```csharp
public OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow MaintenanceWindowInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow">OracleDatabaseCloudExadataInfrastructurePropertiesMaintenanceWindow</a>

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.shapeInput"></a>

```csharp
public string ShapeInput { get; }
```

- *Type:* string

---

##### `StorageCountInput`<sup>Optional</sup> <a name="StorageCountInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.storageCountInput"></a>

```csharp
public double StorageCountInput { get; }
```

- *Type:* double

---

##### `TotalStorageSizeGbInput`<sup>Optional</sup> <a name="TotalStorageSizeGbInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.totalStorageSizeGbInput"></a>

```csharp
public double TotalStorageSizeGbInput { get; }
```

- *Type:* double

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.computeCount"></a>

```csharp
public double ComputeCount { get; }
```

- *Type:* double

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `StorageCount`<sup>Required</sup> <a name="StorageCount" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.storageCount"></a>

```csharp
public double StorageCount { get; }
```

- *Type:* double

---

##### `TotalStorageSizeGb`<sup>Required</sup> <a name="TotalStorageSizeGb" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.totalStorageSizeGb"></a>

```csharp
public double TotalStorageSizeGb { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructurePropertiesOutputReference.property.internalValue"></a>

```csharp
public OracleDatabaseCloudExadataInfrastructureProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureProperties">OracleDatabaseCloudExadataInfrastructureProperties</a>

---


### OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference <a name="OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.oracleDatabaseCloudExadataInfrastructure.OracleDatabaseCloudExadataInfrastructureTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



