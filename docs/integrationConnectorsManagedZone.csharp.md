# `integrationConnectorsManagedZone` Submodule <a name="`integrationConnectorsManagedZone` Submodule" id="@cdktf/provider-google.integrationConnectorsManagedZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationConnectorsManagedZone <a name="IntegrationConnectorsManagedZone" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/integration_connectors_managed_zone google_integration_connectors_managed_zone}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IntegrationConnectorsManagedZone(Construct Scope, string Id, IntegrationConnectorsManagedZoneConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig">IntegrationConnectorsManagedZoneConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig">IntegrationConnectorsManagedZoneConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.putTimeouts"></a>

```csharp
private void PutTimeouts(IntegrationConnectorsManagedZoneTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeouts">IntegrationConnectorsManagedZoneTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationConnectorsManagedZone resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IntegrationConnectorsManagedZone.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IntegrationConnectorsManagedZone.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IntegrationConnectorsManagedZone.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IntegrationConnectorsManagedZone.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IntegrationConnectorsManagedZone resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IntegrationConnectorsManagedZone to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IntegrationConnectorsManagedZone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/integration_connectors_managed_zone#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationConnectorsManagedZone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference">IntegrationConnectorsManagedZoneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.dnsInput">DnsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.targetProjectInput">TargetProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.targetVpcInput">TargetVpcInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.dns">Dns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.targetProject">TargetProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.targetVpc">TargetVpc</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.timeouts"></a>

```csharp
public IntegrationConnectorsManagedZoneTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference">IntegrationConnectorsManagedZoneTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DnsInput`<sup>Optional</sup> <a name="DnsInput" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.dnsInput"></a>

```csharp
public string DnsInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TargetProjectInput`<sup>Optional</sup> <a name="TargetProjectInput" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.targetProjectInput"></a>

```csharp
public string TargetProjectInput { get; }
```

- *Type:* string

---

##### `TargetVpcInput`<sup>Optional</sup> <a name="TargetVpcInput" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.targetVpcInput"></a>

```csharp
public string TargetVpcInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.dns"></a>

```csharp
public string Dns { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `TargetProject`<sup>Required</sup> <a name="TargetProject" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.targetProject"></a>

```csharp
public string TargetProject { get; }
```

- *Type:* string

---

##### `TargetVpc`<sup>Required</sup> <a name="TargetVpc" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.targetVpc"></a>

```csharp
public string TargetVpc { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZone.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationConnectorsManagedZoneConfig <a name="IntegrationConnectorsManagedZoneConfig" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IntegrationConnectorsManagedZoneConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Dns,
    string Name,
    string TargetProject,
    string TargetVpc,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    IntegrationConnectorsManagedZoneTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.dns">Dns</a></code> | <code>string</code> | DNS Name of the resource. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.name">Name</a></code> | <code>string</code> | Name of Managed Zone needs to be created. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.targetProject">TargetProject</a></code> | <code>string</code> | The name of the Target Project. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.targetVpc">TargetVpc</a></code> | <code>string</code> | The name of the Target Project VPC Network. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.description">Description</a></code> | <code>string</code> | Description of the resource. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/integration_connectors_managed_zone#id IntegrationConnectorsManagedZone#id}. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Resource labels to represent user provided metadata. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/integration_connectors_managed_zone#project IntegrationConnectorsManagedZone#project}. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeouts">IntegrationConnectorsManagedZoneTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.dns"></a>

```csharp
public string Dns { get; set; }
```

- *Type:* string

DNS Name of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/integration_connectors_managed_zone#dns IntegrationConnectorsManagedZone#dns}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of Managed Zone needs to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/integration_connectors_managed_zone#name IntegrationConnectorsManagedZone#name}

---

##### `TargetProject`<sup>Required</sup> <a name="TargetProject" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.targetProject"></a>

```csharp
public string TargetProject { get; set; }
```

- *Type:* string

The name of the Target Project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/integration_connectors_managed_zone#target_project IntegrationConnectorsManagedZone#target_project}

---

##### `TargetVpc`<sup>Required</sup> <a name="TargetVpc" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.targetVpc"></a>

```csharp
public string TargetVpc { get; set; }
```

- *Type:* string

The name of the Target Project VPC Network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/integration_connectors_managed_zone#target_vpc IntegrationConnectorsManagedZone#target_vpc}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/integration_connectors_managed_zone#description IntegrationConnectorsManagedZone#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/integration_connectors_managed_zone#id IntegrationConnectorsManagedZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/integration_connectors_managed_zone#labels IntegrationConnectorsManagedZone#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/integration_connectors_managed_zone#project IntegrationConnectorsManagedZone#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneConfig.property.timeouts"></a>

```csharp
public IntegrationConnectorsManagedZoneTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeouts">IntegrationConnectorsManagedZoneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/integration_connectors_managed_zone#timeouts IntegrationConnectorsManagedZone#timeouts}

---

### IntegrationConnectorsManagedZoneTimeouts <a name="IntegrationConnectorsManagedZoneTimeouts" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IntegrationConnectorsManagedZoneTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/integration_connectors_managed_zone#create IntegrationConnectorsManagedZone#create}. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/integration_connectors_managed_zone#delete IntegrationConnectorsManagedZone#delete}. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/integration_connectors_managed_zone#update IntegrationConnectorsManagedZone#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/integration_connectors_managed_zone#create IntegrationConnectorsManagedZone#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/integration_connectors_managed_zone#delete IntegrationConnectorsManagedZone#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/integration_connectors_managed_zone#update IntegrationConnectorsManagedZone#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationConnectorsManagedZoneTimeoutsOutputReference <a name="IntegrationConnectorsManagedZoneTimeoutsOutputReference" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IntegrationConnectorsManagedZoneTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.integrationConnectorsManagedZone.IntegrationConnectorsManagedZoneTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



