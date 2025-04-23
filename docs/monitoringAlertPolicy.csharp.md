# `monitoringAlertPolicy` Submodule <a name="`monitoringAlertPolicy` Submodule" id="@cdktf/provider-google.monitoringAlertPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitoringAlertPolicy <a name="MonitoringAlertPolicy" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy google_monitoring_alert_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicy(Construct Scope, string Id, MonitoringAlertPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig">MonitoringAlertPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig">MonitoringAlertPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.putAlertStrategy">PutAlertStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.putDocumentation">PutDocumentation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.resetAlertStrategy">ResetAlertStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.resetDocumentation">ResetDocumentation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.resetNotificationChannels">ResetNotificationChannels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.resetSeverity">ResetSeverity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.resetUserLabels">ResetUserLabels</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAlertStrategy` <a name="PutAlertStrategy" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.putAlertStrategy"></a>

```csharp
private void PutAlertStrategy(MonitoringAlertPolicyAlertStrategy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.putAlertStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategy">MonitoringAlertPolicyAlertStrategy</a>

---

##### `PutConditions` <a name="PutConditions" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.putConditions"></a>

```csharp
private void PutConditions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.putConditions.parameter.value"></a>

- *Type:* object

---

##### `PutDocumentation` <a name="PutDocumentation" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.putDocumentation"></a>

```csharp
private void PutDocumentation(MonitoringAlertPolicyDocumentation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.putDocumentation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentation">MonitoringAlertPolicyDocumentation</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(MonitoringAlertPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeouts">MonitoringAlertPolicyTimeouts</a>

---

##### `ResetAlertStrategy` <a name="ResetAlertStrategy" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.resetAlertStrategy"></a>

```csharp
private void ResetAlertStrategy()
```

##### `ResetDocumentation` <a name="ResetDocumentation" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.resetDocumentation"></a>

```csharp
private void ResetDocumentation()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNotificationChannels` <a name="ResetNotificationChannels" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.resetNotificationChannels"></a>

```csharp
private void ResetNotificationChannels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetSeverity` <a name="ResetSeverity" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.resetSeverity"></a>

```csharp
private void ResetSeverity()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUserLabels` <a name="ResetUserLabels" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.resetUserLabels"></a>

```csharp
private void ResetUserLabels()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MonitoringAlertPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

MonitoringAlertPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

MonitoringAlertPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

MonitoringAlertPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

MonitoringAlertPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MonitoringAlertPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MonitoringAlertPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MonitoringAlertPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MonitoringAlertPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.alertStrategy">AlertStrategy</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference">MonitoringAlertPolicyAlertStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList">MonitoringAlertPolicyConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.creationRecord">CreationRecord</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList">MonitoringAlertPolicyCreationRecordList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.documentation">Documentation</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference">MonitoringAlertPolicyDocumentationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference">MonitoringAlertPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.alertStrategyInput">AlertStrategyInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategy">MonitoringAlertPolicyAlertStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.combinerInput">CombinerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.conditionsInput">ConditionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.documentationInput">DocumentationInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentation">MonitoringAlertPolicyDocumentation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.notificationChannelsInput">NotificationChannelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.severityInput">SeverityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.userLabelsInput">UserLabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.combiner">Combiner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.notificationChannels">NotificationChannels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.userLabels">UserLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AlertStrategy`<sup>Required</sup> <a name="AlertStrategy" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.alertStrategy"></a>

```csharp
public MonitoringAlertPolicyAlertStrategyOutputReference AlertStrategy { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference">MonitoringAlertPolicyAlertStrategyOutputReference</a>

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.conditions"></a>

```csharp
public MonitoringAlertPolicyConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList">MonitoringAlertPolicyConditionsList</a>

---

##### `CreationRecord`<sup>Required</sup> <a name="CreationRecord" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.creationRecord"></a>

```csharp
public MonitoringAlertPolicyCreationRecordList CreationRecord { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList">MonitoringAlertPolicyCreationRecordList</a>

---

##### `Documentation`<sup>Required</sup> <a name="Documentation" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.documentation"></a>

```csharp
public MonitoringAlertPolicyDocumentationOutputReference Documentation { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference">MonitoringAlertPolicyDocumentationOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.timeouts"></a>

```csharp
public MonitoringAlertPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference">MonitoringAlertPolicyTimeoutsOutputReference</a>

---

##### `AlertStrategyInput`<sup>Optional</sup> <a name="AlertStrategyInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.alertStrategyInput"></a>

```csharp
public MonitoringAlertPolicyAlertStrategy AlertStrategyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategy">MonitoringAlertPolicyAlertStrategy</a>

---

##### `CombinerInput`<sup>Optional</sup> <a name="CombinerInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.combinerInput"></a>

```csharp
public string CombinerInput { get; }
```

- *Type:* string

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.conditionsInput"></a>

```csharp
public object ConditionsInput { get; }
```

- *Type:* object

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DocumentationInput`<sup>Optional</sup> <a name="DocumentationInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.documentationInput"></a>

```csharp
public MonitoringAlertPolicyDocumentation DocumentationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentation">MonitoringAlertPolicyDocumentation</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NotificationChannelsInput`<sup>Optional</sup> <a name="NotificationChannelsInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.notificationChannelsInput"></a>

```csharp
public string[] NotificationChannelsInput { get; }
```

- *Type:* string[]

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.severityInput"></a>

```csharp
public string SeverityInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UserLabelsInput`<sup>Optional</sup> <a name="UserLabelsInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.userLabelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> UserLabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Combiner`<sup>Required</sup> <a name="Combiner" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.combiner"></a>

```csharp
public string Combiner { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NotificationChannels`<sup>Required</sup> <a name="NotificationChannels" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.notificationChannels"></a>

```csharp
public string[] NotificationChannels { get; }
```

- *Type:* string[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `UserLabels`<sup>Required</sup> <a name="UserLabels" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.userLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> UserLabels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitoringAlertPolicyAlertStrategy <a name="MonitoringAlertPolicyAlertStrategy" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyAlertStrategy {
    string AutoClose = null,
    object NotificationChannelStrategy = null,
    string[] NotificationPrompts = null,
    MonitoringAlertPolicyAlertStrategyNotificationRateLimit NotificationRateLimit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategy.property.autoClose">AutoClose</a></code> | <code>string</code> | If an alert policy that was active has no data for this long, any open incidents will close. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategy.property.notificationChannelStrategy">NotificationChannelStrategy</a></code> | <code>object</code> | notification_channel_strategy block. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategy.property.notificationPrompts">NotificationPrompts</a></code> | <code>string[]</code> | Control when notifications will be sent out. Possible values: ["NOTIFICATION_PROMPT_UNSPECIFIED", "OPENED", "CLOSED"]. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategy.property.notificationRateLimit">NotificationRateLimit</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimit">MonitoringAlertPolicyAlertStrategyNotificationRateLimit</a></code> | notification_rate_limit block. |

---

##### `AutoClose`<sup>Optional</sup> <a name="AutoClose" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategy.property.autoClose"></a>

```csharp
public string AutoClose { get; set; }
```

- *Type:* string

If an alert policy that was active has no data for this long, any open incidents will close.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#auto_close MonitoringAlertPolicy#auto_close}

---

##### `NotificationChannelStrategy`<sup>Optional</sup> <a name="NotificationChannelStrategy" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategy.property.notificationChannelStrategy"></a>

```csharp
public object NotificationChannelStrategy { get; set; }
```

- *Type:* object

notification_channel_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#notification_channel_strategy MonitoringAlertPolicy#notification_channel_strategy}

---

##### `NotificationPrompts`<sup>Optional</sup> <a name="NotificationPrompts" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategy.property.notificationPrompts"></a>

```csharp
public string[] NotificationPrompts { get; set; }
```

- *Type:* string[]

Control when notifications will be sent out. Possible values: ["NOTIFICATION_PROMPT_UNSPECIFIED", "OPENED", "CLOSED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#notification_prompts MonitoringAlertPolicy#notification_prompts}

---

##### `NotificationRateLimit`<sup>Optional</sup> <a name="NotificationRateLimit" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategy.property.notificationRateLimit"></a>

```csharp
public MonitoringAlertPolicyAlertStrategyNotificationRateLimit NotificationRateLimit { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimit">MonitoringAlertPolicyAlertStrategyNotificationRateLimit</a>

notification_rate_limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#notification_rate_limit MonitoringAlertPolicy#notification_rate_limit}

---

### MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy <a name="MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy {
    string[] NotificationChannelNames = null,
    string RenotifyInterval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy.property.notificationChannelNames">NotificationChannelNames</a></code> | <code>string[]</code> | The notification channels that these settings apply to. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy.property.renotifyInterval">RenotifyInterval</a></code> | <code>string</code> | The frequency at which to send reminder notifications for open incidents. |

---

##### `NotificationChannelNames`<sup>Optional</sup> <a name="NotificationChannelNames" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy.property.notificationChannelNames"></a>

```csharp
public string[] NotificationChannelNames { get; set; }
```

- *Type:* string[]

The notification channels that these settings apply to.

Each of these
correspond to the name field in one of the NotificationChannel objects
referenced in the notification_channels field of this AlertPolicy. The format is
'projects/[PROJECT_ID_OR_NUMBER]/notificationChannels/[CHANNEL_ID]'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#notification_channel_names MonitoringAlertPolicy#notification_channel_names}

---

##### `RenotifyInterval`<sup>Optional</sup> <a name="RenotifyInterval" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategy.property.renotifyInterval"></a>

```csharp
public string RenotifyInterval { get; set; }
```

- *Type:* string

The frequency at which to send reminder notifications for open incidents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#renotify_interval MonitoringAlertPolicy#renotify_interval}

---

### MonitoringAlertPolicyAlertStrategyNotificationRateLimit <a name="MonitoringAlertPolicyAlertStrategyNotificationRateLimit" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimit"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimit.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyAlertStrategyNotificationRateLimit {
    string Period = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimit.property.period">Period</a></code> | <code>string</code> | Not more than one notification per period. |

---

##### `Period`<sup>Optional</sup> <a name="Period" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimit.property.period"></a>

```csharp
public string Period { get; set; }
```

- *Type:* string

Not more than one notification per period.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example "60.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#period MonitoringAlertPolicy#period}

---

### MonitoringAlertPolicyConditions <a name="MonitoringAlertPolicyConditions" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyConditions {
    string DisplayName,
    MonitoringAlertPolicyConditionsConditionAbsent ConditionAbsent = null,
    MonitoringAlertPolicyConditionsConditionMatchedLog ConditionMatchedLog = null,
    MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage ConditionMonitoringQueryLanguage = null,
    MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage ConditionPrometheusQueryLanguage = null,
    MonitoringAlertPolicyConditionsConditionSql ConditionSql = null,
    MonitoringAlertPolicyConditionsConditionThreshold ConditionThreshold = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditions.property.displayName">DisplayName</a></code> | <code>string</code> | A short name or phrase used to identify the condition in dashboards, notifications, and incidents. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditions.property.conditionAbsent">ConditionAbsent</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsent">MonitoringAlertPolicyConditionsConditionAbsent</a></code> | condition_absent block. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditions.property.conditionMatchedLog">ConditionMatchedLog</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLog">MonitoringAlertPolicyConditionsConditionMatchedLog</a></code> | condition_matched_log block. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditions.property.conditionMonitoringQueryLanguage">ConditionMonitoringQueryLanguage</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage">MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage</a></code> | condition_monitoring_query_language block. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditions.property.conditionPrometheusQueryLanguage">ConditionPrometheusQueryLanguage</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage">MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage</a></code> | condition_prometheus_query_language block. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditions.property.conditionSql">ConditionSql</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSql">MonitoringAlertPolicyConditionsConditionSql</a></code> | condition_sql block. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditions.property.conditionThreshold">ConditionThreshold</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold">MonitoringAlertPolicyConditionsConditionThreshold</a></code> | condition_threshold block. |

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditions.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

A short name or phrase used to identify the condition in dashboards, notifications, and incidents.

To avoid confusion, don't use the same
display name for multiple conditions in the same
policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#display_name MonitoringAlertPolicy#display_name}

---

##### `ConditionAbsent`<sup>Optional</sup> <a name="ConditionAbsent" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditions.property.conditionAbsent"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionAbsent ConditionAbsent { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsent">MonitoringAlertPolicyConditionsConditionAbsent</a>

condition_absent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#condition_absent MonitoringAlertPolicy#condition_absent}

---

##### `ConditionMatchedLog`<sup>Optional</sup> <a name="ConditionMatchedLog" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditions.property.conditionMatchedLog"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionMatchedLog ConditionMatchedLog { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLog">MonitoringAlertPolicyConditionsConditionMatchedLog</a>

condition_matched_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#condition_matched_log MonitoringAlertPolicy#condition_matched_log}

---

##### `ConditionMonitoringQueryLanguage`<sup>Optional</sup> <a name="ConditionMonitoringQueryLanguage" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditions.property.conditionMonitoringQueryLanguage"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage ConditionMonitoringQueryLanguage { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage">MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage</a>

condition_monitoring_query_language block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#condition_monitoring_query_language MonitoringAlertPolicy#condition_monitoring_query_language}

---

##### `ConditionPrometheusQueryLanguage`<sup>Optional</sup> <a name="ConditionPrometheusQueryLanguage" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditions.property.conditionPrometheusQueryLanguage"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage ConditionPrometheusQueryLanguage { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage">MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage</a>

condition_prometheus_query_language block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#condition_prometheus_query_language MonitoringAlertPolicy#condition_prometheus_query_language}

---

##### `ConditionSql`<sup>Optional</sup> <a name="ConditionSql" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditions.property.conditionSql"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionSql ConditionSql { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSql">MonitoringAlertPolicyConditionsConditionSql</a>

condition_sql block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#condition_sql MonitoringAlertPolicy#condition_sql}

---

##### `ConditionThreshold`<sup>Optional</sup> <a name="ConditionThreshold" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditions.property.conditionThreshold"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionThreshold ConditionThreshold { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold">MonitoringAlertPolicyConditionsConditionThreshold</a>

condition_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#condition_threshold MonitoringAlertPolicy#condition_threshold}

---

### MonitoringAlertPolicyConditionsConditionAbsent <a name="MonitoringAlertPolicyConditionsConditionAbsent" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsent.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyConditionsConditionAbsent {
    string Duration,
    object Aggregations = null,
    string Filter = null,
    MonitoringAlertPolicyConditionsConditionAbsentTrigger Trigger = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsent.property.duration">Duration</a></code> | <code>string</code> | The amount of time that a time series must fail to report new data to be considered failing. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsent.property.aggregations">Aggregations</a></code> | <code>object</code> | aggregations block. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsent.property.filter">Filter</a></code> | <code>string</code> | A filter that identifies which time series should be compared with the threshold.The filter is similar to the one that is specified in the MetricService.ListTimeSeries request (that call is useful to verify the time series that will be retrieved / processed) and must specify the metric type and optionally may contain restrictions on resource type, resource labels, and metric labels. This field may not exceed 2048 Unicode characters in length. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsent.property.trigger">Trigger</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTrigger">MonitoringAlertPolicyConditionsConditionAbsentTrigger</a></code> | trigger block. |

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsent.property.duration"></a>

```csharp
public string Duration { get; set; }
```

- *Type:* string

The amount of time that a time series must fail to report new data to be considered failing.

Currently, only values that are a
multiple of a minute--e.g. 60s, 120s, or 300s
--are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#duration MonitoringAlertPolicy#duration}

---

##### `Aggregations`<sup>Optional</sup> <a name="Aggregations" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsent.property.aggregations"></a>

```csharp
public object Aggregations { get; set; }
```

- *Type:* object

aggregations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#aggregations MonitoringAlertPolicy#aggregations}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsent.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

A filter that identifies which time series should be compared with the threshold.The filter is similar to the one that is specified in the MetricService.ListTimeSeries request (that call is useful to verify the time series that will be retrieved / processed) and must specify the metric type and optionally may contain restrictions on resource type, resource labels, and metric labels. This field may not exceed 2048 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#filter MonitoringAlertPolicy#filter}

---

##### `Trigger`<sup>Optional</sup> <a name="Trigger" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsent.property.trigger"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionAbsentTrigger Trigger { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTrigger">MonitoringAlertPolicyConditionsConditionAbsentTrigger</a>

trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#trigger MonitoringAlertPolicy#trigger}

---

### MonitoringAlertPolicyConditionsConditionAbsentAggregations <a name="MonitoringAlertPolicyConditionsConditionAbsentAggregations" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyConditionsConditionAbsentAggregations {
    string AlignmentPeriod = null,
    string CrossSeriesReducer = null,
    string[] GroupByFields = null,
    string PerSeriesAligner = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregations.property.alignmentPeriod">AlignmentPeriod</a></code> | <code>string</code> | The alignment period for per-time series alignment. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregations.property.crossSeriesReducer">CrossSeriesReducer</a></code> | <code>string</code> | The approach to be used to combine time series. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregations.property.groupByFields">GroupByFields</a></code> | <code>string[]</code> | The set of fields to preserve when crossSeriesReducer is specified. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregations.property.perSeriesAligner">PerSeriesAligner</a></code> | <code>string</code> | The approach to be used to align individual time series. |

---

##### `AlignmentPeriod`<sup>Optional</sup> <a name="AlignmentPeriod" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregations.property.alignmentPeriod"></a>

```csharp
public string AlignmentPeriod { get; set; }
```

- *Type:* string

The alignment period for per-time series alignment.

If present,
alignmentPeriod must be at least
60 seconds. After per-time series
alignment, each time series will
contain data points only on the
period boundaries. If
perSeriesAligner is not specified
or equals ALIGN_NONE, then this
field is ignored. If
perSeriesAligner is specified and
does not equal ALIGN_NONE, then
this field must be defined;
otherwise an error is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#alignment_period MonitoringAlertPolicy#alignment_period}

---

##### `CrossSeriesReducer`<sup>Optional</sup> <a name="CrossSeriesReducer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregations.property.crossSeriesReducer"></a>

```csharp
public string CrossSeriesReducer { get; set; }
```

- *Type:* string

The approach to be used to combine time series.

Not all reducer
functions may be applied to all
time series, depending on the
metric type and the value type of
the original time series.
Reduction may change the metric
type of value type of the time
series.Time series data must be
aligned in order to perform cross-
time series reduction. If
crossSeriesReducer is specified,
then perSeriesAligner must be
specified and not equal ALIGN_NONE
and alignmentPeriod must be
specified; otherwise, an error is
returned. Possible values: ["REDUCE_NONE", "REDUCE_MEAN", "REDUCE_MIN", "REDUCE_MAX", "REDUCE_SUM", "REDUCE_STDDEV", "REDUCE_COUNT", "REDUCE_COUNT_TRUE", "REDUCE_COUNT_FALSE", "REDUCE_FRACTION_TRUE", "REDUCE_PERCENTILE_99", "REDUCE_PERCENTILE_95", "REDUCE_PERCENTILE_50", "REDUCE_PERCENTILE_05"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#cross_series_reducer MonitoringAlertPolicy#cross_series_reducer}

---

##### `GroupByFields`<sup>Optional</sup> <a name="GroupByFields" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregations.property.groupByFields"></a>

```csharp
public string[] GroupByFields { get; set; }
```

- *Type:* string[]

The set of fields to preserve when crossSeriesReducer is specified.

The groupByFields determine how
the time series are partitioned
into subsets prior to applying the
aggregation function. Each subset
contains time series that have the
same value for each of the
grouping fields. Each individual
time series is a member of exactly
one subset. The crossSeriesReducer
is applied to each subset of time
series. It is not possible to
reduce across different resource
types, so this field implicitly
contains resource.type. Fields not
specified in groupByFields are
aggregated away. If groupByFields
is not specified and all the time
series have the same resource
type, then the time series are
aggregated into a single output
time series. If crossSeriesReducer
is not defined, this field is
ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#group_by_fields MonitoringAlertPolicy#group_by_fields}

---

##### `PerSeriesAligner`<sup>Optional</sup> <a name="PerSeriesAligner" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregations.property.perSeriesAligner"></a>

```csharp
public string PerSeriesAligner { get; set; }
```

- *Type:* string

The approach to be used to align individual time series.

Not all
alignment functions may be applied
to all time series, depending on
the metric type and value type of
the original time series.
Alignment may change the metric
type or the value type of the time
series.Time series data must be
aligned in order to perform cross-
time series reduction. If
crossSeriesReducer is specified,
then perSeriesAligner must be
specified and not equal ALIGN_NONE
and alignmentPeriod must be
specified; otherwise, an error is
returned. Possible values: ["ALIGN_NONE", "ALIGN_DELTA", "ALIGN_RATE", "ALIGN_INTERPOLATE", "ALIGN_NEXT_OLDER", "ALIGN_MIN", "ALIGN_MAX", "ALIGN_MEAN", "ALIGN_COUNT", "ALIGN_SUM", "ALIGN_STDDEV", "ALIGN_COUNT_TRUE", "ALIGN_COUNT_FALSE", "ALIGN_FRACTION_TRUE", "ALIGN_PERCENTILE_99", "ALIGN_PERCENTILE_95", "ALIGN_PERCENTILE_50", "ALIGN_PERCENTILE_05", "ALIGN_PERCENT_CHANGE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#per_series_aligner MonitoringAlertPolicy#per_series_aligner}

---

### MonitoringAlertPolicyConditionsConditionAbsentTrigger <a name="MonitoringAlertPolicyConditionsConditionAbsentTrigger" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTrigger.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyConditionsConditionAbsentTrigger {
    double Count = null,
    double Percent = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTrigger.property.count">Count</a></code> | <code>double</code> | The absolute number of time series that must fail the predicate for the condition to be triggered. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTrigger.property.percent">Percent</a></code> | <code>double</code> | The percentage of time series that must fail the predicate for the condition to be triggered. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTrigger.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

The absolute number of time series that must fail the predicate for the condition to be triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#count MonitoringAlertPolicy#count}

---

##### `Percent`<sup>Optional</sup> <a name="Percent" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTrigger.property.percent"></a>

```csharp
public double Percent { get; set; }
```

- *Type:* double

The percentage of time series that must fail the predicate for the condition to be triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#percent MonitoringAlertPolicy#percent}

---

### MonitoringAlertPolicyConditionsConditionMatchedLog <a name="MonitoringAlertPolicyConditionsConditionMatchedLog" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLog.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyConditionsConditionMatchedLog {
    string Filter,
    System.Collections.Generic.IDictionary<string, string> LabelExtractors = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLog.property.filter">Filter</a></code> | <code>string</code> | A logs-based filter. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLog.property.labelExtractors">LabelExtractors</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map from a label key to an extractor expression, which is used to extract the value for this label key. |

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLog.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

A logs-based filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#filter MonitoringAlertPolicy#filter}

---

##### `LabelExtractors`<sup>Optional</sup> <a name="LabelExtractors" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLog.property.labelExtractors"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelExtractors { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map from a label key to an extractor expression, which is used to extract the value for this label key.

Each entry in this map is
a specification for how data should be extracted from log entries that
match filter. Each combination of extracted values is treated as
a separate rule for the purposes of triggering notifications.
Label keys and corresponding values can be used in notifications
generated by this condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#label_extractors MonitoringAlertPolicy#label_extractors}

---

### MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage <a name="MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage {
    string Duration,
    string Query,
    string EvaluationMissingData = null,
    MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger Trigger = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage.property.duration">Duration</a></code> | <code>string</code> | The amount of time that a time series must violate the threshold to be considered failing. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage.property.query">Query</a></code> | <code>string</code> | Monitoring Query Language query that outputs a boolean stream. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage.property.evaluationMissingData">EvaluationMissingData</a></code> | <code>string</code> | A condition control that determines how metric-threshold conditions are evaluated when data stops arriving. Possible values: ["EVALUATION_MISSING_DATA_INACTIVE", "EVALUATION_MISSING_DATA_ACTIVE", "EVALUATION_MISSING_DATA_NO_OP"]. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage.property.trigger">Trigger</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger">MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger</a></code> | trigger block. |

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage.property.duration"></a>

```csharp
public string Duration { get; set; }
```

- *Type:* string

The amount of time that a time series must violate the threshold to be considered failing.

Currently, only values that are a
multiple of a minute--e.g., 0, 60, 120, or
300 seconds--are supported. If an invalid
value is given, an error will be returned.
When choosing a duration, it is useful to
keep in mind the frequency of the underlying
time series data (which may also be affected
by any alignments specified in the
aggregations field); a good duration is long
enough so that a single outlier does not
generate spurious alerts, but short enough
that unhealthy states are detected and
alerted on quickly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#duration MonitoringAlertPolicy#duration}

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

Monitoring Query Language query that outputs a boolean stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#query MonitoringAlertPolicy#query}

---

##### `EvaluationMissingData`<sup>Optional</sup> <a name="EvaluationMissingData" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage.property.evaluationMissingData"></a>

```csharp
public string EvaluationMissingData { get; set; }
```

- *Type:* string

A condition control that determines how metric-threshold conditions are evaluated when data stops arriving. Possible values: ["EVALUATION_MISSING_DATA_INACTIVE", "EVALUATION_MISSING_DATA_ACTIVE", "EVALUATION_MISSING_DATA_NO_OP"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#evaluation_missing_data MonitoringAlertPolicy#evaluation_missing_data}

---

##### `Trigger`<sup>Optional</sup> <a name="Trigger" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage.property.trigger"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger Trigger { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger">MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger</a>

trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#trigger MonitoringAlertPolicy#trigger}

---

### MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger <a name="MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger {
    double Count = null,
    double Percent = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger.property.count">Count</a></code> | <code>double</code> | The absolute number of time series that must fail the predicate for the condition to be triggered. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger.property.percent">Percent</a></code> | <code>double</code> | The percentage of time series that must fail the predicate for the condition to be triggered. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

The absolute number of time series that must fail the predicate for the condition to be triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#count MonitoringAlertPolicy#count}

---

##### `Percent`<sup>Optional</sup> <a name="Percent" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger.property.percent"></a>

```csharp
public double Percent { get; set; }
```

- *Type:* double

The percentage of time series that must fail the predicate for the condition to be triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#percent MonitoringAlertPolicy#percent}

---

### MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage <a name="MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage {
    string Query,
    string AlertRule = null,
    object DisableMetricValidation = null,
    string Duration = null,
    string EvaluationInterval = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string RuleGroup = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.query">Query</a></code> | <code>string</code> | The PromQL expression to evaluate. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.alertRule">AlertRule</a></code> | <code>string</code> | The alerting rule name of this alert in the corresponding Prometheus configuration file. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.disableMetricValidation">DisableMetricValidation</a></code> | <code>object</code> | Whether to disable metric existence validation for this condition. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.duration">Duration</a></code> | <code>string</code> | Alerts are considered firing once their PromQL expression evaluated to be "true" for this long. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.evaluationInterval">EvaluationInterval</a></code> | <code>string</code> | How often this rule should be evaluated. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels to add to or overwrite in the PromQL query result. Label names must be valid. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.ruleGroup">RuleGroup</a></code> | <code>string</code> | The rule group name of this alert in the corresponding Prometheus configuration file. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

The PromQL expression to evaluate.

Every evaluation cycle this
expression is evaluated at the current time, and all resultant time
series become pending/firing alerts. This field must not be empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#query MonitoringAlertPolicy#query}

---

##### `AlertRule`<sup>Optional</sup> <a name="AlertRule" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.alertRule"></a>

```csharp
public string AlertRule { get; set; }
```

- *Type:* string

The alerting rule name of this alert in the corresponding Prometheus configuration file.

Some external tools may require this field to be populated correctly
in order to refer to the original Prometheus configuration file.
The rule group name and the alert name are necessary to update the
relevant AlertPolicies in case the definition of the rule group changes
in the future.

This field is optional. If this field is not empty, then it must be a
valid Prometheus label name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#alert_rule MonitoringAlertPolicy#alert_rule}

---

##### `DisableMetricValidation`<sup>Optional</sup> <a name="DisableMetricValidation" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.disableMetricValidation"></a>

```csharp
public object DisableMetricValidation { get; set; }
```

- *Type:* object

Whether to disable metric existence validation for this condition.

This allows alerting policies to be defined on metrics that do not yet
exist, improving advanced customer workflows such as configuring
alerting policies using Terraform.

Users with the 'monitoring.alertPolicyViewer' role are able to see the
name of the non-existent metric in the alerting policy condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#disable_metric_validation MonitoringAlertPolicy#disable_metric_validation}

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.duration"></a>

```csharp
public string Duration { get; set; }
```

- *Type:* string

Alerts are considered firing once their PromQL expression evaluated to be "true" for this long.

Alerts whose PromQL expression was not
evaluated to be "true" for long enough are considered pending. The
default value is zero. Must be zero or positive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#duration MonitoringAlertPolicy#duration}

---

##### `EvaluationInterval`<sup>Optional</sup> <a name="EvaluationInterval" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.evaluationInterval"></a>

```csharp
public string EvaluationInterval { get; set; }
```

- *Type:* string

How often this rule should be evaluated.

Must be a positive multiple
of 30 seconds or missing. The default value is 30 seconds. If this
PrometheusQueryLanguageCondition was generated from a Prometheus
alerting rule, then this value should be taken from the enclosing
rule group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#evaluation_interval MonitoringAlertPolicy#evaluation_interval}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels to add to or overwrite in the PromQL query result. Label names must be valid.

Label values can be templatized by using variables. The only available
variable names are the names of the labels in the PromQL result,
although label names beginning with __ (two "_") are reserved for
internal use. "labels" may be empty. This field is intended to be used
for organizing and identifying the AlertPolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#labels MonitoringAlertPolicy#labels}

---

##### `RuleGroup`<sup>Optional</sup> <a name="RuleGroup" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage.property.ruleGroup"></a>

```csharp
public string RuleGroup { get; set; }
```

- *Type:* string

The rule group name of this alert in the corresponding Prometheus configuration file.

Some external tools may require this field to be populated correctly
in order to refer to the original Prometheus configuration file.
The rule group name and the alert name are necessary to update the
relevant AlertPolicies in case the definition of the rule group changes
in the future. This field is optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#rule_group MonitoringAlertPolicy#rule_group}

---

### MonitoringAlertPolicyConditionsConditionSql <a name="MonitoringAlertPolicyConditionsConditionSql" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSql"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSql.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyConditionsConditionSql {
    string Query,
    MonitoringAlertPolicyConditionsConditionSqlBooleanTest BooleanTest = null,
    MonitoringAlertPolicyConditionsConditionSqlDaily Daily = null,
    MonitoringAlertPolicyConditionsConditionSqlHourly Hourly = null,
    MonitoringAlertPolicyConditionsConditionSqlMinutes Minutes = null,
    MonitoringAlertPolicyConditionsConditionSqlRowCountTest RowCountTest = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSql.property.query">Query</a></code> | <code>string</code> | The Log Analytics SQL query to run, as a string. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSql.property.booleanTest">BooleanTest</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTest">MonitoringAlertPolicyConditionsConditionSqlBooleanTest</a></code> | boolean_test block. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSql.property.daily">Daily</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDaily">MonitoringAlertPolicyConditionsConditionSqlDaily</a></code> | daily block. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSql.property.hourly">Hourly</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourly">MonitoringAlertPolicyConditionsConditionSqlHourly</a></code> | hourly block. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSql.property.minutes">Minutes</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutes">MonitoringAlertPolicyConditionsConditionSqlMinutes</a></code> | minutes block. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSql.property.rowCountTest">RowCountTest</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTest">MonitoringAlertPolicyConditionsConditionSqlRowCountTest</a></code> | row_count_test block. |

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSql.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

The Log Analytics SQL query to run, as a string.

The query must
conform to the required shape. Specifically, the query must not try to
filter the input by time.  A filter will automatically be applied
to filter the input so that the query receives all rows received
since the last time the query was run.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#query MonitoringAlertPolicy#query}

---

##### `BooleanTest`<sup>Optional</sup> <a name="BooleanTest" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSql.property.booleanTest"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionSqlBooleanTest BooleanTest { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTest">MonitoringAlertPolicyConditionsConditionSqlBooleanTest</a>

boolean_test block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#boolean_test MonitoringAlertPolicy#boolean_test}

---

##### `Daily`<sup>Optional</sup> <a name="Daily" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSql.property.daily"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionSqlDaily Daily { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDaily">MonitoringAlertPolicyConditionsConditionSqlDaily</a>

daily block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#daily MonitoringAlertPolicy#daily}

---

##### `Hourly`<sup>Optional</sup> <a name="Hourly" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSql.property.hourly"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionSqlHourly Hourly { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourly">MonitoringAlertPolicyConditionsConditionSqlHourly</a>

hourly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#hourly MonitoringAlertPolicy#hourly}

---

##### `Minutes`<sup>Optional</sup> <a name="Minutes" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSql.property.minutes"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionSqlMinutes Minutes { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutes">MonitoringAlertPolicyConditionsConditionSqlMinutes</a>

minutes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#minutes MonitoringAlertPolicy#minutes}

---

##### `RowCountTest`<sup>Optional</sup> <a name="RowCountTest" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSql.property.rowCountTest"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionSqlRowCountTest RowCountTest { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTest">MonitoringAlertPolicyConditionsConditionSqlRowCountTest</a>

row_count_test block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#row_count_test MonitoringAlertPolicy#row_count_test}

---

### MonitoringAlertPolicyConditionsConditionSqlBooleanTest <a name="MonitoringAlertPolicyConditionsConditionSqlBooleanTest" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyConditionsConditionSqlBooleanTest {
    string Column
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTest.property.column">Column</a></code> | <code>string</code> | The name of the column containing the boolean value. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTest.property.column"></a>

```csharp
public string Column { get; set; }
```

- *Type:* string

The name of the column containing the boolean value.

If the value in a row is
NULL, that row is ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#column MonitoringAlertPolicy#column}

---

### MonitoringAlertPolicyConditionsConditionSqlDaily <a name="MonitoringAlertPolicyConditionsConditionSqlDaily" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDaily"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDaily.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyConditionsConditionSqlDaily {
    double Periodicity,
    MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime ExecutionTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDaily.property.periodicity">Periodicity</a></code> | <code>double</code> | The number of days between runs. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDaily.property.executionTime">ExecutionTime</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime">MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime</a></code> | execution_time block. |

---

##### `Periodicity`<sup>Required</sup> <a name="Periodicity" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDaily.property.periodicity"></a>

```csharp
public double Periodicity { get; set; }
```

- *Type:* double

The number of days between runs.

Must be greater than or equal
to 1 day and less than or equal to 30 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#periodicity MonitoringAlertPolicy#periodicity}

---

##### `ExecutionTime`<sup>Optional</sup> <a name="ExecutionTime" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDaily.property.executionTime"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime ExecutionTime { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime">MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime</a>

execution_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#execution_time MonitoringAlertPolicy#execution_time}

---

### MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime <a name="MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime {
    double Hours = null,
    double Minutes = null,
    double Nanos = null,
    double Seconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime.property.hours">Hours</a></code> | <code>double</code> | Hours of a day in 24 hour format. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime.property.minutes">Minutes</a></code> | <code>double</code> | Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime.property.nanos">Nanos</a></code> | <code>double</code> | Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime.property.seconds">Seconds</a></code> | <code>double</code> | Seconds of a minute. |

---

##### `Hours`<sup>Optional</sup> <a name="Hours" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime.property.hours"></a>

```csharp
public double Hours { get; set; }
```

- *Type:* double

Hours of a day in 24 hour format.

Must be greater than or equal
to 0 and typically must be less than or equal to 23. An API may
choose to allow the value "24:00:00" for scenarios like business
closing time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#hours MonitoringAlertPolicy#hours}

---

##### `Minutes`<sup>Optional</sup> <a name="Minutes" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime.property.minutes"></a>

```csharp
public double Minutes { get; set; }
```

- *Type:* double

Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#minutes MonitoringAlertPolicy#minutes}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime.property.nanos"></a>

```csharp
public double Nanos { get; set; }
```

- *Type:* double

Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#nanos MonitoringAlertPolicy#nanos}

---

##### `Seconds`<sup>Optional</sup> <a name="Seconds" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime.property.seconds"></a>

```csharp
public double Seconds { get; set; }
```

- *Type:* double

Seconds of a minute.

Must be greater than or equal to 0 and
typically must be less than or equal to 59. An API may allow the
value 60 if it allows leap-seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#seconds MonitoringAlertPolicy#seconds}

---

### MonitoringAlertPolicyConditionsConditionSqlHourly <a name="MonitoringAlertPolicyConditionsConditionSqlHourly" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourly.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyConditionsConditionSqlHourly {
    double Periodicity,
    double MinuteOffset = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourly.property.periodicity">Periodicity</a></code> | <code>double</code> | Number of hours between runs. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourly.property.minuteOffset">MinuteOffset</a></code> | <code>double</code> | The number of minutes after the hour (in UTC) to run the query. |

---

##### `Periodicity`<sup>Required</sup> <a name="Periodicity" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourly.property.periodicity"></a>

```csharp
public double Periodicity { get; set; }
```

- *Type:* double

Number of hours between runs.

The interval must be greater than or
equal to 1 hour and less than or equal to 48 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#periodicity MonitoringAlertPolicy#periodicity}

---

##### `MinuteOffset`<sup>Optional</sup> <a name="MinuteOffset" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourly.property.minuteOffset"></a>

```csharp
public double MinuteOffset { get; set; }
```

- *Type:* double

The number of minutes after the hour (in UTC) to run the query.

Must be greater than or equal to 0 minutes and less than or equal to
59 minutes.  If left unspecified, then an arbitrary offset is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#minute_offset MonitoringAlertPolicy#minute_offset}

---

### MonitoringAlertPolicyConditionsConditionSqlMinutes <a name="MonitoringAlertPolicyConditionsConditionSqlMinutes" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyConditionsConditionSqlMinutes {
    double Periodicity
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutes.property.periodicity">Periodicity</a></code> | <code>double</code> | Number of minutes between runs. |

---

##### `Periodicity`<sup>Required</sup> <a name="Periodicity" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutes.property.periodicity"></a>

```csharp
public double Periodicity { get; set; }
```

- *Type:* double

Number of minutes between runs.

The interval must be greater than or
equal to 5 minutes and less than or equal to 1440 minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#periodicity MonitoringAlertPolicy#periodicity}

---

### MonitoringAlertPolicyConditionsConditionSqlRowCountTest <a name="MonitoringAlertPolicyConditionsConditionSqlRowCountTest" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyConditionsConditionSqlRowCountTest {
    string Comparison,
    double Threshold
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTest.property.comparison">Comparison</a></code> | <code>string</code> | The comparison to apply between the time series (indicated by filter and aggregation) and the threshold (indicated by threshold_value). |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTest.property.threshold">Threshold</a></code> | <code>double</code> | The value against which to compare the row count. |

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTest.property.comparison"></a>

```csharp
public string Comparison { get; set; }
```

- *Type:* string

The comparison to apply between the time series (indicated by filter and aggregation) and the threshold (indicated by threshold_value).

The comparison is applied
on each time series, with the time series on
the left-hand side and the threshold on the
right-hand side. Only COMPARISON_LT and
COMPARISON_GT are supported currently. Possible values: ["COMPARISON_GT", "COMPARISON_GE", "COMPARISON_LT", "COMPARISON_LE", "COMPARISON_EQ", "COMPARISON_NE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#comparison MonitoringAlertPolicy#comparison}

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTest.property.threshold"></a>

```csharp
public double Threshold { get; set; }
```

- *Type:* double

The value against which to compare the row count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#threshold MonitoringAlertPolicy#threshold}

---

### MonitoringAlertPolicyConditionsConditionThreshold <a name="MonitoringAlertPolicyConditionsConditionThreshold" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyConditionsConditionThreshold {
    string Comparison,
    string Duration,
    object Aggregations = null,
    object DenominatorAggregations = null,
    string DenominatorFilter = null,
    string EvaluationMissingData = null,
    string Filter = null,
    MonitoringAlertPolicyConditionsConditionThresholdForecastOptions ForecastOptions = null,
    double ThresholdValue = null,
    MonitoringAlertPolicyConditionsConditionThresholdTrigger Trigger = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold.property.comparison">Comparison</a></code> | <code>string</code> | The comparison to apply between the time series (indicated by filter and aggregation) and the threshold (indicated by threshold_value). |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold.property.duration">Duration</a></code> | <code>string</code> | The amount of time that a time series must violate the threshold to be considered failing. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold.property.aggregations">Aggregations</a></code> | <code>object</code> | aggregations block. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold.property.denominatorAggregations">DenominatorAggregations</a></code> | <code>object</code> | denominator_aggregations block. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold.property.denominatorFilter">DenominatorFilter</a></code> | <code>string</code> | A filter that identifies a time series that should be used as the denominator of a ratio that will be compared with the threshold. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold.property.evaluationMissingData">EvaluationMissingData</a></code> | <code>string</code> | A condition control that determines how metric-threshold conditions are evaluated when data stops arriving. Possible values: ["EVALUATION_MISSING_DATA_INACTIVE", "EVALUATION_MISSING_DATA_ACTIVE", "EVALUATION_MISSING_DATA_NO_OP"]. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold.property.filter">Filter</a></code> | <code>string</code> | A filter that identifies which time series should be compared with the threshold.The filter is similar to the one that is specified in the MetricService.ListTimeSeries request (that call is useful to verify the time series that will be retrieved / processed) and must specify the metric type and optionally may contain restrictions on resource type, resource labels, and metric labels. This field may not exceed 2048 Unicode characters in length. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold.property.forecastOptions">ForecastOptions</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptions">MonitoringAlertPolicyConditionsConditionThresholdForecastOptions</a></code> | forecast_options block. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold.property.thresholdValue">ThresholdValue</a></code> | <code>double</code> | A value against which to compare the time series. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold.property.trigger">Trigger</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTrigger">MonitoringAlertPolicyConditionsConditionThresholdTrigger</a></code> | trigger block. |

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold.property.comparison"></a>

```csharp
public string Comparison { get; set; }
```

- *Type:* string

The comparison to apply between the time series (indicated by filter and aggregation) and the threshold (indicated by threshold_value).

The comparison is applied
on each time series, with the time series on
the left-hand side and the threshold on the
right-hand side. Only COMPARISON_LT and
COMPARISON_GT are supported currently. Possible values: ["COMPARISON_GT", "COMPARISON_GE", "COMPARISON_LT", "COMPARISON_LE", "COMPARISON_EQ", "COMPARISON_NE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#comparison MonitoringAlertPolicy#comparison}

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold.property.duration"></a>

```csharp
public string Duration { get; set; }
```

- *Type:* string

The amount of time that a time series must violate the threshold to be considered failing.

Currently, only values that are a
multiple of a minute--e.g., 0, 60, 120, or
300 seconds--are supported. If an invalid
value is given, an error will be returned.
When choosing a duration, it is useful to
keep in mind the frequency of the underlying
time series data (which may also be affected
by any alignments specified in the
aggregations field); a good duration is long
enough so that a single outlier does not
generate spurious alerts, but short enough
that unhealthy states are detected and
alerted on quickly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#duration MonitoringAlertPolicy#duration}

---

##### `Aggregations`<sup>Optional</sup> <a name="Aggregations" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold.property.aggregations"></a>

```csharp
public object Aggregations { get; set; }
```

- *Type:* object

aggregations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#aggregations MonitoringAlertPolicy#aggregations}

---

##### `DenominatorAggregations`<sup>Optional</sup> <a name="DenominatorAggregations" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold.property.denominatorAggregations"></a>

```csharp
public object DenominatorAggregations { get; set; }
```

- *Type:* object

denominator_aggregations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#denominator_aggregations MonitoringAlertPolicy#denominator_aggregations}

---

##### `DenominatorFilter`<sup>Optional</sup> <a name="DenominatorFilter" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold.property.denominatorFilter"></a>

```csharp
public string DenominatorFilter { get; set; }
```

- *Type:* string

A filter that identifies a time series that should be used as the denominator of a ratio that will be compared with the threshold.

If
a denominator_filter is specified, the time
series specified by the filter field will be
used as the numerator.The filter is similar
to the one that is specified in the
MetricService.ListTimeSeries request (that
call is useful to verify the time series
that will be retrieved / processed) and must
specify the metric type and optionally may
contain restrictions on resource type,
resource labels, and metric labels. This
field may not exceed 2048 Unicode characters
in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#denominator_filter MonitoringAlertPolicy#denominator_filter}

---

##### `EvaluationMissingData`<sup>Optional</sup> <a name="EvaluationMissingData" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold.property.evaluationMissingData"></a>

```csharp
public string EvaluationMissingData { get; set; }
```

- *Type:* string

A condition control that determines how metric-threshold conditions are evaluated when data stops arriving. Possible values: ["EVALUATION_MISSING_DATA_INACTIVE", "EVALUATION_MISSING_DATA_ACTIVE", "EVALUATION_MISSING_DATA_NO_OP"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#evaluation_missing_data MonitoringAlertPolicy#evaluation_missing_data}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

A filter that identifies which time series should be compared with the threshold.The filter is similar to the one that is specified in the MetricService.ListTimeSeries request (that call is useful to verify the time series that will be retrieved / processed) and must specify the metric type and optionally may contain restrictions on resource type, resource labels, and metric labels. This field may not exceed 2048 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#filter MonitoringAlertPolicy#filter}

---

##### `ForecastOptions`<sup>Optional</sup> <a name="ForecastOptions" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold.property.forecastOptions"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionThresholdForecastOptions ForecastOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptions">MonitoringAlertPolicyConditionsConditionThresholdForecastOptions</a>

forecast_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#forecast_options MonitoringAlertPolicy#forecast_options}

---

##### `ThresholdValue`<sup>Optional</sup> <a name="ThresholdValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold.property.thresholdValue"></a>

```csharp
public double ThresholdValue { get; set; }
```

- *Type:* double

A value against which to compare the time series.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#threshold_value MonitoringAlertPolicy#threshold_value}

---

##### `Trigger`<sup>Optional</sup> <a name="Trigger" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold.property.trigger"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionThresholdTrigger Trigger { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTrigger">MonitoringAlertPolicyConditionsConditionThresholdTrigger</a>

trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#trigger MonitoringAlertPolicy#trigger}

---

### MonitoringAlertPolicyConditionsConditionThresholdAggregations <a name="MonitoringAlertPolicyConditionsConditionThresholdAggregations" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyConditionsConditionThresholdAggregations {
    string AlignmentPeriod = null,
    string CrossSeriesReducer = null,
    string[] GroupByFields = null,
    string PerSeriesAligner = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregations.property.alignmentPeriod">AlignmentPeriod</a></code> | <code>string</code> | The alignment period for per-time series alignment. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregations.property.crossSeriesReducer">CrossSeriesReducer</a></code> | <code>string</code> | The approach to be used to combine time series. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregations.property.groupByFields">GroupByFields</a></code> | <code>string[]</code> | The set of fields to preserve when crossSeriesReducer is specified. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregations.property.perSeriesAligner">PerSeriesAligner</a></code> | <code>string</code> | The approach to be used to align individual time series. |

---

##### `AlignmentPeriod`<sup>Optional</sup> <a name="AlignmentPeriod" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregations.property.alignmentPeriod"></a>

```csharp
public string AlignmentPeriod { get; set; }
```

- *Type:* string

The alignment period for per-time series alignment.

If present,
alignmentPeriod must be at least
60 seconds. After per-time series
alignment, each time series will
contain data points only on the
period boundaries. If
perSeriesAligner is not specified
or equals ALIGN_NONE, then this
field is ignored. If
perSeriesAligner is specified and
does not equal ALIGN_NONE, then
this field must be defined;
otherwise an error is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#alignment_period MonitoringAlertPolicy#alignment_period}

---

##### `CrossSeriesReducer`<sup>Optional</sup> <a name="CrossSeriesReducer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregations.property.crossSeriesReducer"></a>

```csharp
public string CrossSeriesReducer { get; set; }
```

- *Type:* string

The approach to be used to combine time series.

Not all reducer
functions may be applied to all
time series, depending on the
metric type and the value type of
the original time series.
Reduction may change the metric
type of value type of the time
series.Time series data must be
aligned in order to perform cross-
time series reduction. If
crossSeriesReducer is specified,
then perSeriesAligner must be
specified and not equal ALIGN_NONE
and alignmentPeriod must be
specified; otherwise, an error is
returned. Possible values: ["REDUCE_NONE", "REDUCE_MEAN", "REDUCE_MIN", "REDUCE_MAX", "REDUCE_SUM", "REDUCE_STDDEV", "REDUCE_COUNT", "REDUCE_COUNT_TRUE", "REDUCE_COUNT_FALSE", "REDUCE_FRACTION_TRUE", "REDUCE_PERCENTILE_99", "REDUCE_PERCENTILE_95", "REDUCE_PERCENTILE_50", "REDUCE_PERCENTILE_05"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#cross_series_reducer MonitoringAlertPolicy#cross_series_reducer}

---

##### `GroupByFields`<sup>Optional</sup> <a name="GroupByFields" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregations.property.groupByFields"></a>

```csharp
public string[] GroupByFields { get; set; }
```

- *Type:* string[]

The set of fields to preserve when crossSeriesReducer is specified.

The groupByFields determine how
the time series are partitioned
into subsets prior to applying the
aggregation function. Each subset
contains time series that have the
same value for each of the
grouping fields. Each individual
time series is a member of exactly
one subset. The crossSeriesReducer
is applied to each subset of time
series. It is not possible to
reduce across different resource
types, so this field implicitly
contains resource.type. Fields not
specified in groupByFields are
aggregated away. If groupByFields
is not specified and all the time
series have the same resource
type, then the time series are
aggregated into a single output
time series. If crossSeriesReducer
is not defined, this field is
ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#group_by_fields MonitoringAlertPolicy#group_by_fields}

---

##### `PerSeriesAligner`<sup>Optional</sup> <a name="PerSeriesAligner" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregations.property.perSeriesAligner"></a>

```csharp
public string PerSeriesAligner { get; set; }
```

- *Type:* string

The approach to be used to align individual time series.

Not all
alignment functions may be applied
to all time series, depending on
the metric type and value type of
the original time series.
Alignment may change the metric
type or the value type of the time
series.Time series data must be
aligned in order to perform cross-
time series reduction. If
crossSeriesReducer is specified,
then perSeriesAligner must be
specified and not equal ALIGN_NONE
and alignmentPeriod must be
specified; otherwise, an error is
returned. Possible values: ["ALIGN_NONE", "ALIGN_DELTA", "ALIGN_RATE", "ALIGN_INTERPOLATE", "ALIGN_NEXT_OLDER", "ALIGN_MIN", "ALIGN_MAX", "ALIGN_MEAN", "ALIGN_COUNT", "ALIGN_SUM", "ALIGN_STDDEV", "ALIGN_COUNT_TRUE", "ALIGN_COUNT_FALSE", "ALIGN_FRACTION_TRUE", "ALIGN_PERCENTILE_99", "ALIGN_PERCENTILE_95", "ALIGN_PERCENTILE_50", "ALIGN_PERCENTILE_05", "ALIGN_PERCENT_CHANGE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#per_series_aligner MonitoringAlertPolicy#per_series_aligner}

---

### MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations <a name="MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations {
    string AlignmentPeriod = null,
    string CrossSeriesReducer = null,
    string[] GroupByFields = null,
    string PerSeriesAligner = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations.property.alignmentPeriod">AlignmentPeriod</a></code> | <code>string</code> | The alignment period for per-time series alignment. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations.property.crossSeriesReducer">CrossSeriesReducer</a></code> | <code>string</code> | The approach to be used to combine time series. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations.property.groupByFields">GroupByFields</a></code> | <code>string[]</code> | The set of fields to preserve when crossSeriesReducer is specified. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations.property.perSeriesAligner">PerSeriesAligner</a></code> | <code>string</code> | The approach to be used to align individual time series. |

---

##### `AlignmentPeriod`<sup>Optional</sup> <a name="AlignmentPeriod" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations.property.alignmentPeriod"></a>

```csharp
public string AlignmentPeriod { get; set; }
```

- *Type:* string

The alignment period for per-time series alignment.

If present,
alignmentPeriod must be at least
60 seconds. After per-time series
alignment, each time series will
contain data points only on the
period boundaries. If
perSeriesAligner is not specified
or equals ALIGN_NONE, then this
field is ignored. If
perSeriesAligner is specified and
does not equal ALIGN_NONE, then
this field must be defined;
otherwise an error is returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#alignment_period MonitoringAlertPolicy#alignment_period}

---

##### `CrossSeriesReducer`<sup>Optional</sup> <a name="CrossSeriesReducer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations.property.crossSeriesReducer"></a>

```csharp
public string CrossSeriesReducer { get; set; }
```

- *Type:* string

The approach to be used to combine time series.

Not all reducer
functions may be applied to all
time series, depending on the
metric type and the value type of
the original time series.
Reduction may change the metric
type of value type of the time
series.Time series data must be
aligned in order to perform cross-
time series reduction. If
crossSeriesReducer is specified,
then perSeriesAligner must be
specified and not equal ALIGN_NONE
and alignmentPeriod must be
specified; otherwise, an error is
returned. Possible values: ["REDUCE_NONE", "REDUCE_MEAN", "REDUCE_MIN", "REDUCE_MAX", "REDUCE_SUM", "REDUCE_STDDEV", "REDUCE_COUNT", "REDUCE_COUNT_TRUE", "REDUCE_COUNT_FALSE", "REDUCE_FRACTION_TRUE", "REDUCE_PERCENTILE_99", "REDUCE_PERCENTILE_95", "REDUCE_PERCENTILE_50", "REDUCE_PERCENTILE_05"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#cross_series_reducer MonitoringAlertPolicy#cross_series_reducer}

---

##### `GroupByFields`<sup>Optional</sup> <a name="GroupByFields" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations.property.groupByFields"></a>

```csharp
public string[] GroupByFields { get; set; }
```

- *Type:* string[]

The set of fields to preserve when crossSeriesReducer is specified.

The groupByFields determine how
the time series are partitioned
into subsets prior to applying the
aggregation function. Each subset
contains time series that have the
same value for each of the
grouping fields. Each individual
time series is a member of exactly
one subset. The crossSeriesReducer
is applied to each subset of time
series. It is not possible to
reduce across different resource
types, so this field implicitly
contains resource.type. Fields not
specified in groupByFields are
aggregated away. If groupByFields
is not specified and all the time
series have the same resource
type, then the time series are
aggregated into a single output
time series. If crossSeriesReducer
is not defined, this field is
ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#group_by_fields MonitoringAlertPolicy#group_by_fields}

---

##### `PerSeriesAligner`<sup>Optional</sup> <a name="PerSeriesAligner" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregations.property.perSeriesAligner"></a>

```csharp
public string PerSeriesAligner { get; set; }
```

- *Type:* string

The approach to be used to align individual time series.

Not all
alignment functions may be applied
to all time series, depending on
the metric type and value type of
the original time series.
Alignment may change the metric
type or the value type of the time
series.Time series data must be
aligned in order to perform cross-
time series reduction. If
crossSeriesReducer is specified,
then perSeriesAligner must be
specified and not equal ALIGN_NONE
and alignmentPeriod must be
specified; otherwise, an error is
returned. Possible values: ["ALIGN_NONE", "ALIGN_DELTA", "ALIGN_RATE", "ALIGN_INTERPOLATE", "ALIGN_NEXT_OLDER", "ALIGN_MIN", "ALIGN_MAX", "ALIGN_MEAN", "ALIGN_COUNT", "ALIGN_SUM", "ALIGN_STDDEV", "ALIGN_COUNT_TRUE", "ALIGN_COUNT_FALSE", "ALIGN_FRACTION_TRUE", "ALIGN_PERCENTILE_99", "ALIGN_PERCENTILE_95", "ALIGN_PERCENTILE_50", "ALIGN_PERCENTILE_05", "ALIGN_PERCENT_CHANGE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#per_series_aligner MonitoringAlertPolicy#per_series_aligner}

---

### MonitoringAlertPolicyConditionsConditionThresholdForecastOptions <a name="MonitoringAlertPolicyConditionsConditionThresholdForecastOptions" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyConditionsConditionThresholdForecastOptions {
    string ForecastHorizon
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptions.property.forecastHorizon">ForecastHorizon</a></code> | <code>string</code> | The length of time into the future to forecast whether a timeseries will violate the threshold. |

---

##### `ForecastHorizon`<sup>Required</sup> <a name="ForecastHorizon" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptions.property.forecastHorizon"></a>

```csharp
public string ForecastHorizon { get; set; }
```

- *Type:* string

The length of time into the future to forecast whether a timeseries will violate the threshold.

If the predicted value is found to violate the
threshold, and the violation is observed in all
forecasts made for the Configured 'duration',
then the timeseries is considered to be failing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#forecast_horizon MonitoringAlertPolicy#forecast_horizon}

---

### MonitoringAlertPolicyConditionsConditionThresholdTrigger <a name="MonitoringAlertPolicyConditionsConditionThresholdTrigger" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTrigger.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyConditionsConditionThresholdTrigger {
    double Count = null,
    double Percent = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTrigger.property.count">Count</a></code> | <code>double</code> | The absolute number of time series that must fail the predicate for the condition to be triggered. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTrigger.property.percent">Percent</a></code> | <code>double</code> | The percentage of time series that must fail the predicate for the condition to be triggered. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTrigger.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

The absolute number of time series that must fail the predicate for the condition to be triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#count MonitoringAlertPolicy#count}

---

##### `Percent`<sup>Optional</sup> <a name="Percent" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTrigger.property.percent"></a>

```csharp
public double Percent { get; set; }
```

- *Type:* double

The percentage of time series that must fail the predicate for the condition to be triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#percent MonitoringAlertPolicy#percent}

---

### MonitoringAlertPolicyConfig <a name="MonitoringAlertPolicyConfig" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Combiner,
    object Conditions,
    string DisplayName,
    MonitoringAlertPolicyAlertStrategy AlertStrategy = null,
    MonitoringAlertPolicyDocumentation Documentation = null,
    object Enabled = null,
    string Id = null,
    string[] NotificationChannels = null,
    string Project = null,
    string Severity = null,
    MonitoringAlertPolicyTimeouts Timeouts = null,
    System.Collections.Generic.IDictionary<string, string> UserLabels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.combiner">Combiner</a></code> | <code>string</code> | How to combine the results of multiple conditions to determine if an incident should be opened. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.conditions">Conditions</a></code> | <code>object</code> | conditions block. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.displayName">DisplayName</a></code> | <code>string</code> | A short name or phrase used to identify the policy in dashboards, notifications, and incidents. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.alertStrategy">AlertStrategy</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategy">MonitoringAlertPolicyAlertStrategy</a></code> | alert_strategy block. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.documentation">Documentation</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentation">MonitoringAlertPolicyDocumentation</a></code> | documentation block. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.enabled">Enabled</a></code> | <code>object</code> | Whether or not the policy is enabled. The default is true. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#id MonitoringAlertPolicy#id}. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.notificationChannels">NotificationChannels</a></code> | <code>string[]</code> | Identifies the notification channels to which notifications should be sent when incidents are opened or closed or when new violations occur on an already opened incident. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#project MonitoringAlertPolicy#project}. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.severity">Severity</a></code> | <code>string</code> | The severity of an alert policy indicates how important incidents generated by that policy are. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeouts">MonitoringAlertPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.userLabels">UserLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | This field is intended to be used for organizing and identifying the AlertPolicy objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Combiner`<sup>Required</sup> <a name="Combiner" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.combiner"></a>

```csharp
public string Combiner { get; set; }
```

- *Type:* string

How to combine the results of multiple conditions to determine if an incident should be opened.

Possible values: ["AND", "OR", "AND_WITH_MATCHING_RESOURCE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#combiner MonitoringAlertPolicy#combiner}

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.conditions"></a>

```csharp
public object Conditions { get; set; }
```

- *Type:* object

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#conditions MonitoringAlertPolicy#conditions}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

A short name or phrase used to identify the policy in dashboards, notifications, and incidents.

To avoid confusion, don't use
the same display name for multiple policies in the same project. The
name is limited to 512 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#display_name MonitoringAlertPolicy#display_name}

---

##### `AlertStrategy`<sup>Optional</sup> <a name="AlertStrategy" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.alertStrategy"></a>

```csharp
public MonitoringAlertPolicyAlertStrategy AlertStrategy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategy">MonitoringAlertPolicyAlertStrategy</a>

alert_strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#alert_strategy MonitoringAlertPolicy#alert_strategy}

---

##### `Documentation`<sup>Optional</sup> <a name="Documentation" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.documentation"></a>

```csharp
public MonitoringAlertPolicyDocumentation Documentation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentation">MonitoringAlertPolicyDocumentation</a>

documentation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#documentation MonitoringAlertPolicy#documentation}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether or not the policy is enabled. The default is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#enabled MonitoringAlertPolicy#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#id MonitoringAlertPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NotificationChannels`<sup>Optional</sup> <a name="NotificationChannels" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.notificationChannels"></a>

```csharp
public string[] NotificationChannels { get; set; }
```

- *Type:* string[]

Identifies the notification channels to which notifications should be sent when incidents are opened or closed or when new violations occur on an already opened incident.

Each element of this array corresponds
to the name field in each of the NotificationChannel objects that are
returned from the notificationChannels.list method. The syntax of the
entries in this field is
'projects/[PROJECT_ID]/notificationChannels/[CHANNEL_ID]'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#notification_channels MonitoringAlertPolicy#notification_channels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#project MonitoringAlertPolicy#project}.

---

##### `Severity`<sup>Optional</sup> <a name="Severity" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.severity"></a>

```csharp
public string Severity { get; set; }
```

- *Type:* string

The severity of an alert policy indicates how important incidents generated by that policy are.

The severity level will be displayed on the Incident
detail page and in notifications. Possible values: ["CRITICAL", "ERROR", "WARNING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#severity MonitoringAlertPolicy#severity}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.timeouts"></a>

```csharp
public MonitoringAlertPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeouts">MonitoringAlertPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#timeouts MonitoringAlertPolicy#timeouts}

---

##### `UserLabels`<sup>Optional</sup> <a name="UserLabels" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConfig.property.userLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> UserLabels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

This field is intended to be used for organizing and identifying the AlertPolicy objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#user_labels MonitoringAlertPolicy#user_labels}

---

### MonitoringAlertPolicyCreationRecord <a name="MonitoringAlertPolicyCreationRecord" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecord"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecord.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyCreationRecord {

};
```


### MonitoringAlertPolicyDocumentation <a name="MonitoringAlertPolicyDocumentation" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyDocumentation {
    string Content = null,
    object Links = null,
    string MimeType = null,
    string Subject = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentation.property.content">Content</a></code> | <code>string</code> | The text of the documentation, interpreted according to mimeType. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentation.property.links">Links</a></code> | <code>object</code> | links block. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentation.property.mimeType">MimeType</a></code> | <code>string</code> | The format of the content field. Presently, only the value "text/markdown" is supported. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentation.property.subject">Subject</a></code> | <code>string</code> | The subject line of the notification. |

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentation.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

The text of the documentation, interpreted according to mimeType.

The content may not exceed 8,192 Unicode characters and may not
exceed more than 10,240 bytes when encoded in UTF-8 format,
whichever is smaller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#content MonitoringAlertPolicy#content}

---

##### `Links`<sup>Optional</sup> <a name="Links" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentation.property.links"></a>

```csharp
public object Links { get; set; }
```

- *Type:* object

links block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#links MonitoringAlertPolicy#links}

---

##### `MimeType`<sup>Optional</sup> <a name="MimeType" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentation.property.mimeType"></a>

```csharp
public string MimeType { get; set; }
```

- *Type:* string

The format of the content field. Presently, only the value "text/markdown" is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#mime_type MonitoringAlertPolicy#mime_type}

---

##### `Subject`<sup>Optional</sup> <a name="Subject" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentation.property.subject"></a>

```csharp
public string Subject { get; set; }
```

- *Type:* string

The subject line of the notification.

The subject line may not
exceed 10,240 bytes. In notifications generated by this policy the contents
of the subject line after variable expansion will be truncated to 255 bytes
or shorter at the latest UTF-8 character boundary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#subject MonitoringAlertPolicy#subject}

---

### MonitoringAlertPolicyDocumentationLinks <a name="MonitoringAlertPolicyDocumentationLinks" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyDocumentationLinks {
    string DisplayName = null,
    string Url = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinks.property.displayName">DisplayName</a></code> | <code>string</code> | A short display name for the link. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinks.property.url">Url</a></code> | <code>string</code> | The url of a webpage. |

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinks.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

A short display name for the link.

The display name must not be empty or exceed 63 characters. Example: "playbook".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#display_name MonitoringAlertPolicy#display_name}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinks.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

The url of a webpage.

A url can be templatized by using variables in the path or the query parameters. The total length of a URL should not exceed 2083 characters before and after variable expansion. Example: "https://my_domain.com/playbook?name=${resource.name}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#url MonitoringAlertPolicy#url}

---

### MonitoringAlertPolicyTimeouts <a name="MonitoringAlertPolicyTimeouts" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#create MonitoringAlertPolicy#create}. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#delete MonitoringAlertPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#update MonitoringAlertPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#create MonitoringAlertPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#delete MonitoringAlertPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/monitoring_alert_policy#update MonitoringAlertPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList <a name="MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.get"></a>

```csharp
private MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference <a name="MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.resetNotificationChannelNames">ResetNotificationChannelNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.resetRenotifyInterval">ResetRenotifyInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNotificationChannelNames` <a name="ResetNotificationChannelNames" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.resetNotificationChannelNames"></a>

```csharp
private void ResetNotificationChannelNames()
```

##### `ResetRenotifyInterval` <a name="ResetRenotifyInterval" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.resetRenotifyInterval"></a>

```csharp
private void ResetRenotifyInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.notificationChannelNamesInput">NotificationChannelNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.renotifyIntervalInput">RenotifyIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.notificationChannelNames">NotificationChannelNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.renotifyInterval">RenotifyInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NotificationChannelNamesInput`<sup>Optional</sup> <a name="NotificationChannelNamesInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.notificationChannelNamesInput"></a>

```csharp
public string[] NotificationChannelNamesInput { get; }
```

- *Type:* string[]

---

##### `RenotifyIntervalInput`<sup>Optional</sup> <a name="RenotifyIntervalInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.renotifyIntervalInput"></a>

```csharp
public string RenotifyIntervalInput { get; }
```

- *Type:* string

---

##### `NotificationChannelNames`<sup>Required</sup> <a name="NotificationChannelNames" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.notificationChannelNames"></a>

```csharp
public string[] NotificationChannelNames { get; }
```

- *Type:* string[]

---

##### `RenotifyInterval`<sup>Required</sup> <a name="RenotifyInterval" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.renotifyInterval"></a>

```csharp
public string RenotifyInterval { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference <a name="MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.resetPeriod">ResetPeriod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPeriod` <a name="ResetPeriod" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.resetPeriod"></a>

```csharp
private void ResetPeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.periodInput">PeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.period">Period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimit">MonitoringAlertPolicyAlertStrategyNotificationRateLimit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.periodInput"></a>

```csharp
public string PeriodInput { get; }
```

- *Type:* string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.period"></a>

```csharp
public string Period { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference.property.internalValue"></a>

```csharp
public MonitoringAlertPolicyAlertStrategyNotificationRateLimit InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimit">MonitoringAlertPolicyAlertStrategyNotificationRateLimit</a>

---


### MonitoringAlertPolicyAlertStrategyOutputReference <a name="MonitoringAlertPolicyAlertStrategyOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyAlertStrategyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.putNotificationChannelStrategy">PutNotificationChannelStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.putNotificationRateLimit">PutNotificationRateLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.resetAutoClose">ResetAutoClose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.resetNotificationChannelStrategy">ResetNotificationChannelStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.resetNotificationPrompts">ResetNotificationPrompts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.resetNotificationRateLimit">ResetNotificationRateLimit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNotificationChannelStrategy` <a name="PutNotificationChannelStrategy" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.putNotificationChannelStrategy"></a>

```csharp
private void PutNotificationChannelStrategy(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.putNotificationChannelStrategy.parameter.value"></a>

- *Type:* object

---

##### `PutNotificationRateLimit` <a name="PutNotificationRateLimit" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.putNotificationRateLimit"></a>

```csharp
private void PutNotificationRateLimit(MonitoringAlertPolicyAlertStrategyNotificationRateLimit Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.putNotificationRateLimit.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimit">MonitoringAlertPolicyAlertStrategyNotificationRateLimit</a>

---

##### `ResetAutoClose` <a name="ResetAutoClose" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.resetAutoClose"></a>

```csharp
private void ResetAutoClose()
```

##### `ResetNotificationChannelStrategy` <a name="ResetNotificationChannelStrategy" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.resetNotificationChannelStrategy"></a>

```csharp
private void ResetNotificationChannelStrategy()
```

##### `ResetNotificationPrompts` <a name="ResetNotificationPrompts" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.resetNotificationPrompts"></a>

```csharp
private void ResetNotificationPrompts()
```

##### `ResetNotificationRateLimit` <a name="ResetNotificationRateLimit" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.resetNotificationRateLimit"></a>

```csharp
private void ResetNotificationRateLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.property.notificationChannelStrategy">NotificationChannelStrategy</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList">MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.property.notificationRateLimit">NotificationRateLimit</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference">MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.property.autoCloseInput">AutoCloseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.property.notificationChannelStrategyInput">NotificationChannelStrategyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.property.notificationPromptsInput">NotificationPromptsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.property.notificationRateLimitInput">NotificationRateLimitInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimit">MonitoringAlertPolicyAlertStrategyNotificationRateLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.property.autoClose">AutoClose</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.property.notificationPrompts">NotificationPrompts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategy">MonitoringAlertPolicyAlertStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NotificationChannelStrategy`<sup>Required</sup> <a name="NotificationChannelStrategy" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.property.notificationChannelStrategy"></a>

```csharp
public MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList NotificationChannelStrategy { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList">MonitoringAlertPolicyAlertStrategyNotificationChannelStrategyList</a>

---

##### `NotificationRateLimit`<sup>Required</sup> <a name="NotificationRateLimit" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.property.notificationRateLimit"></a>

```csharp
public MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference NotificationRateLimit { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference">MonitoringAlertPolicyAlertStrategyNotificationRateLimitOutputReference</a>

---

##### `AutoCloseInput`<sup>Optional</sup> <a name="AutoCloseInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.property.autoCloseInput"></a>

```csharp
public string AutoCloseInput { get; }
```

- *Type:* string

---

##### `NotificationChannelStrategyInput`<sup>Optional</sup> <a name="NotificationChannelStrategyInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.property.notificationChannelStrategyInput"></a>

```csharp
public object NotificationChannelStrategyInput { get; }
```

- *Type:* object

---

##### `NotificationPromptsInput`<sup>Optional</sup> <a name="NotificationPromptsInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.property.notificationPromptsInput"></a>

```csharp
public string[] NotificationPromptsInput { get; }
```

- *Type:* string[]

---

##### `NotificationRateLimitInput`<sup>Optional</sup> <a name="NotificationRateLimitInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.property.notificationRateLimitInput"></a>

```csharp
public MonitoringAlertPolicyAlertStrategyNotificationRateLimit NotificationRateLimitInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyNotificationRateLimit">MonitoringAlertPolicyAlertStrategyNotificationRateLimit</a>

---

##### `AutoClose`<sup>Required</sup> <a name="AutoClose" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.property.autoClose"></a>

```csharp
public string AutoClose { get; }
```

- *Type:* string

---

##### `NotificationPrompts`<sup>Required</sup> <a name="NotificationPrompts" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.property.notificationPrompts"></a>

```csharp
public string[] NotificationPrompts { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategyOutputReference.property.internalValue"></a>

```csharp
public MonitoringAlertPolicyAlertStrategy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyAlertStrategy">MonitoringAlertPolicyAlertStrategy</a>

---


### MonitoringAlertPolicyConditionsConditionAbsentAggregationsList <a name="MonitoringAlertPolicyConditionsConditionAbsentAggregationsList" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyConditionsConditionAbsentAggregationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.get"></a>

```csharp
private MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference <a name="MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resetAlignmentPeriod">ResetAlignmentPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resetCrossSeriesReducer">ResetCrossSeriesReducer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resetGroupByFields">ResetGroupByFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resetPerSeriesAligner">ResetPerSeriesAligner</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlignmentPeriod` <a name="ResetAlignmentPeriod" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resetAlignmentPeriod"></a>

```csharp
private void ResetAlignmentPeriod()
```

##### `ResetCrossSeriesReducer` <a name="ResetCrossSeriesReducer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resetCrossSeriesReducer"></a>

```csharp
private void ResetCrossSeriesReducer()
```

##### `ResetGroupByFields` <a name="ResetGroupByFields" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resetGroupByFields"></a>

```csharp
private void ResetGroupByFields()
```

##### `ResetPerSeriesAligner` <a name="ResetPerSeriesAligner" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.resetPerSeriesAligner"></a>

```csharp
private void ResetPerSeriesAligner()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.alignmentPeriodInput">AlignmentPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.crossSeriesReducerInput">CrossSeriesReducerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.groupByFieldsInput">GroupByFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.perSeriesAlignerInput">PerSeriesAlignerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.alignmentPeriod">AlignmentPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.crossSeriesReducer">CrossSeriesReducer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.groupByFields">GroupByFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.perSeriesAligner">PerSeriesAligner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlignmentPeriodInput`<sup>Optional</sup> <a name="AlignmentPeriodInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.alignmentPeriodInput"></a>

```csharp
public string AlignmentPeriodInput { get; }
```

- *Type:* string

---

##### `CrossSeriesReducerInput`<sup>Optional</sup> <a name="CrossSeriesReducerInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.crossSeriesReducerInput"></a>

```csharp
public string CrossSeriesReducerInput { get; }
```

- *Type:* string

---

##### `GroupByFieldsInput`<sup>Optional</sup> <a name="GroupByFieldsInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.groupByFieldsInput"></a>

```csharp
public string[] GroupByFieldsInput { get; }
```

- *Type:* string[]

---

##### `PerSeriesAlignerInput`<sup>Optional</sup> <a name="PerSeriesAlignerInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.perSeriesAlignerInput"></a>

```csharp
public string PerSeriesAlignerInput { get; }
```

- *Type:* string

---

##### `AlignmentPeriod`<sup>Required</sup> <a name="AlignmentPeriod" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.alignmentPeriod"></a>

```csharp
public string AlignmentPeriod { get; }
```

- *Type:* string

---

##### `CrossSeriesReducer`<sup>Required</sup> <a name="CrossSeriesReducer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.crossSeriesReducer"></a>

```csharp
public string CrossSeriesReducer { get; }
```

- *Type:* string

---

##### `GroupByFields`<sup>Required</sup> <a name="GroupByFields" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.groupByFields"></a>

```csharp
public string[] GroupByFields { get; }
```

- *Type:* string[]

---

##### `PerSeriesAligner`<sup>Required</sup> <a name="PerSeriesAligner" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.perSeriesAligner"></a>

```csharp
public string PerSeriesAligner { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitoringAlertPolicyConditionsConditionAbsentOutputReference <a name="MonitoringAlertPolicyConditionsConditionAbsentOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyConditionsConditionAbsentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.putAggregations">PutAggregations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.putTrigger">PutTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.resetAggregations">ResetAggregations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.resetTrigger">ResetTrigger</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAggregations` <a name="PutAggregations" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.putAggregations"></a>

```csharp
private void PutAggregations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.putAggregations.parameter.value"></a>

- *Type:* object

---

##### `PutTrigger` <a name="PutTrigger" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.putTrigger"></a>

```csharp
private void PutTrigger(MonitoringAlertPolicyConditionsConditionAbsentTrigger Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.putTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTrigger">MonitoringAlertPolicyConditionsConditionAbsentTrigger</a>

---

##### `ResetAggregations` <a name="ResetAggregations" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.resetAggregations"></a>

```csharp
private void ResetAggregations()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetTrigger` <a name="ResetTrigger" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.resetTrigger"></a>

```csharp
private void ResetTrigger()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.aggregations">Aggregations</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList">MonitoringAlertPolicyConditionsConditionAbsentAggregationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.trigger">Trigger</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference">MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.aggregationsInput">AggregationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.durationInput">DurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.triggerInput">TriggerInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTrigger">MonitoringAlertPolicyConditionsConditionAbsentTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsent">MonitoringAlertPolicyConditionsConditionAbsent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Aggregations`<sup>Required</sup> <a name="Aggregations" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.aggregations"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionAbsentAggregationsList Aggregations { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentAggregationsList">MonitoringAlertPolicyConditionsConditionAbsentAggregationsList</a>

---

##### `Trigger`<sup>Required</sup> <a name="Trigger" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.trigger"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference Trigger { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference">MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference</a>

---

##### `AggregationsInput`<sup>Optional</sup> <a name="AggregationsInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.aggregationsInput"></a>

```csharp
public object AggregationsInput { get; }
```

- *Type:* object

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.durationInput"></a>

```csharp
public string DurationInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `TriggerInput`<sup>Optional</sup> <a name="TriggerInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.triggerInput"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionAbsentTrigger TriggerInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTrigger">MonitoringAlertPolicyConditionsConditionAbsentTrigger</a>

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference.property.internalValue"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionAbsent InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsent">MonitoringAlertPolicyConditionsConditionAbsent</a>

---


### MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference <a name="MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.resetCount">ResetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.resetPercent">ResetPercent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCount` <a name="ResetCount" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.resetCount"></a>

```csharp
private void ResetCount()
```

##### `ResetPercent` <a name="ResetPercent" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.resetPercent"></a>

```csharp
private void ResetPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.percentInput">PercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.percent">Percent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTrigger">MonitoringAlertPolicyConditionsConditionAbsentTrigger</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `PercentInput`<sup>Optional</sup> <a name="PercentInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.percentInput"></a>

```csharp
public double PercentInput { get; }
```

- *Type:* double

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Percent`<sup>Required</sup> <a name="Percent" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.percent"></a>

```csharp
public double Percent { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTriggerOutputReference.property.internalValue"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionAbsentTrigger InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentTrigger">MonitoringAlertPolicyConditionsConditionAbsentTrigger</a>

---


### MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference <a name="MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.resetLabelExtractors">ResetLabelExtractors</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLabelExtractors` <a name="ResetLabelExtractors" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.resetLabelExtractors"></a>

```csharp
private void ResetLabelExtractors()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.labelExtractorsInput">LabelExtractorsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.labelExtractors">LabelExtractors</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLog">MonitoringAlertPolicyConditionsConditionMatchedLog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `LabelExtractorsInput`<sup>Optional</sup> <a name="LabelExtractorsInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.labelExtractorsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelExtractorsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `LabelExtractors`<sup>Required</sup> <a name="LabelExtractors" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.labelExtractors"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelExtractors { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference.property.internalValue"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionMatchedLog InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLog">MonitoringAlertPolicyConditionsConditionMatchedLog</a>

---


### MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference <a name="MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.putTrigger">PutTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.resetEvaluationMissingData">ResetEvaluationMissingData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.resetTrigger">ResetTrigger</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTrigger` <a name="PutTrigger" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.putTrigger"></a>

```csharp
private void PutTrigger(MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.putTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger">MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger</a>

---

##### `ResetEvaluationMissingData` <a name="ResetEvaluationMissingData" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.resetEvaluationMissingData"></a>

```csharp
private void ResetEvaluationMissingData()
```

##### `ResetTrigger` <a name="ResetTrigger" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.resetTrigger"></a>

```csharp
private void ResetTrigger()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.trigger">Trigger</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference">MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.durationInput">DurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.evaluationMissingDataInput">EvaluationMissingDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.triggerInput">TriggerInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger">MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.evaluationMissingData">EvaluationMissingData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage">MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Trigger`<sup>Required</sup> <a name="Trigger" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.trigger"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference Trigger { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference">MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference</a>

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.durationInput"></a>

```csharp
public string DurationInput { get; }
```

- *Type:* string

---

##### `EvaluationMissingDataInput`<sup>Optional</sup> <a name="EvaluationMissingDataInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.evaluationMissingDataInput"></a>

```csharp
public string EvaluationMissingDataInput { get; }
```

- *Type:* string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `TriggerInput`<sup>Optional</sup> <a name="TriggerInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.triggerInput"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger TriggerInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger">MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger</a>

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `EvaluationMissingData`<sup>Required</sup> <a name="EvaluationMissingData" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.evaluationMissingData"></a>

```csharp
public string EvaluationMissingData { get; }
```

- *Type:* string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference.property.internalValue"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage">MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage</a>

---


### MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference <a name="MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.resetCount">ResetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.resetPercent">ResetPercent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCount` <a name="ResetCount" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.resetCount"></a>

```csharp
private void ResetCount()
```

##### `ResetPercent` <a name="ResetPercent" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.resetPercent"></a>

```csharp
private void ResetPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.percentInput">PercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.percent">Percent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger">MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `PercentInput`<sup>Optional</sup> <a name="PercentInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.percentInput"></a>

```csharp
public double PercentInput { get; }
```

- *Type:* double

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Percent`<sup>Required</sup> <a name="Percent" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.percent"></a>

```csharp
public double Percent { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTriggerOutputReference.property.internalValue"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger">MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageTrigger</a>

---


### MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference <a name="MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetAlertRule">ResetAlertRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetDisableMetricValidation">ResetDisableMetricValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetDuration">ResetDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetEvaluationInterval">ResetEvaluationInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetRuleGroup">ResetRuleGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlertRule` <a name="ResetAlertRule" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetAlertRule"></a>

```csharp
private void ResetAlertRule()
```

##### `ResetDisableMetricValidation` <a name="ResetDisableMetricValidation" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetDisableMetricValidation"></a>

```csharp
private void ResetDisableMetricValidation()
```

##### `ResetDuration` <a name="ResetDuration" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetDuration"></a>

```csharp
private void ResetDuration()
```

##### `ResetEvaluationInterval` <a name="ResetEvaluationInterval" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetEvaluationInterval"></a>

```csharp
private void ResetEvaluationInterval()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetRuleGroup` <a name="ResetRuleGroup" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.resetRuleGroup"></a>

```csharp
private void ResetRuleGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.alertRuleInput">AlertRuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.disableMetricValidationInput">DisableMetricValidationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.durationInput">DurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.evaluationIntervalInput">EvaluationIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.ruleGroupInput">RuleGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.alertRule">AlertRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.disableMetricValidation">DisableMetricValidation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.evaluationInterval">EvaluationInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.ruleGroup">RuleGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage">MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlertRuleInput`<sup>Optional</sup> <a name="AlertRuleInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.alertRuleInput"></a>

```csharp
public string AlertRuleInput { get; }
```

- *Type:* string

---

##### `DisableMetricValidationInput`<sup>Optional</sup> <a name="DisableMetricValidationInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.disableMetricValidationInput"></a>

```csharp
public object DisableMetricValidationInput { get; }
```

- *Type:* object

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.durationInput"></a>

```csharp
public string DurationInput { get; }
```

- *Type:* string

---

##### `EvaluationIntervalInput`<sup>Optional</sup> <a name="EvaluationIntervalInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.evaluationIntervalInput"></a>

```csharp
public string EvaluationIntervalInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `RuleGroupInput`<sup>Optional</sup> <a name="RuleGroupInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.ruleGroupInput"></a>

```csharp
public string RuleGroupInput { get; }
```

- *Type:* string

---

##### `AlertRule`<sup>Required</sup> <a name="AlertRule" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.alertRule"></a>

```csharp
public string AlertRule { get; }
```

- *Type:* string

---

##### `DisableMetricValidation`<sup>Required</sup> <a name="DisableMetricValidation" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.disableMetricValidation"></a>

```csharp
public object DisableMetricValidation { get; }
```

- *Type:* object

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `EvaluationInterval`<sup>Required</sup> <a name="EvaluationInterval" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.evaluationInterval"></a>

```csharp
public string EvaluationInterval { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `RuleGroup`<sup>Required</sup> <a name="RuleGroup" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.ruleGroup"></a>

```csharp
public string RuleGroup { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference.property.internalValue"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage">MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage</a>

---


### MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference <a name="MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.columnInput">ColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.column">Column</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTest">MonitoringAlertPolicyConditionsConditionSqlBooleanTest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.columnInput"></a>

```csharp
public string ColumnInput { get; }
```

- *Type:* string

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.column"></a>

```csharp
public string Column { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference.property.internalValue"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionSqlBooleanTest InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTest">MonitoringAlertPolicyConditionsConditionSqlBooleanTest</a>

---


### MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference <a name="MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resetHours">ResetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resetMinutes">ResetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resetSeconds">ResetSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHours` <a name="ResetHours" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resetHours"></a>

```csharp
private void ResetHours()
```

##### `ResetMinutes` <a name="ResetMinutes" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resetMinutes"></a>

```csharp
private void ResetMinutes()
```

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resetNanos"></a>

```csharp
private void ResetNanos()
```

##### `ResetSeconds` <a name="ResetSeconds" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.resetSeconds"></a>

```csharp
private void ResetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.hoursInput">HoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.minutesInput">MinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.nanosInput">NanosInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.secondsInput">SecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.hours">Hours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.minutes">Minutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.nanos">Nanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.seconds">Seconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime">MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.hoursInput"></a>

```csharp
public double HoursInput { get; }
```

- *Type:* double

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.minutesInput"></a>

```csharp
public double MinutesInput { get; }
```

- *Type:* double

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.nanosInput"></a>

```csharp
public double NanosInput { get; }
```

- *Type:* double

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.secondsInput"></a>

```csharp
public double SecondsInput { get; }
```

- *Type:* double

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.hours"></a>

```csharp
public double Hours { get; }
```

- *Type:* double

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.minutes"></a>

```csharp
public double Minutes { get; }
```

- *Type:* double

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.nanos"></a>

```csharp
public double Nanos { get; }
```

- *Type:* double

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.seconds"></a>

```csharp
public double Seconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference.property.internalValue"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime">MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime</a>

---


### MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference <a name="MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.putExecutionTime">PutExecutionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.resetExecutionTime">ResetExecutionTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExecutionTime` <a name="PutExecutionTime" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.putExecutionTime"></a>

```csharp
private void PutExecutionTime(MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.putExecutionTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime">MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime</a>

---

##### `ResetExecutionTime` <a name="ResetExecutionTime" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.resetExecutionTime"></a>

```csharp
private void ResetExecutionTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.executionTime">ExecutionTime</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference">MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.executionTimeInput">ExecutionTimeInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime">MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.periodicityInput">PeriodicityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.periodicity">Periodicity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDaily">MonitoringAlertPolicyConditionsConditionSqlDaily</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExecutionTime`<sup>Required</sup> <a name="ExecutionTime" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.executionTime"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference ExecutionTime { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference">MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTimeOutputReference</a>

---

##### `ExecutionTimeInput`<sup>Optional</sup> <a name="ExecutionTimeInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.executionTimeInput"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime ExecutionTimeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime">MonitoringAlertPolicyConditionsConditionSqlDailyExecutionTime</a>

---

##### `PeriodicityInput`<sup>Optional</sup> <a name="PeriodicityInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.periodicityInput"></a>

```csharp
public double PeriodicityInput { get; }
```

- *Type:* double

---

##### `Periodicity`<sup>Required</sup> <a name="Periodicity" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.periodicity"></a>

```csharp
public double Periodicity { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference.property.internalValue"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionSqlDaily InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDaily">MonitoringAlertPolicyConditionsConditionSqlDaily</a>

---


### MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference <a name="MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.resetMinuteOffset">ResetMinuteOffset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMinuteOffset` <a name="ResetMinuteOffset" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.resetMinuteOffset"></a>

```csharp
private void ResetMinuteOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.minuteOffsetInput">MinuteOffsetInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.periodicityInput">PeriodicityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.minuteOffset">MinuteOffset</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.periodicity">Periodicity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourly">MonitoringAlertPolicyConditionsConditionSqlHourly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MinuteOffsetInput`<sup>Optional</sup> <a name="MinuteOffsetInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.minuteOffsetInput"></a>

```csharp
public double MinuteOffsetInput { get; }
```

- *Type:* double

---

##### `PeriodicityInput`<sup>Optional</sup> <a name="PeriodicityInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.periodicityInput"></a>

```csharp
public double PeriodicityInput { get; }
```

- *Type:* double

---

##### `MinuteOffset`<sup>Required</sup> <a name="MinuteOffset" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.minuteOffset"></a>

```csharp
public double MinuteOffset { get; }
```

- *Type:* double

---

##### `Periodicity`<sup>Required</sup> <a name="Periodicity" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.periodicity"></a>

```csharp
public double Periodicity { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference.property.internalValue"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionSqlHourly InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourly">MonitoringAlertPolicyConditionsConditionSqlHourly</a>

---


### MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference <a name="MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.periodicityInput">PeriodicityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.periodicity">Periodicity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutes">MonitoringAlertPolicyConditionsConditionSqlMinutes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PeriodicityInput`<sup>Optional</sup> <a name="PeriodicityInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.periodicityInput"></a>

```csharp
public double PeriodicityInput { get; }
```

- *Type:* double

---

##### `Periodicity`<sup>Required</sup> <a name="Periodicity" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.periodicity"></a>

```csharp
public double Periodicity { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference.property.internalValue"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionSqlMinutes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutes">MonitoringAlertPolicyConditionsConditionSqlMinutes</a>

---


### MonitoringAlertPolicyConditionsConditionSqlOutputReference <a name="MonitoringAlertPolicyConditionsConditionSqlOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyConditionsConditionSqlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.putBooleanTest">PutBooleanTest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.putDaily">PutDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.putHourly">PutHourly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.putMinutes">PutMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.putRowCountTest">PutRowCountTest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.resetBooleanTest">ResetBooleanTest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.resetDaily">ResetDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.resetHourly">ResetHourly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.resetMinutes">ResetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.resetRowCountTest">ResetRowCountTest</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBooleanTest` <a name="PutBooleanTest" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.putBooleanTest"></a>

```csharp
private void PutBooleanTest(MonitoringAlertPolicyConditionsConditionSqlBooleanTest Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.putBooleanTest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTest">MonitoringAlertPolicyConditionsConditionSqlBooleanTest</a>

---

##### `PutDaily` <a name="PutDaily" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.putDaily"></a>

```csharp
private void PutDaily(MonitoringAlertPolicyConditionsConditionSqlDaily Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.putDaily.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDaily">MonitoringAlertPolicyConditionsConditionSqlDaily</a>

---

##### `PutHourly` <a name="PutHourly" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.putHourly"></a>

```csharp
private void PutHourly(MonitoringAlertPolicyConditionsConditionSqlHourly Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.putHourly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourly">MonitoringAlertPolicyConditionsConditionSqlHourly</a>

---

##### `PutMinutes` <a name="PutMinutes" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.putMinutes"></a>

```csharp
private void PutMinutes(MonitoringAlertPolicyConditionsConditionSqlMinutes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.putMinutes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutes">MonitoringAlertPolicyConditionsConditionSqlMinutes</a>

---

##### `PutRowCountTest` <a name="PutRowCountTest" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.putRowCountTest"></a>

```csharp
private void PutRowCountTest(MonitoringAlertPolicyConditionsConditionSqlRowCountTest Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.putRowCountTest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTest">MonitoringAlertPolicyConditionsConditionSqlRowCountTest</a>

---

##### `ResetBooleanTest` <a name="ResetBooleanTest" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.resetBooleanTest"></a>

```csharp
private void ResetBooleanTest()
```

##### `ResetDaily` <a name="ResetDaily" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.resetDaily"></a>

```csharp
private void ResetDaily()
```

##### `ResetHourly` <a name="ResetHourly" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.resetHourly"></a>

```csharp
private void ResetHourly()
```

##### `ResetMinutes` <a name="ResetMinutes" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.resetMinutes"></a>

```csharp
private void ResetMinutes()
```

##### `ResetRowCountTest` <a name="ResetRowCountTest" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.resetRowCountTest"></a>

```csharp
private void ResetRowCountTest()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.booleanTest">BooleanTest</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference">MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.daily">Daily</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference">MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.hourly">Hourly</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference">MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.minutes">Minutes</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference">MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.rowCountTest">RowCountTest</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference">MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.booleanTestInput">BooleanTestInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTest">MonitoringAlertPolicyConditionsConditionSqlBooleanTest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.dailyInput">DailyInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDaily">MonitoringAlertPolicyConditionsConditionSqlDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.hourlyInput">HourlyInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourly">MonitoringAlertPolicyConditionsConditionSqlHourly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.minutesInput">MinutesInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutes">MonitoringAlertPolicyConditionsConditionSqlMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.rowCountTestInput">RowCountTestInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTest">MonitoringAlertPolicyConditionsConditionSqlRowCountTest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSql">MonitoringAlertPolicyConditionsConditionSql</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BooleanTest`<sup>Required</sup> <a name="BooleanTest" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.booleanTest"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference BooleanTest { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference">MonitoringAlertPolicyConditionsConditionSqlBooleanTestOutputReference</a>

---

##### `Daily`<sup>Required</sup> <a name="Daily" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.daily"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference Daily { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference">MonitoringAlertPolicyConditionsConditionSqlDailyOutputReference</a>

---

##### `Hourly`<sup>Required</sup> <a name="Hourly" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.hourly"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference Hourly { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference">MonitoringAlertPolicyConditionsConditionSqlHourlyOutputReference</a>

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.minutes"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference Minutes { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference">MonitoringAlertPolicyConditionsConditionSqlMinutesOutputReference</a>

---

##### `RowCountTest`<sup>Required</sup> <a name="RowCountTest" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.rowCountTest"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference RowCountTest { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference">MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference</a>

---

##### `BooleanTestInput`<sup>Optional</sup> <a name="BooleanTestInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.booleanTestInput"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionSqlBooleanTest BooleanTestInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlBooleanTest">MonitoringAlertPolicyConditionsConditionSqlBooleanTest</a>

---

##### `DailyInput`<sup>Optional</sup> <a name="DailyInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.dailyInput"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionSqlDaily DailyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlDaily">MonitoringAlertPolicyConditionsConditionSqlDaily</a>

---

##### `HourlyInput`<sup>Optional</sup> <a name="HourlyInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.hourlyInput"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionSqlHourly HourlyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlHourly">MonitoringAlertPolicyConditionsConditionSqlHourly</a>

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.minutesInput"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionSqlMinutes MinutesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlMinutes">MonitoringAlertPolicyConditionsConditionSqlMinutes</a>

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `RowCountTestInput`<sup>Optional</sup> <a name="RowCountTestInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.rowCountTestInput"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionSqlRowCountTest RowCountTestInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTest">MonitoringAlertPolicyConditionsConditionSqlRowCountTest</a>

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference.property.internalValue"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionSql InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSql">MonitoringAlertPolicyConditionsConditionSql</a>

---


### MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference <a name="MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.comparisonInput">ComparisonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.comparison">Comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.threshold">Threshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTest">MonitoringAlertPolicyConditionsConditionSqlRowCountTest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComparisonInput`<sup>Optional</sup> <a name="ComparisonInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.comparisonInput"></a>

```csharp
public string ComparisonInput { get; }
```

- *Type:* string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.thresholdInput"></a>

```csharp
public double ThresholdInput { get; }
```

- *Type:* double

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.comparison"></a>

```csharp
public string Comparison { get; }
```

- *Type:* string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.threshold"></a>

```csharp
public double Threshold { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTestOutputReference.property.internalValue"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionSqlRowCountTest InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlRowCountTest">MonitoringAlertPolicyConditionsConditionSqlRowCountTest</a>

---


### MonitoringAlertPolicyConditionsConditionThresholdAggregationsList <a name="MonitoringAlertPolicyConditionsConditionThresholdAggregationsList" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyConditionsConditionThresholdAggregationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.get"></a>

```csharp
private MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference <a name="MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resetAlignmentPeriod">ResetAlignmentPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resetCrossSeriesReducer">ResetCrossSeriesReducer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resetGroupByFields">ResetGroupByFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resetPerSeriesAligner">ResetPerSeriesAligner</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlignmentPeriod` <a name="ResetAlignmentPeriod" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resetAlignmentPeriod"></a>

```csharp
private void ResetAlignmentPeriod()
```

##### `ResetCrossSeriesReducer` <a name="ResetCrossSeriesReducer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resetCrossSeriesReducer"></a>

```csharp
private void ResetCrossSeriesReducer()
```

##### `ResetGroupByFields` <a name="ResetGroupByFields" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resetGroupByFields"></a>

```csharp
private void ResetGroupByFields()
```

##### `ResetPerSeriesAligner` <a name="ResetPerSeriesAligner" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.resetPerSeriesAligner"></a>

```csharp
private void ResetPerSeriesAligner()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.alignmentPeriodInput">AlignmentPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.crossSeriesReducerInput">CrossSeriesReducerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.groupByFieldsInput">GroupByFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.perSeriesAlignerInput">PerSeriesAlignerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.alignmentPeriod">AlignmentPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.crossSeriesReducer">CrossSeriesReducer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.groupByFields">GroupByFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.perSeriesAligner">PerSeriesAligner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlignmentPeriodInput`<sup>Optional</sup> <a name="AlignmentPeriodInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.alignmentPeriodInput"></a>

```csharp
public string AlignmentPeriodInput { get; }
```

- *Type:* string

---

##### `CrossSeriesReducerInput`<sup>Optional</sup> <a name="CrossSeriesReducerInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.crossSeriesReducerInput"></a>

```csharp
public string CrossSeriesReducerInput { get; }
```

- *Type:* string

---

##### `GroupByFieldsInput`<sup>Optional</sup> <a name="GroupByFieldsInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.groupByFieldsInput"></a>

```csharp
public string[] GroupByFieldsInput { get; }
```

- *Type:* string[]

---

##### `PerSeriesAlignerInput`<sup>Optional</sup> <a name="PerSeriesAlignerInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.perSeriesAlignerInput"></a>

```csharp
public string PerSeriesAlignerInput { get; }
```

- *Type:* string

---

##### `AlignmentPeriod`<sup>Required</sup> <a name="AlignmentPeriod" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.alignmentPeriod"></a>

```csharp
public string AlignmentPeriod { get; }
```

- *Type:* string

---

##### `CrossSeriesReducer`<sup>Required</sup> <a name="CrossSeriesReducer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.crossSeriesReducer"></a>

```csharp
public string CrossSeriesReducer { get; }
```

- *Type:* string

---

##### `GroupByFields`<sup>Required</sup> <a name="GroupByFields" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.groupByFields"></a>

```csharp
public string[] GroupByFields { get; }
```

- *Type:* string[]

---

##### `PerSeriesAligner`<sup>Required</sup> <a name="PerSeriesAligner" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.perSeriesAligner"></a>

```csharp
public string PerSeriesAligner { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList <a name="MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.get"></a>

```csharp
private MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference <a name="MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resetAlignmentPeriod">ResetAlignmentPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resetCrossSeriesReducer">ResetCrossSeriesReducer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resetGroupByFields">ResetGroupByFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resetPerSeriesAligner">ResetPerSeriesAligner</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlignmentPeriod` <a name="ResetAlignmentPeriod" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resetAlignmentPeriod"></a>

```csharp
private void ResetAlignmentPeriod()
```

##### `ResetCrossSeriesReducer` <a name="ResetCrossSeriesReducer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resetCrossSeriesReducer"></a>

```csharp
private void ResetCrossSeriesReducer()
```

##### `ResetGroupByFields` <a name="ResetGroupByFields" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resetGroupByFields"></a>

```csharp
private void ResetGroupByFields()
```

##### `ResetPerSeriesAligner` <a name="ResetPerSeriesAligner" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.resetPerSeriesAligner"></a>

```csharp
private void ResetPerSeriesAligner()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.alignmentPeriodInput">AlignmentPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.crossSeriesReducerInput">CrossSeriesReducerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.groupByFieldsInput">GroupByFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.perSeriesAlignerInput">PerSeriesAlignerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.alignmentPeriod">AlignmentPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.crossSeriesReducer">CrossSeriesReducer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.groupByFields">GroupByFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.perSeriesAligner">PerSeriesAligner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlignmentPeriodInput`<sup>Optional</sup> <a name="AlignmentPeriodInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.alignmentPeriodInput"></a>

```csharp
public string AlignmentPeriodInput { get; }
```

- *Type:* string

---

##### `CrossSeriesReducerInput`<sup>Optional</sup> <a name="CrossSeriesReducerInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.crossSeriesReducerInput"></a>

```csharp
public string CrossSeriesReducerInput { get; }
```

- *Type:* string

---

##### `GroupByFieldsInput`<sup>Optional</sup> <a name="GroupByFieldsInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.groupByFieldsInput"></a>

```csharp
public string[] GroupByFieldsInput { get; }
```

- *Type:* string[]

---

##### `PerSeriesAlignerInput`<sup>Optional</sup> <a name="PerSeriesAlignerInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.perSeriesAlignerInput"></a>

```csharp
public string PerSeriesAlignerInput { get; }
```

- *Type:* string

---

##### `AlignmentPeriod`<sup>Required</sup> <a name="AlignmentPeriod" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.alignmentPeriod"></a>

```csharp
public string AlignmentPeriod { get; }
```

- *Type:* string

---

##### `CrossSeriesReducer`<sup>Required</sup> <a name="CrossSeriesReducer" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.crossSeriesReducer"></a>

```csharp
public string CrossSeriesReducer { get; }
```

- *Type:* string

---

##### `GroupByFields`<sup>Required</sup> <a name="GroupByFields" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.groupByFields"></a>

```csharp
public string[] GroupByFields { get; }
```

- *Type:* string[]

---

##### `PerSeriesAligner`<sup>Required</sup> <a name="PerSeriesAligner" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.perSeriesAligner"></a>

```csharp
public string PerSeriesAligner { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference <a name="MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.forecastHorizonInput">ForecastHorizonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.forecastHorizon">ForecastHorizon</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptions">MonitoringAlertPolicyConditionsConditionThresholdForecastOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ForecastHorizonInput`<sup>Optional</sup> <a name="ForecastHorizonInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.forecastHorizonInput"></a>

```csharp
public string ForecastHorizonInput { get; }
```

- *Type:* string

---

##### `ForecastHorizon`<sup>Required</sup> <a name="ForecastHorizon" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.forecastHorizon"></a>

```csharp
public string ForecastHorizon { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference.property.internalValue"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionThresholdForecastOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptions">MonitoringAlertPolicyConditionsConditionThresholdForecastOptions</a>

---


### MonitoringAlertPolicyConditionsConditionThresholdOutputReference <a name="MonitoringAlertPolicyConditionsConditionThresholdOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyConditionsConditionThresholdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.putAggregations">PutAggregations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.putDenominatorAggregations">PutDenominatorAggregations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.putForecastOptions">PutForecastOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.putTrigger">PutTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetAggregations">ResetAggregations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetDenominatorAggregations">ResetDenominatorAggregations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetDenominatorFilter">ResetDenominatorFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetEvaluationMissingData">ResetEvaluationMissingData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetForecastOptions">ResetForecastOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetThresholdValue">ResetThresholdValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetTrigger">ResetTrigger</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAggregations` <a name="PutAggregations" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.putAggregations"></a>

```csharp
private void PutAggregations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.putAggregations.parameter.value"></a>

- *Type:* object

---

##### `PutDenominatorAggregations` <a name="PutDenominatorAggregations" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.putDenominatorAggregations"></a>

```csharp
private void PutDenominatorAggregations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.putDenominatorAggregations.parameter.value"></a>

- *Type:* object

---

##### `PutForecastOptions` <a name="PutForecastOptions" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.putForecastOptions"></a>

```csharp
private void PutForecastOptions(MonitoringAlertPolicyConditionsConditionThresholdForecastOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.putForecastOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptions">MonitoringAlertPolicyConditionsConditionThresholdForecastOptions</a>

---

##### `PutTrigger` <a name="PutTrigger" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.putTrigger"></a>

```csharp
private void PutTrigger(MonitoringAlertPolicyConditionsConditionThresholdTrigger Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.putTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTrigger">MonitoringAlertPolicyConditionsConditionThresholdTrigger</a>

---

##### `ResetAggregations` <a name="ResetAggregations" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetAggregations"></a>

```csharp
private void ResetAggregations()
```

##### `ResetDenominatorAggregations` <a name="ResetDenominatorAggregations" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetDenominatorAggregations"></a>

```csharp
private void ResetDenominatorAggregations()
```

##### `ResetDenominatorFilter` <a name="ResetDenominatorFilter" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetDenominatorFilter"></a>

```csharp
private void ResetDenominatorFilter()
```

##### `ResetEvaluationMissingData` <a name="ResetEvaluationMissingData" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetEvaluationMissingData"></a>

```csharp
private void ResetEvaluationMissingData()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetForecastOptions` <a name="ResetForecastOptions" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetForecastOptions"></a>

```csharp
private void ResetForecastOptions()
```

##### `ResetThresholdValue` <a name="ResetThresholdValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetThresholdValue"></a>

```csharp
private void ResetThresholdValue()
```

##### `ResetTrigger` <a name="ResetTrigger" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.resetTrigger"></a>

```csharp
private void ResetTrigger()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.aggregations">Aggregations</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList">MonitoringAlertPolicyConditionsConditionThresholdAggregationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.denominatorAggregations">DenominatorAggregations</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList">MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.forecastOptions">ForecastOptions</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference">MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.trigger">Trigger</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference">MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.aggregationsInput">AggregationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.comparisonInput">ComparisonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.denominatorAggregationsInput">DenominatorAggregationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.denominatorFilterInput">DenominatorFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.durationInput">DurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.evaluationMissingDataInput">EvaluationMissingDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.forecastOptionsInput">ForecastOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptions">MonitoringAlertPolicyConditionsConditionThresholdForecastOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.thresholdValueInput">ThresholdValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.triggerInput">TriggerInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTrigger">MonitoringAlertPolicyConditionsConditionThresholdTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.comparison">Comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.denominatorFilter">DenominatorFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.evaluationMissingData">EvaluationMissingData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.thresholdValue">ThresholdValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold">MonitoringAlertPolicyConditionsConditionThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Aggregations`<sup>Required</sup> <a name="Aggregations" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.aggregations"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionThresholdAggregationsList Aggregations { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdAggregationsList">MonitoringAlertPolicyConditionsConditionThresholdAggregationsList</a>

---

##### `DenominatorAggregations`<sup>Required</sup> <a name="DenominatorAggregations" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.denominatorAggregations"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList DenominatorAggregations { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList">MonitoringAlertPolicyConditionsConditionThresholdDenominatorAggregationsList</a>

---

##### `ForecastOptions`<sup>Required</sup> <a name="ForecastOptions" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.forecastOptions"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference ForecastOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference">MonitoringAlertPolicyConditionsConditionThresholdForecastOptionsOutputReference</a>

---

##### `Trigger`<sup>Required</sup> <a name="Trigger" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.trigger"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference Trigger { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference">MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference</a>

---

##### `AggregationsInput`<sup>Optional</sup> <a name="AggregationsInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.aggregationsInput"></a>

```csharp
public object AggregationsInput { get; }
```

- *Type:* object

---

##### `ComparisonInput`<sup>Optional</sup> <a name="ComparisonInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.comparisonInput"></a>

```csharp
public string ComparisonInput { get; }
```

- *Type:* string

---

##### `DenominatorAggregationsInput`<sup>Optional</sup> <a name="DenominatorAggregationsInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.denominatorAggregationsInput"></a>

```csharp
public object DenominatorAggregationsInput { get; }
```

- *Type:* object

---

##### `DenominatorFilterInput`<sup>Optional</sup> <a name="DenominatorFilterInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.denominatorFilterInput"></a>

```csharp
public string DenominatorFilterInput { get; }
```

- *Type:* string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.durationInput"></a>

```csharp
public string DurationInput { get; }
```

- *Type:* string

---

##### `EvaluationMissingDataInput`<sup>Optional</sup> <a name="EvaluationMissingDataInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.evaluationMissingDataInput"></a>

```csharp
public string EvaluationMissingDataInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `ForecastOptionsInput`<sup>Optional</sup> <a name="ForecastOptionsInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.forecastOptionsInput"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionThresholdForecastOptions ForecastOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdForecastOptions">MonitoringAlertPolicyConditionsConditionThresholdForecastOptions</a>

---

##### `ThresholdValueInput`<sup>Optional</sup> <a name="ThresholdValueInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.thresholdValueInput"></a>

```csharp
public double ThresholdValueInput { get; }
```

- *Type:* double

---

##### `TriggerInput`<sup>Optional</sup> <a name="TriggerInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.triggerInput"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionThresholdTrigger TriggerInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTrigger">MonitoringAlertPolicyConditionsConditionThresholdTrigger</a>

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.comparison"></a>

```csharp
public string Comparison { get; }
```

- *Type:* string

---

##### `DenominatorFilter`<sup>Required</sup> <a name="DenominatorFilter" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.denominatorFilter"></a>

```csharp
public string DenominatorFilter { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `EvaluationMissingData`<sup>Required</sup> <a name="EvaluationMissingData" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.evaluationMissingData"></a>

```csharp
public string EvaluationMissingData { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `ThresholdValue`<sup>Required</sup> <a name="ThresholdValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.thresholdValue"></a>

```csharp
public double ThresholdValue { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference.property.internalValue"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionThreshold InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold">MonitoringAlertPolicyConditionsConditionThreshold</a>

---


### MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference <a name="MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.resetCount">ResetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.resetPercent">ResetPercent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCount` <a name="ResetCount" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.resetCount"></a>

```csharp
private void ResetCount()
```

##### `ResetPercent` <a name="ResetPercent" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.resetPercent"></a>

```csharp
private void ResetPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.percentInput">PercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.percent">Percent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTrigger">MonitoringAlertPolicyConditionsConditionThresholdTrigger</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `PercentInput`<sup>Optional</sup> <a name="PercentInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.percentInput"></a>

```csharp
public double PercentInput { get; }
```

- *Type:* double

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Percent`<sup>Required</sup> <a name="Percent" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.percent"></a>

```csharp
public double Percent { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTriggerOutputReference.property.internalValue"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionThresholdTrigger InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdTrigger">MonitoringAlertPolicyConditionsConditionThresholdTrigger</a>

---


### MonitoringAlertPolicyConditionsList <a name="MonitoringAlertPolicyConditionsList" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.get"></a>

```csharp
private MonitoringAlertPolicyConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitoringAlertPolicyConditionsOutputReference <a name="MonitoringAlertPolicyConditionsOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.putConditionAbsent">PutConditionAbsent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.putConditionMatchedLog">PutConditionMatchedLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.putConditionMonitoringQueryLanguage">PutConditionMonitoringQueryLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.putConditionPrometheusQueryLanguage">PutConditionPrometheusQueryLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.putConditionSql">PutConditionSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.putConditionThreshold">PutConditionThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.resetConditionAbsent">ResetConditionAbsent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.resetConditionMatchedLog">ResetConditionMatchedLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.resetConditionMonitoringQueryLanguage">ResetConditionMonitoringQueryLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.resetConditionPrometheusQueryLanguage">ResetConditionPrometheusQueryLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.resetConditionSql">ResetConditionSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.resetConditionThreshold">ResetConditionThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditionAbsent` <a name="PutConditionAbsent" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.putConditionAbsent"></a>

```csharp
private void PutConditionAbsent(MonitoringAlertPolicyConditionsConditionAbsent Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.putConditionAbsent.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsent">MonitoringAlertPolicyConditionsConditionAbsent</a>

---

##### `PutConditionMatchedLog` <a name="PutConditionMatchedLog" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.putConditionMatchedLog"></a>

```csharp
private void PutConditionMatchedLog(MonitoringAlertPolicyConditionsConditionMatchedLog Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.putConditionMatchedLog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLog">MonitoringAlertPolicyConditionsConditionMatchedLog</a>

---

##### `PutConditionMonitoringQueryLanguage` <a name="PutConditionMonitoringQueryLanguage" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.putConditionMonitoringQueryLanguage"></a>

```csharp
private void PutConditionMonitoringQueryLanguage(MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.putConditionMonitoringQueryLanguage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage">MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage</a>

---

##### `PutConditionPrometheusQueryLanguage` <a name="PutConditionPrometheusQueryLanguage" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.putConditionPrometheusQueryLanguage"></a>

```csharp
private void PutConditionPrometheusQueryLanguage(MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.putConditionPrometheusQueryLanguage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage">MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage</a>

---

##### `PutConditionSql` <a name="PutConditionSql" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.putConditionSql"></a>

```csharp
private void PutConditionSql(MonitoringAlertPolicyConditionsConditionSql Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.putConditionSql.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSql">MonitoringAlertPolicyConditionsConditionSql</a>

---

##### `PutConditionThreshold` <a name="PutConditionThreshold" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.putConditionThreshold"></a>

```csharp
private void PutConditionThreshold(MonitoringAlertPolicyConditionsConditionThreshold Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.putConditionThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold">MonitoringAlertPolicyConditionsConditionThreshold</a>

---

##### `ResetConditionAbsent` <a name="ResetConditionAbsent" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.resetConditionAbsent"></a>

```csharp
private void ResetConditionAbsent()
```

##### `ResetConditionMatchedLog` <a name="ResetConditionMatchedLog" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.resetConditionMatchedLog"></a>

```csharp
private void ResetConditionMatchedLog()
```

##### `ResetConditionMonitoringQueryLanguage` <a name="ResetConditionMonitoringQueryLanguage" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.resetConditionMonitoringQueryLanguage"></a>

```csharp
private void ResetConditionMonitoringQueryLanguage()
```

##### `ResetConditionPrometheusQueryLanguage` <a name="ResetConditionPrometheusQueryLanguage" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.resetConditionPrometheusQueryLanguage"></a>

```csharp
private void ResetConditionPrometheusQueryLanguage()
```

##### `ResetConditionSql` <a name="ResetConditionSql" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.resetConditionSql"></a>

```csharp
private void ResetConditionSql()
```

##### `ResetConditionThreshold` <a name="ResetConditionThreshold" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.resetConditionThreshold"></a>

```csharp
private void ResetConditionThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionAbsent">ConditionAbsent</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference">MonitoringAlertPolicyConditionsConditionAbsentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionMatchedLog">ConditionMatchedLog</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference">MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionMonitoringQueryLanguage">ConditionMonitoringQueryLanguage</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference">MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionPrometheusQueryLanguage">ConditionPrometheusQueryLanguage</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference">MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionSql">ConditionSql</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference">MonitoringAlertPolicyConditionsConditionSqlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionThreshold">ConditionThreshold</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference">MonitoringAlertPolicyConditionsConditionThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionAbsentInput">ConditionAbsentInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsent">MonitoringAlertPolicyConditionsConditionAbsent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionMatchedLogInput">ConditionMatchedLogInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLog">MonitoringAlertPolicyConditionsConditionMatchedLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionMonitoringQueryLanguageInput">ConditionMonitoringQueryLanguageInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage">MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionPrometheusQueryLanguageInput">ConditionPrometheusQueryLanguageInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage">MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionSqlInput">ConditionSqlInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSql">MonitoringAlertPolicyConditionsConditionSql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionThresholdInput">ConditionThresholdInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold">MonitoringAlertPolicyConditionsConditionThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionAbsent`<sup>Required</sup> <a name="ConditionAbsent" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionAbsent"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionAbsentOutputReference ConditionAbsent { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsentOutputReference">MonitoringAlertPolicyConditionsConditionAbsentOutputReference</a>

---

##### `ConditionMatchedLog`<sup>Required</sup> <a name="ConditionMatchedLog" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionMatchedLog"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference ConditionMatchedLog { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference">MonitoringAlertPolicyConditionsConditionMatchedLogOutputReference</a>

---

##### `ConditionMonitoringQueryLanguage`<sup>Required</sup> <a name="ConditionMonitoringQueryLanguage" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionMonitoringQueryLanguage"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference ConditionMonitoringQueryLanguage { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference">MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguageOutputReference</a>

---

##### `ConditionPrometheusQueryLanguage`<sup>Required</sup> <a name="ConditionPrometheusQueryLanguage" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionPrometheusQueryLanguage"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference ConditionPrometheusQueryLanguage { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference">MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguageOutputReference</a>

---

##### `ConditionSql`<sup>Required</sup> <a name="ConditionSql" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionSql"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionSqlOutputReference ConditionSql { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSqlOutputReference">MonitoringAlertPolicyConditionsConditionSqlOutputReference</a>

---

##### `ConditionThreshold`<sup>Required</sup> <a name="ConditionThreshold" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionThreshold"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionThresholdOutputReference ConditionThreshold { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThresholdOutputReference">MonitoringAlertPolicyConditionsConditionThresholdOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ConditionAbsentInput`<sup>Optional</sup> <a name="ConditionAbsentInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionAbsentInput"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionAbsent ConditionAbsentInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionAbsent">MonitoringAlertPolicyConditionsConditionAbsent</a>

---

##### `ConditionMatchedLogInput`<sup>Optional</sup> <a name="ConditionMatchedLogInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionMatchedLogInput"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionMatchedLog ConditionMatchedLogInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMatchedLog">MonitoringAlertPolicyConditionsConditionMatchedLog</a>

---

##### `ConditionMonitoringQueryLanguageInput`<sup>Optional</sup> <a name="ConditionMonitoringQueryLanguageInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionMonitoringQueryLanguageInput"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage ConditionMonitoringQueryLanguageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage">MonitoringAlertPolicyConditionsConditionMonitoringQueryLanguage</a>

---

##### `ConditionPrometheusQueryLanguageInput`<sup>Optional</sup> <a name="ConditionPrometheusQueryLanguageInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionPrometheusQueryLanguageInput"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage ConditionPrometheusQueryLanguageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage">MonitoringAlertPolicyConditionsConditionPrometheusQueryLanguage</a>

---

##### `ConditionSqlInput`<sup>Optional</sup> <a name="ConditionSqlInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionSqlInput"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionSql ConditionSqlInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionSql">MonitoringAlertPolicyConditionsConditionSql</a>

---

##### `ConditionThresholdInput`<sup>Optional</sup> <a name="ConditionThresholdInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.conditionThresholdInput"></a>

```csharp
public MonitoringAlertPolicyConditionsConditionThreshold ConditionThresholdInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsConditionThreshold">MonitoringAlertPolicyConditionsConditionThreshold</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyConditionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitoringAlertPolicyCreationRecordList <a name="MonitoringAlertPolicyCreationRecordList" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyCreationRecordList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.get"></a>

```csharp
private MonitoringAlertPolicyCreationRecordOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MonitoringAlertPolicyCreationRecordOutputReference <a name="MonitoringAlertPolicyCreationRecordOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyCreationRecordOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.property.mutatedBy">MutatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.property.mutateTime">MutateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecord">MonitoringAlertPolicyCreationRecord</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MutatedBy`<sup>Required</sup> <a name="MutatedBy" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.property.mutatedBy"></a>

```csharp
public string MutatedBy { get; }
```

- *Type:* string

---

##### `MutateTime`<sup>Required</sup> <a name="MutateTime" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.property.mutateTime"></a>

```csharp
public string MutateTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecordOutputReference.property.internalValue"></a>

```csharp
public MonitoringAlertPolicyCreationRecord InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyCreationRecord">MonitoringAlertPolicyCreationRecord</a>

---


### MonitoringAlertPolicyDocumentationLinksList <a name="MonitoringAlertPolicyDocumentationLinksList" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyDocumentationLinksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.get"></a>

```csharp
private MonitoringAlertPolicyDocumentationLinksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitoringAlertPolicyDocumentationLinksOutputReference <a name="MonitoringAlertPolicyDocumentationLinksOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyDocumentationLinksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitoringAlertPolicyDocumentationOutputReference <a name="MonitoringAlertPolicyDocumentationOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyDocumentationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.putLinks">PutLinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.resetLinks">ResetLinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.resetMimeType">ResetMimeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.resetSubject">ResetSubject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLinks` <a name="PutLinks" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.putLinks"></a>

```csharp
private void PutLinks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.putLinks.parameter.value"></a>

- *Type:* object

---

##### `ResetContent` <a name="ResetContent" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.resetContent"></a>

```csharp
private void ResetContent()
```

##### `ResetLinks` <a name="ResetLinks" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.resetLinks"></a>

```csharp
private void ResetLinks()
```

##### `ResetMimeType` <a name="ResetMimeType" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.resetMimeType"></a>

```csharp
private void ResetMimeType()
```

##### `ResetSubject` <a name="ResetSubject" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.resetSubject"></a>

```csharp
private void ResetSubject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.property.links">Links</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList">MonitoringAlertPolicyDocumentationLinksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.property.linksInput">LinksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.property.mimeTypeInput">MimeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.property.subjectInput">SubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.property.mimeType">MimeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.property.subject">Subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentation">MonitoringAlertPolicyDocumentation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Links`<sup>Required</sup> <a name="Links" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.property.links"></a>

```csharp
public MonitoringAlertPolicyDocumentationLinksList Links { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationLinksList">MonitoringAlertPolicyDocumentationLinksList</a>

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `LinksInput`<sup>Optional</sup> <a name="LinksInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.property.linksInput"></a>

```csharp
public object LinksInput { get; }
```

- *Type:* object

---

##### `MimeTypeInput`<sup>Optional</sup> <a name="MimeTypeInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.property.mimeTypeInput"></a>

```csharp
public string MimeTypeInput { get; }
```

- *Type:* string

---

##### `SubjectInput`<sup>Optional</sup> <a name="SubjectInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.property.subjectInput"></a>

```csharp
public string SubjectInput { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `MimeType`<sup>Required</sup> <a name="MimeType" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.property.mimeType"></a>

```csharp
public string MimeType { get; }
```

- *Type:* string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.property.subject"></a>

```csharp
public string Subject { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentationOutputReference.property.internalValue"></a>

```csharp
public MonitoringAlertPolicyDocumentation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyDocumentation">MonitoringAlertPolicyDocumentation</a>

---


### MonitoringAlertPolicyTimeoutsOutputReference <a name="MonitoringAlertPolicyTimeoutsOutputReference" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringAlertPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringAlertPolicy.MonitoringAlertPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



