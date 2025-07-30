# `computeNodeGroup` Submodule <a name="`computeNodeGroup` Submodule" id="@cdktf/provider-google.computeNodeGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeNodeGroup <a name="ComputeNodeGroup" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_node_group google_compute_node_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNodeGroup(Construct Scope, string Id, ComputeNodeGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig">ComputeNodeGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig">ComputeNodeGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putAutoscalingPolicy">PutAutoscalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putMaintenanceWindow">PutMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putShareSettings">PutShareSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetAutoscalingPolicy">ResetAutoscalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetInitialSize">ResetInitialSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetMaintenancePolicy">ResetMaintenancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetMaintenanceWindow">ResetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetShareSettings">ResetShareSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutoscalingPolicy` <a name="PutAutoscalingPolicy" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putAutoscalingPolicy"></a>

```csharp
private void PutAutoscalingPolicy(ComputeNodeGroupAutoscalingPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putAutoscalingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy">ComputeNodeGroupAutoscalingPolicy</a>

---

##### `PutMaintenanceWindow` <a name="PutMaintenanceWindow" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putMaintenanceWindow"></a>

```csharp
private void PutMaintenanceWindow(ComputeNodeGroupMaintenanceWindow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindow">ComputeNodeGroupMaintenanceWindow</a>

---

##### `PutShareSettings` <a name="PutShareSettings" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putShareSettings"></a>

```csharp
private void PutShareSettings(ComputeNodeGroupShareSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putShareSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings">ComputeNodeGroupShareSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeNodeGroupTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts">ComputeNodeGroupTimeouts</a>

---

##### `ResetAutoscalingPolicy` <a name="ResetAutoscalingPolicy" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetAutoscalingPolicy"></a>

```csharp
private void ResetAutoscalingPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInitialSize` <a name="ResetInitialSize" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetInitialSize"></a>

```csharp
private void ResetInitialSize()
```

##### `ResetMaintenancePolicy` <a name="ResetMaintenancePolicy" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetMaintenancePolicy"></a>

```csharp
private void ResetMaintenancePolicy()
```

##### `ResetMaintenanceWindow` <a name="ResetMaintenanceWindow" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetMaintenanceWindow"></a>

```csharp
private void ResetMaintenanceWindow()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetShareSettings` <a name="ResetShareSettings" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetShareSettings"></a>

```csharp
private void ResetShareSettings()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.resetZone"></a>

```csharp
private void ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeNodeGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeNodeGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeNodeGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeNodeGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeNodeGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ComputeNodeGroup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeNodeGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeNodeGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_node_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ComputeNodeGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.autoscalingPolicy">AutoscalingPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference">ComputeNodeGroupAutoscalingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference">ComputeNodeGroupMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.shareSettings">ShareSettings</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference">ComputeNodeGroupShareSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference">ComputeNodeGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.autoscalingPolicyInput">AutoscalingPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy">ComputeNodeGroupAutoscalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.initialSizeInput">InitialSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.maintenancePolicyInput">MaintenancePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.maintenanceWindowInput">MaintenanceWindowInput</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindow">ComputeNodeGroupMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.nodeTemplateInput">NodeTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.shareSettingsInput">ShareSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings">ComputeNodeGroupShareSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.initialSize">InitialSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.maintenancePolicy">MaintenancePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.nodeTemplate">NodeTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AutoscalingPolicy`<sup>Required</sup> <a name="AutoscalingPolicy" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.autoscalingPolicy"></a>

```csharp
public ComputeNodeGroupAutoscalingPolicyOutputReference AutoscalingPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference">ComputeNodeGroupAutoscalingPolicyOutputReference</a>

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `MaintenanceWindow`<sup>Required</sup> <a name="MaintenanceWindow" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.maintenanceWindow"></a>

```csharp
public ComputeNodeGroupMaintenanceWindowOutputReference MaintenanceWindow { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference">ComputeNodeGroupMaintenanceWindowOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `ShareSettings`<sup>Required</sup> <a name="ShareSettings" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.shareSettings"></a>

```csharp
public ComputeNodeGroupShareSettingsOutputReference ShareSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference">ComputeNodeGroupShareSettingsOutputReference</a>

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.timeouts"></a>

```csharp
public ComputeNodeGroupTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference">ComputeNodeGroupTimeoutsOutputReference</a>

---

##### `AutoscalingPolicyInput`<sup>Optional</sup> <a name="AutoscalingPolicyInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.autoscalingPolicyInput"></a>

```csharp
public ComputeNodeGroupAutoscalingPolicy AutoscalingPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy">ComputeNodeGroupAutoscalingPolicy</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InitialSizeInput`<sup>Optional</sup> <a name="InitialSizeInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.initialSizeInput"></a>

```csharp
public double InitialSizeInput { get; }
```

- *Type:* double

---

##### `MaintenancePolicyInput`<sup>Optional</sup> <a name="MaintenancePolicyInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.maintenancePolicyInput"></a>

```csharp
public string MaintenancePolicyInput { get; }
```

- *Type:* string

---

##### `MaintenanceWindowInput`<sup>Optional</sup> <a name="MaintenanceWindowInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.maintenanceWindowInput"></a>

```csharp
public ComputeNodeGroupMaintenanceWindow MaintenanceWindowInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindow">ComputeNodeGroupMaintenanceWindow</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NodeTemplateInput`<sup>Optional</sup> <a name="NodeTemplateInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.nodeTemplateInput"></a>

```csharp
public string NodeTemplateInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ShareSettingsInput`<sup>Optional</sup> <a name="ShareSettingsInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.shareSettingsInput"></a>

```csharp
public ComputeNodeGroupShareSettings ShareSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings">ComputeNodeGroupShareSettings</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InitialSize`<sup>Required</sup> <a name="InitialSize" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.initialSize"></a>

```csharp
public double InitialSize { get; }
```

- *Type:* double

---

##### `MaintenancePolicy`<sup>Required</sup> <a name="MaintenancePolicy" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.maintenancePolicy"></a>

```csharp
public string MaintenancePolicy { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NodeTemplate`<sup>Required</sup> <a name="NodeTemplate" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.nodeTemplate"></a>

```csharp
public string NodeTemplate { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeNodeGroupAutoscalingPolicy <a name="ComputeNodeGroupAutoscalingPolicy" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNodeGroupAutoscalingPolicy {
    double MaxNodes = null,
    double MinNodes = null,
    string Mode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy.property.maxNodes">MaxNodes</a></code> | <code>double</code> | Maximum size of the node group. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy.property.minNodes">MinNodes</a></code> | <code>double</code> | Minimum size of the node group. Must be less than or equal to max-nodes. The default value is 0. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy.property.mode">Mode</a></code> | <code>string</code> | The autoscaling mode. |

---

##### `MaxNodes`<sup>Optional</sup> <a name="MaxNodes" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy.property.maxNodes"></a>

```csharp
public double MaxNodes { get; set; }
```

- *Type:* double

Maximum size of the node group.

Set to a value less than or equal
to 100 and greater than or equal to min-nodes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_node_group#max_nodes ComputeNodeGroup#max_nodes}

---

##### `MinNodes`<sup>Optional</sup> <a name="MinNodes" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy.property.minNodes"></a>

```csharp
public double MinNodes { get; set; }
```

- *Type:* double

Minimum size of the node group. Must be less than or equal to max-nodes. The default value is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_node_group#min_nodes ComputeNodeGroup#min_nodes}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

The autoscaling mode.

Set to one of the following:

* OFF: Disables the autoscaler.
* ON: Enables scaling in and scaling out.
* ONLY_SCALE_OUT: Enables only scaling out.
  You must use this mode if your node groups are configured to
  restart their hosted VMs on minimal servers. Possible values: ["OFF", "ON", "ONLY_SCALE_OUT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_node_group#mode ComputeNodeGroup#mode}

---

### ComputeNodeGroupConfig <a name="ComputeNodeGroupConfig" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNodeGroupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string NodeTemplate,
    ComputeNodeGroupAutoscalingPolicy AutoscalingPolicy = null,
    string Description = null,
    string Id = null,
    double InitialSize = null,
    string MaintenancePolicy = null,
    ComputeNodeGroupMaintenanceWindow MaintenanceWindow = null,
    string Project = null,
    ComputeNodeGroupShareSettings ShareSettings = null,
    ComputeNodeGroupTimeouts Timeouts = null,
    string Zone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.nodeTemplate">NodeTemplate</a></code> | <code>string</code> | The URL of the node template to which this node group belongs. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.autoscalingPolicy">AutoscalingPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy">ComputeNodeGroupAutoscalingPolicy</a></code> | autoscaling_policy block. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.description">Description</a></code> | <code>string</code> | An optional textual description of the resource. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_node_group#id ComputeNodeGroup#id}. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.initialSize">InitialSize</a></code> | <code>double</code> | The initial number of nodes in the node group. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.maintenancePolicy">MaintenancePolicy</a></code> | <code>string</code> | Specifies how to handle instances when a node in the group undergoes maintenance. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.maintenanceWindow">MaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindow">ComputeNodeGroupMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_node_group#project ComputeNodeGroup#project}. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.shareSettings">ShareSettings</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings">ComputeNodeGroupShareSettings</a></code> | share_settings block. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts">ComputeNodeGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.zone">Zone</a></code> | <code>string</code> | Zone where this node group is located. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_node_group#name ComputeNodeGroup#name}

---

##### `NodeTemplate`<sup>Required</sup> <a name="NodeTemplate" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.nodeTemplate"></a>

```csharp
public string NodeTemplate { get; set; }
```

- *Type:* string

The URL of the node template to which this node group belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_node_group#node_template ComputeNodeGroup#node_template}

---

##### `AutoscalingPolicy`<sup>Optional</sup> <a name="AutoscalingPolicy" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.autoscalingPolicy"></a>

```csharp
public ComputeNodeGroupAutoscalingPolicy AutoscalingPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy">ComputeNodeGroupAutoscalingPolicy</a>

autoscaling_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_node_group#autoscaling_policy ComputeNodeGroup#autoscaling_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional textual description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_node_group#description ComputeNodeGroup#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_node_group#id ComputeNodeGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InitialSize`<sup>Optional</sup> <a name="InitialSize" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.initialSize"></a>

```csharp
public double InitialSize { get; set; }
```

- *Type:* double

The initial number of nodes in the node group.

One of 'initial_size' or 'autoscaling_policy' must be configured on resource creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_node_group#initial_size ComputeNodeGroup#initial_size}

---

##### `MaintenancePolicy`<sup>Optional</sup> <a name="MaintenancePolicy" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.maintenancePolicy"></a>

```csharp
public string MaintenancePolicy { get; set; }
```

- *Type:* string

Specifies how to handle instances when a node in the group undergoes maintenance.

Set to one of: DEFAULT, RESTART_IN_PLACE, or MIGRATE_WITHIN_NODE_GROUP. The default value is DEFAULT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_node_group#maintenance_policy ComputeNodeGroup#maintenance_policy}

---

##### `MaintenanceWindow`<sup>Optional</sup> <a name="MaintenanceWindow" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.maintenanceWindow"></a>

```csharp
public ComputeNodeGroupMaintenanceWindow MaintenanceWindow { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindow">ComputeNodeGroupMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_node_group#maintenance_window ComputeNodeGroup#maintenance_window}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_node_group#project ComputeNodeGroup#project}.

---

##### `ShareSettings`<sup>Optional</sup> <a name="ShareSettings" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.shareSettings"></a>

```csharp
public ComputeNodeGroupShareSettings ShareSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings">ComputeNodeGroupShareSettings</a>

share_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_node_group#share_settings ComputeNodeGroup#share_settings}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.timeouts"></a>

```csharp
public ComputeNodeGroupTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts">ComputeNodeGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_node_group#timeouts ComputeNodeGroup#timeouts}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

Zone where this node group is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_node_group#zone ComputeNodeGroup#zone}

---

### ComputeNodeGroupMaintenanceWindow <a name="ComputeNodeGroupMaintenanceWindow" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNodeGroupMaintenanceWindow {
    string StartTime
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindow.property.startTime">StartTime</a></code> | <code>string</code> | instances.start time of the window. This must be in UTC format that resolves to one of 00:00, 04:00, 08:00, 12:00, 16:00, or 20:00. For example, both 13:00-5 and 08:00 are valid. |

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindow.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

instances.start time of the window. This must be in UTC format that resolves to one of 00:00, 04:00, 08:00, 12:00, 16:00, or 20:00. For example, both 13:00-5 and 08:00 are valid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_node_group#start_time ComputeNodeGroup#start_time}

---

### ComputeNodeGroupShareSettings <a name="ComputeNodeGroupShareSettings" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNodeGroupShareSettings {
    string ShareType,
    object ProjectMap = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings.property.shareType">ShareType</a></code> | <code>string</code> | Node group sharing type. Possible values: ["ORGANIZATION", "SPECIFIC_PROJECTS", "LOCAL"]. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings.property.projectMap">ProjectMap</a></code> | <code>object</code> | project_map block. |

---

##### `ShareType`<sup>Required</sup> <a name="ShareType" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings.property.shareType"></a>

```csharp
public string ShareType { get; set; }
```

- *Type:* string

Node group sharing type. Possible values: ["ORGANIZATION", "SPECIFIC_PROJECTS", "LOCAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_node_group#share_type ComputeNodeGroup#share_type}

---

##### `ProjectMap`<sup>Optional</sup> <a name="ProjectMap" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings.property.projectMap"></a>

```csharp
public object ProjectMap { get; set; }
```

- *Type:* object

project_map block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_node_group#project_map ComputeNodeGroup#project_map}

---

### ComputeNodeGroupShareSettingsProjectMap <a name="ComputeNodeGroupShareSettingsProjectMap" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMap.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNodeGroupShareSettingsProjectMap {
    string Id,
    string ProjectId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMap.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_node_group#id ComputeNodeGroup#id}. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMap.property.projectId">ProjectId</a></code> | <code>string</code> | The project id/number should be the same as the key of this project config in the project map. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMap.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_node_group#id ComputeNodeGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMap.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

The project id/number should be the same as the key of this project config in the project map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_node_group#project_id ComputeNodeGroup#project_id}

---

### ComputeNodeGroupTimeouts <a name="ComputeNodeGroupTimeouts" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNodeGroupTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_node_group#create ComputeNodeGroup#create}. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_node_group#delete ComputeNodeGroup#delete}. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_node_group#update ComputeNodeGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_node_group#create ComputeNodeGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_node_group#delete ComputeNodeGroup#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_node_group#update ComputeNodeGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeNodeGroupAutoscalingPolicyOutputReference <a name="ComputeNodeGroupAutoscalingPolicyOutputReference" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNodeGroupAutoscalingPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.resetMaxNodes">ResetMaxNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.resetMinNodes">ResetMinNodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxNodes` <a name="ResetMaxNodes" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.resetMaxNodes"></a>

```csharp
private void ResetMaxNodes()
```

##### `ResetMinNodes` <a name="ResetMinNodes" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.resetMinNodes"></a>

```csharp
private void ResetMinNodes()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.maxNodesInput">MaxNodesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.minNodesInput">MinNodesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.maxNodes">MaxNodes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.minNodes">MinNodes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy">ComputeNodeGroupAutoscalingPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxNodesInput`<sup>Optional</sup> <a name="MaxNodesInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.maxNodesInput"></a>

```csharp
public double MaxNodesInput { get; }
```

- *Type:* double

---

##### `MinNodesInput`<sup>Optional</sup> <a name="MinNodesInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.minNodesInput"></a>

```csharp
public double MinNodesInput { get; }
```

- *Type:* double

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `MaxNodes`<sup>Required</sup> <a name="MaxNodes" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.maxNodes"></a>

```csharp
public double MaxNodes { get; }
```

- *Type:* double

---

##### `MinNodes`<sup>Required</sup> <a name="MinNodes" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.minNodes"></a>

```csharp
public double MinNodes { get; }
```

- *Type:* double

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicyOutputReference.property.internalValue"></a>

```csharp
public ComputeNodeGroupAutoscalingPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupAutoscalingPolicy">ComputeNodeGroupAutoscalingPolicy</a>

---


### ComputeNodeGroupMaintenanceWindowOutputReference <a name="ComputeNodeGroupMaintenanceWindowOutputReference" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNodeGroupMaintenanceWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindow">ComputeNodeGroupMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindowOutputReference.property.internalValue"></a>

```csharp
public ComputeNodeGroupMaintenanceWindow InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupMaintenanceWindow">ComputeNodeGroupMaintenanceWindow</a>

---


### ComputeNodeGroupShareSettingsOutputReference <a name="ComputeNodeGroupShareSettingsOutputReference" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNodeGroupShareSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.putProjectMap">PutProjectMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.resetProjectMap">ResetProjectMap</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProjectMap` <a name="PutProjectMap" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.putProjectMap"></a>

```csharp
private void PutProjectMap(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.putProjectMap.parameter.value"></a>

- *Type:* object

---

##### `ResetProjectMap` <a name="ResetProjectMap" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.resetProjectMap"></a>

```csharp
private void ResetProjectMap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.projectMap">ProjectMap</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList">ComputeNodeGroupShareSettingsProjectMapList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.projectMapInput">ProjectMapInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.shareTypeInput">ShareTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.shareType">ShareType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings">ComputeNodeGroupShareSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProjectMap`<sup>Required</sup> <a name="ProjectMap" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.projectMap"></a>

```csharp
public ComputeNodeGroupShareSettingsProjectMapList ProjectMap { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList">ComputeNodeGroupShareSettingsProjectMapList</a>

---

##### `ProjectMapInput`<sup>Optional</sup> <a name="ProjectMapInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.projectMapInput"></a>

```csharp
public object ProjectMapInput { get; }
```

- *Type:* object

---

##### `ShareTypeInput`<sup>Optional</sup> <a name="ShareTypeInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.shareTypeInput"></a>

```csharp
public string ShareTypeInput { get; }
```

- *Type:* string

---

##### `ShareType`<sup>Required</sup> <a name="ShareType" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.shareType"></a>

```csharp
public string ShareType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsOutputReference.property.internalValue"></a>

```csharp
public ComputeNodeGroupShareSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettings">ComputeNodeGroupShareSettings</a>

---


### ComputeNodeGroupShareSettingsProjectMapList <a name="ComputeNodeGroupShareSettingsProjectMapList" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNodeGroupShareSettingsProjectMapList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.get"></a>

```csharp
private ComputeNodeGroupShareSettingsProjectMapOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeNodeGroupShareSettingsProjectMapOutputReference <a name="ComputeNodeGroupShareSettingsProjectMapOutputReference" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNodeGroupShareSettingsProjectMapOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupShareSettingsProjectMapOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeNodeGroupTimeoutsOutputReference <a name="ComputeNodeGroupTimeoutsOutputReference" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNodeGroupTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNodeGroup.ComputeNodeGroupTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



