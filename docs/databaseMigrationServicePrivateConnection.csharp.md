# `databaseMigrationServicePrivateConnection` Submodule <a name="`databaseMigrationServicePrivateConnection` Submodule" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseMigrationServicePrivateConnection <a name="DatabaseMigrationServicePrivateConnection" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/database_migration_service_private_connection google_database_migration_service_private_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DatabaseMigrationServicePrivateConnection(Construct Scope, string Id, DatabaseMigrationServicePrivateConnectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig">DatabaseMigrationServicePrivateConnectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig">DatabaseMigrationServicePrivateConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.putVpcPeeringConfig">PutVpcPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.putTimeouts"></a>

```csharp
private void PutTimeouts(DatabaseMigrationServicePrivateConnectionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeouts">DatabaseMigrationServicePrivateConnectionTimeouts</a>

---

##### `PutVpcPeeringConfig` <a name="PutVpcPeeringConfig" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.putVpcPeeringConfig"></a>

```csharp
private void PutVpcPeeringConfig(DatabaseMigrationServicePrivateConnectionVpcPeeringConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.putVpcPeeringConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfig">DatabaseMigrationServicePrivateConnectionVpcPeeringConfig</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseMigrationServicePrivateConnection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DatabaseMigrationServicePrivateConnection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DatabaseMigrationServicePrivateConnection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DatabaseMigrationServicePrivateConnection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DatabaseMigrationServicePrivateConnection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseMigrationServicePrivateConnection resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseMigrationServicePrivateConnection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseMigrationServicePrivateConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/database_migration_service_private_connection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseMigrationServicePrivateConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.error">Error</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList">DatabaseMigrationServicePrivateConnectionErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference">DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.vpcPeeringConfig">VpcPeeringConfig</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference">DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.privateConnectionIdInput">PrivateConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.vpcPeeringConfigInput">VpcPeeringConfigInput</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfig">DatabaseMigrationServicePrivateConnectionVpcPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.privateConnectionId">PrivateConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.error"></a>

```csharp
public DatabaseMigrationServicePrivateConnectionErrorList Error { get; }
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList">DatabaseMigrationServicePrivateConnectionErrorList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.timeouts"></a>

```csharp
public DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference">DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference</a>

---

##### `VpcPeeringConfig`<sup>Required</sup> <a name="VpcPeeringConfig" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.vpcPeeringConfig"></a>

```csharp
public DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference VpcPeeringConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference">DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `PrivateConnectionIdInput`<sup>Optional</sup> <a name="PrivateConnectionIdInput" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.privateConnectionIdInput"></a>

```csharp
public string PrivateConnectionIdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VpcPeeringConfigInput`<sup>Optional</sup> <a name="VpcPeeringConfigInput" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.vpcPeeringConfigInput"></a>

```csharp
public DatabaseMigrationServicePrivateConnectionVpcPeeringConfig VpcPeeringConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfig">DatabaseMigrationServicePrivateConnectionVpcPeeringConfig</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `PrivateConnectionId`<sup>Required</sup> <a name="PrivateConnectionId" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.privateConnectionId"></a>

```csharp
public string PrivateConnectionId { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseMigrationServicePrivateConnectionConfig <a name="DatabaseMigrationServicePrivateConnectionConfig" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DatabaseMigrationServicePrivateConnectionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string PrivateConnectionId,
    DatabaseMigrationServicePrivateConnectionVpcPeeringConfig VpcPeeringConfig,
    string DisplayName = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    DatabaseMigrationServicePrivateConnectionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.location">Location</a></code> | <code>string</code> | The name of the location this private connection is located in. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.privateConnectionId">PrivateConnectionId</a></code> | <code>string</code> | The private connectivity identifier. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.vpcPeeringConfig">VpcPeeringConfig</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfig">DatabaseMigrationServicePrivateConnectionVpcPeeringConfig</a></code> | vpc_peering_config block. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Display name. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/database_migration_service_private_connection#id DatabaseMigrationServicePrivateConnection#id}. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/database_migration_service_private_connection#project DatabaseMigrationServicePrivateConnection#project}. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeouts">DatabaseMigrationServicePrivateConnectionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The name of the location this private connection is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/database_migration_service_private_connection#location DatabaseMigrationServicePrivateConnection#location}

---

##### `PrivateConnectionId`<sup>Required</sup> <a name="PrivateConnectionId" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.privateConnectionId"></a>

```csharp
public string PrivateConnectionId { get; set; }
```

- *Type:* string

The private connectivity identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/database_migration_service_private_connection#private_connection_id DatabaseMigrationServicePrivateConnection#private_connection_id}

---

##### `VpcPeeringConfig`<sup>Required</sup> <a name="VpcPeeringConfig" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.vpcPeeringConfig"></a>

```csharp
public DatabaseMigrationServicePrivateConnectionVpcPeeringConfig VpcPeeringConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfig">DatabaseMigrationServicePrivateConnectionVpcPeeringConfig</a>

vpc_peering_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/database_migration_service_private_connection#vpc_peering_config DatabaseMigrationServicePrivateConnection#vpc_peering_config}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/database_migration_service_private_connection#display_name DatabaseMigrationServicePrivateConnection#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/database_migration_service_private_connection#id DatabaseMigrationServicePrivateConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/database_migration_service_private_connection#labels DatabaseMigrationServicePrivateConnection#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/database_migration_service_private_connection#project DatabaseMigrationServicePrivateConnection#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionConfig.property.timeouts"></a>

```csharp
public DatabaseMigrationServicePrivateConnectionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeouts">DatabaseMigrationServicePrivateConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/database_migration_service_private_connection#timeouts DatabaseMigrationServicePrivateConnection#timeouts}

---

### DatabaseMigrationServicePrivateConnectionError <a name="DatabaseMigrationServicePrivateConnectionError" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionError.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DatabaseMigrationServicePrivateConnectionError {

};
```


### DatabaseMigrationServicePrivateConnectionTimeouts <a name="DatabaseMigrationServicePrivateConnectionTimeouts" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DatabaseMigrationServicePrivateConnectionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/database_migration_service_private_connection#create DatabaseMigrationServicePrivateConnection#create}. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/database_migration_service_private_connection#delete DatabaseMigrationServicePrivateConnection#delete}. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/database_migration_service_private_connection#update DatabaseMigrationServicePrivateConnection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/database_migration_service_private_connection#create DatabaseMigrationServicePrivateConnection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/database_migration_service_private_connection#delete DatabaseMigrationServicePrivateConnection#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/database_migration_service_private_connection#update DatabaseMigrationServicePrivateConnection#update}.

---

### DatabaseMigrationServicePrivateConnectionVpcPeeringConfig <a name="DatabaseMigrationServicePrivateConnectionVpcPeeringConfig" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DatabaseMigrationServicePrivateConnectionVpcPeeringConfig {
    string Subnet,
    string VpcName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfig.property.subnet">Subnet</a></code> | <code>string</code> | A free subnet for peering. (CIDR of /29). |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfig.property.vpcName">VpcName</a></code> | <code>string</code> | Fully qualified name of the VPC that Database Migration Service will peer to. Format: projects/{project}/global/{networks}/{name}. |

---

##### `Subnet`<sup>Required</sup> <a name="Subnet" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfig.property.subnet"></a>

```csharp
public string Subnet { get; set; }
```

- *Type:* string

A free subnet for peering. (CIDR of /29).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/database_migration_service_private_connection#subnet DatabaseMigrationServicePrivateConnection#subnet}

---

##### `VpcName`<sup>Required</sup> <a name="VpcName" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfig.property.vpcName"></a>

```csharp
public string VpcName { get; set; }
```

- *Type:* string

Fully qualified name of the VPC that Database Migration Service will peer to. Format: projects/{project}/global/{networks}/{name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/database_migration_service_private_connection#vpc_name DatabaseMigrationServicePrivateConnection#vpc_name}

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseMigrationServicePrivateConnectionErrorList <a name="DatabaseMigrationServicePrivateConnectionErrorList" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DatabaseMigrationServicePrivateConnectionErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.get"></a>

```csharp
private DatabaseMigrationServicePrivateConnectionErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatabaseMigrationServicePrivateConnectionErrorOutputReference <a name="DatabaseMigrationServicePrivateConnectionErrorOutputReference" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DatabaseMigrationServicePrivateConnectionErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.property.details">Details</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionError">DatabaseMigrationServicePrivateConnectionError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.property.details"></a>

```csharp
public StringMap Details { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionErrorOutputReference.property.internalValue"></a>

```csharp
public DatabaseMigrationServicePrivateConnectionError InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionError">DatabaseMigrationServicePrivateConnectionError</a>

---


### DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference <a name="DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference <a name="DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.subnetInput">SubnetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.vpcNameInput">VpcNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.subnet">Subnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.vpcName">VpcName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfig">DatabaseMigrationServicePrivateConnectionVpcPeeringConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SubnetInput`<sup>Optional</sup> <a name="SubnetInput" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.subnetInput"></a>

```csharp
public string SubnetInput { get; }
```

- *Type:* string

---

##### `VpcNameInput`<sup>Optional</sup> <a name="VpcNameInput" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.vpcNameInput"></a>

```csharp
public string VpcNameInput { get; }
```

- *Type:* string

---

##### `Subnet`<sup>Required</sup> <a name="Subnet" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.subnet"></a>

```csharp
public string Subnet { get; }
```

- *Type:* string

---

##### `VpcName`<sup>Required</sup> <a name="VpcName" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.vpcName"></a>

```csharp
public string VpcName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfigOutputReference.property.internalValue"></a>

```csharp
public DatabaseMigrationServicePrivateConnectionVpcPeeringConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.databaseMigrationServicePrivateConnection.DatabaseMigrationServicePrivateConnectionVpcPeeringConfig">DatabaseMigrationServicePrivateConnectionVpcPeeringConfig</a>

---



