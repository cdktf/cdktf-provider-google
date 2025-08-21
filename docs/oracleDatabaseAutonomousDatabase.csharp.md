# `oracleDatabaseAutonomousDatabase` Submodule <a name="`oracleDatabaseAutonomousDatabase` Submodule" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleDatabaseAutonomousDatabase <a name="OracleDatabaseAutonomousDatabase" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_autonomous_database google_oracle_database_autonomous_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseAutonomousDatabase(Construct Scope, string Id, OracleDatabaseAutonomousDatabaseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig">OracleDatabaseAutonomousDatabaseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig">OracleDatabaseAutonomousDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.resetAdminPassword">ResetAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.resetCidr">ResetCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.resetOdbNetwork">ResetOdbNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.resetOdbSubnet">ResetOdbSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProperties` <a name="PutProperties" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.putProperties"></a>

```csharp
private void PutProperties(OracleDatabaseAutonomousDatabaseProperties Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties">OracleDatabaseAutonomousDatabaseProperties</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.putTimeouts"></a>

```csharp
private void PutTimeouts(OracleDatabaseAutonomousDatabaseTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeouts">OracleDatabaseAutonomousDatabaseTimeouts</a>

---

##### `ResetAdminPassword` <a name="ResetAdminPassword" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.resetAdminPassword"></a>

```csharp
private void ResetAdminPassword()
```

##### `ResetCidr` <a name="ResetCidr" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.resetCidr"></a>

```csharp
private void ResetCidr()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.resetDeletionProtection"></a>

```csharp
private void ResetDeletionProtection()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetOdbNetwork` <a name="ResetOdbNetwork" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.resetOdbNetwork"></a>

```csharp
private void ResetOdbNetwork()
```

##### `ResetOdbSubnet` <a name="ResetOdbSubnet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.resetOdbSubnet"></a>

```csharp
private void ResetOdbSubnet()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OracleDatabaseAutonomousDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

OracleDatabaseAutonomousDatabase.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

OracleDatabaseAutonomousDatabase.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

OracleDatabaseAutonomousDatabase.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

OracleDatabaseAutonomousDatabase.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OracleDatabaseAutonomousDatabase resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OracleDatabaseAutonomousDatabase to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OracleDatabaseAutonomousDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_autonomous_database#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OracleDatabaseAutonomousDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.entitlementId">EntitlementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference">OracleDatabaseAutonomousDatabasePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference">OracleDatabaseAutonomousDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.adminPasswordInput">AdminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.autonomousDatabaseIdInput">AutonomousDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.cidrInput">CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.odbNetworkInput">OdbNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.odbSubnetInput">OdbSubnetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.propertiesInput">PropertiesInput</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties">OracleDatabaseAutonomousDatabaseProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.adminPassword">AdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.autonomousDatabaseId">AutonomousDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.deletionProtection">DeletionProtection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.odbNetwork">OdbNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.odbSubnet">OdbSubnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EntitlementId`<sup>Required</sup> <a name="EntitlementId" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.entitlementId"></a>

```csharp
public string EntitlementId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.properties"></a>

```csharp
public OracleDatabaseAutonomousDatabasePropertiesOutputReference Properties { get; }
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference">OracleDatabaseAutonomousDatabasePropertiesOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.timeouts"></a>

```csharp
public OracleDatabaseAutonomousDatabaseTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference">OracleDatabaseAutonomousDatabaseTimeoutsOutputReference</a>

---

##### `AdminPasswordInput`<sup>Optional</sup> <a name="AdminPasswordInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.adminPasswordInput"></a>

```csharp
public string AdminPasswordInput { get; }
```

- *Type:* string

---

##### `AutonomousDatabaseIdInput`<sup>Optional</sup> <a name="AutonomousDatabaseIdInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.autonomousDatabaseIdInput"></a>

```csharp
public string AutonomousDatabaseIdInput { get; }
```

- *Type:* string

---

##### `CidrInput`<sup>Optional</sup> <a name="CidrInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.cidrInput"></a>

```csharp
public string CidrInput { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.deletionProtectionInput"></a>

```csharp
public object DeletionProtectionInput { get; }
```

- *Type:* object

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `OdbNetworkInput`<sup>Optional</sup> <a name="OdbNetworkInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.odbNetworkInput"></a>

```csharp
public string OdbNetworkInput { get; }
```

- *Type:* string

---

##### `OdbSubnetInput`<sup>Optional</sup> <a name="OdbSubnetInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.odbSubnetInput"></a>

```csharp
public string OdbSubnetInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.propertiesInput"></a>

```csharp
public OracleDatabaseAutonomousDatabaseProperties PropertiesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties">OracleDatabaseAutonomousDatabaseProperties</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.adminPassword"></a>

```csharp
public string AdminPassword { get; }
```

- *Type:* string

---

##### `AutonomousDatabaseId`<sup>Required</sup> <a name="AutonomousDatabaseId" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.autonomousDatabaseId"></a>

```csharp
public string AutonomousDatabaseId { get; }
```

- *Type:* string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.deletionProtection"></a>

```csharp
public object DeletionProtection { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `OdbNetwork`<sup>Required</sup> <a name="OdbNetwork" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.odbNetwork"></a>

```csharp
public string OdbNetwork { get; }
```

- *Type:* string

---

##### `OdbSubnet`<sup>Required</sup> <a name="OdbSubnet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.odbSubnet"></a>

```csharp
public string OdbSubnet { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabase.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OracleDatabaseAutonomousDatabaseConfig <a name="OracleDatabaseAutonomousDatabaseConfig" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseAutonomousDatabaseConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AutonomousDatabaseId,
    string Database,
    string Location,
    OracleDatabaseAutonomousDatabaseProperties Properties,
    string AdminPassword = null,
    string Cidr = null,
    object DeletionProtection = null,
    string DisplayName = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Network = null,
    string OdbNetwork = null,
    string OdbSubnet = null,
    string Project = null,
    OracleDatabaseAutonomousDatabaseTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.autonomousDatabaseId">AutonomousDatabaseId</a></code> | <code>string</code> | The ID of the Autonomous Database to create. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.database">Database</a></code> | <code>string</code> | The name of the Autonomous Database. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/AutonomousDatabaseBackup'. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties">OracleDatabaseAutonomousDatabaseProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.adminPassword">AdminPassword</a></code> | <code>string</code> | The password for the default ADMIN user. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.cidr">Cidr</a></code> | <code>string</code> | The subnet CIDR range for the Autonmous Database. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.deletionProtection">DeletionProtection</a></code> | <code>object</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name for the Autonomous Database. The name does not have to be unique within your project. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_autonomous_database#id OracleDatabaseAutonomousDatabase#id}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels or tags associated with the Autonomous Database. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.network">Network</a></code> | <code>string</code> | The name of the VPC network used by the Autonomous Database. Format: projects/{project}/global/networks/{network}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.odbNetwork">OdbNetwork</a></code> | <code>string</code> | The name of the OdbNetwork associated with the Autonomous Database. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.odbSubnet">OdbSubnet</a></code> | <code>string</code> | The name of the OdbSubnet associated with the Autonomous Database for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_autonomous_database#project OracleDatabaseAutonomousDatabase#project}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeouts">OracleDatabaseAutonomousDatabaseTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AutonomousDatabaseId`<sup>Required</sup> <a name="AutonomousDatabaseId" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.autonomousDatabaseId"></a>

```csharp
public string AutonomousDatabaseId { get; set; }
```

- *Type:* string

The ID of the Autonomous Database to create.

This value is restricted
to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of 63
characters in length. The value must start with a letter and end with
a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_autonomous_database#autonomous_database_id OracleDatabaseAutonomousDatabase#autonomous_database_id}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

The name of the Autonomous Database.

The database name must be unique in
the project. The name must begin with a letter and can
contain a maximum of 30 alphanumeric characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_autonomous_database#database OracleDatabaseAutonomousDatabase#database}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/AutonomousDatabaseBackup'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_autonomous_database#location OracleDatabaseAutonomousDatabase#location}

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.properties"></a>

```csharp
public OracleDatabaseAutonomousDatabaseProperties Properties { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties">OracleDatabaseAutonomousDatabaseProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_autonomous_database#properties OracleDatabaseAutonomousDatabase#properties}

---

##### `AdminPassword`<sup>Optional</sup> <a name="AdminPassword" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.adminPassword"></a>

```csharp
public string AdminPassword { get; set; }
```

- *Type:* string

The password for the default ADMIN user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_autonomous_database#admin_password OracleDatabaseAutonomousDatabase#admin_password}

---

##### `Cidr`<sup>Optional</sup> <a name="Cidr" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.cidr"></a>

```csharp
public string Cidr { get; set; }
```

- *Type:* string

The subnet CIDR range for the Autonmous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_autonomous_database#cidr OracleDatabaseAutonomousDatabase#cidr}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.deletionProtection"></a>

```csharp
public object DeletionProtection { get; set; }
```

- *Type:* object

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_autonomous_database#deletion_protection OracleDatabaseAutonomousDatabase#deletion_protection}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name for the Autonomous Database. The name does not have to be unique within your project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_autonomous_database#display_name OracleDatabaseAutonomousDatabase#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_autonomous_database#id OracleDatabaseAutonomousDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels or tags associated with the Autonomous Database.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_autonomous_database#labels OracleDatabaseAutonomousDatabase#labels}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The name of the VPC network used by the Autonomous Database. Format: projects/{project}/global/networks/{network}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_autonomous_database#network OracleDatabaseAutonomousDatabase#network}

---

##### `OdbNetwork`<sup>Optional</sup> <a name="OdbNetwork" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.odbNetwork"></a>

```csharp
public string OdbNetwork { get; set; }
```

- *Type:* string

The name of the OdbNetwork associated with the Autonomous Database.

Format:
projects/{project}/locations/{location}/odbNetworks/{odb_network}
It is optional but if specified, this should match the parent ODBNetwork of
the odb_subnet and backup_odb_subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_autonomous_database#odb_network OracleDatabaseAutonomousDatabase#odb_network}

---

##### `OdbSubnet`<sup>Optional</sup> <a name="OdbSubnet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.odbSubnet"></a>

```csharp
public string OdbSubnet { get; set; }
```

- *Type:* string

The name of the OdbSubnet associated with the Autonomous Database for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_autonomous_database#odb_subnet OracleDatabaseAutonomousDatabase#odb_subnet}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_autonomous_database#project OracleDatabaseAutonomousDatabase#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseConfig.property.timeouts"></a>

```csharp
public OracleDatabaseAutonomousDatabaseTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeouts">OracleDatabaseAutonomousDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_autonomous_database#timeouts OracleDatabaseAutonomousDatabase#timeouts}

---

### OracleDatabaseAutonomousDatabaseProperties <a name="OracleDatabaseAutonomousDatabaseProperties" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseAutonomousDatabaseProperties {
    string DbWorkload,
    string LicenseType,
    double BackupRetentionPeriodDays = null,
    string CharacterSet = null,
    double ComputeCount = null,
    object CustomerContacts = null,
    double DataStorageSizeGb = null,
    double DataStorageSizeTb = null,
    string DbEdition = null,
    string DbVersion = null,
    object IsAutoScalingEnabled = null,
    object IsStorageAutoScalingEnabled = null,
    string MaintenanceScheduleType = null,
    object MtlsConnectionRequired = null,
    string NCharacterSet = null,
    string OperationsInsightsState = null,
    string PrivateEndpointIp = null,
    string PrivateEndpointLabel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.dbWorkload">DbWorkload</a></code> | <code>string</code> | Possible values:  DB_WORKLOAD_UNSPECIFIED OLTP DW AJD APEX. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.licenseType">LicenseType</a></code> | <code>string</code> | The license type used for the Autonomous Database.   Possible values:  LICENSE_TYPE_UNSPECIFIED LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.backupRetentionPeriodDays">BackupRetentionPeriodDays</a></code> | <code>double</code> | The retention period for the Autonomous Database. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.characterSet">CharacterSet</a></code> | <code>string</code> | The character set for the Autonomous Database. The default is AL32UTF8. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.computeCount">ComputeCount</a></code> | <code>double</code> | The number of compute servers for the Autonomous Database. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.customerContacts">CustomerContacts</a></code> | <code>object</code> | customer_contacts block. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.dataStorageSizeGb">DataStorageSizeGb</a></code> | <code>double</code> | The size of the data stored in the database, in gigabytes. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.dataStorageSizeTb">DataStorageSizeTb</a></code> | <code>double</code> | The size of the data stored in the database, in terabytes. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.dbEdition">DbEdition</a></code> | <code>string</code> | The edition of the Autonomous Databases.   Possible values:  DATABASE_EDITION_UNSPECIFIED STANDARD_EDITION ENTERPRISE_EDITION. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.dbVersion">DbVersion</a></code> | <code>string</code> | The Oracle Database version for the Autonomous Database. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.isAutoScalingEnabled">IsAutoScalingEnabled</a></code> | <code>object</code> | This field indicates if auto scaling is enabled for the Autonomous Database CPU core count. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.isStorageAutoScalingEnabled">IsStorageAutoScalingEnabled</a></code> | <code>object</code> | This field indicates if auto scaling is enabled for the Autonomous Database storage. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.maintenanceScheduleType">MaintenanceScheduleType</a></code> | <code>string</code> | The maintenance schedule of the Autonomous Database.   Possible values:  MAINTENANCE_SCHEDULE_TYPE_UNSPECIFIED EARLY REGULAR. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.mtlsConnectionRequired">MtlsConnectionRequired</a></code> | <code>object</code> | This field specifies if the Autonomous Database requires mTLS connections. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.nCharacterSet">NCharacterSet</a></code> | <code>string</code> | The national character set for the Autonomous Database. The default is AL16UTF16. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.operationsInsightsState">OperationsInsightsState</a></code> | <code>string</code> | Possible values:  OPERATIONS_INSIGHTS_STATE_UNSPECIFIED ENABLING ENABLED DISABLING NOT_ENABLED FAILED_ENABLING FAILED_DISABLING. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.privateEndpointIp">PrivateEndpointIp</a></code> | <code>string</code> | The private endpoint IP address for the Autonomous Database. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.privateEndpointLabel">PrivateEndpointLabel</a></code> | <code>string</code> | The private endpoint label for the Autonomous Database. |

---

##### `DbWorkload`<sup>Required</sup> <a name="DbWorkload" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.dbWorkload"></a>

```csharp
public string DbWorkload { get; set; }
```

- *Type:* string

Possible values:  DB_WORKLOAD_UNSPECIFIED OLTP DW AJD APEX.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_autonomous_database#db_workload OracleDatabaseAutonomousDatabase#db_workload}

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.licenseType"></a>

```csharp
public string LicenseType { get; set; }
```

- *Type:* string

The license type used for the Autonomous Database.   Possible values:  LICENSE_TYPE_UNSPECIFIED LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_autonomous_database#license_type OracleDatabaseAutonomousDatabase#license_type}

---

##### `BackupRetentionPeriodDays`<sup>Optional</sup> <a name="BackupRetentionPeriodDays" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.backupRetentionPeriodDays"></a>

```csharp
public double BackupRetentionPeriodDays { get; set; }
```

- *Type:* double

The retention period for the Autonomous Database.

This field is specified
in days, can range from 1 day to 60 days, and has a default value of
60 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_autonomous_database#backup_retention_period_days OracleDatabaseAutonomousDatabase#backup_retention_period_days}

---

##### `CharacterSet`<sup>Optional</sup> <a name="CharacterSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.characterSet"></a>

```csharp
public string CharacterSet { get; set; }
```

- *Type:* string

The character set for the Autonomous Database. The default is AL32UTF8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_autonomous_database#character_set OracleDatabaseAutonomousDatabase#character_set}

---

##### `ComputeCount`<sup>Optional</sup> <a name="ComputeCount" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.computeCount"></a>

```csharp
public double ComputeCount { get; set; }
```

- *Type:* double

The number of compute servers for the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_autonomous_database#compute_count OracleDatabaseAutonomousDatabase#compute_count}

---

##### `CustomerContacts`<sup>Optional</sup> <a name="CustomerContacts" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.customerContacts"></a>

```csharp
public object CustomerContacts { get; set; }
```

- *Type:* object

customer_contacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_autonomous_database#customer_contacts OracleDatabaseAutonomousDatabase#customer_contacts}

---

##### `DataStorageSizeGb`<sup>Optional</sup> <a name="DataStorageSizeGb" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.dataStorageSizeGb"></a>

```csharp
public double DataStorageSizeGb { get; set; }
```

- *Type:* double

The size of the data stored in the database, in gigabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_autonomous_database#data_storage_size_gb OracleDatabaseAutonomousDatabase#data_storage_size_gb}

---

##### `DataStorageSizeTb`<sup>Optional</sup> <a name="DataStorageSizeTb" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.dataStorageSizeTb"></a>

```csharp
public double DataStorageSizeTb { get; set; }
```

- *Type:* double

The size of the data stored in the database, in terabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_autonomous_database#data_storage_size_tb OracleDatabaseAutonomousDatabase#data_storage_size_tb}

---

##### `DbEdition`<sup>Optional</sup> <a name="DbEdition" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.dbEdition"></a>

```csharp
public string DbEdition { get; set; }
```

- *Type:* string

The edition of the Autonomous Databases.   Possible values:  DATABASE_EDITION_UNSPECIFIED STANDARD_EDITION ENTERPRISE_EDITION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_autonomous_database#db_edition OracleDatabaseAutonomousDatabase#db_edition}

---

##### `DbVersion`<sup>Optional</sup> <a name="DbVersion" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.dbVersion"></a>

```csharp
public string DbVersion { get; set; }
```

- *Type:* string

The Oracle Database version for the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_autonomous_database#db_version OracleDatabaseAutonomousDatabase#db_version}

---

##### `IsAutoScalingEnabled`<sup>Optional</sup> <a name="IsAutoScalingEnabled" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.isAutoScalingEnabled"></a>

```csharp
public object IsAutoScalingEnabled { get; set; }
```

- *Type:* object

This field indicates if auto scaling is enabled for the Autonomous Database CPU core count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_autonomous_database#is_auto_scaling_enabled OracleDatabaseAutonomousDatabase#is_auto_scaling_enabled}

---

##### `IsStorageAutoScalingEnabled`<sup>Optional</sup> <a name="IsStorageAutoScalingEnabled" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.isStorageAutoScalingEnabled"></a>

```csharp
public object IsStorageAutoScalingEnabled { get; set; }
```

- *Type:* object

This field indicates if auto scaling is enabled for the Autonomous Database storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_autonomous_database#is_storage_auto_scaling_enabled OracleDatabaseAutonomousDatabase#is_storage_auto_scaling_enabled}

---

##### `MaintenanceScheduleType`<sup>Optional</sup> <a name="MaintenanceScheduleType" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.maintenanceScheduleType"></a>

```csharp
public string MaintenanceScheduleType { get; set; }
```

- *Type:* string

The maintenance schedule of the Autonomous Database.   Possible values:  MAINTENANCE_SCHEDULE_TYPE_UNSPECIFIED EARLY REGULAR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_autonomous_database#maintenance_schedule_type OracleDatabaseAutonomousDatabase#maintenance_schedule_type}

---

##### `MtlsConnectionRequired`<sup>Optional</sup> <a name="MtlsConnectionRequired" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.mtlsConnectionRequired"></a>

```csharp
public object MtlsConnectionRequired { get; set; }
```

- *Type:* object

This field specifies if the Autonomous Database requires mTLS connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_autonomous_database#mtls_connection_required OracleDatabaseAutonomousDatabase#mtls_connection_required}

---

##### `NCharacterSet`<sup>Optional</sup> <a name="NCharacterSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.nCharacterSet"></a>

```csharp
public string NCharacterSet { get; set; }
```

- *Type:* string

The national character set for the Autonomous Database. The default is AL16UTF16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_autonomous_database#n_character_set OracleDatabaseAutonomousDatabase#n_character_set}

---

##### `OperationsInsightsState`<sup>Optional</sup> <a name="OperationsInsightsState" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.operationsInsightsState"></a>

```csharp
public string OperationsInsightsState { get; set; }
```

- *Type:* string

Possible values:  OPERATIONS_INSIGHTS_STATE_UNSPECIFIED ENABLING ENABLED DISABLING NOT_ENABLED FAILED_ENABLING FAILED_DISABLING.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_autonomous_database#operations_insights_state OracleDatabaseAutonomousDatabase#operations_insights_state}

---

##### `PrivateEndpointIp`<sup>Optional</sup> <a name="PrivateEndpointIp" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.privateEndpointIp"></a>

```csharp
public string PrivateEndpointIp { get; set; }
```

- *Type:* string

The private endpoint IP address for the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_autonomous_database#private_endpoint_ip OracleDatabaseAutonomousDatabase#private_endpoint_ip}

---

##### `PrivateEndpointLabel`<sup>Optional</sup> <a name="PrivateEndpointLabel" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties.property.privateEndpointLabel"></a>

```csharp
public string PrivateEndpointLabel { get; set; }
```

- *Type:* string

The private endpoint label for the Autonomous Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_autonomous_database#private_endpoint_label OracleDatabaseAutonomousDatabase#private_endpoint_label}

---

### OracleDatabaseAutonomousDatabasePropertiesApexDetails <a name="OracleDatabaseAutonomousDatabasePropertiesApexDetails" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseAutonomousDatabasePropertiesApexDetails {

};
```


### OracleDatabaseAutonomousDatabasePropertiesConnectionStrings <a name="OracleDatabaseAutonomousDatabasePropertiesConnectionStrings" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStrings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStrings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseAutonomousDatabasePropertiesConnectionStrings {

};
```


### OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings <a name="OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings {

};
```


### OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles <a name="OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles {

};
```


### OracleDatabaseAutonomousDatabasePropertiesConnectionUrls <a name="OracleDatabaseAutonomousDatabasePropertiesConnectionUrls" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrls.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseAutonomousDatabasePropertiesConnectionUrls {

};
```


### OracleDatabaseAutonomousDatabasePropertiesCustomerContacts <a name="OracleDatabaseAutonomousDatabasePropertiesCustomerContacts" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContacts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseAutonomousDatabasePropertiesCustomerContacts {
    string Email
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContacts.property.email">Email</a></code> | <code>string</code> | The email address used by Oracle to send notifications regarding databases and infrastructure. |

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContacts.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

The email address used by Oracle to send notifications regarding databases and infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_autonomous_database#email OracleDatabaseAutonomousDatabase#email}

---

### OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb <a name="OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb {

};
```


### OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails <a name="OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails {

};
```


### OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime <a name="OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime {

};
```


### OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime <a name="OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime {

};
```


### OracleDatabaseAutonomousDatabaseTimeouts <a name="OracleDatabaseAutonomousDatabaseTimeouts" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseAutonomousDatabaseTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_autonomous_database#create OracleDatabaseAutonomousDatabase#create}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_autonomous_database#delete OracleDatabaseAutonomousDatabase#delete}. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_autonomous_database#update OracleDatabaseAutonomousDatabase#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_autonomous_database#create OracleDatabaseAutonomousDatabase#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_autonomous_database#delete OracleDatabaseAutonomousDatabase#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/oracle_database_autonomous_database#update OracleDatabaseAutonomousDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleDatabaseAutonomousDatabasePropertiesApexDetailsList <a name="OracleDatabaseAutonomousDatabasePropertiesApexDetailsList" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseAutonomousDatabasePropertiesApexDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.get"></a>

```csharp
private OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference <a name="OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.apexVersion">ApexVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.ordsVersion">OrdsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetails">OracleDatabaseAutonomousDatabasePropertiesApexDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApexVersion`<sup>Required</sup> <a name="ApexVersion" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.apexVersion"></a>

```csharp
public string ApexVersion { get; }
```

- *Type:* string

---

##### `OrdsVersion`<sup>Required</sup> <a name="OrdsVersion" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.ordsVersion"></a>

```csharp
public string OrdsVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference.property.internalValue"></a>

