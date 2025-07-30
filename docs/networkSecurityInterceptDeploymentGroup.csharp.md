# `networkSecurityInterceptDeploymentGroup` Submodule <a name="`networkSecurityInterceptDeploymentGroup` Submodule" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityInterceptDeploymentGroup <a name="NetworkSecurityInterceptDeploymentGroup" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_intercept_deployment_group google_network_security_intercept_deployment_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityInterceptDeploymentGroup(Construct Scope, string Id, NetworkSecurityInterceptDeploymentGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig">NetworkSecurityInterceptDeploymentGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig">NetworkSecurityInterceptDeploymentGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkSecurityInterceptDeploymentGroupTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeouts">NetworkSecurityInterceptDeploymentGroupTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkSecurityInterceptDeploymentGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkSecurityInterceptDeploymentGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkSecurityInterceptDeploymentGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkSecurityInterceptDeploymentGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

NetworkSecurityInterceptDeploymentGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a NetworkSecurityInterceptDeploymentGroup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkSecurityInterceptDeploymentGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkSecurityInterceptDeploymentGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_intercept_deployment_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the NetworkSecurityInterceptDeploymentGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.connectedEndpointGroups">ConnectedEndpointGroups</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList">NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.locations">Locations</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList">NetworkSecurityInterceptDeploymentGroupLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.reconciling">Reconciling</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference">NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.interceptDeploymentGroupIdInput">InterceptDeploymentGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.interceptDeploymentGroupId">InterceptDeploymentGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ConnectedEndpointGroups`<sup>Required</sup> <a name="ConnectedEndpointGroups" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.connectedEndpointGroups"></a>

```csharp
public NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList ConnectedEndpointGroups { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList">NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.locations"></a>

```csharp
public NetworkSecurityInterceptDeploymentGroupLocationsList Locations { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList">NetworkSecurityInterceptDeploymentGroupLocationsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.reconciling"></a>

```csharp
public IResolvable Reconciling { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.timeouts"></a>

```csharp
public NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference">NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InterceptDeploymentGroupIdInput`<sup>Optional</sup> <a name="InterceptDeploymentGroupIdInput" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.interceptDeploymentGroupIdInput"></a>

```csharp
public string InterceptDeploymentGroupIdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InterceptDeploymentGroupId`<sup>Required</sup> <a name="InterceptDeploymentGroupId" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.interceptDeploymentGroupId"></a>

```csharp
public string InterceptDeploymentGroupId { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityInterceptDeploymentGroupConfig <a name="NetworkSecurityInterceptDeploymentGroupConfig" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityInterceptDeploymentGroupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string InterceptDeploymentGroupId,
    string Location,
    string Network,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    NetworkSecurityInterceptDeploymentGroupTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.interceptDeploymentGroupId">InterceptDeploymentGroupId</a></code> | <code>string</code> | The ID to use for the new deployment group, which will become the final component of the deployment group's resource name. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.location">Location</a></code> | <code>string</code> | The cloud location of the deployment group, currently restricted to 'global'. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.network">Network</a></code> | <code>string</code> | The network that will be used for all child deployments, for example: 'projects/{project}/global/networks/{network}'. See https://google.aip.dev/124. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.description">Description</a></code> | <code>string</code> | User-provided description of the deployment group. Used as additional context for the deployment group. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_intercept_deployment_group#id NetworkSecurityInterceptDeploymentGroup#id}. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels are key/value pairs that help to organize and filter resources. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_intercept_deployment_group#project NetworkSecurityInterceptDeploymentGroup#project}. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeouts">NetworkSecurityInterceptDeploymentGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `InterceptDeploymentGroupId`<sup>Required</sup> <a name="InterceptDeploymentGroupId" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.interceptDeploymentGroupId"></a>

```csharp
public string InterceptDeploymentGroupId { get; set; }
```

- *Type:* string

The ID to use for the new deployment group, which will become the final component of the deployment group's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_intercept_deployment_group#intercept_deployment_group_id NetworkSecurityInterceptDeploymentGroup#intercept_deployment_group_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The cloud location of the deployment group, currently restricted to 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_intercept_deployment_group#location NetworkSecurityInterceptDeploymentGroup#location}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The network that will be used for all child deployments, for example: 'projects/{project}/global/networks/{network}'. See https://google.aip.dev/124.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_intercept_deployment_group#network NetworkSecurityInterceptDeploymentGroup#network}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

User-provided description of the deployment group. Used as additional context for the deployment group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_intercept_deployment_group#description NetworkSecurityInterceptDeploymentGroup#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_intercept_deployment_group#id NetworkSecurityInterceptDeploymentGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels are key/value pairs that help to organize and filter resources.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_intercept_deployment_group#labels NetworkSecurityInterceptDeploymentGroup#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_intercept_deployment_group#project NetworkSecurityInterceptDeploymentGroup#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConfig.property.timeouts"></a>

```csharp
public NetworkSecurityInterceptDeploymentGroupTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeouts">NetworkSecurityInterceptDeploymentGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_intercept_deployment_group#timeouts NetworkSecurityInterceptDeploymentGroup#timeouts}

---

### NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups <a name="NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups {

};
```


### NetworkSecurityInterceptDeploymentGroupLocations <a name="NetworkSecurityInterceptDeploymentGroupLocations" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityInterceptDeploymentGroupLocations {

};
```


### NetworkSecurityInterceptDeploymentGroupTimeouts <a name="NetworkSecurityInterceptDeploymentGroupTimeouts" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityInterceptDeploymentGroupTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_intercept_deployment_group#create NetworkSecurityInterceptDeploymentGroup#create}. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_intercept_deployment_group#delete NetworkSecurityInterceptDeploymentGroup#delete}. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_intercept_deployment_group#update NetworkSecurityInterceptDeploymentGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_intercept_deployment_group#create NetworkSecurityInterceptDeploymentGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_intercept_deployment_group#delete NetworkSecurityInterceptDeploymentGroup#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/network_security_intercept_deployment_group#update NetworkSecurityInterceptDeploymentGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList <a name="NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.get"></a>

```csharp
private NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference <a name="NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups">NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroupsOutputReference.property.internalValue"></a>

```csharp
public NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups">NetworkSecurityInterceptDeploymentGroupConnectedEndpointGroups</a>

---


### NetworkSecurityInterceptDeploymentGroupLocationsList <a name="NetworkSecurityInterceptDeploymentGroupLocationsList" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityInterceptDeploymentGroupLocationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.get"></a>

```csharp
private NetworkSecurityInterceptDeploymentGroupLocationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### NetworkSecurityInterceptDeploymentGroupLocationsOutputReference <a name="NetworkSecurityInterceptDeploymentGroupLocationsOutputReference" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityInterceptDeploymentGroupLocationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocations">NetworkSecurityInterceptDeploymentGroupLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocationsOutputReference.property.internalValue"></a>

```csharp
public NetworkSecurityInterceptDeploymentGroupLocations InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupLocations">NetworkSecurityInterceptDeploymentGroupLocations</a>

---


### NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference <a name="NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkSecurityInterceptDeploymentGroup.NetworkSecurityInterceptDeploymentGroupTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



