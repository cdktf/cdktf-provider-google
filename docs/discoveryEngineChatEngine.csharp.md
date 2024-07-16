# `discoveryEngineChatEngine` Submodule <a name="`discoveryEngineChatEngine` Submodule" id="@cdktf/provider-google.discoveryEngineChatEngine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineChatEngine <a name="DiscoveryEngineChatEngine" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/discovery_engine_chat_engine google_discovery_engine_chat_engine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DiscoveryEngineChatEngine(Construct Scope, string Id, DiscoveryEngineChatEngineConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig">DiscoveryEngineChatEngineConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig">DiscoveryEngineChatEngineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.putChatEngineConfig">PutChatEngineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.putCommonConfig">PutCommonConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.resetCommonConfig">ResetCommonConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.resetIndustryVertical">ResetIndustryVertical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutChatEngineConfig` <a name="PutChatEngineConfig" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.putChatEngineConfig"></a>

```csharp
private void PutChatEngineConfig(DiscoveryEngineChatEngineChatEngineConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.putChatEngineConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfig">DiscoveryEngineChatEngineChatEngineConfig</a>

---

##### `PutCommonConfig` <a name="PutCommonConfig" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.putCommonConfig"></a>

```csharp
private void PutCommonConfig(DiscoveryEngineChatEngineCommonConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.putCommonConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfig">DiscoveryEngineChatEngineCommonConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.putTimeouts"></a>

```csharp
private void PutTimeouts(DiscoveryEngineChatEngineTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeouts">DiscoveryEngineChatEngineTimeouts</a>

---

##### `ResetCommonConfig` <a name="ResetCommonConfig" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.resetCommonConfig"></a>

```csharp
private void ResetCommonConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIndustryVertical` <a name="ResetIndustryVertical" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.resetIndustryVertical"></a>

```csharp
private void ResetIndustryVertical()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DiscoveryEngineChatEngine resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DiscoveryEngineChatEngine.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DiscoveryEngineChatEngine.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DiscoveryEngineChatEngine.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DiscoveryEngineChatEngine.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DiscoveryEngineChatEngine resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DiscoveryEngineChatEngine to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DiscoveryEngineChatEngine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/discovery_engine_chat_engine#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineChatEngine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.chatEngineConfig">ChatEngineConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference">DiscoveryEngineChatEngineChatEngineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.chatEngineMetadata">ChatEngineMetadata</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList">DiscoveryEngineChatEngineChatEngineMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.commonConfig">CommonConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference">DiscoveryEngineChatEngineCommonConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference">DiscoveryEngineChatEngineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.chatEngineConfigInput">ChatEngineConfigInput</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfig">DiscoveryEngineChatEngineChatEngineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.collectionIdInput">CollectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.commonConfigInput">CommonConfigInput</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfig">DiscoveryEngineChatEngineCommonConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.dataStoreIdsInput">DataStoreIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.engineIdInput">EngineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.industryVerticalInput">IndustryVerticalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.collectionId">CollectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.dataStoreIds">DataStoreIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.engineId">EngineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.industryVertical">IndustryVertical</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ChatEngineConfig`<sup>Required</sup> <a name="ChatEngineConfig" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.chatEngineConfig"></a>

```csharp
public DiscoveryEngineChatEngineChatEngineConfigOutputReference ChatEngineConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference">DiscoveryEngineChatEngineChatEngineConfigOutputReference</a>

---

##### `ChatEngineMetadata`<sup>Required</sup> <a name="ChatEngineMetadata" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.chatEngineMetadata"></a>

```csharp
public DiscoveryEngineChatEngineChatEngineMetadataList ChatEngineMetadata { get; }
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList">DiscoveryEngineChatEngineChatEngineMetadataList</a>

---

##### `CommonConfig`<sup>Required</sup> <a name="CommonConfig" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.commonConfig"></a>

```csharp
public DiscoveryEngineChatEngineCommonConfigOutputReference CommonConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference">DiscoveryEngineChatEngineCommonConfigOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.timeouts"></a>

```csharp
public DiscoveryEngineChatEngineTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference">DiscoveryEngineChatEngineTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `ChatEngineConfigInput`<sup>Optional</sup> <a name="ChatEngineConfigInput" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.chatEngineConfigInput"></a>

```csharp
public DiscoveryEngineChatEngineChatEngineConfig ChatEngineConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfig">DiscoveryEngineChatEngineChatEngineConfig</a>

---

##### `CollectionIdInput`<sup>Optional</sup> <a name="CollectionIdInput" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.collectionIdInput"></a>

```csharp
public string CollectionIdInput { get; }
```

- *Type:* string

---

##### `CommonConfigInput`<sup>Optional</sup> <a name="CommonConfigInput" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.commonConfigInput"></a>

```csharp
public DiscoveryEngineChatEngineCommonConfig CommonConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfig">DiscoveryEngineChatEngineCommonConfig</a>

---

##### `DataStoreIdsInput`<sup>Optional</sup> <a name="DataStoreIdsInput" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.dataStoreIdsInput"></a>

```csharp
public string[] DataStoreIdsInput { get; }
```

- *Type:* string[]

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EngineIdInput`<sup>Optional</sup> <a name="EngineIdInput" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.engineIdInput"></a>

```csharp
public string EngineIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IndustryVerticalInput`<sup>Optional</sup> <a name="IndustryVerticalInput" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.industryVerticalInput"></a>

```csharp
public string IndustryVerticalInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.collectionId"></a>

```csharp
public string CollectionId { get; }
```

- *Type:* string

---

##### `DataStoreIds`<sup>Required</sup> <a name="DataStoreIds" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.dataStoreIds"></a>

```csharp
public string[] DataStoreIds { get; }
```

- *Type:* string[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EngineId`<sup>Required</sup> <a name="EngineId" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.engineId"></a>

```csharp
public string EngineId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IndustryVertical`<sup>Required</sup> <a name="IndustryVertical" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.industryVertical"></a>

```csharp
public string IndustryVertical { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngine.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineChatEngineChatEngineConfig <a name="DiscoveryEngineChatEngineChatEngineConfig" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DiscoveryEngineChatEngineChatEngineConfig {
    DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig AgentCreationConfig
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfig.property.agentCreationConfig">AgentCreationConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig">DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig</a></code> | agent_creation_config block. |

---

##### `AgentCreationConfig`<sup>Required</sup> <a name="AgentCreationConfig" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfig.property.agentCreationConfig"></a>

```csharp
public DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig AgentCreationConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig">DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig</a>

agent_creation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/discovery_engine_chat_engine#agent_creation_config DiscoveryEngineChatEngine#agent_creation_config}

---

### DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig <a name="DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig {
    string DefaultLanguageCode,
    string TimeZone,
    string Business = null,
    string Location = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig.property.defaultLanguageCode">DefaultLanguageCode</a></code> | <code>string</code> | The default language of the agent as a language tag. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig.property.timeZone">TimeZone</a></code> | <code>string</code> | The time zone of the agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig.property.business">Business</a></code> | <code>string</code> | Name of the company, organization or other entity that the agent represents. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig.property.location">Location</a></code> | <code>string</code> | Agent location for Agent creation, currently supported values: global/us/eu, it needs to be the same region as the Chat Engine. |

---

##### `DefaultLanguageCode`<sup>Required</sup> <a name="DefaultLanguageCode" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig.property.defaultLanguageCode"></a>

```csharp
public string DefaultLanguageCode { get; set; }
```

- *Type:* string

The default language of the agent as a language tag.

See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/discovery_engine_chat_engine#default_language_code DiscoveryEngineChatEngine#default_language_code}

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

The time zone of the agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/discovery_engine_chat_engine#time_zone DiscoveryEngineChatEngine#time_zone}

---

##### `Business`<sup>Optional</sup> <a name="Business" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig.property.business"></a>

```csharp
public string Business { get; set; }
```

- *Type:* string

Name of the company, organization or other entity that the agent represents.

Used for knowledge connector LLM prompt and for knowledge search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/discovery_engine_chat_engine#business DiscoveryEngineChatEngine#business}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Agent location for Agent creation, currently supported values: global/us/eu, it needs to be the same region as the Chat Engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/discovery_engine_chat_engine#location DiscoveryEngineChatEngine#location}

---

### DiscoveryEngineChatEngineChatEngineMetadata <a name="DiscoveryEngineChatEngineChatEngineMetadata" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DiscoveryEngineChatEngineChatEngineMetadata {

};
```


### DiscoveryEngineChatEngineCommonConfig <a name="DiscoveryEngineChatEngineCommonConfig" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DiscoveryEngineChatEngineCommonConfig {
    string CompanyName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfig.property.companyName">CompanyName</a></code> | <code>string</code> | The name of the company, business or entity that is associated with the engine. |

---

##### `CompanyName`<sup>Optional</sup> <a name="CompanyName" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfig.property.companyName"></a>

```csharp
public string CompanyName { get; set; }
```

- *Type:* string

The name of the company, business or entity that is associated with the engine.

Setting this may help improve LLM related features.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/discovery_engine_chat_engine#company_name DiscoveryEngineChatEngine#company_name}

---

### DiscoveryEngineChatEngineConfig <a name="DiscoveryEngineChatEngineConfig" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DiscoveryEngineChatEngineConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    DiscoveryEngineChatEngineChatEngineConfig ChatEngineConfig,
    string CollectionId,
    string[] DataStoreIds,
    string DisplayName,
    string EngineId,
    string Location,
    DiscoveryEngineChatEngineCommonConfig CommonConfig = null,
    string Id = null,
    string IndustryVertical = null,
    string Project = null,
    DiscoveryEngineChatEngineTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.chatEngineConfig">ChatEngineConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfig">DiscoveryEngineChatEngineChatEngineConfig</a></code> | chat_engine_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.collectionId">CollectionId</a></code> | <code>string</code> | The collection ID. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.dataStoreIds">DataStoreIds</a></code> | <code>string[]</code> | The data stores associated with this engine. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.engineId">EngineId</a></code> | <code>string</code> | The ID to use for chat engine. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.location">Location</a></code> | <code>string</code> | Location. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.commonConfig">CommonConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfig">DiscoveryEngineChatEngineCommonConfig</a></code> | common_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/discovery_engine_chat_engine#id DiscoveryEngineChatEngine#id}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.industryVertical">IndustryVertical</a></code> | <code>string</code> | The industry vertical that the chat engine registers. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/discovery_engine_chat_engine#project DiscoveryEngineChatEngine#project}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeouts">DiscoveryEngineChatEngineTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ChatEngineConfig`<sup>Required</sup> <a name="ChatEngineConfig" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.chatEngineConfig"></a>

```csharp
public DiscoveryEngineChatEngineChatEngineConfig ChatEngineConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfig">DiscoveryEngineChatEngineChatEngineConfig</a>

chat_engine_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/discovery_engine_chat_engine#chat_engine_config DiscoveryEngineChatEngine#chat_engine_config}

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.collectionId"></a>

```csharp
public string CollectionId { get; set; }
```

- *Type:* string

The collection ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/discovery_engine_chat_engine#collection_id DiscoveryEngineChatEngine#collection_id}

---

##### `DataStoreIds`<sup>Required</sup> <a name="DataStoreIds" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.dataStoreIds"></a>

```csharp
public string[] DataStoreIds { get; set; }
```

- *Type:* string[]

The data stores associated with this engine.

Multiple DataStores in the same Collection can be associated here. All listed DataStores must be 'SOLUTION_TYPE_CHAT'. Adding or removing data stores will force recreation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/discovery_engine_chat_engine#data_store_ids DiscoveryEngineChatEngine#data_store_ids}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/discovery_engine_chat_engine#display_name DiscoveryEngineChatEngine#display_name}

---

##### `EngineId`<sup>Required</sup> <a name="EngineId" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.engineId"></a>

```csharp
public string EngineId { get; set; }
```

- *Type:* string

The ID to use for chat engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/discovery_engine_chat_engine#engine_id DiscoveryEngineChatEngine#engine_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/discovery_engine_chat_engine#location DiscoveryEngineChatEngine#location}

---

##### `CommonConfig`<sup>Optional</sup> <a name="CommonConfig" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.commonConfig"></a>

```csharp
public DiscoveryEngineChatEngineCommonConfig CommonConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfig">DiscoveryEngineChatEngineCommonConfig</a>

common_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/discovery_engine_chat_engine#common_config DiscoveryEngineChatEngine#common_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/discovery_engine_chat_engine#id DiscoveryEngineChatEngine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IndustryVertical`<sup>Optional</sup> <a name="IndustryVertical" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.industryVertical"></a>

```csharp
public string IndustryVertical { get; set; }
```

- *Type:* string

The industry vertical that the chat engine registers.

Vertical on Engine has to match vertical of the DataStore linked to the engine. Default value: "GENERIC" Possible values: ["GENERIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/discovery_engine_chat_engine#industry_vertical DiscoveryEngineChatEngine#industry_vertical}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/discovery_engine_chat_engine#project DiscoveryEngineChatEngine#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineConfig.property.timeouts"></a>

```csharp
public DiscoveryEngineChatEngineTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeouts">DiscoveryEngineChatEngineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/discovery_engine_chat_engine#timeouts DiscoveryEngineChatEngine#timeouts}

---

### DiscoveryEngineChatEngineTimeouts <a name="DiscoveryEngineChatEngineTimeouts" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DiscoveryEngineChatEngineTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/discovery_engine_chat_engine#create DiscoveryEngineChatEngine#create}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/discovery_engine_chat_engine#delete DiscoveryEngineChatEngine#delete}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/discovery_engine_chat_engine#update DiscoveryEngineChatEngine#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/discovery_engine_chat_engine#create DiscoveryEngineChatEngine#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/discovery_engine_chat_engine#delete DiscoveryEngineChatEngine#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.38.0/docs/resources/discovery_engine_chat_engine#update DiscoveryEngineChatEngine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference <a name="DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.resetBusiness">ResetBusiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBusiness` <a name="ResetBusiness" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.resetBusiness"></a>

```csharp
private void ResetBusiness()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.businessInput">BusinessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.defaultLanguageCodeInput">DefaultLanguageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.business">Business</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.defaultLanguageCode">DefaultLanguageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig">DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BusinessInput`<sup>Optional</sup> <a name="BusinessInput" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.businessInput"></a>

```csharp
public string BusinessInput { get; }
```

- *Type:* string

---

##### `DefaultLanguageCodeInput`<sup>Optional</sup> <a name="DefaultLanguageCodeInput" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.defaultLanguageCodeInput"></a>

```csharp
public string DefaultLanguageCodeInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `Business`<sup>Required</sup> <a name="Business" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.business"></a>

```csharp
public string Business { get; }
```

- *Type:* string

---

##### `DefaultLanguageCode`<sup>Required</sup> <a name="DefaultLanguageCode" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.defaultLanguageCode"></a>

```csharp
public string DefaultLanguageCode { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference.property.internalValue"></a>

```csharp
public DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig">DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig</a>

---


### DiscoveryEngineChatEngineChatEngineConfigOutputReference <a name="DiscoveryEngineChatEngineChatEngineConfigOutputReference" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DiscoveryEngineChatEngineChatEngineConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.putAgentCreationConfig">PutAgentCreationConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAgentCreationConfig` <a name="PutAgentCreationConfig" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.putAgentCreationConfig"></a>

```csharp
private void PutAgentCreationConfig(DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.putAgentCreationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig">DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.property.agentCreationConfig">AgentCreationConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference">DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.property.agentCreationConfigInput">AgentCreationConfigInput</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig">DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfig">DiscoveryEngineChatEngineChatEngineConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgentCreationConfig`<sup>Required</sup> <a name="AgentCreationConfig" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.property.agentCreationConfig"></a>

```csharp
public DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference AgentCreationConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference">DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfigOutputReference</a>

---

##### `AgentCreationConfigInput`<sup>Optional</sup> <a name="AgentCreationConfigInput" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.property.agentCreationConfigInput"></a>

```csharp
public DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig AgentCreationConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig">DiscoveryEngineChatEngineChatEngineConfigAgentCreationConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfigOutputReference.property.internalValue"></a>

```csharp
public DiscoveryEngineChatEngineChatEngineConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineConfig">DiscoveryEngineChatEngineChatEngineConfig</a>

---


### DiscoveryEngineChatEngineChatEngineMetadataList <a name="DiscoveryEngineChatEngineChatEngineMetadataList" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DiscoveryEngineChatEngineChatEngineMetadataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.get"></a>

```csharp
private DiscoveryEngineChatEngineChatEngineMetadataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DiscoveryEngineChatEngineChatEngineMetadataOutputReference <a name="DiscoveryEngineChatEngineChatEngineMetadataOutputReference" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DiscoveryEngineChatEngineChatEngineMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.property.dialogflowAgent">DialogflowAgent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadata">DiscoveryEngineChatEngineChatEngineMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DialogflowAgent`<sup>Required</sup> <a name="DialogflowAgent" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.property.dialogflowAgent"></a>

```csharp
public string DialogflowAgent { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadataOutputReference.property.internalValue"></a>

```csharp
public DiscoveryEngineChatEngineChatEngineMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineChatEngineMetadata">DiscoveryEngineChatEngineChatEngineMetadata</a>

---


### DiscoveryEngineChatEngineCommonConfigOutputReference <a name="DiscoveryEngineChatEngineCommonConfigOutputReference" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DiscoveryEngineChatEngineCommonConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.resetCompanyName">ResetCompanyName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCompanyName` <a name="ResetCompanyName" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.resetCompanyName"></a>

```csharp
private void ResetCompanyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.property.companyNameInput">CompanyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.property.companyName">CompanyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfig">DiscoveryEngineChatEngineCommonConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompanyNameInput`<sup>Optional</sup> <a name="CompanyNameInput" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.property.companyNameInput"></a>

```csharp
public string CompanyNameInput { get; }
```

- *Type:* string

---

##### `CompanyName`<sup>Required</sup> <a name="CompanyName" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.property.companyName"></a>

```csharp
public string CompanyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfigOutputReference.property.internalValue"></a>

```csharp
public DiscoveryEngineChatEngineCommonConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineCommonConfig">DiscoveryEngineChatEngineCommonConfig</a>

---


### DiscoveryEngineChatEngineTimeoutsOutputReference <a name="DiscoveryEngineChatEngineTimeoutsOutputReference" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DiscoveryEngineChatEngineTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.discoveryEngineChatEngine.DiscoveryEngineChatEngineTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