```csharp
public OracleDatabaseAutonomousDatabasePropertiesApexDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetails">OracleDatabaseAutonomousDatabasePropertiesApexDetails</a>

---


### OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList <a name="OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.get"></a>

```csharp
private OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference <a name="OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.high">High</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.low">Low</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.medium">Medium</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings">OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `High`<sup>Required</sup> <a name="High" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.high"></a>

```csharp
public string High { get; }
```

- *Type:* string

---

##### `Low`<sup>Required</sup> <a name="Low" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.low"></a>

```csharp
public string Low { get; }
```

- *Type:* string

---

##### `Medium`<sup>Required</sup> <a name="Medium" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.medium"></a>

```csharp
public string Medium { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference.property.internalValue"></a>

```csharp
public OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings">OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings</a>

---


### OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList <a name="OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.get"></a>

```csharp
private OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference <a name="OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.allConnectionStrings">AllConnectionStrings</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList">OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.dedicated">Dedicated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.high">High</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.low">Low</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.medium">Medium</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.profiles">Profiles</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList">OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStrings">OracleDatabaseAutonomousDatabasePropertiesConnectionStrings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllConnectionStrings`<sup>Required</sup> <a name="AllConnectionStrings" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.allConnectionStrings"></a>

```csharp
public OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList AllConnectionStrings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList">OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList</a>

---

##### `Dedicated`<sup>Required</sup> <a name="Dedicated" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.dedicated"></a>

```csharp
public string Dedicated { get; }
```

- *Type:* string

---

##### `High`<sup>Required</sup> <a name="High" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.high"></a>

```csharp
public string High { get; }
```

- *Type:* string

---

##### `Low`<sup>Required</sup> <a name="Low" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.low"></a>

```csharp
public string Low { get; }
```

- *Type:* string

---

##### `Medium`<sup>Required</sup> <a name="Medium" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.medium"></a>

```csharp
public string Medium { get; }
```

- *Type:* string

---

##### `Profiles`<sup>Required</sup> <a name="Profiles" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.profiles"></a>

```csharp
public OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList Profiles { get; }
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList">OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference.property.internalValue"></a>

