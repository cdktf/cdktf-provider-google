# `datastreamPrivateConnection` Submodule <a name="`datastreamPrivateConnection` Submodule" id="@cdktf/provider-google.datastreamPrivateConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatastreamPrivateConnection <a name="DatastreamPrivateConnection" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/datastream_private_connection google_datastream_private_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DatastreamPrivateConnection(Construct Scope, string Id, DatastreamPrivateConnectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig">DatastreamPrivateConnectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig">DatastreamPrivateConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.putVpcPeeringConfig">PutVpcPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.resetCreateWithoutValidation">ResetCreateWithoutValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.putTimeouts"></a>

```csharp
private void PutTimeouts(DatastreamPrivateConnectionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeouts">DatastreamPrivateConnectionTimeouts</a>

---

##### `PutVpcPeeringConfig` <a name="PutVpcPeeringConfig" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.putVpcPeeringConfig"></a>

```csharp
private void PutVpcPeeringConfig(DatastreamPrivateConnectionVpcPeeringConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.putVpcPeeringConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfig">DatastreamPrivateConnectionVpcPeeringConfig</a>

---

##### `ResetCreateWithoutValidation` <a name="ResetCreateWithoutValidation" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.resetCreateWithoutValidation"></a>

```csharp
private void ResetCreateWithoutValidation()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatastreamPrivateConnection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DatastreamPrivateConnection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DatastreamPrivateConnection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DatastreamPrivateConnection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DatastreamPrivateConnection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatastreamPrivateConnection resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatastreamPrivateConnection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatastreamPrivateConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/datastream_private_connection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatastreamPrivateConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.error">Error</a></code> | <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList">DatastreamPrivateConnectionErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference">DatastreamPrivateConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.vpcPeeringConfig">VpcPeeringConfig</a></code> | <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference">DatastreamPrivateConnectionVpcPeeringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.createWithoutValidationInput">CreateWithoutValidationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.privateConnectionIdInput">PrivateConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.vpcPeeringConfigInput">VpcPeeringConfigInput</a></code> | <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfig">DatastreamPrivateConnectionVpcPeeringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.createWithoutValidation">CreateWithoutValidation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.privateConnectionId">PrivateConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.error"></a>

```csharp
public DatastreamPrivateConnectionErrorList Error { get; }
```

- *Type:* <a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList">DatastreamPrivateConnectionErrorList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.timeouts"></a>

```csharp
public DatastreamPrivateConnectionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference">DatastreamPrivateConnectionTimeoutsOutputReference</a>

---

##### `VpcPeeringConfig`<sup>Required</sup> <a name="VpcPeeringConfig" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.vpcPeeringConfig"></a>

```csharp
public DatastreamPrivateConnectionVpcPeeringConfigOutputReference VpcPeeringConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference">DatastreamPrivateConnectionVpcPeeringConfigOutputReference</a>

---

##### `CreateWithoutValidationInput`<sup>Optional</sup> <a name="CreateWithoutValidationInput" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.createWithoutValidationInput"></a>

```csharp
public object CreateWithoutValidationInput { get; }
```

- *Type:* object

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `PrivateConnectionIdInput`<sup>Optional</sup> <a name="PrivateConnectionIdInput" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.privateConnectionIdInput"></a>

```csharp
public string PrivateConnectionIdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VpcPeeringConfigInput`<sup>Optional</sup> <a name="VpcPeeringConfigInput" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.vpcPeeringConfigInput"></a>

```csharp
public DatastreamPrivateConnectionVpcPeeringConfig VpcPeeringConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfig">DatastreamPrivateConnectionVpcPeeringConfig</a>

---

##### `CreateWithoutValidation`<sup>Required</sup> <a name="CreateWithoutValidation" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.createWithoutValidation"></a>

```csharp
public object CreateWithoutValidation { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `PrivateConnectionId`<sup>Required</sup> <a name="PrivateConnectionId" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.privateConnectionId"></a>

```csharp
public string PrivateConnectionId { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatastreamPrivateConnectionConfig <a name="DatastreamPrivateConnectionConfig" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DatastreamPrivateConnectionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName,
    string Location,
    string PrivateConnectionId,
    DatastreamPrivateConnectionVpcPeeringConfig VpcPeeringConfig,
    object CreateWithoutValidation = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    DatastreamPrivateConnectionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Display name. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.location">Location</a></code> | <code>string</code> | The name of the location this private connection is located in. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.privateConnectionId">PrivateConnectionId</a></code> | <code>string</code> | The private connectivity identifier. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.vpcPeeringConfig">VpcPeeringConfig</a></code> | <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfig">DatastreamPrivateConnectionVpcPeeringConfig</a></code> | vpc_peering_config block. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.createWithoutValidation">CreateWithoutValidation</a></code> | <code>object</code> | If set to true, will skip validations. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/datastream_private_connection#id DatastreamPrivateConnection#id}. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/datastream_private_connection#project DatastreamPrivateConnection#project}. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeouts">DatastreamPrivateConnectionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/datastream_private_connection#display_name DatastreamPrivateConnection#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The name of the location this private connection is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/datastream_private_connection#location DatastreamPrivateConnection#location}

---

##### `PrivateConnectionId`<sup>Required</sup> <a name="PrivateConnectionId" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.privateConnectionId"></a>

```csharp
public string PrivateConnectionId { get; set; }
```

- *Type:* string

The private connectivity identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/datastream_private_connection#private_connection_id DatastreamPrivateConnection#private_connection_id}

---

##### `VpcPeeringConfig`<sup>Required</sup> <a name="VpcPeeringConfig" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.vpcPeeringConfig"></a>

```csharp
public DatastreamPrivateConnectionVpcPeeringConfig VpcPeeringConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfig">DatastreamPrivateConnectionVpcPeeringConfig</a>

vpc_peering_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/datastream_private_connection#vpc_peering_config DatastreamPrivateConnection#vpc_peering_config}

---

##### `CreateWithoutValidation`<sup>Optional</sup> <a name="CreateWithoutValidation" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.createWithoutValidation"></a>

```csharp
public object CreateWithoutValidation { get; set; }
```

- *Type:* object

If set to true, will skip validations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/datastream_private_connection#create_without_validation DatastreamPrivateConnection#create_without_validation}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/datastream_private_connection#id DatastreamPrivateConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/datastream_private_connection#labels DatastreamPrivateConnection#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/datastream_private_connection#project DatastreamPrivateConnection#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionConfig.property.timeouts"></a>

```csharp
public DatastreamPrivateConnectionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeouts">DatastreamPrivateConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/datastream_private_connection#timeouts DatastreamPrivateConnection#timeouts}

---

### DatastreamPrivateConnectionError <a name="DatastreamPrivateConnectionError" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionError.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DatastreamPrivateConnectionError {

};
```


### DatastreamPrivateConnectionTimeouts <a name="DatastreamPrivateConnectionTimeouts" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DatastreamPrivateConnectionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/datastream_private_connection#create DatastreamPrivateConnection#create}. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/datastream_private_connection#delete DatastreamPrivateConnection#delete}. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/datastream_private_connection#update DatastreamPrivateConnection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/datastream_private_connection#create DatastreamPrivateConnection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/datastream_private_connection#delete DatastreamPrivateConnection#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/datastream_private_connection#update DatastreamPrivateConnection#update}.

---

### DatastreamPrivateConnectionVpcPeeringConfig <a name="DatastreamPrivateConnectionVpcPeeringConfig" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DatastreamPrivateConnectionVpcPeeringConfig {
    string Subnet,
    string Vpc
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfig.property.subnet">Subnet</a></code> | <code>string</code> | A free subnet for peering. (CIDR of /29). |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfig.property.vpc">Vpc</a></code> | <code>string</code> | Fully qualified name of the VPC that Datastream will peer to. Format: projects/{project}/global/{networks}/{name}. |

---

##### `Subnet`<sup>Required</sup> <a name="Subnet" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfig.property.subnet"></a>

```csharp
public string Subnet { get; set; }
```

- *Type:* string

A free subnet for peering. (CIDR of /29).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/datastream_private_connection#subnet DatastreamPrivateConnection#subnet}

---

##### `Vpc`<sup>Required</sup> <a name="Vpc" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfig.property.vpc"></a>

```csharp
public string Vpc { get; set; }
```

- *Type:* string

Fully qualified name of the VPC that Datastream will peer to. Format: projects/{project}/global/{networks}/{name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/datastream_private_connection#vpc DatastreamPrivateConnection#vpc}

---

## Classes <a name="Classes" id="Classes"></a>

### DatastreamPrivateConnectionErrorList <a name="DatastreamPrivateConnectionErrorList" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DatastreamPrivateConnectionErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.get"></a>

```csharp
private DatastreamPrivateConnectionErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatastreamPrivateConnectionErrorOutputReference <a name="DatastreamPrivateConnectionErrorOutputReference" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DatastreamPrivateConnectionErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.property.details">Details</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionError">DatastreamPrivateConnectionError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.property.details"></a>

```csharp
public StringMap Details { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionErrorOutputReference.property.internalValue"></a>

```csharp
public DatastreamPrivateConnectionError InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionError">DatastreamPrivateConnectionError</a>

---


### DatastreamPrivateConnectionTimeoutsOutputReference <a name="DatastreamPrivateConnectionTimeoutsOutputReference" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DatastreamPrivateConnectionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DatastreamPrivateConnectionVpcPeeringConfigOutputReference <a name="DatastreamPrivateConnectionVpcPeeringConfigOutputReference" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DatastreamPrivateConnectionVpcPeeringConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.subnetInput">SubnetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.vpcInput">VpcInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.subnet">Subnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.vpc">Vpc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfig">DatastreamPrivateConnectionVpcPeeringConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SubnetInput`<sup>Optional</sup> <a name="SubnetInput" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.subnetInput"></a>

```csharp
public string SubnetInput { get; }
```

- *Type:* string

---

##### `VpcInput`<sup>Optional</sup> <a name="VpcInput" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.vpcInput"></a>

```csharp
public string VpcInput { get; }
```

- *Type:* string

---

##### `Subnet`<sup>Required</sup> <a name="Subnet" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.subnet"></a>

```csharp
public string Subnet { get; }
```

- *Type:* string

---

##### `Vpc`<sup>Required</sup> <a name="Vpc" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.vpc"></a>

```csharp
public string Vpc { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfigOutputReference.property.internalValue"></a>

```csharp
public DatastreamPrivateConnectionVpcPeeringConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.datastreamPrivateConnection.DatastreamPrivateConnectionVpcPeeringConfig">DatastreamPrivateConnectionVpcPeeringConfig</a>

---



