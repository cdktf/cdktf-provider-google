# `cloudTasksQueue` Submodule <a name="`cloudTasksQueue` Submodule" id="@cdktf/provider-google.cloudTasksQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudTasksQueue <a name="CloudTasksQueue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue google_cloud_tasks_queue}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudTasksQueue(Construct Scope, string Id, CloudTasksQueueConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig">CloudTasksQueueConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig">CloudTasksQueueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putAppEngineRoutingOverride">PutAppEngineRoutingOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putHttpTarget">PutHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putRateLimits">PutRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putRetryConfig">PutRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putStackdriverLoggingConfig">PutStackdriverLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetAppEngineRoutingOverride">ResetAppEngineRoutingOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetHttpTarget">ResetHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetRateLimits">ResetRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetRetryConfig">ResetRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetStackdriverLoggingConfig">ResetStackdriverLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAppEngineRoutingOverride` <a name="PutAppEngineRoutingOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putAppEngineRoutingOverride"></a>

```csharp
private void PutAppEngineRoutingOverride(CloudTasksQueueAppEngineRoutingOverride Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putAppEngineRoutingOverride.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride">CloudTasksQueueAppEngineRoutingOverride</a>

---

##### `PutHttpTarget` <a name="PutHttpTarget" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putHttpTarget"></a>

```csharp
private void PutHttpTarget(CloudTasksQueueHttpTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putHttpTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget">CloudTasksQueueHttpTarget</a>

---

##### `PutRateLimits` <a name="PutRateLimits" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putRateLimits"></a>

```csharp
private void PutRateLimits(CloudTasksQueueRateLimits Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putRateLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits">CloudTasksQueueRateLimits</a>

---

##### `PutRetryConfig` <a name="PutRetryConfig" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putRetryConfig"></a>

```csharp
private void PutRetryConfig(CloudTasksQueueRetryConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putRetryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig">CloudTasksQueueRetryConfig</a>

---

##### `PutStackdriverLoggingConfig` <a name="PutStackdriverLoggingConfig" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putStackdriverLoggingConfig"></a>

```csharp
private void PutStackdriverLoggingConfig(CloudTasksQueueStackdriverLoggingConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putStackdriverLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig">CloudTasksQueueStackdriverLoggingConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putTimeouts"></a>

```csharp
private void PutTimeouts(CloudTasksQueueTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts">CloudTasksQueueTimeouts</a>

---

##### `ResetAppEngineRoutingOverride` <a name="ResetAppEngineRoutingOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetAppEngineRoutingOverride"></a>

```csharp
private void ResetAppEngineRoutingOverride()
```

##### `ResetHttpTarget` <a name="ResetHttpTarget" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetHttpTarget"></a>

```csharp
private void ResetHttpTarget()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRateLimits` <a name="ResetRateLimits" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetRateLimits"></a>

```csharp
private void ResetRateLimits()
```

##### `ResetRetryConfig` <a name="ResetRetryConfig" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetRetryConfig"></a>

```csharp
private void ResetRetryConfig()
```

##### `ResetStackdriverLoggingConfig` <a name="ResetStackdriverLoggingConfig" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetStackdriverLoggingConfig"></a>

```csharp
private void ResetStackdriverLoggingConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudTasksQueue resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CloudTasksQueue.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CloudTasksQueue.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CloudTasksQueue.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

CloudTasksQueue.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CloudTasksQueue resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudTasksQueue to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudTasksQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CloudTasksQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.appEngineRoutingOverride">AppEngineRoutingOverride</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference">CloudTasksQueueAppEngineRoutingOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.httpTarget">HttpTarget</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference">CloudTasksQueueHttpTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.rateLimits">RateLimits</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference">CloudTasksQueueRateLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.retryConfig">RetryConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference">CloudTasksQueueRetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.stackdriverLoggingConfig">StackdriverLoggingConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference">CloudTasksQueueStackdriverLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference">CloudTasksQueueTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.appEngineRoutingOverrideInput">AppEngineRoutingOverrideInput</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride">CloudTasksQueueAppEngineRoutingOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.httpTargetInput">HttpTargetInput</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget">CloudTasksQueueHttpTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.rateLimitsInput">RateLimitsInput</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits">CloudTasksQueueRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.retryConfigInput">RetryConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig">CloudTasksQueueRetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.stackdriverLoggingConfigInput">StackdriverLoggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig">CloudTasksQueueStackdriverLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AppEngineRoutingOverride`<sup>Required</sup> <a name="AppEngineRoutingOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.appEngineRoutingOverride"></a>

```csharp
public CloudTasksQueueAppEngineRoutingOverrideOutputReference AppEngineRoutingOverride { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference">CloudTasksQueueAppEngineRoutingOverrideOutputReference</a>

---

##### `HttpTarget`<sup>Required</sup> <a name="HttpTarget" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.httpTarget"></a>

```csharp
public CloudTasksQueueHttpTargetOutputReference HttpTarget { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference">CloudTasksQueueHttpTargetOutputReference</a>

---

##### `RateLimits`<sup>Required</sup> <a name="RateLimits" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.rateLimits"></a>

```csharp
public CloudTasksQueueRateLimitsOutputReference RateLimits { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference">CloudTasksQueueRateLimitsOutputReference</a>

---

##### `RetryConfig`<sup>Required</sup> <a name="RetryConfig" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.retryConfig"></a>

```csharp
public CloudTasksQueueRetryConfigOutputReference RetryConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference">CloudTasksQueueRetryConfigOutputReference</a>

---

##### `StackdriverLoggingConfig`<sup>Required</sup> <a name="StackdriverLoggingConfig" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.stackdriverLoggingConfig"></a>

```csharp
public CloudTasksQueueStackdriverLoggingConfigOutputReference StackdriverLoggingConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference">CloudTasksQueueStackdriverLoggingConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.timeouts"></a>

```csharp
public CloudTasksQueueTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference">CloudTasksQueueTimeoutsOutputReference</a>

---

##### `AppEngineRoutingOverrideInput`<sup>Optional</sup> <a name="AppEngineRoutingOverrideInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.appEngineRoutingOverrideInput"></a>

```csharp
public CloudTasksQueueAppEngineRoutingOverride AppEngineRoutingOverrideInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride">CloudTasksQueueAppEngineRoutingOverride</a>

---

##### `HttpTargetInput`<sup>Optional</sup> <a name="HttpTargetInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.httpTargetInput"></a>

```csharp
public CloudTasksQueueHttpTarget HttpTargetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget">CloudTasksQueueHttpTarget</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RateLimitsInput`<sup>Optional</sup> <a name="RateLimitsInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.rateLimitsInput"></a>

```csharp
public CloudTasksQueueRateLimits RateLimitsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits">CloudTasksQueueRateLimits</a>

---

##### `RetryConfigInput`<sup>Optional</sup> <a name="RetryConfigInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.retryConfigInput"></a>

```csharp
public CloudTasksQueueRetryConfig RetryConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig">CloudTasksQueueRetryConfig</a>

---

##### `StackdriverLoggingConfigInput`<sup>Optional</sup> <a name="StackdriverLoggingConfigInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.stackdriverLoggingConfigInput"></a>

```csharp
public CloudTasksQueueStackdriverLoggingConfig StackdriverLoggingConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig">CloudTasksQueueStackdriverLoggingConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueue.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudTasksQueueAppEngineRoutingOverride <a name="CloudTasksQueueAppEngineRoutingOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudTasksQueueAppEngineRoutingOverride {
    string Instance = null,
    string Service = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride.property.instance">Instance</a></code> | <code>string</code> | App instance. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride.property.service">Service</a></code> | <code>string</code> | App service. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride.property.version">Version</a></code> | <code>string</code> | App version. |

---

##### `Instance`<sup>Optional</sup> <a name="Instance" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride.property.instance"></a>

```csharp
public string Instance { get; set; }
```

- *Type:* string

App instance.

By default, the task is sent to an instance which is available when the task is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#instance CloudTasksQueue#instance}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

App service.

By default, the task is sent to the service which is the default service when the task is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#service CloudTasksQueue#service}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

App version.

By default, the task is sent to the version which is the default version when the task is attempted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#version CloudTasksQueue#version}

---

### CloudTasksQueueConfig <a name="CloudTasksQueueConfig" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudTasksQueueConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    CloudTasksQueueAppEngineRoutingOverride AppEngineRoutingOverride = null,
    CloudTasksQueueHttpTarget HttpTarget = null,
    string Id = null,
    string Name = null,
    string Project = null,
    CloudTasksQueueRateLimits RateLimits = null,
    CloudTasksQueueRetryConfig RetryConfig = null,
    CloudTasksQueueStackdriverLoggingConfig StackdriverLoggingConfig = null,
    CloudTasksQueueTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.location">Location</a></code> | <code>string</code> | The location of the queue. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.appEngineRoutingOverride">AppEngineRoutingOverride</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride">CloudTasksQueueAppEngineRoutingOverride</a></code> | app_engine_routing_override block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.httpTarget">HttpTarget</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget">CloudTasksQueueHttpTarget</a></code> | http_target block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#id CloudTasksQueue#id}. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.name">Name</a></code> | <code>string</code> | The queue name. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#project CloudTasksQueue#project}. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.rateLimits">RateLimits</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits">CloudTasksQueueRateLimits</a></code> | rate_limits block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.retryConfig">RetryConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig">CloudTasksQueueRetryConfig</a></code> | retry_config block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.stackdriverLoggingConfig">StackdriverLoggingConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig">CloudTasksQueueStackdriverLoggingConfig</a></code> | stackdriver_logging_config block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts">CloudTasksQueueTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#location CloudTasksQueue#location}

---

##### `AppEngineRoutingOverride`<sup>Optional</sup> <a name="AppEngineRoutingOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.appEngineRoutingOverride"></a>

```csharp
public CloudTasksQueueAppEngineRoutingOverride AppEngineRoutingOverride { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride">CloudTasksQueueAppEngineRoutingOverride</a>

app_engine_routing_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#app_engine_routing_override CloudTasksQueue#app_engine_routing_override}

---

##### `HttpTarget`<sup>Optional</sup> <a name="HttpTarget" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.httpTarget"></a>

```csharp
public CloudTasksQueueHttpTarget HttpTarget { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget">CloudTasksQueueHttpTarget</a>

http_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#http_target CloudTasksQueue#http_target}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#id CloudTasksQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The queue name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#name CloudTasksQueue#name}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#project CloudTasksQueue#project}.

---

##### `RateLimits`<sup>Optional</sup> <a name="RateLimits" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.rateLimits"></a>

```csharp
public CloudTasksQueueRateLimits RateLimits { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits">CloudTasksQueueRateLimits</a>

rate_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#rate_limits CloudTasksQueue#rate_limits}

---

##### `RetryConfig`<sup>Optional</sup> <a name="RetryConfig" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.retryConfig"></a>

```csharp
public CloudTasksQueueRetryConfig RetryConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig">CloudTasksQueueRetryConfig</a>

retry_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#retry_config CloudTasksQueue#retry_config}

---

##### `StackdriverLoggingConfig`<sup>Optional</sup> <a name="StackdriverLoggingConfig" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.stackdriverLoggingConfig"></a>

```csharp
public CloudTasksQueueStackdriverLoggingConfig StackdriverLoggingConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig">CloudTasksQueueStackdriverLoggingConfig</a>

stackdriver_logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#stackdriver_logging_config CloudTasksQueue#stackdriver_logging_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueConfig.property.timeouts"></a>

```csharp
public CloudTasksQueueTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts">CloudTasksQueueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#timeouts CloudTasksQueue#timeouts}

---

### CloudTasksQueueHttpTarget <a name="CloudTasksQueueHttpTarget" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudTasksQueueHttpTarget {
    object HeaderOverrides = null,
    string HttpMethod = null,
    CloudTasksQueueHttpTargetOauthToken OauthToken = null,
    CloudTasksQueueHttpTargetOidcToken OidcToken = null,
    CloudTasksQueueHttpTargetUriOverride UriOverride = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget.property.headerOverrides">HeaderOverrides</a></code> | <code>object</code> | header_overrides block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget.property.httpMethod">HttpMethod</a></code> | <code>string</code> | The HTTP method to use for the request. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget.property.oauthToken">OauthToken</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken">CloudTasksQueueHttpTargetOauthToken</a></code> | oauth_token block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget.property.oidcToken">OidcToken</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken">CloudTasksQueueHttpTargetOidcToken</a></code> | oidc_token block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget.property.uriOverride">UriOverride</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride">CloudTasksQueueHttpTargetUriOverride</a></code> | uri_override block. |

---

##### `HeaderOverrides`<sup>Optional</sup> <a name="HeaderOverrides" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget.property.headerOverrides"></a>

```csharp
public object HeaderOverrides { get; set; }
```

- *Type:* object

header_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#header_overrides CloudTasksQueue#header_overrides}

---

##### `HttpMethod`<sup>Optional</sup> <a name="HttpMethod" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget.property.httpMethod"></a>

```csharp
public string HttpMethod { get; set; }
```

- *Type:* string

The HTTP method to use for the request.

When specified, it overrides HttpRequest for the task.
Note that if the value is set to GET the body of the task will be ignored at execution time. Possible values: ["HTTP_METHOD_UNSPECIFIED", "POST", "GET", "HEAD", "PUT", "DELETE", "PATCH", "OPTIONS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#http_method CloudTasksQueue#http_method}

---

##### `OauthToken`<sup>Optional</sup> <a name="OauthToken" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget.property.oauthToken"></a>

```csharp
public CloudTasksQueueHttpTargetOauthToken OauthToken { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken">CloudTasksQueueHttpTargetOauthToken</a>

oauth_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#oauth_token CloudTasksQueue#oauth_token}

---

##### `OidcToken`<sup>Optional</sup> <a name="OidcToken" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget.property.oidcToken"></a>

```csharp
public CloudTasksQueueHttpTargetOidcToken OidcToken { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken">CloudTasksQueueHttpTargetOidcToken</a>

oidc_token block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#oidc_token CloudTasksQueue#oidc_token}

---

##### `UriOverride`<sup>Optional</sup> <a name="UriOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget.property.uriOverride"></a>

```csharp
public CloudTasksQueueHttpTargetUriOverride UriOverride { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride">CloudTasksQueueHttpTargetUriOverride</a>

uri_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#uri_override CloudTasksQueue#uri_override}

---

### CloudTasksQueueHttpTargetHeaderOverrides <a name="CloudTasksQueueHttpTargetHeaderOverrides" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverrides.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudTasksQueueHttpTargetHeaderOverrides {
    CloudTasksQueueHttpTargetHeaderOverridesHeader Header
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverrides.property.header">Header</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader">CloudTasksQueueHttpTargetHeaderOverridesHeader</a></code> | header block. |

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverrides.property.header"></a>

```csharp
public CloudTasksQueueHttpTargetHeaderOverridesHeader Header { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader">CloudTasksQueueHttpTargetHeaderOverridesHeader</a>

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#header CloudTasksQueue#header}

---

### CloudTasksQueueHttpTargetHeaderOverridesHeader <a name="CloudTasksQueueHttpTargetHeaderOverridesHeader" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudTasksQueueHttpTargetHeaderOverridesHeader {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader.property.key">Key</a></code> | <code>string</code> | The Key of the header. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader.property.value">Value</a></code> | <code>string</code> | The Value of the header. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The Key of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#key CloudTasksQueue#key}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The Value of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#value CloudTasksQueue#value}

---

### CloudTasksQueueHttpTargetOauthToken <a name="CloudTasksQueueHttpTargetOauthToken" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudTasksQueueHttpTargetOauthToken {
    string ServiceAccountEmail,
    string Scope = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | Service account email to be used for generating OAuth token. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken.property.scope">Scope</a></code> | <code>string</code> | OAuth scope to be used for generating OAuth access token. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used. |

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; set; }
```

- *Type:* string

Service account email to be used for generating OAuth token.

The service account must be within the same project as the queue.
The caller must have iam.serviceAccounts.actAs permission for the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#service_account_email CloudTasksQueue#service_account_email}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

OAuth scope to be used for generating OAuth access token. If not specified, "https://www.googleapis.com/auth/cloud-platform" will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#scope CloudTasksQueue#scope}

---

### CloudTasksQueueHttpTargetOidcToken <a name="CloudTasksQueueHttpTargetOidcToken" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudTasksQueueHttpTargetOidcToken {
    string ServiceAccountEmail,
    string Audience = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | Service account email to be used for generating OIDC token. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken.property.audience">Audience</a></code> | <code>string</code> | Audience to be used when generating OIDC token. If not specified, the URI specified in target will be used. |

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; set; }
```

- *Type:* string

Service account email to be used for generating OIDC token.

The service account must be within the same project as the queue.
The caller must have iam.serviceAccounts.actAs permission for the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#service_account_email CloudTasksQueue#service_account_email}

---

##### `Audience`<sup>Optional</sup> <a name="Audience" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken.property.audience"></a>

```csharp
public string Audience { get; set; }
```

- *Type:* string

Audience to be used when generating OIDC token. If not specified, the URI specified in target will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#audience CloudTasksQueue#audience}

---

### CloudTasksQueueHttpTargetUriOverride <a name="CloudTasksQueueHttpTargetUriOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudTasksQueueHttpTargetUriOverride {
    string Host = null,
    CloudTasksQueueHttpTargetUriOverridePathOverride PathOverride = null,
    string Port = null,
    CloudTasksQueueHttpTargetUriOverrideQueryOverride QueryOverride = null,
    string Scheme = null,
    string UriOverrideEnforceMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.host">Host</a></code> | <code>string</code> | Host override. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.pathOverride">PathOverride</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverride">CloudTasksQueueHttpTargetUriOverridePathOverride</a></code> | path_override block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.port">Port</a></code> | <code>string</code> | Port override. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.queryOverride">QueryOverride</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride">CloudTasksQueueHttpTargetUriOverrideQueryOverride</a></code> | query_override block. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.scheme">Scheme</a></code> | <code>string</code> | Scheme override. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.uriOverrideEnforceMode">UriOverrideEnforceMode</a></code> | <code>string</code> | URI Override Enforce Mode. |

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

Host override.

When specified, replaces the host part of the task URL.
For example, if the task URL is "https://www.google.com", and host value
is set to "example.net", the overridden URI will be changed to "https://example.net".
Host value cannot be an empty string (INVALID_ARGUMENT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#host CloudTasksQueue#host}

---

##### `PathOverride`<sup>Optional</sup> <a name="PathOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.pathOverride"></a>

```csharp
public CloudTasksQueueHttpTargetUriOverridePathOverride PathOverride { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverride">CloudTasksQueueHttpTargetUriOverridePathOverride</a>

path_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#path_override CloudTasksQueue#path_override}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.port"></a>

```csharp
public string Port { get; set; }
```

- *Type:* string

Port override.

When specified, replaces the port part of the task URI.
For instance, for a URI http://www.google.com/foo and port=123, the overridden URI becomes http://www.google.com:123/foo.
Note that the port value must be a positive integer.
Setting the port to 0 (Zero) clears the URI port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#port CloudTasksQueue#port}

---

##### `QueryOverride`<sup>Optional</sup> <a name="QueryOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.queryOverride"></a>

```csharp
public CloudTasksQueueHttpTargetUriOverrideQueryOverride QueryOverride { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride">CloudTasksQueueHttpTargetUriOverrideQueryOverride</a>

query_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#query_override CloudTasksQueue#query_override}

---

##### `Scheme`<sup>Optional</sup> <a name="Scheme" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.scheme"></a>

```csharp
public string Scheme { get; set; }
```

- *Type:* string

Scheme override.

When specified, the task URI scheme is replaced by the provided value (HTTP or HTTPS). Possible values: ["HTTP", "HTTPS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#scheme CloudTasksQueue#scheme}

---

##### `UriOverrideEnforceMode`<sup>Optional</sup> <a name="UriOverrideEnforceMode" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride.property.uriOverrideEnforceMode"></a>

```csharp
public string UriOverrideEnforceMode { get; set; }
```

- *Type:* string

URI Override Enforce Mode.

When specified, determines the Target UriOverride mode. If not specified, it defaults to ALWAYS. Possible values: ["ALWAYS", "IF_NOT_EXISTS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#uri_override_enforce_mode CloudTasksQueue#uri_override_enforce_mode}

---

### CloudTasksQueueHttpTargetUriOverridePathOverride <a name="CloudTasksQueueHttpTargetUriOverridePathOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverride.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudTasksQueueHttpTargetUriOverridePathOverride {
    string Path = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverride.property.path">Path</a></code> | <code>string</code> | The URI path (e.g., /users/1234). Default is an empty string. |

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverride.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

The URI path (e.g., /users/1234). Default is an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#path CloudTasksQueue#path}

---

### CloudTasksQueueHttpTargetUriOverrideQueryOverride <a name="CloudTasksQueueHttpTargetUriOverrideQueryOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudTasksQueueHttpTargetUriOverrideQueryOverride {
    string QueryParams = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride.property.queryParams">QueryParams</a></code> | <code>string</code> | The query parameters (e.g., qparam1=123&qparam2=456). Default is an empty string. |

---

##### `QueryParams`<sup>Optional</sup> <a name="QueryParams" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride.property.queryParams"></a>

```csharp
public string QueryParams { get; set; }
```

- *Type:* string

The query parameters (e.g., qparam1=123&qparam2=456). Default is an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#query_params CloudTasksQueue#query_params}

---

### CloudTasksQueueRateLimits <a name="CloudTasksQueueRateLimits" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudTasksQueueRateLimits {
    double MaxConcurrentDispatches = null,
    double MaxDispatchesPerSecond = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits.property.maxConcurrentDispatches">MaxConcurrentDispatches</a></code> | <code>double</code> | The maximum number of concurrent tasks that Cloud Tasks allows to be dispatched for this queue. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits.property.maxDispatchesPerSecond">MaxDispatchesPerSecond</a></code> | <code>double</code> | The maximum rate at which tasks are dispatched from this queue. |

---

##### `MaxConcurrentDispatches`<sup>Optional</sup> <a name="MaxConcurrentDispatches" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits.property.maxConcurrentDispatches"></a>

```csharp
public double MaxConcurrentDispatches { get; set; }
```

- *Type:* double

The maximum number of concurrent tasks that Cloud Tasks allows to be dispatched for this queue.

After this threshold has been
reached, Cloud Tasks stops dispatching tasks until the number of
concurrent requests decreases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#max_concurrent_dispatches CloudTasksQueue#max_concurrent_dispatches}

---

##### `MaxDispatchesPerSecond`<sup>Optional</sup> <a name="MaxDispatchesPerSecond" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits.property.maxDispatchesPerSecond"></a>

```csharp
public double MaxDispatchesPerSecond { get; set; }
```

- *Type:* double

The maximum rate at which tasks are dispatched from this queue.

If unspecified when the queue is created, Cloud Tasks will pick the default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#max_dispatches_per_second CloudTasksQueue#max_dispatches_per_second}

---

### CloudTasksQueueRetryConfig <a name="CloudTasksQueueRetryConfig" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudTasksQueueRetryConfig {
    double MaxAttempts = null,
    string MaxBackoff = null,
    double MaxDoublings = null,
    string MaxRetryDuration = null,
    string MinBackoff = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig.property.maxAttempts">MaxAttempts</a></code> | <code>double</code> | Number of attempts per task. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig.property.maxBackoff">MaxBackoff</a></code> | <code>string</code> | A task will be scheduled for retry between minBackoff and maxBackoff duration after it fails, if the queue's RetryConfig specifies that the task should be retried. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig.property.maxDoublings">MaxDoublings</a></code> | <code>double</code> | The time between retries will double maxDoublings times. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig.property.maxRetryDuration">MaxRetryDuration</a></code> | <code>string</code> | If positive, maxRetryDuration specifies the time limit for retrying a failed task, measured from when the task was first attempted. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig.property.minBackoff">MinBackoff</a></code> | <code>string</code> | A task will be scheduled for retry between minBackoff and maxBackoff duration after it fails, if the queue's RetryConfig specifies that the task should be retried. |

---

##### `MaxAttempts`<sup>Optional</sup> <a name="MaxAttempts" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig.property.maxAttempts"></a>

```csharp
public double MaxAttempts { get; set; }
```

- *Type:* double

Number of attempts per task.

Cloud Tasks will attempt the task maxAttempts times (that is, if
the first attempt fails, then there will be maxAttempts - 1
retries). Must be >= -1.

If unspecified when the queue is created, Cloud Tasks will pick
the default.

-1 indicates unlimited attempts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#max_attempts CloudTasksQueue#max_attempts}

---

##### `MaxBackoff`<sup>Optional</sup> <a name="MaxBackoff" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig.property.maxBackoff"></a>

```csharp
public string MaxBackoff { get; set; }
```

- *Type:* string

A task will be scheduled for retry between minBackoff and maxBackoff duration after it fails, if the queue's RetryConfig specifies that the task should be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#max_backoff CloudTasksQueue#max_backoff}

---

##### `MaxDoublings`<sup>Optional</sup> <a name="MaxDoublings" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig.property.maxDoublings"></a>

```csharp
public double MaxDoublings { get; set; }
```

- *Type:* double

The time between retries will double maxDoublings times.

A task's retry interval starts at minBackoff, then doubles maxDoublings times,
then increases linearly, and finally retries retries at intervals of maxBackoff
up to maxAttempts times.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#max_doublings CloudTasksQueue#max_doublings}

---

##### `MaxRetryDuration`<sup>Optional</sup> <a name="MaxRetryDuration" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig.property.maxRetryDuration"></a>

```csharp
public string MaxRetryDuration { get; set; }
```

- *Type:* string

If positive, maxRetryDuration specifies the time limit for retrying a failed task, measured from when the task was first attempted.

Once maxRetryDuration time has passed and the task has
been attempted maxAttempts times, no further attempts will be
made and the task will be deleted.

If zero, then the task age is unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#max_retry_duration CloudTasksQueue#max_retry_duration}

---

##### `MinBackoff`<sup>Optional</sup> <a name="MinBackoff" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig.property.minBackoff"></a>

```csharp
public string MinBackoff { get; set; }
```

- *Type:* string

A task will be scheduled for retry between minBackoff and maxBackoff duration after it fails, if the queue's RetryConfig specifies that the task should be retried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#min_backoff CloudTasksQueue#min_backoff}

---

### CloudTasksQueueStackdriverLoggingConfig <a name="CloudTasksQueueStackdriverLoggingConfig" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudTasksQueueStackdriverLoggingConfig {
    double SamplingRatio
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig.property.samplingRatio">SamplingRatio</a></code> | <code>double</code> | Specifies the fraction of operations to write to Stackdriver Logging. |

---

##### `SamplingRatio`<sup>Required</sup> <a name="SamplingRatio" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig.property.samplingRatio"></a>

```csharp
public double SamplingRatio { get; set; }
```

- *Type:* double

Specifies the fraction of operations to write to Stackdriver Logging.

This field may contain any value between 0.0 and 1.0, inclusive. 0.0 is the
default and means that no operations are logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#sampling_ratio CloudTasksQueue#sampling_ratio}

---

### CloudTasksQueueTimeouts <a name="CloudTasksQueueTimeouts" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudTasksQueueTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#create CloudTasksQueue#create}. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#delete CloudTasksQueue#delete}. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#update CloudTasksQueue#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#create CloudTasksQueue#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#delete CloudTasksQueue#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/cloud_tasks_queue#update CloudTasksQueue#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudTasksQueueAppEngineRoutingOverrideOutputReference <a name="CloudTasksQueueAppEngineRoutingOverrideOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudTasksQueueAppEngineRoutingOverrideOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.resetInstance">ResetInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.resetService">ResetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstance` <a name="ResetInstance" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.resetInstance"></a>

```csharp
private void ResetInstance()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.resetService"></a>

```csharp
private void ResetService()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.instanceInput">InstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.instance">Instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride">CloudTasksQueueAppEngineRoutingOverride</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.instanceInput"></a>

```csharp
public string InstanceInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.instance"></a>

```csharp
public string Instance { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverrideOutputReference.property.internalValue"></a>

```csharp
public CloudTasksQueueAppEngineRoutingOverride InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueAppEngineRoutingOverride">CloudTasksQueueAppEngineRoutingOverride</a>

---


### CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference <a name="CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader">CloudTasksQueueHttpTargetHeaderOverridesHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference.property.internalValue"></a>

```csharp
public CloudTasksQueueHttpTargetHeaderOverridesHeader InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader">CloudTasksQueueHttpTargetHeaderOverridesHeader</a>

---


### CloudTasksQueueHttpTargetHeaderOverridesList <a name="CloudTasksQueueHttpTargetHeaderOverridesList" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudTasksQueueHttpTargetHeaderOverridesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.get"></a>

```csharp
private CloudTasksQueueHttpTargetHeaderOverridesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudTasksQueueHttpTargetHeaderOverridesOutputReference <a name="CloudTasksQueueHttpTargetHeaderOverridesOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudTasksQueueHttpTargetHeaderOverridesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.putHeader">PutHeader</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeader` <a name="PutHeader" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.putHeader"></a>

```csharp
private void PutHeader(CloudTasksQueueHttpTargetHeaderOverridesHeader Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.putHeader.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader">CloudTasksQueueHttpTargetHeaderOverridesHeader</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.header">Header</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference">CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.headerInput">HeaderInput</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader">CloudTasksQueueHttpTargetHeaderOverridesHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.header"></a>

```csharp
public CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference Header { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference">CloudTasksQueueHttpTargetHeaderOverridesHeaderOutputReference</a>

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.headerInput"></a>

```csharp
public CloudTasksQueueHttpTargetHeaderOverridesHeader HeaderInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesHeader">CloudTasksQueueHttpTargetHeaderOverridesHeader</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CloudTasksQueueHttpTargetOauthTokenOutputReference <a name="CloudTasksQueueHttpTargetOauthTokenOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudTasksQueueHttpTargetOauthTokenOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.resetScope"></a>

```csharp
private void ResetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken">CloudTasksQueueHttpTargetOauthToken</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.serviceAccountEmailInput"></a>

```csharp
public string ServiceAccountEmailInput { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference.property.internalValue"></a>

```csharp
public CloudTasksQueueHttpTargetOauthToken InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken">CloudTasksQueueHttpTargetOauthToken</a>

---


### CloudTasksQueueHttpTargetOidcTokenOutputReference <a name="CloudTasksQueueHttpTargetOidcTokenOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudTasksQueueHttpTargetOidcTokenOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.resetAudience">ResetAudience</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAudience` <a name="ResetAudience" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.resetAudience"></a>

```csharp
private void ResetAudience()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.audienceInput">AudienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.audience">Audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken">CloudTasksQueueHttpTargetOidcToken</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AudienceInput`<sup>Optional</sup> <a name="AudienceInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.audienceInput"></a>

```csharp
public string AudienceInput { get; }
```

- *Type:* string

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.serviceAccountEmailInput"></a>

```csharp
public string ServiceAccountEmailInput { get; }
```

- *Type:* string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.audience"></a>

```csharp
public string Audience { get; }
```

- *Type:* string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference.property.internalValue"></a>

```csharp
public CloudTasksQueueHttpTargetOidcToken InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken">CloudTasksQueueHttpTargetOidcToken</a>

---


### CloudTasksQueueHttpTargetOutputReference <a name="CloudTasksQueueHttpTargetOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudTasksQueueHttpTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putHeaderOverrides">PutHeaderOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putOauthToken">PutOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putOidcToken">PutOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putUriOverride">PutUriOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resetHeaderOverrides">ResetHeaderOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resetHttpMethod">ResetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resetOauthToken">ResetOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resetOidcToken">ResetOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resetUriOverride">ResetUriOverride</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaderOverrides` <a name="PutHeaderOverrides" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putHeaderOverrides"></a>

```csharp
private void PutHeaderOverrides(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putHeaderOverrides.parameter.value"></a>

- *Type:* object

---

##### `PutOauthToken` <a name="PutOauthToken" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putOauthToken"></a>

```csharp
private void PutOauthToken(CloudTasksQueueHttpTargetOauthToken Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putOauthToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken">CloudTasksQueueHttpTargetOauthToken</a>

---

##### `PutOidcToken` <a name="PutOidcToken" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putOidcToken"></a>

```csharp
private void PutOidcToken(CloudTasksQueueHttpTargetOidcToken Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putOidcToken.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken">CloudTasksQueueHttpTargetOidcToken</a>

---

##### `PutUriOverride` <a name="PutUriOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putUriOverride"></a>

```csharp
private void PutUriOverride(CloudTasksQueueHttpTargetUriOverride Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.putUriOverride.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride">CloudTasksQueueHttpTargetUriOverride</a>

---

##### `ResetHeaderOverrides` <a name="ResetHeaderOverrides" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resetHeaderOverrides"></a>

```csharp
private void ResetHeaderOverrides()
```

##### `ResetHttpMethod` <a name="ResetHttpMethod" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resetHttpMethod"></a>

```csharp
private void ResetHttpMethod()
```

##### `ResetOauthToken` <a name="ResetOauthToken" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resetOauthToken"></a>

```csharp
private void ResetOauthToken()
```

##### `ResetOidcToken` <a name="ResetOidcToken" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resetOidcToken"></a>

```csharp
private void ResetOidcToken()
```

##### `ResetUriOverride` <a name="ResetUriOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.resetUriOverride"></a>

```csharp
private void ResetUriOverride()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.headerOverrides">HeaderOverrides</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList">CloudTasksQueueHttpTargetHeaderOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.oauthToken">OauthToken</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference">CloudTasksQueueHttpTargetOauthTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.oidcToken">OidcToken</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference">CloudTasksQueueHttpTargetOidcTokenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.uriOverride">UriOverride</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference">CloudTasksQueueHttpTargetUriOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.headerOverridesInput">HeaderOverridesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.httpMethodInput">HttpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.oauthTokenInput">OauthTokenInput</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken">CloudTasksQueueHttpTargetOauthToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.oidcTokenInput">OidcTokenInput</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken">CloudTasksQueueHttpTargetOidcToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.uriOverrideInput">UriOverrideInput</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride">CloudTasksQueueHttpTargetUriOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.httpMethod">HttpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget">CloudTasksQueueHttpTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HeaderOverrides`<sup>Required</sup> <a name="HeaderOverrides" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.headerOverrides"></a>

```csharp
public CloudTasksQueueHttpTargetHeaderOverridesList HeaderOverrides { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetHeaderOverridesList">CloudTasksQueueHttpTargetHeaderOverridesList</a>

---

##### `OauthToken`<sup>Required</sup> <a name="OauthToken" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.oauthToken"></a>

```csharp
public CloudTasksQueueHttpTargetOauthTokenOutputReference OauthToken { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthTokenOutputReference">CloudTasksQueueHttpTargetOauthTokenOutputReference</a>

---

##### `OidcToken`<sup>Required</sup> <a name="OidcToken" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.oidcToken"></a>

```csharp
public CloudTasksQueueHttpTargetOidcTokenOutputReference OidcToken { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcTokenOutputReference">CloudTasksQueueHttpTargetOidcTokenOutputReference</a>

---

##### `UriOverride`<sup>Required</sup> <a name="UriOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.uriOverride"></a>

```csharp
public CloudTasksQueueHttpTargetUriOverrideOutputReference UriOverride { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference">CloudTasksQueueHttpTargetUriOverrideOutputReference</a>

---

##### `HeaderOverridesInput`<sup>Optional</sup> <a name="HeaderOverridesInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.headerOverridesInput"></a>

```csharp
public object HeaderOverridesInput { get; }
```

- *Type:* object

---

##### `HttpMethodInput`<sup>Optional</sup> <a name="HttpMethodInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.httpMethodInput"></a>

```csharp
public string HttpMethodInput { get; }
```

- *Type:* string

---

##### `OauthTokenInput`<sup>Optional</sup> <a name="OauthTokenInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.oauthTokenInput"></a>

```csharp
public CloudTasksQueueHttpTargetOauthToken OauthTokenInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOauthToken">CloudTasksQueueHttpTargetOauthToken</a>

---

##### `OidcTokenInput`<sup>Optional</sup> <a name="OidcTokenInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.oidcTokenInput"></a>

```csharp
public CloudTasksQueueHttpTargetOidcToken OidcTokenInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOidcToken">CloudTasksQueueHttpTargetOidcToken</a>

---

##### `UriOverrideInput`<sup>Optional</sup> <a name="UriOverrideInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.uriOverrideInput"></a>

```csharp
public CloudTasksQueueHttpTargetUriOverride UriOverrideInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride">CloudTasksQueueHttpTargetUriOverride</a>

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.httpMethod"></a>

```csharp
public string HttpMethod { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetOutputReference.property.internalValue"></a>

```csharp
public CloudTasksQueueHttpTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTarget">CloudTasksQueueHttpTarget</a>

---


### CloudTasksQueueHttpTargetUriOverrideOutputReference <a name="CloudTasksQueueHttpTargetUriOverrideOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudTasksQueueHttpTargetUriOverrideOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.putPathOverride">PutPathOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.putQueryOverride">PutQueryOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetPathOverride">ResetPathOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetQueryOverride">ResetQueryOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetScheme">ResetScheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetUriOverrideEnforceMode">ResetUriOverrideEnforceMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPathOverride` <a name="PutPathOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.putPathOverride"></a>

```csharp
private void PutPathOverride(CloudTasksQueueHttpTargetUriOverridePathOverride Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.putPathOverride.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverride">CloudTasksQueueHttpTargetUriOverridePathOverride</a>

---

##### `PutQueryOverride` <a name="PutQueryOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.putQueryOverride"></a>

```csharp
private void PutQueryOverride(CloudTasksQueueHttpTargetUriOverrideQueryOverride Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.putQueryOverride.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride">CloudTasksQueueHttpTargetUriOverrideQueryOverride</a>

---

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetPathOverride` <a name="ResetPathOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetPathOverride"></a>

```csharp
private void ResetPathOverride()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetQueryOverride` <a name="ResetQueryOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetQueryOverride"></a>

```csharp
private void ResetQueryOverride()
```

##### `ResetScheme` <a name="ResetScheme" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetScheme"></a>

```csharp
private void ResetScheme()
```

##### `ResetUriOverrideEnforceMode` <a name="ResetUriOverrideEnforceMode" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.resetUriOverrideEnforceMode"></a>

```csharp
private void ResetUriOverrideEnforceMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.pathOverride">PathOverride</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference">CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.queryOverride">QueryOverride</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference">CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.pathOverrideInput">PathOverrideInput</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverride">CloudTasksQueueHttpTargetUriOverridePathOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.portInput">PortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.queryOverrideInput">QueryOverrideInput</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride">CloudTasksQueueHttpTargetUriOverrideQueryOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.schemeInput">SchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.uriOverrideEnforceModeInput">UriOverrideEnforceModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.port">Port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.scheme">Scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.uriOverrideEnforceMode">UriOverrideEnforceMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride">CloudTasksQueueHttpTargetUriOverride</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PathOverride`<sup>Required</sup> <a name="PathOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.pathOverride"></a>

```csharp
public CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference PathOverride { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference">CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference</a>

---

##### `QueryOverride`<sup>Required</sup> <a name="QueryOverride" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.queryOverride"></a>

```csharp
public CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference QueryOverride { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference">CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference</a>

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `PathOverrideInput`<sup>Optional</sup> <a name="PathOverrideInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.pathOverrideInput"></a>

```csharp
public CloudTasksQueueHttpTargetUriOverridePathOverride PathOverrideInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverride">CloudTasksQueueHttpTargetUriOverridePathOverride</a>

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.portInput"></a>

```csharp
public string PortInput { get; }
```

- *Type:* string

---

##### `QueryOverrideInput`<sup>Optional</sup> <a name="QueryOverrideInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.queryOverrideInput"></a>

```csharp
public CloudTasksQueueHttpTargetUriOverrideQueryOverride QueryOverrideInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride">CloudTasksQueueHttpTargetUriOverrideQueryOverride</a>

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.schemeInput"></a>

```csharp
public string SchemeInput { get; }
```

- *Type:* string

---

##### `UriOverrideEnforceModeInput`<sup>Optional</sup> <a name="UriOverrideEnforceModeInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.uriOverrideEnforceModeInput"></a>

```csharp
public string UriOverrideEnforceModeInput { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.port"></a>

```csharp
public string Port { get; }
```

- *Type:* string

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.scheme"></a>

```csharp
public string Scheme { get; }
```

- *Type:* string

---

##### `UriOverrideEnforceMode`<sup>Required</sup> <a name="UriOverrideEnforceMode" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.uriOverrideEnforceMode"></a>

```csharp
public string UriOverrideEnforceMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideOutputReference.property.internalValue"></a>

```csharp
public CloudTasksQueueHttpTargetUriOverride InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverride">CloudTasksQueueHttpTargetUriOverride</a>

---


### CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference <a name="CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverride">CloudTasksQueueHttpTargetUriOverridePathOverride</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverrideOutputReference.property.internalValue"></a>

```csharp
public CloudTasksQueueHttpTargetUriOverridePathOverride InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverridePathOverride">CloudTasksQueueHttpTargetUriOverridePathOverride</a>

---


### CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference <a name="CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.resetQueryParams">ResetQueryParams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetQueryParams` <a name="ResetQueryParams" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.resetQueryParams"></a>

```csharp
private void ResetQueryParams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.queryParamsInput">QueryParamsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.queryParams">QueryParams</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride">CloudTasksQueueHttpTargetUriOverrideQueryOverride</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `QueryParamsInput`<sup>Optional</sup> <a name="QueryParamsInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.queryParamsInput"></a>

```csharp
public string QueryParamsInput { get; }
```

- *Type:* string

---

##### `QueryParams`<sup>Required</sup> <a name="QueryParams" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.queryParams"></a>

```csharp
public string QueryParams { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverrideOutputReference.property.internalValue"></a>

```csharp
public CloudTasksQueueHttpTargetUriOverrideQueryOverride InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueHttpTargetUriOverrideQueryOverride">CloudTasksQueueHttpTargetUriOverrideQueryOverride</a>

---


### CloudTasksQueueRateLimitsOutputReference <a name="CloudTasksQueueRateLimitsOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudTasksQueueRateLimitsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.resetMaxConcurrentDispatches">ResetMaxConcurrentDispatches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.resetMaxDispatchesPerSecond">ResetMaxDispatchesPerSecond</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxConcurrentDispatches` <a name="ResetMaxConcurrentDispatches" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.resetMaxConcurrentDispatches"></a>

```csharp
private void ResetMaxConcurrentDispatches()
```

##### `ResetMaxDispatchesPerSecond` <a name="ResetMaxDispatchesPerSecond" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.resetMaxDispatchesPerSecond"></a>

```csharp
private void ResetMaxDispatchesPerSecond()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.maxBurstSize">MaxBurstSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.maxConcurrentDispatchesInput">MaxConcurrentDispatchesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.maxDispatchesPerSecondInput">MaxDispatchesPerSecondInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.maxConcurrentDispatches">MaxConcurrentDispatches</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.maxDispatchesPerSecond">MaxDispatchesPerSecond</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits">CloudTasksQueueRateLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxBurstSize`<sup>Required</sup> <a name="MaxBurstSize" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.maxBurstSize"></a>

```csharp
public double MaxBurstSize { get; }
```

- *Type:* double

---

##### `MaxConcurrentDispatchesInput`<sup>Optional</sup> <a name="MaxConcurrentDispatchesInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.maxConcurrentDispatchesInput"></a>

```csharp
public double MaxConcurrentDispatchesInput { get; }
```

- *Type:* double

---

##### `MaxDispatchesPerSecondInput`<sup>Optional</sup> <a name="MaxDispatchesPerSecondInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.maxDispatchesPerSecondInput"></a>

```csharp
public double MaxDispatchesPerSecondInput { get; }
```

- *Type:* double

---

##### `MaxConcurrentDispatches`<sup>Required</sup> <a name="MaxConcurrentDispatches" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.maxConcurrentDispatches"></a>

```csharp
public double MaxConcurrentDispatches { get; }
```

- *Type:* double

---

##### `MaxDispatchesPerSecond`<sup>Required</sup> <a name="MaxDispatchesPerSecond" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.maxDispatchesPerSecond"></a>

```csharp
public double MaxDispatchesPerSecond { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimitsOutputReference.property.internalValue"></a>

```csharp
public CloudTasksQueueRateLimits InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRateLimits">CloudTasksQueueRateLimits</a>

---


### CloudTasksQueueRetryConfigOutputReference <a name="CloudTasksQueueRetryConfigOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudTasksQueueRetryConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resetMaxAttempts">ResetMaxAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resetMaxBackoff">ResetMaxBackoff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resetMaxDoublings">ResetMaxDoublings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resetMaxRetryDuration">ResetMaxRetryDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resetMinBackoff">ResetMinBackoff</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxAttempts` <a name="ResetMaxAttempts" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resetMaxAttempts"></a>

```csharp
private void ResetMaxAttempts()
```

##### `ResetMaxBackoff` <a name="ResetMaxBackoff" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resetMaxBackoff"></a>

```csharp
private void ResetMaxBackoff()
```

##### `ResetMaxDoublings` <a name="ResetMaxDoublings" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resetMaxDoublings"></a>

```csharp
private void ResetMaxDoublings()
```

##### `ResetMaxRetryDuration` <a name="ResetMaxRetryDuration" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resetMaxRetryDuration"></a>

```csharp
private void ResetMaxRetryDuration()
```

##### `ResetMinBackoff` <a name="ResetMinBackoff" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.resetMinBackoff"></a>

```csharp
private void ResetMinBackoff()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxAttemptsInput">MaxAttemptsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxBackoffInput">MaxBackoffInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxDoublingsInput">MaxDoublingsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxRetryDurationInput">MaxRetryDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.minBackoffInput">MinBackoffInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxAttempts">MaxAttempts</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxBackoff">MaxBackoff</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxDoublings">MaxDoublings</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxRetryDuration">MaxRetryDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.minBackoff">MinBackoff</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig">CloudTasksQueueRetryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxAttemptsInput`<sup>Optional</sup> <a name="MaxAttemptsInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxAttemptsInput"></a>

```csharp
public double MaxAttemptsInput { get; }
```

- *Type:* double

---

##### `MaxBackoffInput`<sup>Optional</sup> <a name="MaxBackoffInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxBackoffInput"></a>

```csharp
public string MaxBackoffInput { get; }
```

- *Type:* string

---

##### `MaxDoublingsInput`<sup>Optional</sup> <a name="MaxDoublingsInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxDoublingsInput"></a>

```csharp
public double MaxDoublingsInput { get; }
```

- *Type:* double

---

##### `MaxRetryDurationInput`<sup>Optional</sup> <a name="MaxRetryDurationInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxRetryDurationInput"></a>

```csharp
public string MaxRetryDurationInput { get; }
```

- *Type:* string

---

##### `MinBackoffInput`<sup>Optional</sup> <a name="MinBackoffInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.minBackoffInput"></a>

```csharp
public string MinBackoffInput { get; }
```

- *Type:* string

---

##### `MaxAttempts`<sup>Required</sup> <a name="MaxAttempts" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxAttempts"></a>

```csharp
public double MaxAttempts { get; }
```

- *Type:* double

---

##### `MaxBackoff`<sup>Required</sup> <a name="MaxBackoff" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxBackoff"></a>

```csharp
public string MaxBackoff { get; }
```

- *Type:* string

---

##### `MaxDoublings`<sup>Required</sup> <a name="MaxDoublings" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxDoublings"></a>

```csharp
public double MaxDoublings { get; }
```

- *Type:* double

---

##### `MaxRetryDuration`<sup>Required</sup> <a name="MaxRetryDuration" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.maxRetryDuration"></a>

```csharp
public string MaxRetryDuration { get; }
```

- *Type:* string

---

##### `MinBackoff`<sup>Required</sup> <a name="MinBackoff" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.minBackoff"></a>

```csharp
public string MinBackoff { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfigOutputReference.property.internalValue"></a>

```csharp
public CloudTasksQueueRetryConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueRetryConfig">CloudTasksQueueRetryConfig</a>

---


### CloudTasksQueueStackdriverLoggingConfigOutputReference <a name="CloudTasksQueueStackdriverLoggingConfigOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudTasksQueueStackdriverLoggingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.property.samplingRatioInput">SamplingRatioInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.property.samplingRatio">SamplingRatio</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig">CloudTasksQueueStackdriverLoggingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SamplingRatioInput`<sup>Optional</sup> <a name="SamplingRatioInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.property.samplingRatioInput"></a>

```csharp
public double SamplingRatioInput { get; }
```

- *Type:* double

---

##### `SamplingRatio`<sup>Required</sup> <a name="SamplingRatio" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.property.samplingRatio"></a>

```csharp
public double SamplingRatio { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfigOutputReference.property.internalValue"></a>

```csharp
public CloudTasksQueueStackdriverLoggingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueStackdriverLoggingConfig">CloudTasksQueueStackdriverLoggingConfig</a>

---


### CloudTasksQueueTimeoutsOutputReference <a name="CloudTasksQueueTimeoutsOutputReference" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new CloudTasksQueueTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudTasksQueue.CloudTasksQueueTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



