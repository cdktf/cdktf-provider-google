# `monitoringMetricDescriptor` Submodule <a name="`monitoringMetricDescriptor` Submodule" id="@cdktf/provider-google.monitoringMetricDescriptor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitoringMetricDescriptor <a name="MonitoringMetricDescriptor" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/monitoring_metric_descriptor google_monitoring_metric_descriptor}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringMetricDescriptor(Construct Scope, string Id, MonitoringMetricDescriptorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig">MonitoringMetricDescriptorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig">MonitoringMetricDescriptorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.putLabels">PutLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetLaunchStage">ResetLaunchStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetUnit">ResetUnit</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLabels` <a name="PutLabels" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.putLabels"></a>

```csharp
private void PutLabels(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.putLabels.parameter.value"></a>

- *Type:* object

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.putMetadata"></a>

```csharp
private void PutMetadata(MonitoringMetricDescriptorMetadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata">MonitoringMetricDescriptorMetadata</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.putTimeouts"></a>

```csharp
private void PutTimeouts(MonitoringMetricDescriptorTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts">MonitoringMetricDescriptorTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetLaunchStage` <a name="ResetLaunchStage" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetLaunchStage"></a>

```csharp
private void ResetLaunchStage()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUnit` <a name="ResetUnit" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.resetUnit"></a>

```csharp
private void ResetUnit()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MonitoringMetricDescriptor resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

MonitoringMetricDescriptor.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

MonitoringMetricDescriptor.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

MonitoringMetricDescriptor.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

MonitoringMetricDescriptor.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MonitoringMetricDescriptor resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MonitoringMetricDescriptor to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MonitoringMetricDescriptor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/monitoring_metric_descriptor#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MonitoringMetricDescriptor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.labels">Labels</a></code> | <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList">MonitoringMetricDescriptorLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference">MonitoringMetricDescriptorMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.monitoredResourceTypes">MonitoredResourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference">MonitoringMetricDescriptorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.labelsInput">LabelsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.launchStageInput">LaunchStageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata">MonitoringMetricDescriptorMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.metricKindInput">MetricKindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.valueTypeInput">ValueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.launchStage">LaunchStage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.metricKind">MetricKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.valueType">ValueType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.labels"></a>

```csharp
public MonitoringMetricDescriptorLabelsList Labels { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList">MonitoringMetricDescriptorLabelsList</a>

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.metadata"></a>

```csharp
public MonitoringMetricDescriptorMetadataOutputReference Metadata { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference">MonitoringMetricDescriptorMetadataOutputReference</a>

---

##### `MonitoredResourceTypes`<sup>Required</sup> <a name="MonitoredResourceTypes" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.monitoredResourceTypes"></a>

```csharp
public string[] MonitoredResourceTypes { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.timeouts"></a>

```csharp
public MonitoringMetricDescriptorTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference">MonitoringMetricDescriptorTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.labelsInput"></a>

```csharp
public object LabelsInput { get; }
```

- *Type:* object

---

##### `LaunchStageInput`<sup>Optional</sup> <a name="LaunchStageInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.launchStageInput"></a>

```csharp
public string LaunchStageInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.metadataInput"></a>

```csharp
public MonitoringMetricDescriptorMetadata MetadataInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata">MonitoringMetricDescriptorMetadata</a>

---

##### `MetricKindInput`<sup>Optional</sup> <a name="MetricKindInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.metricKindInput"></a>

```csharp
public string MetricKindInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `ValueTypeInput`<sup>Optional</sup> <a name="ValueTypeInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.valueTypeInput"></a>

```csharp
public string ValueTypeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LaunchStage`<sup>Required</sup> <a name="LaunchStage" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.launchStage"></a>

```csharp
public string LaunchStage { get; }
```

- *Type:* string

---

##### `MetricKind`<sup>Required</sup> <a name="MetricKind" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.metricKind"></a>

```csharp
public string MetricKind { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.valueType"></a>

```csharp
public string ValueType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptor.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitoringMetricDescriptorConfig <a name="MonitoringMetricDescriptorConfig" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringMetricDescriptorConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Description,
    string DisplayName,
    string MetricKind,
    string Type,
    string ValueType,
    string Id = null,
    object Labels = null,
    string LaunchStage = null,
    MonitoringMetricDescriptorMetadata Metadata = null,
    string Project = null,
    MonitoringMetricDescriptorTimeouts Timeouts = null,
    string Unit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.description">Description</a></code> | <code>string</code> | A detailed description of the metric, which can be used in documentation. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.displayName">DisplayName</a></code> | <code>string</code> | A concise name for the metric, which can be displayed in user interfaces. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.metricKind">MetricKind</a></code> | <code>string</code> | Whether the metric records instantaneous values, changes to a value, etc. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.type">Type</a></code> | <code>string</code> | The metric type, including its DNS name prefix. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.valueType">ValueType</a></code> | <code>string</code> | Whether the measurement is an integer, a floating-point number, etc. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/monitoring_metric_descriptor#id MonitoringMetricDescriptor#id}. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.labels">Labels</a></code> | <code>object</code> | labels block. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.launchStage">LaunchStage</a></code> | <code>string</code> | The launch stage of the metric definition. Possible values: ["LAUNCH_STAGE_UNSPECIFIED", "UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"]. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.metadata">Metadata</a></code> | <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata">MonitoringMetricDescriptorMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/monitoring_metric_descriptor#project MonitoringMetricDescriptor#project}. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts">MonitoringMetricDescriptorTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.unit">Unit</a></code> | <code>string</code> | The units in which the metric value is reported. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A detailed description of the metric, which can be used in documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/monitoring_metric_descriptor#description MonitoringMetricDescriptor#description}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

A concise name for the metric, which can be displayed in user interfaces.

Use sentence case without an ending period, for example "Request count".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/monitoring_metric_descriptor#display_name MonitoringMetricDescriptor#display_name}

---

##### `MetricKind`<sup>Required</sup> <a name="MetricKind" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.metricKind"></a>

```csharp
public string MetricKind { get; set; }
```

- *Type:* string

Whether the metric records instantaneous values, changes to a value, etc.

Some combinations of metricKind and valueType might not be supported. Possible values: ["METRIC_KIND_UNSPECIFIED", "GAUGE", "DELTA", "CUMULATIVE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/monitoring_metric_descriptor#metric_kind MonitoringMetricDescriptor#metric_kind}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The metric type, including its DNS name prefix.

The type is not URL-encoded. All service defined metrics must be prefixed with the service name, in the format of {service name}/{relative metric name}, such as cloudsql.googleapis.com/database/cpu/utilization. The relative metric name must have only upper and lower-case letters, digits, '/' and underscores '_' are allowed. Additionally, the maximum number of characters allowed for the relative_metric_name is 100. All user-defined metric types have the DNS name custom.googleapis.com, external.googleapis.com, or logging.googleapis.com/user/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/monitoring_metric_descriptor#type MonitoringMetricDescriptor#type}

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.valueType"></a>

```csharp
public string ValueType { get; set; }
```

- *Type:* string

Whether the measurement is an integer, a floating-point number, etc.

Some combinations of metricKind and valueType might not be supported. Possible values: ["BOOL", "INT64", "DOUBLE", "STRING", "DISTRIBUTION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/monitoring_metric_descriptor#value_type MonitoringMetricDescriptor#value_type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/monitoring_metric_descriptor#id MonitoringMetricDescriptor#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.labels"></a>

```csharp
public object Labels { get; set; }
```

- *Type:* object

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/monitoring_metric_descriptor#labels MonitoringMetricDescriptor#labels}

---

##### `LaunchStage`<sup>Optional</sup> <a name="LaunchStage" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.launchStage"></a>

```csharp
public string LaunchStage { get; set; }
```

- *Type:* string

The launch stage of the metric definition. Possible values: ["LAUNCH_STAGE_UNSPECIFIED", "UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/monitoring_metric_descriptor#launch_stage MonitoringMetricDescriptor#launch_stage}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.metadata"></a>

```csharp
public MonitoringMetricDescriptorMetadata Metadata { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata">MonitoringMetricDescriptorMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/monitoring_metric_descriptor#metadata MonitoringMetricDescriptor#metadata}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/monitoring_metric_descriptor#project MonitoringMetricDescriptor#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.timeouts"></a>

```csharp
public MonitoringMetricDescriptorTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts">MonitoringMetricDescriptorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/monitoring_metric_descriptor#timeouts MonitoringMetricDescriptor#timeouts}

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorConfig.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

The units in which the metric value is reported.

It is only applicable if the
valueType is INT64, DOUBLE, or DISTRIBUTION. The unit defines the representation of
the stored metric values.

Different systems may scale the values to be more easily displayed (so a value of
0.02KBy might be displayed as 20By, and a value of 3523KBy might be displayed as
3.5MBy). However, if the unit is KBy, then the value of the metric is always in
thousands of bytes, no matter how it may be displayed.

If you want a custom metric to record the exact number of CPU-seconds used by a job,
you can create an INT64 CUMULATIVE metric whose unit is s{CPU} (or equivalently
1s{CPU} or just s). If the job uses 12,005 CPU-seconds, then the value is written as
12005.

Alternatively, if you want a custom metric to record data in a more granular way, you
can create a DOUBLE CUMULATIVE metric whose unit is ks{CPU}, and then write the value
12.005 (which is 12005/1000), or use Kis{CPU} and write 11.723 (which is 12005/1024).
The supported units are a subset of The Unified Code for Units of Measure standard.
More info can be found in the API documentation
(https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/monitoring_metric_descriptor#unit MonitoringMetricDescriptor#unit}

---

### MonitoringMetricDescriptorLabels <a name="MonitoringMetricDescriptorLabels" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringMetricDescriptorLabels {
    string Key,
    string Description = null,
    string ValueType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels.property.key">Key</a></code> | <code>string</code> | The key for this label. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels.property.description">Description</a></code> | <code>string</code> | A human-readable description for the label. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels.property.valueType">ValueType</a></code> | <code>string</code> | The type of data that can be assigned to the label. Default value: "STRING" Possible values: ["STRING", "BOOL", "INT64"]. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key for this label.

The key must not exceed 100 characters. The first character of the key must be an upper- or lower-case letter, the remaining characters must be letters, digits or underscores, and the key must match the regular expression [a-zA-Z][a-zA-Z0-9_]*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/monitoring_metric_descriptor#key MonitoringMetricDescriptor#key}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A human-readable description for the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/monitoring_metric_descriptor#description MonitoringMetricDescriptor#description}

---

##### `ValueType`<sup>Optional</sup> <a name="ValueType" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabels.property.valueType"></a>

```csharp
public string ValueType { get; set; }
```

- *Type:* string

The type of data that can be assigned to the label. Default value: "STRING" Possible values: ["STRING", "BOOL", "INT64"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/monitoring_metric_descriptor#value_type MonitoringMetricDescriptor#value_type}

---

### MonitoringMetricDescriptorMetadata <a name="MonitoringMetricDescriptorMetadata" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringMetricDescriptorMetadata {
    string IngestDelay = null,
    string SamplePeriod = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata.property.ingestDelay">IngestDelay</a></code> | <code>string</code> | The delay of data points caused by ingestion. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata.property.samplePeriod">SamplePeriod</a></code> | <code>string</code> | The sampling period of metric data points. |

---

##### `IngestDelay`<sup>Optional</sup> <a name="IngestDelay" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata.property.ingestDelay"></a>

```csharp
public string IngestDelay { get; set; }
```

- *Type:* string

The delay of data points caused by ingestion.

Data points older than this age are guaranteed to be ingested and available to be read, excluding data loss due to errors. In '[duration format](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf?&_ga=2.264881487.1507873253.1593446723-935052455.1591817775#google.protobuf.Duration)'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/monitoring_metric_descriptor#ingest_delay MonitoringMetricDescriptor#ingest_delay}

---

##### `SamplePeriod`<sup>Optional</sup> <a name="SamplePeriod" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata.property.samplePeriod"></a>

```csharp
public string SamplePeriod { get; set; }
```

- *Type:* string

The sampling period of metric data points.

For metrics which are written periodically, consecutive data points are stored at this time interval, excluding data loss due to errors. Metrics with a higher granularity have a smaller sampling period. In '[duration format](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf?&_ga=2.264881487.1507873253.1593446723-935052455.1591817775#google.protobuf.Duration)'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/monitoring_metric_descriptor#sample_period MonitoringMetricDescriptor#sample_period}

---

### MonitoringMetricDescriptorTimeouts <a name="MonitoringMetricDescriptorTimeouts" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringMetricDescriptorTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/monitoring_metric_descriptor#create MonitoringMetricDescriptor#create}. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/monitoring_metric_descriptor#delete MonitoringMetricDescriptor#delete}. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/monitoring_metric_descriptor#update MonitoringMetricDescriptor#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/monitoring_metric_descriptor#create MonitoringMetricDescriptor#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/monitoring_metric_descriptor#delete MonitoringMetricDescriptor#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/monitoring_metric_descriptor#update MonitoringMetricDescriptor#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitoringMetricDescriptorLabelsList <a name="MonitoringMetricDescriptorLabelsList" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringMetricDescriptorLabelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.get"></a>

```csharp
private MonitoringMetricDescriptorLabelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitoringMetricDescriptorLabelsOutputReference <a name="MonitoringMetricDescriptorLabelsOutputReference" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringMetricDescriptorLabelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.resetValueType">ResetValueType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetValueType` <a name="ResetValueType" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.resetValueType"></a>

```csharp
private void ResetValueType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.valueTypeInput">ValueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.valueType">ValueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueTypeInput`<sup>Optional</sup> <a name="ValueTypeInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.valueTypeInput"></a>

```csharp
public string ValueTypeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.valueType"></a>

```csharp
public string ValueType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorLabelsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MonitoringMetricDescriptorMetadataOutputReference <a name="MonitoringMetricDescriptorMetadataOutputReference" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringMetricDescriptorMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.resetIngestDelay">ResetIngestDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.resetSamplePeriod">ResetSamplePeriod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIngestDelay` <a name="ResetIngestDelay" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.resetIngestDelay"></a>

```csharp
private void ResetIngestDelay()
```

##### `ResetSamplePeriod` <a name="ResetSamplePeriod" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.resetSamplePeriod"></a>

```csharp
private void ResetSamplePeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.ingestDelayInput">IngestDelayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.samplePeriodInput">SamplePeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.ingestDelay">IngestDelay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.samplePeriod">SamplePeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata">MonitoringMetricDescriptorMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IngestDelayInput`<sup>Optional</sup> <a name="IngestDelayInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.ingestDelayInput"></a>

```csharp
public string IngestDelayInput { get; }
```

- *Type:* string

---

##### `SamplePeriodInput`<sup>Optional</sup> <a name="SamplePeriodInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.samplePeriodInput"></a>

```csharp
public string SamplePeriodInput { get; }
```

- *Type:* string

---

##### `IngestDelay`<sup>Required</sup> <a name="IngestDelay" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.ingestDelay"></a>

```csharp
public string IngestDelay { get; }
```

- *Type:* string

---

##### `SamplePeriod`<sup>Required</sup> <a name="SamplePeriod" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.samplePeriod"></a>

```csharp
public string SamplePeriod { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadataOutputReference.property.internalValue"></a>

```csharp
public MonitoringMetricDescriptorMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorMetadata">MonitoringMetricDescriptorMetadata</a>

---


### MonitoringMetricDescriptorTimeoutsOutputReference <a name="MonitoringMetricDescriptorTimeoutsOutputReference" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringMetricDescriptorTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringMetricDescriptor.MonitoringMetricDescriptorTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



