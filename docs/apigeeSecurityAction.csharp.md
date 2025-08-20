# `apigeeSecurityAction` Submodule <a name="`apigeeSecurityAction` Submodule" id="@cdktf/provider-google.apigeeSecurityAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeSecurityAction <a name="ApigeeSecurityAction" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action google_apigee_security_action}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeSecurityAction(Construct Scope, string Id, ApigeeSecurityActionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig">ApigeeSecurityActionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig">ApigeeSecurityActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putAllow">PutAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putConditionConfig">PutConditionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putDeny">PutDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putFlag">PutFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetAllow">ResetAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetApiProxies">ResetApiProxies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetDeny">ResetDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetExpireTime">ResetExpireTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetFlag">ResetFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAllow` <a name="PutAllow" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putAllow"></a>

```csharp
private void PutAllow(ApigeeSecurityActionAllow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putAllow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow">ApigeeSecurityActionAllow</a>

---

##### `PutConditionConfig` <a name="PutConditionConfig" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putConditionConfig"></a>

```csharp
private void PutConditionConfig(ApigeeSecurityActionConditionConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putConditionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig">ApigeeSecurityActionConditionConfig</a>

---

##### `PutDeny` <a name="PutDeny" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putDeny"></a>

```csharp
private void PutDeny(ApigeeSecurityActionDeny Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putDeny.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny">ApigeeSecurityActionDeny</a>

---

##### `PutFlag` <a name="PutFlag" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putFlag"></a>

```csharp
private void PutFlag(ApigeeSecurityActionFlag Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putFlag.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag">ApigeeSecurityActionFlag</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putTimeouts"></a>

```csharp
private void PutTimeouts(ApigeeSecurityActionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts">ApigeeSecurityActionTimeouts</a>

---

##### `ResetAllow` <a name="ResetAllow" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetAllow"></a>

```csharp
private void ResetAllow()
```

##### `ResetApiProxies` <a name="ResetApiProxies" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetApiProxies"></a>

```csharp
private void ResetApiProxies()
```

##### `ResetDeny` <a name="ResetDeny" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetDeny"></a>

```csharp
private void ResetDeny()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExpireTime` <a name="ResetExpireTime" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetExpireTime"></a>

```csharp
private void ResetExpireTime()
```

##### `ResetFlag` <a name="ResetFlag" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetFlag"></a>

```csharp
private void ResetFlag()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetTtl"></a>

```csharp
private void ResetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApigeeSecurityAction resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ApigeeSecurityAction.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ApigeeSecurityAction.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ApigeeSecurityAction.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ApigeeSecurityAction.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ApigeeSecurityAction resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigeeSecurityAction to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigeeSecurityAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ApigeeSecurityAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.allow">Allow</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference">ApigeeSecurityActionAllowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.conditionConfig">ConditionConfig</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference">ApigeeSecurityActionConditionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.deny">Deny</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference">ApigeeSecurityActionDenyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.flag">Flag</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference">ApigeeSecurityActionFlagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference">ApigeeSecurityActionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.allowInput">AllowInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow">ApigeeSecurityActionAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.apiProxiesInput">ApiProxiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.conditionConfigInput">ConditionConfigInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig">ApigeeSecurityActionConditionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.denyInput">DenyInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny">ApigeeSecurityActionDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.envIdInput">EnvIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.expireTimeInput">ExpireTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.flagInput">FlagInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag">ApigeeSecurityActionFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.orgIdInput">OrgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.securityActionIdInput">SecurityActionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.ttlInput">TtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.apiProxies">ApiProxies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.envId">EnvId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.expireTime">ExpireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.orgId">OrgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.securityActionId">SecurityActionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.ttl">Ttl</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Allow`<sup>Required</sup> <a name="Allow" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.allow"></a>

```csharp
public ApigeeSecurityActionAllowOutputReference Allow { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference">ApigeeSecurityActionAllowOutputReference</a>

---

##### `ConditionConfig`<sup>Required</sup> <a name="ConditionConfig" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.conditionConfig"></a>

```csharp
public ApigeeSecurityActionConditionConfigOutputReference ConditionConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference">ApigeeSecurityActionConditionConfigOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Deny`<sup>Required</sup> <a name="Deny" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.deny"></a>

```csharp
public ApigeeSecurityActionDenyOutputReference Deny { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference">ApigeeSecurityActionDenyOutputReference</a>

---

##### `Flag`<sup>Required</sup> <a name="Flag" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.flag"></a>

```csharp
public ApigeeSecurityActionFlagOutputReference Flag { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference">ApigeeSecurityActionFlagOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.timeouts"></a>

```csharp
public ApigeeSecurityActionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference">ApigeeSecurityActionTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AllowInput`<sup>Optional</sup> <a name="AllowInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.allowInput"></a>

```csharp
public ApigeeSecurityActionAllow AllowInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow">ApigeeSecurityActionAllow</a>

---

##### `ApiProxiesInput`<sup>Optional</sup> <a name="ApiProxiesInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.apiProxiesInput"></a>

```csharp
public string[] ApiProxiesInput { get; }
```

- *Type:* string[]

---

##### `ConditionConfigInput`<sup>Optional</sup> <a name="ConditionConfigInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.conditionConfigInput"></a>

```csharp
public ApigeeSecurityActionConditionConfig ConditionConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig">ApigeeSecurityActionConditionConfig</a>

---

##### `DenyInput`<sup>Optional</sup> <a name="DenyInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.denyInput"></a>

```csharp
public ApigeeSecurityActionDeny DenyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny">ApigeeSecurityActionDeny</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnvIdInput`<sup>Optional</sup> <a name="EnvIdInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.envIdInput"></a>

```csharp
public string EnvIdInput { get; }
```

- *Type:* string

---

##### `ExpireTimeInput`<sup>Optional</sup> <a name="ExpireTimeInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.expireTimeInput"></a>

```csharp
public string ExpireTimeInput { get; }
```

- *Type:* string

---

##### `FlagInput`<sup>Optional</sup> <a name="FlagInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.flagInput"></a>

```csharp
public ApigeeSecurityActionFlag FlagInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag">ApigeeSecurityActionFlag</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.orgIdInput"></a>

```csharp
public string OrgIdInput { get; }
```

- *Type:* string

---

##### `SecurityActionIdInput`<sup>Optional</sup> <a name="SecurityActionIdInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.securityActionIdInput"></a>

```csharp
public string SecurityActionIdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.ttlInput"></a>

```csharp
public string TtlInput { get; }
```

- *Type:* string

---

##### `ApiProxies`<sup>Required</sup> <a name="ApiProxies" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.apiProxies"></a>

```csharp
public string[] ApiProxies { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EnvId`<sup>Required</sup> <a name="EnvId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.envId"></a>

```csharp
public string EnvId { get; }
```

- *Type:* string

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.expireTime"></a>

```csharp
public string ExpireTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.orgId"></a>

```csharp
public string OrgId { get; }
```

- *Type:* string

---

##### `SecurityActionId`<sup>Required</sup> <a name="SecurityActionId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.securityActionId"></a>

```csharp
public string SecurityActionId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.ttl"></a>

```csharp
public string Ttl { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeSecurityActionAllow <a name="ApigeeSecurityActionAllow" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeSecurityActionAllow {

};
```


### ApigeeSecurityActionConditionConfig <a name="ApigeeSecurityActionConditionConfig" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeSecurityActionConditionConfig {
    string[] AccessTokens = null,
    string[] ApiKeys = null,
    string[] ApiProducts = null,
    string[] Asns = null,
    string[] BotReasons = null,
    string[] DeveloperApps = null,
    string[] Developers = null,
    string[] HttpMethods = null,
    string[] IpAddressRanges = null,
    string[] RegionCodes = null,
    string[] UserAgents = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.accessTokens">AccessTokens</a></code> | <code>string[]</code> | A list of accessTokens. Limit 1000 per action. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.apiKeys">ApiKeys</a></code> | <code>string[]</code> | A list of API keys. Limit 1000 per action. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.apiProducts">ApiProducts</a></code> | <code>string[]</code> | A list of API Products. Limit 1000 per action. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.asns">Asns</a></code> | <code>string[]</code> | A list of ASN numbers to act on, e.g. 23. https://en.wikipedia.org/wiki/Autonomous_system_(Internet) This uses int64 instead of uint32 because of https://linter.aip.dev/141/forbidden-types. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.botReasons">BotReasons</a></code> | <code>string[]</code> | A list of Bot Reasons. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.developerApps">DeveloperApps</a></code> | <code>string[]</code> | A list of developer apps. Limit 1000 per action. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.developers">Developers</a></code> | <code>string[]</code> | A list of developers. Limit 1000 per action. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.httpMethods">HttpMethods</a></code> | <code>string[]</code> | Act only on particular HTTP methods. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.ipAddressRanges">IpAddressRanges</a></code> | <code>string[]</code> | A list of IP addresses. This could be either IPv4 or IPv6. Limited to 100 per action. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.regionCodes">RegionCodes</a></code> | <code>string[]</code> | A list of countries/region codes to act on, e.g. US. This follows https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.userAgents">UserAgents</a></code> | <code>string[]</code> | A list of user agents to deny. We look for exact matches. Limit 50 per action. |

---

##### `AccessTokens`<sup>Optional</sup> <a name="AccessTokens" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.accessTokens"></a>

```csharp
public string[] AccessTokens { get; set; }
```

- *Type:* string[]

A list of accessTokens. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#access_tokens ApigeeSecurityAction#access_tokens}

---

##### `ApiKeys`<sup>Optional</sup> <a name="ApiKeys" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.apiKeys"></a>

```csharp
public string[] ApiKeys { get; set; }
```

- *Type:* string[]

A list of API keys. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#api_keys ApigeeSecurityAction#api_keys}

---

##### `ApiProducts`<sup>Optional</sup> <a name="ApiProducts" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.apiProducts"></a>

```csharp
public string[] ApiProducts { get; set; }
```

- *Type:* string[]

A list of API Products. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#api_products ApigeeSecurityAction#api_products}

---

##### `Asns`<sup>Optional</sup> <a name="Asns" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.asns"></a>

```csharp
public string[] Asns { get; set; }
```

- *Type:* string[]

A list of ASN numbers to act on, e.g. 23. https://en.wikipedia.org/wiki/Autonomous_system_(Internet) This uses int64 instead of uint32 because of https://linter.aip.dev/141/forbidden-types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#asns ApigeeSecurityAction#asns}

---

##### `BotReasons`<sup>Optional</sup> <a name="BotReasons" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.botReasons"></a>

```csharp
public string[] BotReasons { get; set; }
```

- *Type:* string[]

A list of Bot Reasons.

Current options: Flooder, Brute Guessor, Static Content Scraper,
OAuth Abuser, Robot Abuser, TorListRule, Advanced Anomaly Detection, Advanced API Scraper,
Search Engine Crawlers, Public Clouds, Public Cloud AWS, Public Cloud Azure, and Public Cloud Google.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#bot_reasons ApigeeSecurityAction#bot_reasons}

---

##### `DeveloperApps`<sup>Optional</sup> <a name="DeveloperApps" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.developerApps"></a>

```csharp
public string[] DeveloperApps { get; set; }
```

- *Type:* string[]

A list of developer apps. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#developer_apps ApigeeSecurityAction#developer_apps}

---

##### `Developers`<sup>Optional</sup> <a name="Developers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.developers"></a>

```csharp
public string[] Developers { get; set; }
```

- *Type:* string[]

A list of developers. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#developers ApigeeSecurityAction#developers}

---

##### `HttpMethods`<sup>Optional</sup> <a name="HttpMethods" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.httpMethods"></a>

```csharp
public string[] HttpMethods { get; set; }
```

- *Type:* string[]

Act only on particular HTTP methods.

E.g. A read-only API can block POST/PUT/DELETE methods.
Accepted values are: GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE and PATCH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#http_methods ApigeeSecurityAction#http_methods}

---

##### `IpAddressRanges`<sup>Optional</sup> <a name="IpAddressRanges" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.ipAddressRanges"></a>

```csharp
public string[] IpAddressRanges { get; set; }
```

- *Type:* string[]

A list of IP addresses. This could be either IPv4 or IPv6. Limited to 100 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#ip_address_ranges ApigeeSecurityAction#ip_address_ranges}

---

##### `RegionCodes`<sup>Optional</sup> <a name="RegionCodes" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.regionCodes"></a>

```csharp
public string[] RegionCodes { get; set; }
```

- *Type:* string[]

A list of countries/region codes to act on, e.g. US. This follows https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#region_codes ApigeeSecurityAction#region_codes}

---

##### `UserAgents`<sup>Optional</sup> <a name="UserAgents" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.userAgents"></a>

```csharp
public string[] UserAgents { get; set; }
```

- *Type:* string[]

A list of user agents to deny. We look for exact matches. Limit 50 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#user_agents ApigeeSecurityAction#user_agents}

---

### ApigeeSecurityActionConfig <a name="ApigeeSecurityActionConfig" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeSecurityActionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    ApigeeSecurityActionConditionConfig ConditionConfig,
    string EnvId,
    string OrgId,
    string SecurityActionId,
    string State,
    ApigeeSecurityActionAllow Allow = null,
    string[] ApiProxies = null,
    ApigeeSecurityActionDeny Deny = null,
    string Description = null,
    string ExpireTime = null,
    ApigeeSecurityActionFlag Flag = null,
    string Id = null,
    ApigeeSecurityActionTimeouts Timeouts = null,
    string Ttl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.conditionConfig">ConditionConfig</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig">ApigeeSecurityActionConditionConfig</a></code> | condition_config block. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.envId">EnvId</a></code> | <code>string</code> | The Apigee environment that this security action applies to. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.orgId">OrgId</a></code> | <code>string</code> | The organization that this security action applies to. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.securityActionId">SecurityActionId</a></code> | <code>string</code> | The ID to use for the SecurityAction, which will become the final component of the action's resource name. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.state">State</a></code> | <code>string</code> | Only an ENABLED SecurityAction is enforced. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.allow">Allow</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow">ApigeeSecurityActionAllow</a></code> | allow block. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.apiProxies">ApiProxies</a></code> | <code>string[]</code> | If unset, this would apply to all proxies in the environment. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.deny">Deny</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny">ApigeeSecurityActionDeny</a></code> | deny block. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.description">Description</a></code> | <code>string</code> | An optional user provided description of the SecurityAction. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.expireTime">ExpireTime</a></code> | <code>string</code> | The expiration for this SecurityAction. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.flag">Flag</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag">ApigeeSecurityActionFlag</a></code> | flag block. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#id ApigeeSecurityAction#id}. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts">ApigeeSecurityActionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.ttl">Ttl</a></code> | <code>string</code> | The TTL for this SecurityAction. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s". |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ConditionConfig`<sup>Required</sup> <a name="ConditionConfig" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.conditionConfig"></a>

```csharp
public ApigeeSecurityActionConditionConfig ConditionConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig">ApigeeSecurityActionConditionConfig</a>

condition_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#condition_config ApigeeSecurityAction#condition_config}

---

##### `EnvId`<sup>Required</sup> <a name="EnvId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.envId"></a>

```csharp
public string EnvId { get; set; }
```

- *Type:* string

The Apigee environment that this security action applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#env_id ApigeeSecurityAction#env_id}

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.orgId"></a>

```csharp
public string OrgId { get; set; }
```

- *Type:* string

The organization that this security action applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#org_id ApigeeSecurityAction#org_id}

---

##### `SecurityActionId`<sup>Required</sup> <a name="SecurityActionId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.securityActionId"></a>

```csharp
public string SecurityActionId { get; set; }
```

- *Type:* string

The ID to use for the SecurityAction, which will become the final component of the action's resource name.

This value should be 0-61 characters, and valid format is (^a-z?$).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#security_action_id ApigeeSecurityAction#security_action_id}

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Only an ENABLED SecurityAction is enforced.

An ENABLED SecurityAction past its expiration time will not be enforced. Possible values: ["ENABLED", "DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#state ApigeeSecurityAction#state}

---

##### `Allow`<sup>Optional</sup> <a name="Allow" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.allow"></a>

```csharp
public ApigeeSecurityActionAllow Allow { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow">ApigeeSecurityActionAllow</a>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#allow ApigeeSecurityAction#allow}

---

##### `ApiProxies`<sup>Optional</sup> <a name="ApiProxies" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.apiProxies"></a>

```csharp
public string[] ApiProxies { get; set; }
```

- *Type:* string[]

If unset, this would apply to all proxies in the environment.

If set, this action is enforced only if at least one proxy in the repeated
list is deployed at the time of enforcement. If set, several restrictions are enforced on SecurityActions.
There can be at most 100 enabled actions with proxies set in an env.
Several other restrictions apply on conditions and are detailed later.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#api_proxies ApigeeSecurityAction#api_proxies}

---

##### `Deny`<sup>Optional</sup> <a name="Deny" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.deny"></a>

```csharp
public ApigeeSecurityActionDeny Deny { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny">ApigeeSecurityActionDeny</a>

deny block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#deny ApigeeSecurityAction#deny}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional user provided description of the SecurityAction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#description ApigeeSecurityAction#description}

---

##### `ExpireTime`<sup>Optional</sup> <a name="ExpireTime" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.expireTime"></a>

```csharp
public string ExpireTime { get; set; }
```

- *Type:* string

The expiration for this SecurityAction.

Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9
fractional digits. Offsets other than "Z" are also accepted.
Examples: "2014-10-02T15:01:23Z", "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#expire_time ApigeeSecurityAction#expire_time}

---

##### `Flag`<sup>Optional</sup> <a name="Flag" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.flag"></a>

```csharp
public ApigeeSecurityActionFlag Flag { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag">ApigeeSecurityActionFlag</a>

flag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#flag ApigeeSecurityAction#flag}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#id ApigeeSecurityAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.timeouts"></a>

```csharp
public ApigeeSecurityActionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts">ApigeeSecurityActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#timeouts ApigeeSecurityAction#timeouts}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.ttl"></a>

```csharp
public string Ttl { get; set; }
```

- *Type:* string

The TTL for this SecurityAction. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#ttl ApigeeSecurityAction#ttl}

---

### ApigeeSecurityActionDeny <a name="ApigeeSecurityActionDeny" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeSecurityActionDeny {
    double ResponseCode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny.property.responseCode">ResponseCode</a></code> | <code>double</code> | The HTTP response code if the Action = DENY. |

---

##### `ResponseCode`<sup>Optional</sup> <a name="ResponseCode" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny.property.responseCode"></a>

```csharp
public double ResponseCode { get; set; }
```

- *Type:* double

The HTTP response code if the Action = DENY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#response_code ApigeeSecurityAction#response_code}

---

### ApigeeSecurityActionFlag <a name="ApigeeSecurityActionFlag" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeSecurityActionFlag {
    object Headers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag.property.headers">Headers</a></code> | <code>object</code> | headers block. |

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag.property.headers"></a>

```csharp
public object Headers { get; set; }
```

- *Type:* object

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#headers ApigeeSecurityAction#headers}

---

### ApigeeSecurityActionFlagHeaders <a name="ApigeeSecurityActionFlagHeaders" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeSecurityActionFlagHeaders {
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders.property.name">Name</a></code> | <code>string</code> | The header name to be sent to the target. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders.property.value">Value</a></code> | <code>string</code> | The header value to be sent to the target. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The header name to be sent to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#name ApigeeSecurityAction#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The header value to be sent to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#value ApigeeSecurityAction#value}

---

### ApigeeSecurityActionTimeouts <a name="ApigeeSecurityActionTimeouts" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeSecurityActionTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#create ApigeeSecurityAction#create}. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#delete ApigeeSecurityAction#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#create ApigeeSecurityAction#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.0/docs/resources/apigee_security_action#delete ApigeeSecurityAction#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeSecurityActionAllowOutputReference <a name="ApigeeSecurityActionAllowOutputReference" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeSecurityActionAllowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow">ApigeeSecurityActionAllow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.property.internalValue"></a>

```csharp
public ApigeeSecurityActionAllow InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow">ApigeeSecurityActionAllow</a>

---


### ApigeeSecurityActionConditionConfigOutputReference <a name="ApigeeSecurityActionConditionConfigOutputReference" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeSecurityActionConditionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetAccessTokens">ResetAccessTokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetApiKeys">ResetApiKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetApiProducts">ResetApiProducts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetAsns">ResetAsns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetBotReasons">ResetBotReasons</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetDeveloperApps">ResetDeveloperApps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetDevelopers">ResetDevelopers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetHttpMethods">ResetHttpMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetIpAddressRanges">ResetIpAddressRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetRegionCodes">ResetRegionCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetUserAgents">ResetUserAgents</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessTokens` <a name="ResetAccessTokens" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetAccessTokens"></a>

```csharp
private void ResetAccessTokens()
```

##### `ResetApiKeys` <a name="ResetApiKeys" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetApiKeys"></a>

```csharp
private void ResetApiKeys()
```

##### `ResetApiProducts` <a name="ResetApiProducts" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetApiProducts"></a>

```csharp
private void ResetApiProducts()
```

##### `ResetAsns` <a name="ResetAsns" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetAsns"></a>

```csharp
private void ResetAsns()
```

##### `ResetBotReasons` <a name="ResetBotReasons" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetBotReasons"></a>

```csharp
private void ResetBotReasons()
```

##### `ResetDeveloperApps` <a name="ResetDeveloperApps" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetDeveloperApps"></a>

```csharp
private void ResetDeveloperApps()
```

##### `ResetDevelopers` <a name="ResetDevelopers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetDevelopers"></a>

```csharp
private void ResetDevelopers()
```

##### `ResetHttpMethods` <a name="ResetHttpMethods" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetHttpMethods"></a>

```csharp
private void ResetHttpMethods()
```

##### `ResetIpAddressRanges` <a name="ResetIpAddressRanges" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetIpAddressRanges"></a>

```csharp
private void ResetIpAddressRanges()
```

##### `ResetRegionCodes` <a name="ResetRegionCodes" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetRegionCodes"></a>

```csharp
private void ResetRegionCodes()
```

##### `ResetUserAgents` <a name="ResetUserAgents" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetUserAgents"></a>

```csharp
private void ResetUserAgents()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.accessTokensInput">AccessTokensInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.apiKeysInput">ApiKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.apiProductsInput">ApiProductsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.asnsInput">AsnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.botReasonsInput">BotReasonsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.developerAppsInput">DeveloperAppsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.developersInput">DevelopersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.httpMethodsInput">HttpMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.ipAddressRangesInput">IpAddressRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.regionCodesInput">RegionCodesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.userAgentsInput">UserAgentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.accessTokens">AccessTokens</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.apiKeys">ApiKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.apiProducts">ApiProducts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.asns">Asns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.botReasons">BotReasons</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.developerApps">DeveloperApps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.developers">Developers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.httpMethods">HttpMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.ipAddressRanges">IpAddressRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.regionCodes">RegionCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.userAgents">UserAgents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig">ApigeeSecurityActionConditionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessTokensInput`<sup>Optional</sup> <a name="AccessTokensInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.accessTokensInput"></a>

```csharp
public string[] AccessTokensInput { get; }
```

- *Type:* string[]

---

##### `ApiKeysInput`<sup>Optional</sup> <a name="ApiKeysInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.apiKeysInput"></a>

```csharp
public string[] ApiKeysInput { get; }
```

- *Type:* string[]

---

##### `ApiProductsInput`<sup>Optional</sup> <a name="ApiProductsInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.apiProductsInput"></a>

```csharp
public string[] ApiProductsInput { get; }
```

- *Type:* string[]

---

##### `AsnsInput`<sup>Optional</sup> <a name="AsnsInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.asnsInput"></a>

```csharp
public string[] AsnsInput { get; }
```

- *Type:* string[]

---

##### `BotReasonsInput`<sup>Optional</sup> <a name="BotReasonsInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.botReasonsInput"></a>

```csharp
public string[] BotReasonsInput { get; }
```

- *Type:* string[]

---

##### `DeveloperAppsInput`<sup>Optional</sup> <a name="DeveloperAppsInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.developerAppsInput"></a>

```csharp
public string[] DeveloperAppsInput { get; }
```

- *Type:* string[]

---

##### `DevelopersInput`<sup>Optional</sup> <a name="DevelopersInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.developersInput"></a>

```csharp
public string[] DevelopersInput { get; }
```

- *Type:* string[]

---

##### `HttpMethodsInput`<sup>Optional</sup> <a name="HttpMethodsInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.httpMethodsInput"></a>

```csharp
public string[] HttpMethodsInput { get; }
```

- *Type:* string[]

---

##### `IpAddressRangesInput`<sup>Optional</sup> <a name="IpAddressRangesInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.ipAddressRangesInput"></a>

```csharp
public string[] IpAddressRangesInput { get; }
```

- *Type:* string[]

---

##### `RegionCodesInput`<sup>Optional</sup> <a name="RegionCodesInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.regionCodesInput"></a>

```csharp
public string[] RegionCodesInput { get; }
```

- *Type:* string[]

---

##### `UserAgentsInput`<sup>Optional</sup> <a name="UserAgentsInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.userAgentsInput"></a>

```csharp
public string[] UserAgentsInput { get; }
```

- *Type:* string[]

---

##### `AccessTokens`<sup>Required</sup> <a name="AccessTokens" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.accessTokens"></a>

```csharp
public string[] AccessTokens { get; }
```

- *Type:* string[]

---

##### `ApiKeys`<sup>Required</sup> <a name="ApiKeys" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.apiKeys"></a>

```csharp
public string[] ApiKeys { get; }
```

- *Type:* string[]

---

##### `ApiProducts`<sup>Required</sup> <a name="ApiProducts" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.apiProducts"></a>

```csharp
public string[] ApiProducts { get; }
```

- *Type:* string[]

---

##### `Asns`<sup>Required</sup> <a name="Asns" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.asns"></a>

```csharp
public string[] Asns { get; }
```

- *Type:* string[]

---

##### `BotReasons`<sup>Required</sup> <a name="BotReasons" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.botReasons"></a>

```csharp
public string[] BotReasons { get; }
```

- *Type:* string[]

---

##### `DeveloperApps`<sup>Required</sup> <a name="DeveloperApps" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.developerApps"></a>

```csharp
public string[] DeveloperApps { get; }
```

- *Type:* string[]

---

##### `Developers`<sup>Required</sup> <a name="Developers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.developers"></a>

```csharp
public string[] Developers { get; }
```

- *Type:* string[]

---

##### `HttpMethods`<sup>Required</sup> <a name="HttpMethods" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.httpMethods"></a>

```csharp
public string[] HttpMethods { get; }
```

- *Type:* string[]

---

##### `IpAddressRanges`<sup>Required</sup> <a name="IpAddressRanges" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.ipAddressRanges"></a>

```csharp
public string[] IpAddressRanges { get; }
```

- *Type:* string[]

---

##### `RegionCodes`<sup>Required</sup> <a name="RegionCodes" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.regionCodes"></a>

```csharp
public string[] RegionCodes { get; }
```

- *Type:* string[]

---

##### `UserAgents`<sup>Required</sup> <a name="UserAgents" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.userAgents"></a>

```csharp
public string[] UserAgents { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.internalValue"></a>

```csharp
public ApigeeSecurityActionConditionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig">ApigeeSecurityActionConditionConfig</a>

---


### ApigeeSecurityActionDenyOutputReference <a name="ApigeeSecurityActionDenyOutputReference" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeSecurityActionDenyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.resetResponseCode">ResetResponseCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResponseCode` <a name="ResetResponseCode" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.resetResponseCode"></a>

```csharp
private void ResetResponseCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.responseCodeInput">ResponseCodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.responseCode">ResponseCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny">ApigeeSecurityActionDeny</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResponseCodeInput`<sup>Optional</sup> <a name="ResponseCodeInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.responseCodeInput"></a>

```csharp
public double ResponseCodeInput { get; }
```

- *Type:* double

---

##### `ResponseCode`<sup>Required</sup> <a name="ResponseCode" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.responseCode"></a>

```csharp
public double ResponseCode { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.internalValue"></a>

```csharp
public ApigeeSecurityActionDeny InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny">ApigeeSecurityActionDeny</a>

---


### ApigeeSecurityActionFlagHeadersList <a name="ApigeeSecurityActionFlagHeadersList" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeSecurityActionFlagHeadersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.get"></a>

```csharp
private ApigeeSecurityActionFlagHeadersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApigeeSecurityActionFlagHeadersOutputReference <a name="ApigeeSecurityActionFlagHeadersOutputReference" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeSecurityActionFlagHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApigeeSecurityActionFlagOutputReference <a name="ApigeeSecurityActionFlagOutputReference" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeSecurityActionFlagOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.putHeaders">PutHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaders` <a name="PutHeaders" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.putHeaders"></a>

```csharp
private void PutHeaders(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.putHeaders.parameter.value"></a>

- *Type:* object

---

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.resetHeaders"></a>

```csharp
private void ResetHeaders()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList">ApigeeSecurityActionFlagHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.headersInput">HeadersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag">ApigeeSecurityActionFlag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.headers"></a>

```csharp
public ApigeeSecurityActionFlagHeadersList Headers { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList">ApigeeSecurityActionFlagHeadersList</a>

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.headersInput"></a>

```csharp
public object HeadersInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.internalValue"></a>

```csharp
public ApigeeSecurityActionFlag InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag">ApigeeSecurityActionFlag</a>

---


### ApigeeSecurityActionTimeoutsOutputReference <a name="ApigeeSecurityActionTimeoutsOutputReference" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeSecurityActionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



