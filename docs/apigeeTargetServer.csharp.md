# `apigeeTargetServer` Submodule <a name="`apigeeTargetServer` Submodule" id="@cdktf/provider-google.apigeeTargetServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeTargetServer <a name="ApigeeTargetServer" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/apigee_target_server google_apigee_target_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeTargetServer(Construct Scope, string Id, ApigeeTargetServerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig">ApigeeTargetServerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig">ApigeeTargetServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.putSSlInfo">PutSSlInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.resetSSlInfo">ResetSSlInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSSlInfo` <a name="PutSSlInfo" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.putSSlInfo"></a>

```csharp
private void PutSSlInfo(ApigeeTargetServerSSlInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.putSSlInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo">ApigeeTargetServerSSlInfo</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.putTimeouts"></a>

```csharp
private void PutTimeouts(ApigeeTargetServerTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts">ApigeeTargetServerTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetSSlInfo` <a name="ResetSSlInfo" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.resetSSlInfo"></a>

```csharp
private void ResetSSlInfo()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApigeeTargetServer resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ApigeeTargetServer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ApigeeTargetServer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ApigeeTargetServer.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ApigeeTargetServer.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ApigeeTargetServer resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigeeTargetServer to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigeeTargetServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/apigee_target_server#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ApigeeTargetServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.sSlInfo">SSlInfo</a></code> | <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference">ApigeeTargetServerSSlInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference">ApigeeTargetServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.envIdInput">EnvIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.isEnabledInput">IsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.sSlInfoInput">SSlInfoInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo">ApigeeTargetServerSSlInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.envId">EnvId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.isEnabled">IsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `SSlInfo`<sup>Required</sup> <a name="SSlInfo" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.sSlInfo"></a>

```csharp
public ApigeeTargetServerSSlInfoOutputReference SSlInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference">ApigeeTargetServerSSlInfoOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.timeouts"></a>

```csharp
public ApigeeTargetServerTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference">ApigeeTargetServerTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnvIdInput`<sup>Optional</sup> <a name="EnvIdInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.envIdInput"></a>

```csharp
public string EnvIdInput { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.isEnabledInput"></a>

```csharp
public object IsEnabledInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `SSlInfoInput`<sup>Optional</sup> <a name="SSlInfoInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.sSlInfoInput"></a>

```csharp
public ApigeeTargetServerSSlInfo SSlInfoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo">ApigeeTargetServerSSlInfo</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EnvId`<sup>Required</sup> <a name="EnvId" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.envId"></a>

```csharp
public string EnvId { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.isEnabled"></a>

```csharp
public object IsEnabled { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeTargetServerConfig <a name="ApigeeTargetServerConfig" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeTargetServerConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string EnvId,
    string Host,
    string Name,
    double Port,
    string Description = null,
    string Id = null,
    object IsEnabled = null,
    string Protocol = null,
    ApigeeTargetServerSSlInfo SSlInfo = null,
    ApigeeTargetServerTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.envId">EnvId</a></code> | <code>string</code> | The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}'. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.host">Host</a></code> | <code>string</code> | The host name this target connects to. Value must be a valid hostname as described by RFC-1123. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.name">Name</a></code> | <code>string</code> | The resource id of this reference. Values must match the regular expression [\w\s-.]+. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.port">Port</a></code> | <code>double</code> | The port number this target connects to on the given host. Value must be between 1 and 65535, inclusive. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.description">Description</a></code> | <code>string</code> | A human-readable description of this TargetServer. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/apigee_target_server#id ApigeeTargetServer#id}. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.isEnabled">IsEnabled</a></code> | <code>object</code> | Enabling/disabling a TargetServer is useful when TargetServers are used in load balancing configurations, and one or more TargetServers need to taken out of rotation periodically. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.protocol">Protocol</a></code> | <code>string</code> | Immutable. The protocol used by this TargetServer. Possible values: ["HTTP", "HTTP2", "GRPC_TARGET", "GRPC", "EXTERNAL_CALLOUT"]. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.sSlInfo">SSlInfo</a></code> | <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo">ApigeeTargetServerSSlInfo</a></code> | s_sl_info block. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts">ApigeeTargetServerTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EnvId`<sup>Required</sup> <a name="EnvId" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.envId"></a>

```csharp
public string EnvId { get; set; }
```

- *Type:* string

The Apigee environment group associated with the Apigee environment, in the format 'organizations/{{org_name}}/environments/{{env_name}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/apigee_target_server#env_id ApigeeTargetServer#env_id}

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

The host name this target connects to. Value must be a valid hostname as described by RFC-1123.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/apigee_target_server#host ApigeeTargetServer#host}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The resource id of this reference. Values must match the regular expression [\w\s-.]+.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/apigee_target_server#name ApigeeTargetServer#name}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The port number this target connects to on the given host. Value must be between 1 and 65535, inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/apigee_target_server#port ApigeeTargetServer#port}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A human-readable description of this TargetServer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/apigee_target_server#description ApigeeTargetServer#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/apigee_target_server#id ApigeeTargetServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.isEnabled"></a>

```csharp
public object IsEnabled { get; set; }
```

- *Type:* object

Enabling/disabling a TargetServer is useful when TargetServers are used in load balancing configurations, and one or more TargetServers need to taken out of rotation periodically.

Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/apigee_target_server#is_enabled ApigeeTargetServer#is_enabled}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Immutable. The protocol used by this TargetServer. Possible values: ["HTTP", "HTTP2", "GRPC_TARGET", "GRPC", "EXTERNAL_CALLOUT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/apigee_target_server#protocol ApigeeTargetServer#protocol}

---

##### `SSlInfo`<sup>Optional</sup> <a name="SSlInfo" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.sSlInfo"></a>

```csharp
public ApigeeTargetServerSSlInfo SSlInfo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo">ApigeeTargetServerSSlInfo</a>

s_sl_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/apigee_target_server#s_sl_info ApigeeTargetServer#s_sl_info}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerConfig.property.timeouts"></a>

```csharp
public ApigeeTargetServerTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts">ApigeeTargetServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/apigee_target_server#timeouts ApigeeTargetServer#timeouts}

---

### ApigeeTargetServerSSlInfo <a name="ApigeeTargetServerSSlInfo" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeTargetServerSSlInfo {
    object Enabled,
    string[] Ciphers = null,
    object ClientAuthEnabled = null,
    ApigeeTargetServerSSlInfoCommonName CommonName = null,
    object IgnoreValidationErrors = null,
    string KeyAlias = null,
    string KeyStore = null,
    string[] Protocols = null,
    string TrustStore = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.enabled">Enabled</a></code> | <code>object</code> | Enables TLS. If false, neither one-way nor two-way TLS will be enabled. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.ciphers">Ciphers</a></code> | <code>string[]</code> | The SSL/TLS cipher suites to be used. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.clientAuthEnabled">ClientAuthEnabled</a></code> | <code>object</code> | Enables two-way TLS. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.commonName">CommonName</a></code> | <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName">ApigeeTargetServerSSlInfoCommonName</a></code> | common_name block. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.ignoreValidationErrors">IgnoreValidationErrors</a></code> | <code>object</code> | If true, Edge ignores TLS certificate errors. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.keyAlias">KeyAlias</a></code> | <code>string</code> | Required if clientAuthEnabled is true. The resource ID for the alias containing the private key and cert. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.keyStore">KeyStore</a></code> | <code>string</code> | Required if clientAuthEnabled is true. The resource ID of the keystore. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.protocols">Protocols</a></code> | <code>string[]</code> | The TLS versioins to be used. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.trustStore">TrustStore</a></code> | <code>string</code> | The resource ID of the truststore. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Enables TLS. If false, neither one-way nor two-way TLS will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/apigee_target_server#enabled ApigeeTargetServer#enabled}

---

##### `Ciphers`<sup>Optional</sup> <a name="Ciphers" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.ciphers"></a>

```csharp
public string[] Ciphers { get; set; }
```

- *Type:* string[]

The SSL/TLS cipher suites to be used.

For programmable proxies, it must be one of the cipher suite names listed in: http://docs.oracle.com/javase/8/docs/technotes/guides/security/StandardNames.html#ciphersuites. For configurable proxies, it must follow the configuration specified in: https://commondatastorage.googleapis.com/chromium-boringssl-docs/ssl.h.html#Cipher-suite-configuration. This setting has no effect for configurable proxies when negotiating TLS 1.3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/apigee_target_server#ciphers ApigeeTargetServer#ciphers}

---

##### `ClientAuthEnabled`<sup>Optional</sup> <a name="ClientAuthEnabled" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.clientAuthEnabled"></a>

```csharp
public object ClientAuthEnabled { get; set; }
```

- *Type:* object

Enables two-way TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/apigee_target_server#client_auth_enabled ApigeeTargetServer#client_auth_enabled}

---

##### `CommonName`<sup>Optional</sup> <a name="CommonName" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.commonName"></a>

```csharp
public ApigeeTargetServerSSlInfoCommonName CommonName { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName">ApigeeTargetServerSSlInfoCommonName</a>

common_name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/apigee_target_server#common_name ApigeeTargetServer#common_name}

---

##### `IgnoreValidationErrors`<sup>Optional</sup> <a name="IgnoreValidationErrors" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.ignoreValidationErrors"></a>

```csharp
public object IgnoreValidationErrors { get; set; }
```

- *Type:* object

If true, Edge ignores TLS certificate errors.

Valid when configuring TLS for target servers and target endpoints, and when configuring virtual hosts that use 2-way TLS. When used with a target endpoint/target server, if the backend system uses SNI and returns a cert with a subject Distinguished Name (DN) that does not match the hostname, there is no way to ignore the error and the connection fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/apigee_target_server#ignore_validation_errors ApigeeTargetServer#ignore_validation_errors}

---

##### `KeyAlias`<sup>Optional</sup> <a name="KeyAlias" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.keyAlias"></a>

```csharp
public string KeyAlias { get; set; }
```

- *Type:* string

Required if clientAuthEnabled is true. The resource ID for the alias containing the private key and cert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/apigee_target_server#key_alias ApigeeTargetServer#key_alias}

---

##### `KeyStore`<sup>Optional</sup> <a name="KeyStore" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.keyStore"></a>

```csharp
public string KeyStore { get; set; }
```

- *Type:* string

Required if clientAuthEnabled is true. The resource ID of the keystore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/apigee_target_server#key_store ApigeeTargetServer#key_store}

---

##### `Protocols`<sup>Optional</sup> <a name="Protocols" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.protocols"></a>

```csharp
public string[] Protocols { get; set; }
```

- *Type:* string[]

The TLS versioins to be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/apigee_target_server#protocols ApigeeTargetServer#protocols}

---

##### `TrustStore`<sup>Optional</sup> <a name="TrustStore" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo.property.trustStore"></a>

```csharp
public string TrustStore { get; set; }
```

- *Type:* string

The resource ID of the truststore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/apigee_target_server#trust_store ApigeeTargetServer#trust_store}

---

### ApigeeTargetServerSSlInfoCommonName <a name="ApigeeTargetServerSSlInfoCommonName" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeTargetServerSSlInfoCommonName {
    string Value = null,
    object WildcardMatch = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName.property.value">Value</a></code> | <code>string</code> | The TLS Common Name string of the certificate. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName.property.wildcardMatch">WildcardMatch</a></code> | <code>object</code> | Indicates whether the cert should be matched against as a wildcard cert. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The TLS Common Name string of the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/apigee_target_server#value ApigeeTargetServer#value}

---

##### `WildcardMatch`<sup>Optional</sup> <a name="WildcardMatch" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName.property.wildcardMatch"></a>

```csharp
public object WildcardMatch { get; set; }
```

- *Type:* object

Indicates whether the cert should be matched against as a wildcard cert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/apigee_target_server#wildcard_match ApigeeTargetServer#wildcard_match}

---

### ApigeeTargetServerTimeouts <a name="ApigeeTargetServerTimeouts" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeTargetServerTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/apigee_target_server#create ApigeeTargetServer#create}. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/apigee_target_server#delete ApigeeTargetServer#delete}. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/apigee_target_server#update ApigeeTargetServer#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/apigee_target_server#create ApigeeTargetServer#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/apigee_target_server#delete ApigeeTargetServer#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/apigee_target_server#update ApigeeTargetServer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeTargetServerSSlInfoCommonNameOutputReference <a name="ApigeeTargetServerSSlInfoCommonNameOutputReference" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeTargetServerSSlInfoCommonNameOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.resetWildcardMatch">ResetWildcardMatch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```

##### `ResetWildcardMatch` <a name="ResetWildcardMatch" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.resetWildcardMatch"></a>

```csharp
private void ResetWildcardMatch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.wildcardMatchInput">WildcardMatchInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.wildcardMatch">WildcardMatch</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName">ApigeeTargetServerSSlInfoCommonName</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `WildcardMatchInput`<sup>Optional</sup> <a name="WildcardMatchInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.wildcardMatchInput"></a>

```csharp
public object WildcardMatchInput { get; }
```

- *Type:* object

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `WildcardMatch`<sup>Required</sup> <a name="WildcardMatch" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.wildcardMatch"></a>

```csharp
public object WildcardMatch { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference.property.internalValue"></a>

```csharp
public ApigeeTargetServerSSlInfoCommonName InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName">ApigeeTargetServerSSlInfoCommonName</a>

---


### ApigeeTargetServerSSlInfoOutputReference <a name="ApigeeTargetServerSSlInfoOutputReference" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeTargetServerSSlInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.putCommonName">PutCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetCiphers">ResetCiphers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetClientAuthEnabled">ResetClientAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetCommonName">ResetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetIgnoreValidationErrors">ResetIgnoreValidationErrors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetKeyAlias">ResetKeyAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetKeyStore">ResetKeyStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetProtocols">ResetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetTrustStore">ResetTrustStore</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCommonName` <a name="PutCommonName" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.putCommonName"></a>

```csharp
private void PutCommonName(ApigeeTargetServerSSlInfoCommonName Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.putCommonName.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName">ApigeeTargetServerSSlInfoCommonName</a>

---

##### `ResetCiphers` <a name="ResetCiphers" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetCiphers"></a>

```csharp
private void ResetCiphers()
```

##### `ResetClientAuthEnabled` <a name="ResetClientAuthEnabled" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetClientAuthEnabled"></a>

```csharp
private void ResetClientAuthEnabled()
```

##### `ResetCommonName` <a name="ResetCommonName" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetCommonName"></a>

```csharp
private void ResetCommonName()
```

##### `ResetIgnoreValidationErrors` <a name="ResetIgnoreValidationErrors" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetIgnoreValidationErrors"></a>

```csharp
private void ResetIgnoreValidationErrors()
```

##### `ResetKeyAlias` <a name="ResetKeyAlias" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetKeyAlias"></a>

```csharp
private void ResetKeyAlias()
```

##### `ResetKeyStore` <a name="ResetKeyStore" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetKeyStore"></a>

```csharp
private void ResetKeyStore()
```

##### `ResetProtocols` <a name="ResetProtocols" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetProtocols"></a>

```csharp
private void ResetProtocols()
```

##### `ResetTrustStore` <a name="ResetTrustStore" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.resetTrustStore"></a>

```csharp
private void ResetTrustStore()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.commonName">CommonName</a></code> | <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference">ApigeeTargetServerSSlInfoCommonNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.ciphersInput">CiphersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.clientAuthEnabledInput">ClientAuthEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.commonNameInput">CommonNameInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName">ApigeeTargetServerSSlInfoCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.ignoreValidationErrorsInput">IgnoreValidationErrorsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.keyAliasInput">KeyAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.keyStoreInput">KeyStoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.protocolsInput">ProtocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.trustStoreInput">TrustStoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.ciphers">Ciphers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.clientAuthEnabled">ClientAuthEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.ignoreValidationErrors">IgnoreValidationErrors</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.keyAlias">KeyAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.keyStore">KeyStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.protocols">Protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.trustStore">TrustStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo">ApigeeTargetServerSSlInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.commonName"></a>

```csharp
public ApigeeTargetServerSSlInfoCommonNameOutputReference CommonName { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonNameOutputReference">ApigeeTargetServerSSlInfoCommonNameOutputReference</a>

---

##### `CiphersInput`<sup>Optional</sup> <a name="CiphersInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.ciphersInput"></a>

```csharp
public string[] CiphersInput { get; }
```

- *Type:* string[]

---

##### `ClientAuthEnabledInput`<sup>Optional</sup> <a name="ClientAuthEnabledInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.clientAuthEnabledInput"></a>

```csharp
public object ClientAuthEnabledInput { get; }
```

- *Type:* object

---

##### `CommonNameInput`<sup>Optional</sup> <a name="CommonNameInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.commonNameInput"></a>

```csharp
public ApigeeTargetServerSSlInfoCommonName CommonNameInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoCommonName">ApigeeTargetServerSSlInfoCommonName</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IgnoreValidationErrorsInput`<sup>Optional</sup> <a name="IgnoreValidationErrorsInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.ignoreValidationErrorsInput"></a>

```csharp
public object IgnoreValidationErrorsInput { get; }
```

- *Type:* object

---

##### `KeyAliasInput`<sup>Optional</sup> <a name="KeyAliasInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.keyAliasInput"></a>

```csharp
public string KeyAliasInput { get; }
```

- *Type:* string

---

##### `KeyStoreInput`<sup>Optional</sup> <a name="KeyStoreInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.keyStoreInput"></a>

```csharp
public string KeyStoreInput { get; }
```

- *Type:* string

---

##### `ProtocolsInput`<sup>Optional</sup> <a name="ProtocolsInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.protocolsInput"></a>

```csharp
public string[] ProtocolsInput { get; }
```

- *Type:* string[]

---

##### `TrustStoreInput`<sup>Optional</sup> <a name="TrustStoreInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.trustStoreInput"></a>

```csharp
public string TrustStoreInput { get; }
```

- *Type:* string

---

##### `Ciphers`<sup>Required</sup> <a name="Ciphers" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.ciphers"></a>

```csharp
public string[] Ciphers { get; }
```

- *Type:* string[]

---

##### `ClientAuthEnabled`<sup>Required</sup> <a name="ClientAuthEnabled" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.clientAuthEnabled"></a>

```csharp
public object ClientAuthEnabled { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `IgnoreValidationErrors`<sup>Required</sup> <a name="IgnoreValidationErrors" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.ignoreValidationErrors"></a>

```csharp
public object IgnoreValidationErrors { get; }
```

- *Type:* object

---

##### `KeyAlias`<sup>Required</sup> <a name="KeyAlias" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.keyAlias"></a>

```csharp
public string KeyAlias { get; }
```

- *Type:* string

---

##### `KeyStore`<sup>Required</sup> <a name="KeyStore" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.keyStore"></a>

```csharp
public string KeyStore { get; }
```

- *Type:* string

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.protocols"></a>

```csharp
public string[] Protocols { get; }
```

- *Type:* string[]

---

##### `TrustStore`<sup>Required</sup> <a name="TrustStore" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.trustStore"></a>

```csharp
public string TrustStore { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfoOutputReference.property.internalValue"></a>

```csharp
public ApigeeTargetServerSSlInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerSSlInfo">ApigeeTargetServerSSlInfo</a>

---


### ApigeeTargetServerTimeoutsOutputReference <a name="ApigeeTargetServerTimeoutsOutputReference" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeTargetServerTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeTargetServer.ApigeeTargetServerTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