```csharp
public OracleDatabaseAutonomousDatabasePropertiesConnectionStrings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStrings">OracleDatabaseAutonomousDatabasePropertiesConnectionStrings</a>

---


### OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList <a name="OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.get"></a>

```csharp
private OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference <a name="OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.consumerGroup">ConsumerGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.hostFormat">HostFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.isRegional">IsRegional</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.sessionMode">SessionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.syntaxFormat">SyntaxFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.tlsAuthentication">TlsAuthentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles">OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConsumerGroup`<sup>Required</sup> <a name="ConsumerGroup" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.consumerGroup"></a>

```csharp
public string ConsumerGroup { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `HostFormat`<sup>Required</sup> <a name="HostFormat" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.hostFormat"></a>

```csharp
public string HostFormat { get; }
```

- *Type:* string

---

##### `IsRegional`<sup>Required</sup> <a name="IsRegional" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.isRegional"></a>

```csharp
public IResolvable IsRegional { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `SessionMode`<sup>Required</sup> <a name="SessionMode" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.sessionMode"></a>

```csharp
public string SessionMode { get; }
```

- *Type:* string

---

##### `SyntaxFormat`<sup>Required</sup> <a name="SyntaxFormat" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.syntaxFormat"></a>

```csharp
public string SyntaxFormat { get; }
```

- *Type:* string

---

##### `TlsAuthentication`<sup>Required</sup> <a name="TlsAuthentication" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.tlsAuthentication"></a>

```csharp
public string TlsAuthentication { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference.property.internalValue"></a>

```csharp
public OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles">OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles</a>

---


### OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList <a name="OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.get"></a>

```csharp
private OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference <a name="OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.apexUri">ApexUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.databaseTransformsUri">DatabaseTransformsUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.graphStudioUri">GraphStudioUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.machineLearningNotebookUri">MachineLearningNotebookUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.machineLearningUserManagementUri">MachineLearningUserManagementUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.mongoDbUri">MongoDbUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.ordsUri">OrdsUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.sqlDevWebUri">SqlDevWebUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrls">OracleDatabaseAutonomousDatabasePropertiesConnectionUrls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApexUri`<sup>Required</sup> <a name="ApexUri" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.apexUri"></a>

```csharp
public string ApexUri { get; }
```

- *Type:* string

---

##### `DatabaseTransformsUri`<sup>Required</sup> <a name="DatabaseTransformsUri" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.databaseTransformsUri"></a>

```csharp
public string DatabaseTransformsUri { get; }
```

- *Type:* string

---

##### `GraphStudioUri`<sup>Required</sup> <a name="GraphStudioUri" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.graphStudioUri"></a>

```csharp
public string GraphStudioUri { get; }
```

- *Type:* string

---

##### `MachineLearningNotebookUri`<sup>Required</sup> <a name="MachineLearningNotebookUri" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.machineLearningNotebookUri"></a>

```csharp
public string MachineLearningNotebookUri { get; }
```

- *Type:* string

---

##### `MachineLearningUserManagementUri`<sup>Required</sup> <a name="MachineLearningUserManagementUri" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.machineLearningUserManagementUri"></a>

```csharp
public string MachineLearningUserManagementUri { get; }
```

- *Type:* string

---

##### `MongoDbUri`<sup>Required</sup> <a name="MongoDbUri" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.mongoDbUri"></a>

```csharp
public string MongoDbUri { get; }
```

- *Type:* string

---

##### `OrdsUri`<sup>Required</sup> <a name="OrdsUri" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.ordsUri"></a>

```csharp
public string OrdsUri { get; }
```

- *Type:* string

---

##### `SqlDevWebUri`<sup>Required</sup> <a name="SqlDevWebUri" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.sqlDevWebUri"></a>

```csharp
public string SqlDevWebUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference.property.internalValue"></a>

```csharp
public OracleDatabaseAutonomousDatabasePropertiesConnectionUrls InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrls">OracleDatabaseAutonomousDatabasePropertiesConnectionUrls</a>

---


### OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList <a name="OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.get"></a>

```csharp
private OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference <a name="OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList <a name="OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.get"></a>

```csharp
private OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference <a name="OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.dataGuardRoleChangedTime">DataGuardRoleChangedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.disasterRecoveryRoleChangedTime">DisasterRecoveryRoleChangedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.lagTimeDuration">LagTimeDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb">OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataGuardRoleChangedTime`<sup>Required</sup> <a name="DataGuardRoleChangedTime" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.dataGuardRoleChangedTime"></a>

```csharp
public string DataGuardRoleChangedTime { get; }
```

- *Type:* string

---

##### `DisasterRecoveryRoleChangedTime`<sup>Required</sup> <a name="DisasterRecoveryRoleChangedTime" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.disasterRecoveryRoleChangedTime"></a>

```csharp
public string DisasterRecoveryRoleChangedTime { get; }
```

- *Type:* string

---

##### `LagTimeDuration`<sup>Required</sup> <a name="LagTimeDuration" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.lagTimeDuration"></a>

```csharp
public string LagTimeDuration { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference.property.internalValue"></a>

```csharp
public OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb">OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb</a>

---


### OracleDatabaseAutonomousDatabasePropertiesOutputReference <a name="OracleDatabaseAutonomousDatabasePropertiesOutputReference" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseAutonomousDatabasePropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.putCustomerContacts">PutCustomerContacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetBackupRetentionPeriodDays">ResetBackupRetentionPeriodDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetCharacterSet">ResetCharacterSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetComputeCount">ResetComputeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetCustomerContacts">ResetCustomerContacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetDataStorageSizeGb">ResetDataStorageSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetDataStorageSizeTb">ResetDataStorageSizeTb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetDbEdition">ResetDbEdition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetDbVersion">ResetDbVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetIsAutoScalingEnabled">ResetIsAutoScalingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetIsStorageAutoScalingEnabled">ResetIsStorageAutoScalingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetMaintenanceScheduleType">ResetMaintenanceScheduleType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetMtlsConnectionRequired">ResetMtlsConnectionRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetNCharacterSet">ResetNCharacterSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetOperationsInsightsState">ResetOperationsInsightsState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetPrivateEndpointIp">ResetPrivateEndpointIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetPrivateEndpointLabel">ResetPrivateEndpointLabel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomerContacts` <a name="PutCustomerContacts" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.putCustomerContacts"></a>

```csharp
private void PutCustomerContacts(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.putCustomerContacts.parameter.value"></a>

- *Type:* object

---

##### `ResetBackupRetentionPeriodDays` <a name="ResetBackupRetentionPeriodDays" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetBackupRetentionPeriodDays"></a>

```csharp
private void ResetBackupRetentionPeriodDays()
```

##### `ResetCharacterSet` <a name="ResetCharacterSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetCharacterSet"></a>

```csharp
private void ResetCharacterSet()
```

##### `ResetComputeCount` <a name="ResetComputeCount" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetComputeCount"></a>

```csharp
private void ResetComputeCount()
```

##### `ResetCustomerContacts` <a name="ResetCustomerContacts" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetCustomerContacts"></a>

```csharp
private void ResetCustomerContacts()
```

##### `ResetDataStorageSizeGb` <a name="ResetDataStorageSizeGb" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetDataStorageSizeGb"></a>

```csharp
private void ResetDataStorageSizeGb()
```

##### `ResetDataStorageSizeTb` <a name="ResetDataStorageSizeTb" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetDataStorageSizeTb"></a>

```csharp
private void ResetDataStorageSizeTb()
```

##### `ResetDbEdition` <a name="ResetDbEdition" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetDbEdition"></a>

```csharp
private void ResetDbEdition()
```

##### `ResetDbVersion` <a name="ResetDbVersion" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetDbVersion"></a>

```csharp
private void ResetDbVersion()
```

##### `ResetIsAutoScalingEnabled` <a name="ResetIsAutoScalingEnabled" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetIsAutoScalingEnabled"></a>

```csharp
private void ResetIsAutoScalingEnabled()
```

##### `ResetIsStorageAutoScalingEnabled` <a name="ResetIsStorageAutoScalingEnabled" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetIsStorageAutoScalingEnabled"></a>

```csharp
private void ResetIsStorageAutoScalingEnabled()
```

##### `ResetMaintenanceScheduleType` <a name="ResetMaintenanceScheduleType" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetMaintenanceScheduleType"></a>

```csharp
private void ResetMaintenanceScheduleType()
```

##### `ResetMtlsConnectionRequired` <a name="ResetMtlsConnectionRequired" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetMtlsConnectionRequired"></a>

```csharp
private void ResetMtlsConnectionRequired()
```

##### `ResetNCharacterSet` <a name="ResetNCharacterSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetNCharacterSet"></a>

```csharp
private void ResetNCharacterSet()
```

##### `ResetOperationsInsightsState` <a name="ResetOperationsInsightsState" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetOperationsInsightsState"></a>

```csharp
private void ResetOperationsInsightsState()
```

##### `ResetPrivateEndpointIp` <a name="ResetPrivateEndpointIp" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetPrivateEndpointIp"></a>

```csharp
private void ResetPrivateEndpointIp()
```

##### `ResetPrivateEndpointLabel` <a name="ResetPrivateEndpointLabel" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.resetPrivateEndpointLabel"></a>

```csharp
private void ResetPrivateEndpointLabel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.actualUsedDataStorageSizeTb">ActualUsedDataStorageSizeTb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.allocatedStorageSizeTb">AllocatedStorageSizeTb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.apexDetails">ApexDetails</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList">OracleDatabaseAutonomousDatabasePropertiesApexDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.arePrimaryAllowlistedIpsUsed">ArePrimaryAllowlistedIpsUsed</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.autonomousContainerDatabaseId">AutonomousContainerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.availableUpgradeVersions">AvailableUpgradeVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.connectionStrings">ConnectionStrings</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList">OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.connectionUrls">ConnectionUrls</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList">OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.customerContacts">CustomerContacts</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList">OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.databaseManagementState">DatabaseManagementState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataSafeState">DataSafeState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.failedDataRecoveryDuration">FailedDataRecoveryDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isLocalDataGuardEnabled">IsLocalDataGuardEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.localAdgAutoFailoverMaxDataLossLimit">LocalAdgAutoFailoverMaxDataLossLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.localDisasterRecoveryType">LocalDisasterRecoveryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.localStandbyDb">LocalStandbyDb</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList">OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.maintenanceBeginTime">MaintenanceBeginTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.maintenanceEndTime">MaintenanceEndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.memoryPerOracleComputeUnitGbs">MemoryPerOracleComputeUnitGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.memoryTableGbs">MemoryTableGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.nextLongTermBackupTime">NextLongTermBackupTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.ociUrl">OciUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.openMode">OpenMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.peerDbIds">PeerDbIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.permissionLevel">PermissionLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpoint">PrivateEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.refreshableMode">RefreshableMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.refreshableState">RefreshableState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.scheduledOperationDetails">ScheduledOperationDetails</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList">OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.sqlWebDeveloperUrl">SqlWebDeveloperUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.supportedCloneRegions">SupportedCloneRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.totalAutoBackupStorageSizeGbs">TotalAutoBackupStorageSizeGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.usedDataStorageSizeTbs">UsedDataStorageSizeTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.backupRetentionPeriodDaysInput">BackupRetentionPeriodDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.characterSetInput">CharacterSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.computeCountInput">ComputeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.customerContactsInput">CustomerContactsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataStorageSizeGbInput">DataStorageSizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataStorageSizeTbInput">DataStorageSizeTbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbEditionInput">DbEditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbVersionInput">DbVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbWorkloadInput">DbWorkloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isAutoScalingEnabledInput">IsAutoScalingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isStorageAutoScalingEnabledInput">IsStorageAutoScalingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.licenseTypeInput">LicenseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.maintenanceScheduleTypeInput">MaintenanceScheduleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.mtlsConnectionRequiredInput">MtlsConnectionRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.nCharacterSetInput">NCharacterSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.operationsInsightsStateInput">OperationsInsightsStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpointIpInput">PrivateEndpointIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpointLabelInput">PrivateEndpointLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.backupRetentionPeriodDays">BackupRetentionPeriodDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.characterSet">CharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.computeCount">ComputeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataStorageSizeGb">DataStorageSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataStorageSizeTb">DataStorageSizeTb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbEdition">DbEdition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbVersion">DbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbWorkload">DbWorkload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isAutoScalingEnabled">IsAutoScalingEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isStorageAutoScalingEnabled">IsStorageAutoScalingEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.licenseType">LicenseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.maintenanceScheduleType">MaintenanceScheduleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.mtlsConnectionRequired">MtlsConnectionRequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.nCharacterSet">NCharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.operationsInsightsState">OperationsInsightsState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpointIp">PrivateEndpointIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpointLabel">PrivateEndpointLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties">OracleDatabaseAutonomousDatabaseProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActualUsedDataStorageSizeTb`<sup>Required</sup> <a name="ActualUsedDataStorageSizeTb" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.actualUsedDataStorageSizeTb"></a>

```csharp
public double ActualUsedDataStorageSizeTb { get; }
```

- *Type:* double

---

##### `AllocatedStorageSizeTb`<sup>Required</sup> <a name="AllocatedStorageSizeTb" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.allocatedStorageSizeTb"></a>

```csharp
public double AllocatedStorageSizeTb { get; }
```

- *Type:* double

---

##### `ApexDetails`<sup>Required</sup> <a name="ApexDetails" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.apexDetails"></a>

```csharp
public OracleDatabaseAutonomousDatabasePropertiesApexDetailsList ApexDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesApexDetailsList">OracleDatabaseAutonomousDatabasePropertiesApexDetailsList</a>

---

##### `ArePrimaryAllowlistedIpsUsed`<sup>Required</sup> <a name="ArePrimaryAllowlistedIpsUsed" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.arePrimaryAllowlistedIpsUsed"></a>

```csharp
public IResolvable ArePrimaryAllowlistedIpsUsed { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AutonomousContainerDatabaseId`<sup>Required</sup> <a name="AutonomousContainerDatabaseId" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.autonomousContainerDatabaseId"></a>

```csharp
public string AutonomousContainerDatabaseId { get; }
```

- *Type:* string

---

##### `AvailableUpgradeVersions`<sup>Required</sup> <a name="AvailableUpgradeVersions" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.availableUpgradeVersions"></a>

```csharp
public string[] AvailableUpgradeVersions { get; }
```

- *Type:* string[]

---

##### `ConnectionStrings`<sup>Required</sup> <a name="ConnectionStrings" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.connectionStrings"></a>

```csharp
public OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList ConnectionStrings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList">OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList</a>

---

##### `ConnectionUrls`<sup>Required</sup> <a name="ConnectionUrls" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.connectionUrls"></a>

```csharp
public OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList ConnectionUrls { get; }
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList">OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList</a>

---

##### `CustomerContacts`<sup>Required</sup> <a name="CustomerContacts" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.customerContacts"></a>

```csharp
public OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList CustomerContacts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList">OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList</a>

---

##### `DatabaseManagementState`<sup>Required</sup> <a name="DatabaseManagementState" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.databaseManagementState"></a>

```csharp
public string DatabaseManagementState { get; }
```

- *Type:* string

---

##### `DataSafeState`<sup>Required</sup> <a name="DataSafeState" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataSafeState"></a>

```csharp
public string DataSafeState { get; }
```

- *Type:* string

---

##### `FailedDataRecoveryDuration`<sup>Required</sup> <a name="FailedDataRecoveryDuration" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.failedDataRecoveryDuration"></a>

```csharp
public string FailedDataRecoveryDuration { get; }
```

- *Type:* string

---

##### `IsLocalDataGuardEnabled`<sup>Required</sup> <a name="IsLocalDataGuardEnabled" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isLocalDataGuardEnabled"></a>

```csharp
public IResolvable IsLocalDataGuardEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `LocalAdgAutoFailoverMaxDataLossLimit`<sup>Required</sup> <a name="LocalAdgAutoFailoverMaxDataLossLimit" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.localAdgAutoFailoverMaxDataLossLimit"></a>

```csharp
public double LocalAdgAutoFailoverMaxDataLossLimit { get; }
```

- *Type:* double

---

##### `LocalDisasterRecoveryType`<sup>Required</sup> <a name="LocalDisasterRecoveryType" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.localDisasterRecoveryType"></a>

```csharp
public string LocalDisasterRecoveryType { get; }
```

- *Type:* string

---

##### `LocalStandbyDb`<sup>Required</sup> <a name="LocalStandbyDb" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.localStandbyDb"></a>

```csharp
public OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList LocalStandbyDb { get; }
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList">OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList</a>

---

##### `MaintenanceBeginTime`<sup>Required</sup> <a name="MaintenanceBeginTime" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.maintenanceBeginTime"></a>

```csharp
public string MaintenanceBeginTime { get; }
```

- *Type:* string

---

##### `MaintenanceEndTime`<sup>Required</sup> <a name="MaintenanceEndTime" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.maintenanceEndTime"></a>

```csharp
public string MaintenanceEndTime { get; }
```

- *Type:* string

---

##### `MemoryPerOracleComputeUnitGbs`<sup>Required</sup> <a name="MemoryPerOracleComputeUnitGbs" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.memoryPerOracleComputeUnitGbs"></a>

```csharp
public double MemoryPerOracleComputeUnitGbs { get; }
```

- *Type:* double

---

##### `MemoryTableGbs`<sup>Required</sup> <a name="MemoryTableGbs" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.memoryTableGbs"></a>

```csharp
public double MemoryTableGbs { get; }
```

- *Type:* double

---

##### `NextLongTermBackupTime`<sup>Required</sup> <a name="NextLongTermBackupTime" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.nextLongTermBackupTime"></a>

```csharp
public string NextLongTermBackupTime { get; }
```

- *Type:* string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `OciUrl`<sup>Required</sup> <a name="OciUrl" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.ociUrl"></a>

```csharp
public string OciUrl { get; }
```

- *Type:* string

---

##### `OpenMode`<sup>Required</sup> <a name="OpenMode" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.openMode"></a>

```csharp
public string OpenMode { get; }
```

- *Type:* string

---

##### `PeerDbIds`<sup>Required</sup> <a name="PeerDbIds" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.peerDbIds"></a>

```csharp
public string[] PeerDbIds { get; }
```

- *Type:* string[]

---

##### `PermissionLevel`<sup>Required</sup> <a name="PermissionLevel" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.permissionLevel"></a>

```csharp
public string PermissionLevel { get; }
```

- *Type:* string

---

##### `PrivateEndpoint`<sup>Required</sup> <a name="PrivateEndpoint" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpoint"></a>

```csharp
public string PrivateEndpoint { get; }
```

- *Type:* string

---

##### `RefreshableMode`<sup>Required</sup> <a name="RefreshableMode" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.refreshableMode"></a>

```csharp
public string RefreshableMode { get; }
```

- *Type:* string

---

##### `RefreshableState`<sup>Required</sup> <a name="RefreshableState" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.refreshableState"></a>

```csharp
public string RefreshableState { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `ScheduledOperationDetails`<sup>Required</sup> <a name="ScheduledOperationDetails" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.scheduledOperationDetails"></a>

```csharp
public OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList ScheduledOperationDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList">OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList</a>

---

##### `SqlWebDeveloperUrl`<sup>Required</sup> <a name="SqlWebDeveloperUrl" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.sqlWebDeveloperUrl"></a>

```csharp
public string SqlWebDeveloperUrl { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SupportedCloneRegions`<sup>Required</sup> <a name="SupportedCloneRegions" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.supportedCloneRegions"></a>

```csharp
public string[] SupportedCloneRegions { get; }
```

- *Type:* string[]

---

##### `TotalAutoBackupStorageSizeGbs`<sup>Required</sup> <a name="TotalAutoBackupStorageSizeGbs" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.totalAutoBackupStorageSizeGbs"></a>

```csharp
public double TotalAutoBackupStorageSizeGbs { get; }
```

- *Type:* double

---

##### `UsedDataStorageSizeTbs`<sup>Required</sup> <a name="UsedDataStorageSizeTbs" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.usedDataStorageSizeTbs"></a>

```csharp
public double UsedDataStorageSizeTbs { get; }
```

- *Type:* double

---

##### `BackupRetentionPeriodDaysInput`<sup>Optional</sup> <a name="BackupRetentionPeriodDaysInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.backupRetentionPeriodDaysInput"></a>

```csharp
public double BackupRetentionPeriodDaysInput { get; }
```

- *Type:* double

---

##### `CharacterSetInput`<sup>Optional</sup> <a name="CharacterSetInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.characterSetInput"></a>

```csharp
public string CharacterSetInput { get; }
```

- *Type:* string

---

##### `ComputeCountInput`<sup>Optional</sup> <a name="ComputeCountInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.computeCountInput"></a>

```csharp
public double ComputeCountInput { get; }
```

- *Type:* double

---

##### `CustomerContactsInput`<sup>Optional</sup> <a name="CustomerContactsInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.customerContactsInput"></a>

```csharp
public object CustomerContactsInput { get; }
```

- *Type:* object

---

##### `DataStorageSizeGbInput`<sup>Optional</sup> <a name="DataStorageSizeGbInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataStorageSizeGbInput"></a>

```csharp
public double DataStorageSizeGbInput { get; }
```

- *Type:* double

---

##### `DataStorageSizeTbInput`<sup>Optional</sup> <a name="DataStorageSizeTbInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataStorageSizeTbInput"></a>

```csharp
public double DataStorageSizeTbInput { get; }
```

- *Type:* double

---

##### `DbEditionInput`<sup>Optional</sup> <a name="DbEditionInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbEditionInput"></a>

```csharp
public string DbEditionInput { get; }
```

- *Type:* string

---

##### `DbVersionInput`<sup>Optional</sup> <a name="DbVersionInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbVersionInput"></a>

```csharp
public string DbVersionInput { get; }
```

- *Type:* string

---

##### `DbWorkloadInput`<sup>Optional</sup> <a name="DbWorkloadInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbWorkloadInput"></a>

```csharp
public string DbWorkloadInput { get; }
```

- *Type:* string

---

##### `IsAutoScalingEnabledInput`<sup>Optional</sup> <a name="IsAutoScalingEnabledInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isAutoScalingEnabledInput"></a>

```csharp
public object IsAutoScalingEnabledInput { get; }
```

- *Type:* object

---

##### `IsStorageAutoScalingEnabledInput`<sup>Optional</sup> <a name="IsStorageAutoScalingEnabledInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isStorageAutoScalingEnabledInput"></a>

```csharp
public object IsStorageAutoScalingEnabledInput { get; }
```

- *Type:* object

---

##### `LicenseTypeInput`<sup>Optional</sup> <a name="LicenseTypeInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.licenseTypeInput"></a>

```csharp
public string LicenseTypeInput { get; }
```

- *Type:* string

---

##### `MaintenanceScheduleTypeInput`<sup>Optional</sup> <a name="MaintenanceScheduleTypeInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.maintenanceScheduleTypeInput"></a>

```csharp
public string MaintenanceScheduleTypeInput { get; }
```

- *Type:* string

---

##### `MtlsConnectionRequiredInput`<sup>Optional</sup> <a name="MtlsConnectionRequiredInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.mtlsConnectionRequiredInput"></a>

```csharp
public object MtlsConnectionRequiredInput { get; }
```

- *Type:* object

---

##### `NCharacterSetInput`<sup>Optional</sup> <a name="NCharacterSetInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.nCharacterSetInput"></a>

```csharp
public string NCharacterSetInput { get; }
```

- *Type:* string

---

##### `OperationsInsightsStateInput`<sup>Optional</sup> <a name="OperationsInsightsStateInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.operationsInsightsStateInput"></a>

```csharp
public string OperationsInsightsStateInput { get; }
```

- *Type:* string

---

##### `PrivateEndpointIpInput`<sup>Optional</sup> <a name="PrivateEndpointIpInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpointIpInput"></a>

```csharp
public string PrivateEndpointIpInput { get; }
```

- *Type:* string

---

##### `PrivateEndpointLabelInput`<sup>Optional</sup> <a name="PrivateEndpointLabelInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpointLabelInput"></a>

```csharp
public string PrivateEndpointLabelInput { get; }
```

- *Type:* string

---

##### `BackupRetentionPeriodDays`<sup>Required</sup> <a name="BackupRetentionPeriodDays" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.backupRetentionPeriodDays"></a>

```csharp
public double BackupRetentionPeriodDays { get; }
```

- *Type:* double

---

##### `CharacterSet`<sup>Required</sup> <a name="CharacterSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.characterSet"></a>

```csharp
public string CharacterSet { get; }
```

- *Type:* string

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.computeCount"></a>

```csharp
public double ComputeCount { get; }
```

- *Type:* double

---

##### `DataStorageSizeGb`<sup>Required</sup> <a name="DataStorageSizeGb" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataStorageSizeGb"></a>

```csharp
public double DataStorageSizeGb { get; }
```

- *Type:* double

---

##### `DataStorageSizeTb`<sup>Required</sup> <a name="DataStorageSizeTb" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dataStorageSizeTb"></a>

```csharp
public double DataStorageSizeTb { get; }
```

- *Type:* double

---

##### `DbEdition`<sup>Required</sup> <a name="DbEdition" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbEdition"></a>

```csharp
public string DbEdition { get; }
```

- *Type:* string

---

##### `DbVersion`<sup>Required</sup> <a name="DbVersion" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbVersion"></a>

```csharp
public string DbVersion { get; }
```

- *Type:* string

---

##### `DbWorkload`<sup>Required</sup> <a name="DbWorkload" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.dbWorkload"></a>

```csharp
public string DbWorkload { get; }
```

- *Type:* string

---

##### `IsAutoScalingEnabled`<sup>Required</sup> <a name="IsAutoScalingEnabled" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isAutoScalingEnabled"></a>

```csharp
public object IsAutoScalingEnabled { get; }
```

- *Type:* object

---

##### `IsStorageAutoScalingEnabled`<sup>Required</sup> <a name="IsStorageAutoScalingEnabled" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.isStorageAutoScalingEnabled"></a>

```csharp
public object IsStorageAutoScalingEnabled { get; }
```

- *Type:* object

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.licenseType"></a>

```csharp
public string LicenseType { get; }
```

- *Type:* string

---

##### `MaintenanceScheduleType`<sup>Required</sup> <a name="MaintenanceScheduleType" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.maintenanceScheduleType"></a>

```csharp
public string MaintenanceScheduleType { get; }
```

- *Type:* string

---

##### `MtlsConnectionRequired`<sup>Required</sup> <a name="MtlsConnectionRequired" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.mtlsConnectionRequired"></a>

```csharp
public object MtlsConnectionRequired { get; }
```

- *Type:* object

---

##### `NCharacterSet`<sup>Required</sup> <a name="NCharacterSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.nCharacterSet"></a>

```csharp
public string NCharacterSet { get; }
```

- *Type:* string

---

##### `OperationsInsightsState`<sup>Required</sup> <a name="OperationsInsightsState" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.operationsInsightsState"></a>

```csharp
public string OperationsInsightsState { get; }
```

- *Type:* string

---

##### `PrivateEndpointIp`<sup>Required</sup> <a name="PrivateEndpointIp" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpointIp"></a>

```csharp
public string PrivateEndpointIp { get; }
```

- *Type:* string

---

##### `PrivateEndpointLabel`<sup>Required</sup> <a name="PrivateEndpointLabel" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.privateEndpointLabel"></a>

```csharp
public string PrivateEndpointLabel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesOutputReference.property.internalValue"></a>

```csharp
public OracleDatabaseAutonomousDatabaseProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseProperties">OracleDatabaseAutonomousDatabaseProperties</a>

---


### OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList <a name="OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.get"></a>

```csharp
private OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference <a name="OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.startTime">StartTime</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList">OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.stopTime">StopTime</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList">OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails">OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.startTime"></a>

```csharp
public OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList StartTime { get; }
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList">OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList</a>

---

##### `StopTime`<sup>Required</sup> <a name="StopTime" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.stopTime"></a>

```csharp
public OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList StopTime { get; }
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList">OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference.property.internalValue"></a>

```csharp
public OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails">OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails</a>

---


### OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList <a name="OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.get"></a>

```csharp
private OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference <a name="OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.hours">Hours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.minutes">Minutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.nanos">Nanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.seconds">Seconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime">OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.hours"></a>

```csharp
public double Hours { get; }
```

- *Type:* double

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.minutes"></a>

```csharp
public double Minutes { get; }
```

- *Type:* double

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.nanos"></a>

```csharp
public double Nanos { get; }
```

- *Type:* double

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.seconds"></a>

```csharp
public double Seconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference.property.internalValue"></a>

```csharp
public OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime">OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime</a>

---


### OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList <a name="OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.get"></a>

```csharp
private OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference <a name="OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.hours">Hours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.minutes">Minutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.nanos">Nanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.seconds">Seconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime">OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.hours"></a>

```csharp
public double Hours { get; }
```

- *Type:* double

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.minutes"></a>

```csharp
public double Minutes { get; }
```

- *Type:* double

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.nanos"></a>

```csharp
public double Nanos { get; }
```

- *Type:* double

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.seconds"></a>

```csharp
public double Seconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference.property.internalValue"></a>

```csharp
public OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime">OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime</a>

---


### OracleDatabaseAutonomousDatabaseTimeoutsOutputReference <a name="OracleDatabaseAutonomousDatabaseTimeoutsOutputReference" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new OracleDatabaseAutonomousDatabaseTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.oracleDatabaseAutonomousDatabase.OracleDatabaseAutonomousDatabaseTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



