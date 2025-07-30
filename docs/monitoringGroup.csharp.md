# `monitoringGroup` Submodule <a name="`monitoringGroup` Submodule" id="@cdktf/provider-google.monitoringGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitoringGroup <a name="MonitoringGroup" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/monitoring_group google_monitoring_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringGroup(Construct Scope, string Id, MonitoringGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupConfig">MonitoringGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupConfig">MonitoringGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.resetIsCluster">ResetIsCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.resetParentName">ResetParentName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.putTimeouts"></a>

```csharp
private void PutTimeouts(MonitoringGroupTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeouts">MonitoringGroupTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsCluster` <a name="ResetIsCluster" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.resetIsCluster"></a>

```csharp
private void ResetIsCluster()
```

##### `ResetParentName` <a name="ResetParentName" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.resetParentName"></a>

```csharp
private void ResetParentName()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MonitoringGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

MonitoringGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

MonitoringGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

MonitoringGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

MonitoringGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MonitoringGroup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MonitoringGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MonitoringGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/monitoring_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MonitoringGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference">MonitoringGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.isClusterInput">IsClusterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.parentNameInput">ParentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.isCluster">IsCluster</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.parentName">ParentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.timeouts"></a>

```csharp
public MonitoringGroupTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference">MonitoringGroupTimeoutsOutputReference</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsClusterInput`<sup>Optional</sup> <a name="IsClusterInput" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.isClusterInput"></a>

```csharp
public object IsClusterInput { get; }
```

- *Type:* object

---

##### `ParentNameInput`<sup>Optional</sup> <a name="ParentNameInput" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.parentNameInput"></a>

```csharp
public string ParentNameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsCluster`<sup>Required</sup> <a name="IsCluster" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.isCluster"></a>

```csharp
public object IsCluster { get; }
```

- *Type:* object

---

##### `ParentName`<sup>Required</sup> <a name="ParentName" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.parentName"></a>

```csharp
public string ParentName { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.monitoringGroup.MonitoringGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitoringGroupConfig <a name="MonitoringGroupConfig" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringGroupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName,
    string Filter,
    string Id = null,
    object IsCluster = null,
    string ParentName = null,
    string Project = null,
    MonitoringGroupTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupConfig.property.displayName">DisplayName</a></code> | <code>string</code> | A user-assigned name for this group, used only for display purposes. |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupConfig.property.filter">Filter</a></code> | <code>string</code> | The filter used to determine which monitored resources belong to this group. |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/monitoring_group#id MonitoringGroup#id}. |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupConfig.property.isCluster">IsCluster</a></code> | <code>object</code> | If true, the members of this group are considered to be a cluster. |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupConfig.property.parentName">ParentName</a></code> | <code>string</code> | The name of the group's parent, if it has one. |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/monitoring_group#project MonitoringGroup#project}. |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeouts">MonitoringGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

A user-assigned name for this group, used only for display purposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/monitoring_group#display_name MonitoringGroup#display_name}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupConfig.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

The filter used to determine which monitored resources belong to this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/monitoring_group#filter MonitoringGroup#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/monitoring_group#id MonitoringGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsCluster`<sup>Optional</sup> <a name="IsCluster" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupConfig.property.isCluster"></a>

```csharp
public object IsCluster { get; set; }
```

- *Type:* object

If true, the members of this group are considered to be a cluster.

The system can perform additional analysis on
groups that are clusters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/monitoring_group#is_cluster MonitoringGroup#is_cluster}

---

##### `ParentName`<sup>Optional</sup> <a name="ParentName" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupConfig.property.parentName"></a>

```csharp
public string ParentName { get; set; }
```

- *Type:* string

The name of the group's parent, if it has one.

The format is
"projects/{project_id_or_number}/groups/{group_id}". For
groups with no parent, parentName is the empty string, "".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/monitoring_group#parent_name MonitoringGroup#parent_name}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/monitoring_group#project MonitoringGroup#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupConfig.property.timeouts"></a>

```csharp
public MonitoringGroupTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeouts">MonitoringGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/monitoring_group#timeouts MonitoringGroup#timeouts}

---

### MonitoringGroupTimeouts <a name="MonitoringGroupTimeouts" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringGroupTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/monitoring_group#create MonitoringGroup#create}. |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/monitoring_group#delete MonitoringGroup#delete}. |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/monitoring_group#update MonitoringGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/monitoring_group#create MonitoringGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/monitoring_group#delete MonitoringGroup#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/monitoring_group#update MonitoringGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitoringGroupTimeoutsOutputReference <a name="MonitoringGroupTimeoutsOutputReference" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new MonitoringGroupTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.monitoringGroup.MonitoringGroupTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



