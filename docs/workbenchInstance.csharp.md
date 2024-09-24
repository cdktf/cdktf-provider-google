# `workbenchInstance` Submodule <a name="`workbenchInstance` Submodule" id="@cdktf/provider-google.workbenchInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkbenchInstance <a name="WorkbenchInstance" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance google_workbench_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new WorkbenchInstance(Construct Scope, string Id, WorkbenchInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig">WorkbenchInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig">WorkbenchInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.putGceSetup">PutGceSetup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetDesiredState">ResetDesiredState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetDisableProxyAccess">ResetDisableProxyAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetGceSetup">ResetGceSetup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetInstanceId">ResetInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetInstanceOwners">ResetInstanceOwners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGceSetup` <a name="PutGceSetup" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.putGceSetup"></a>

```csharp
private void PutGceSetup(WorkbenchInstanceGceSetup Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.putGceSetup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup">WorkbenchInstanceGceSetup</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.putTimeouts"></a>

```csharp
private void PutTimeouts(WorkbenchInstanceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeouts">WorkbenchInstanceTimeouts</a>

---

##### `ResetDesiredState` <a name="ResetDesiredState" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetDesiredState"></a>

```csharp
private void ResetDesiredState()
```

##### `ResetDisableProxyAccess` <a name="ResetDisableProxyAccess" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetDisableProxyAccess"></a>

```csharp
private void ResetDisableProxyAccess()
```

##### `ResetGceSetup` <a name="ResetGceSetup" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetGceSetup"></a>

```csharp
private void ResetGceSetup()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstanceId` <a name="ResetInstanceId" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetInstanceId"></a>

```csharp
private void ResetInstanceId()
```

##### `ResetInstanceOwners` <a name="ResetInstanceOwners" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetInstanceOwners"></a>

```csharp
private void ResetInstanceOwners()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WorkbenchInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

WorkbenchInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

WorkbenchInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

WorkbenchInstance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

WorkbenchInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a WorkbenchInstance resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkbenchInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkbenchInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the WorkbenchInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.creator">Creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.gceSetup">GceSetup</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference">WorkbenchInstanceGceSetupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.healthInfo">HealthInfo</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList">WorkbenchInstanceHealthInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.healthState">HealthState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.proxyUri">ProxyUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference">WorkbenchInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.upgradeHistory">UpgradeHistory</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList">WorkbenchInstanceUpgradeHistoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.desiredStateInput">DesiredStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.disableProxyAccessInput">DisableProxyAccessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.gceSetupInput">GceSetupInput</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup">WorkbenchInstanceGceSetup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.instanceOwnersInput">InstanceOwnersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.desiredState">DesiredState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.disableProxyAccess">DisableProxyAccess</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.instanceOwners">InstanceOwners</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.creator"></a>

```csharp
public string Creator { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `GceSetup`<sup>Required</sup> <a name="GceSetup" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.gceSetup"></a>

```csharp
public WorkbenchInstanceGceSetupOutputReference GceSetup { get; }
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference">WorkbenchInstanceGceSetupOutputReference</a>

---

##### `HealthInfo`<sup>Required</sup> <a name="HealthInfo" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.healthInfo"></a>

```csharp
public WorkbenchInstanceHealthInfoList HealthInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList">WorkbenchInstanceHealthInfoList</a>

---

##### `HealthState`<sup>Required</sup> <a name="HealthState" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.healthState"></a>

```csharp
public string HealthState { get; }
```

- *Type:* string

---

##### `ProxyUri`<sup>Required</sup> <a name="ProxyUri" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.proxyUri"></a>

```csharp
public string ProxyUri { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.timeouts"></a>

```csharp
public WorkbenchInstanceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference">WorkbenchInstanceTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `UpgradeHistory`<sup>Required</sup> <a name="UpgradeHistory" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.upgradeHistory"></a>

```csharp
public WorkbenchInstanceUpgradeHistoryList UpgradeHistory { get; }
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList">WorkbenchInstanceUpgradeHistoryList</a>

---

##### `DesiredStateInput`<sup>Optional</sup> <a name="DesiredStateInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.desiredStateInput"></a>

```csharp
public string DesiredStateInput { get; }
```

- *Type:* string

---

##### `DisableProxyAccessInput`<sup>Optional</sup> <a name="DisableProxyAccessInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.disableProxyAccessInput"></a>

```csharp
public object DisableProxyAccessInput { get; }
```

- *Type:* object

---

##### `GceSetupInput`<sup>Optional</sup> <a name="GceSetupInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.gceSetupInput"></a>

```csharp
public WorkbenchInstanceGceSetup GceSetupInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup">WorkbenchInstanceGceSetup</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `InstanceOwnersInput`<sup>Optional</sup> <a name="InstanceOwnersInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.instanceOwnersInput"></a>

```csharp
public string[] InstanceOwnersInput { get; }
```

- *Type:* string[]

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DesiredState`<sup>Required</sup> <a name="DesiredState" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.desiredState"></a>

```csharp
public string DesiredState { get; }
```

- *Type:* string

---

##### `DisableProxyAccess`<sup>Required</sup> <a name="DisableProxyAccess" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.disableProxyAccess"></a>

```csharp
public object DisableProxyAccess { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `InstanceOwners`<sup>Required</sup> <a name="InstanceOwners" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.instanceOwners"></a>

```csharp
public string[] InstanceOwners { get; }
```

- *Type:* string[]

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkbenchInstanceConfig <a name="WorkbenchInstanceConfig" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new WorkbenchInstanceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    string DesiredState = null,
    object DisableProxyAccess = null,
    WorkbenchInstanceGceSetup GceSetup = null,
    string Id = null,
    string InstanceId = null,
    string[] InstanceOwners = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    WorkbenchInstanceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.location">Location</a></code> | <code>string</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.name">Name</a></code> | <code>string</code> | The name of this workbench instance. Format: 'projects/{project_id}/locations/{location}/instances/{instance_id}'. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.desiredState">DesiredState</a></code> | <code>string</code> | Desired state of the Workbench Instance. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.disableProxyAccess">DisableProxyAccess</a></code> | <code>object</code> | Optional. If true, the workbench instance will not register with the proxy. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.gceSetup">GceSetup</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup">WorkbenchInstanceGceSetup</a></code> | gce_setup block. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#id WorkbenchInstance#id}. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.instanceId">InstanceId</a></code> | <code>string</code> | Required. User-defined unique ID of this instance. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.instanceOwners">InstanceOwners</a></code> | <code>string[]</code> | 'Optional. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. Labels to apply to this instance. These can be later modified by the UpdateInstance method. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#project WorkbenchInstance#project}. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeouts">WorkbenchInstanceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#location WorkbenchInstance#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of this workbench instance. Format: 'projects/{project_id}/locations/{location}/instances/{instance_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#name WorkbenchInstance#name}

---

##### `DesiredState`<sup>Optional</sup> <a name="DesiredState" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.desiredState"></a>

```csharp
public string DesiredState { get; set; }
```

- *Type:* string

Desired state of the Workbench Instance.

Set this field to 'ACTIVE' to start the Instance, and 'STOPPED' to stop the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#desired_state WorkbenchInstance#desired_state}

---

##### `DisableProxyAccess`<sup>Optional</sup> <a name="DisableProxyAccess" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.disableProxyAccess"></a>

```csharp
public object DisableProxyAccess { get; set; }
```

- *Type:* object

Optional. If true, the workbench instance will not register with the proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#disable_proxy_access WorkbenchInstance#disable_proxy_access}

---

##### `GceSetup`<sup>Optional</sup> <a name="GceSetup" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.gceSetup"></a>

```csharp
public WorkbenchInstanceGceSetup GceSetup { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup">WorkbenchInstanceGceSetup</a>

gce_setup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#gce_setup WorkbenchInstance#gce_setup}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#id WorkbenchInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceId`<sup>Optional</sup> <a name="InstanceId" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

Required. User-defined unique ID of this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#instance_id WorkbenchInstance#instance_id}

---

##### `InstanceOwners`<sup>Optional</sup> <a name="InstanceOwners" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.instanceOwners"></a>

```csharp
public string[] InstanceOwners { get; set; }
```

- *Type:* string[]

'Optional.

Input only. The owner of this instance after creation. Format:
'alias@example.com' Currently supports one owner only. If not specified, all of
the service account users of your VM instance''s service account can use the instance.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#instance_owners WorkbenchInstance#instance_owners}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional. Labels to apply to this instance. These can be later modified by the UpdateInstance method.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#labels WorkbenchInstance#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#project WorkbenchInstance#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceConfig.property.timeouts"></a>

```csharp
public WorkbenchInstanceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeouts">WorkbenchInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#timeouts WorkbenchInstance#timeouts}

---

### WorkbenchInstanceGceSetup <a name="WorkbenchInstanceGceSetup" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new WorkbenchInstanceGceSetup {
    object AcceleratorConfigs = null,
    WorkbenchInstanceGceSetupBootDisk BootDisk = null,
    WorkbenchInstanceGceSetupContainerImage ContainerImage = null,
    WorkbenchInstanceGceSetupDataDisks DataDisks = null,
    object DisablePublicIp = null,
    object EnableIpForwarding = null,
    string MachineType = null,
    System.Collections.Generic.IDictionary<string, string> Metadata = null,
    object NetworkInterfaces = null,
    object ServiceAccounts = null,
    WorkbenchInstanceGceSetupShieldedInstanceConfig ShieldedInstanceConfig = null,
    string[] Tags = null,
    WorkbenchInstanceGceSetupVmImage VmImage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.acceleratorConfigs">AcceleratorConfigs</a></code> | <code>object</code> | accelerator_configs block. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.bootDisk">BootDisk</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk">WorkbenchInstanceGceSetupBootDisk</a></code> | boot_disk block. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.containerImage">ContainerImage</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImage">WorkbenchInstanceGceSetupContainerImage</a></code> | container_image block. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.dataDisks">DataDisks</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks">WorkbenchInstanceGceSetupDataDisks</a></code> | data_disks block. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.disablePublicIp">DisablePublicIp</a></code> | <code>object</code> | Optional. If true, no external IP will be assigned to this VM instance. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.enableIpForwarding">EnableIpForwarding</a></code> | <code>object</code> | Optional. Flag to enable ip forwarding or not, default false/off. https://cloud.google.com/vpc/docs/using-routes#canipforward. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.machineType">MachineType</a></code> | <code>string</code> | Optional. The machine type of the VM instance. https://cloud.google.com/compute/docs/machine-resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. Custom metadata to apply to this instance. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.networkInterfaces">NetworkInterfaces</a></code> | <code>object</code> | network_interfaces block. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.serviceAccounts">ServiceAccounts</a></code> | <code>object</code> | service_accounts block. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.shieldedInstanceConfig">ShieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig">WorkbenchInstanceGceSetupShieldedInstanceConfig</a></code> | shielded_instance_config block. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.tags">Tags</a></code> | <code>string[]</code> | Optional. The Compute Engine tags to add to instance (see [Tagging instances](https://cloud.google.com/compute/docs/label-or-tag-resources#tags)). |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.vmImage">VmImage</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImage">WorkbenchInstanceGceSetupVmImage</a></code> | vm_image block. |

---

##### `AcceleratorConfigs`<sup>Optional</sup> <a name="AcceleratorConfigs" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.acceleratorConfigs"></a>

```csharp
public object AcceleratorConfigs { get; set; }
```

- *Type:* object

accelerator_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#accelerator_configs WorkbenchInstance#accelerator_configs}

---

##### `BootDisk`<sup>Optional</sup> <a name="BootDisk" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.bootDisk"></a>

```csharp
public WorkbenchInstanceGceSetupBootDisk BootDisk { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk">WorkbenchInstanceGceSetupBootDisk</a>

boot_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#boot_disk WorkbenchInstance#boot_disk}

---

##### `ContainerImage`<sup>Optional</sup> <a name="ContainerImage" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.containerImage"></a>

```csharp
public WorkbenchInstanceGceSetupContainerImage ContainerImage { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImage">WorkbenchInstanceGceSetupContainerImage</a>

container_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#container_image WorkbenchInstance#container_image}

---

##### `DataDisks`<sup>Optional</sup> <a name="DataDisks" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.dataDisks"></a>

```csharp
public WorkbenchInstanceGceSetupDataDisks DataDisks { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks">WorkbenchInstanceGceSetupDataDisks</a>

data_disks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#data_disks WorkbenchInstance#data_disks}

---

##### `DisablePublicIp`<sup>Optional</sup> <a name="DisablePublicIp" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.disablePublicIp"></a>

```csharp
public object DisablePublicIp { get; set; }
```

- *Type:* object

Optional. If true, no external IP will be assigned to this VM instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#disable_public_ip WorkbenchInstance#disable_public_ip}

---

##### `EnableIpForwarding`<sup>Optional</sup> <a name="EnableIpForwarding" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.enableIpForwarding"></a>

```csharp
public object EnableIpForwarding { get; set; }
```

- *Type:* object

Optional. Flag to enable ip forwarding or not, default false/off. https://cloud.google.com/vpc/docs/using-routes#canipforward.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#enable_ip_forwarding WorkbenchInstance#enable_ip_forwarding}

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.machineType"></a>

```csharp
public string MachineType { get; set; }
```

- *Type:* string

Optional. The machine type of the VM instance. https://cloud.google.com/compute/docs/machine-resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#machine_type WorkbenchInstance#machine_type}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional. Custom metadata to apply to this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#metadata WorkbenchInstance#metadata}

---

##### `NetworkInterfaces`<sup>Optional</sup> <a name="NetworkInterfaces" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.networkInterfaces"></a>

```csharp
public object NetworkInterfaces { get; set; }
```

- *Type:* object

network_interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#network_interfaces WorkbenchInstance#network_interfaces}

---

##### `ServiceAccounts`<sup>Optional</sup> <a name="ServiceAccounts" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.serviceAccounts"></a>

```csharp
public object ServiceAccounts { get; set; }
```

- *Type:* object

service_accounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#service_accounts WorkbenchInstance#service_accounts}

---

##### `ShieldedInstanceConfig`<sup>Optional</sup> <a name="ShieldedInstanceConfig" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.shieldedInstanceConfig"></a>

```csharp
public WorkbenchInstanceGceSetupShieldedInstanceConfig ShieldedInstanceConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig">WorkbenchInstanceGceSetupShieldedInstanceConfig</a>

shielded_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#shielded_instance_config WorkbenchInstance#shielded_instance_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

Optional. The Compute Engine tags to add to instance (see [Tagging instances](https://cloud.google.com/compute/docs/label-or-tag-resources#tags)).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#tags WorkbenchInstance#tags}

---

##### `VmImage`<sup>Optional</sup> <a name="VmImage" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup.property.vmImage"></a>

```csharp
public WorkbenchInstanceGceSetupVmImage VmImage { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImage">WorkbenchInstanceGceSetupVmImage</a>

vm_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#vm_image WorkbenchInstance#vm_image}

---

### WorkbenchInstanceGceSetupAcceleratorConfigs <a name="WorkbenchInstanceGceSetupAcceleratorConfigs" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new WorkbenchInstanceGceSetupAcceleratorConfigs {
    string CoreCount = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigs.property.coreCount">CoreCount</a></code> | <code>string</code> | Optional. Count of cores of this accelerator. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigs.property.type">Type</a></code> | <code>string</code> | Optional. Type of this accelerator. Possible values: ["NVIDIA_TESLA_P100", "NVIDIA_TESLA_V100", "NVIDIA_TESLA_P4", "NVIDIA_TESLA_T4", "NVIDIA_TESLA_A100", "NVIDIA_A100_80GB", "NVIDIA_L4", "NVIDIA_TESLA_T4_VWS", "NVIDIA_TESLA_P100_VWS", "NVIDIA_TESLA_P4_VWS"]. |

---

##### `CoreCount`<sup>Optional</sup> <a name="CoreCount" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigs.property.coreCount"></a>

```csharp
public string CoreCount { get; set; }
```

- *Type:* string

Optional. Count of cores of this accelerator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#core_count WorkbenchInstance#core_count}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigs.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Optional. Type of this accelerator. Possible values: ["NVIDIA_TESLA_P100", "NVIDIA_TESLA_V100", "NVIDIA_TESLA_P4", "NVIDIA_TESLA_T4", "NVIDIA_TESLA_A100", "NVIDIA_A100_80GB", "NVIDIA_L4", "NVIDIA_TESLA_T4_VWS", "NVIDIA_TESLA_P100_VWS", "NVIDIA_TESLA_P4_VWS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#type WorkbenchInstance#type}

---

### WorkbenchInstanceGceSetupBootDisk <a name="WorkbenchInstanceGceSetupBootDisk" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new WorkbenchInstanceGceSetupBootDisk {
    string DiskEncryption = null,
    string DiskSizeGb = null,
    string DiskType = null,
    string KmsKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk.property.diskEncryption">DiskEncryption</a></code> | <code>string</code> | Optional. Input only. Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["GMEK", "CMEK"]. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk.property.diskSizeGb">DiskSizeGb</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk.property.diskType">DiskType</a></code> | <code>string</code> | Optional. Indicates the type of the disk. Possible values: ["PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"]. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk.property.kmsKey">KmsKey</a></code> | <code>string</code> | 'Optional. |

---

##### `DiskEncryption`<sup>Optional</sup> <a name="DiskEncryption" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk.property.diskEncryption"></a>

```csharp
public string DiskEncryption { get; set; }
```

- *Type:* string

Optional. Input only. Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["GMEK", "CMEK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#disk_encryption WorkbenchInstance#disk_encryption}

---

##### `DiskSizeGb`<sup>Optional</sup> <a name="DiskSizeGb" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk.property.diskSizeGb"></a>

```csharp
public string DiskSizeGb { get; set; }
```

- *Type:* string

Optional.

The size of the boot disk in GB attached to this instance,
up to a maximum of 64000 GB (64 TB). If not specified, this defaults to the
recommended value of 150GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#disk_size_gb WorkbenchInstance#disk_size_gb}

---

##### `DiskType`<sup>Optional</sup> <a name="DiskType" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk.property.diskType"></a>

```csharp
public string DiskType { get; set; }
```

- *Type:* string

Optional. Indicates the type of the disk. Possible values: ["PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#disk_type WorkbenchInstance#disk_type}

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk.property.kmsKey"></a>

```csharp
public string KmsKey { get; set; }
```

- *Type:* string

'Optional.

The KMS key used to encrypt the disks, only
applicable if disk_encryption is CMEK. Format: 'projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}'
Learn more about using your own encryption keys.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#kms_key WorkbenchInstance#kms_key}

---

### WorkbenchInstanceGceSetupContainerImage <a name="WorkbenchInstanceGceSetupContainerImage" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new WorkbenchInstanceGceSetupContainerImage {
    string Repository,
    string Tag = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImage.property.repository">Repository</a></code> | <code>string</code> | The path to the container image repository. For example: gcr.io/{project_id}/{imageName}. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImage.property.tag">Tag</a></code> | <code>string</code> | The tag of the container image. If not specified, this defaults to the latest tag. |

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImage.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

The path to the container image repository. For example: gcr.io/{project_id}/{imageName}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#repository WorkbenchInstance#repository}

---

##### `Tag`<sup>Optional</sup> <a name="Tag" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImage.property.tag"></a>

```csharp
public string Tag { get; set; }
```

- *Type:* string

The tag of the container image. If not specified, this defaults to the latest tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#tag WorkbenchInstance#tag}

---

### WorkbenchInstanceGceSetupDataDisks <a name="WorkbenchInstanceGceSetupDataDisks" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new WorkbenchInstanceGceSetupDataDisks {
    string DiskEncryption = null,
    string DiskSizeGb = null,
    string DiskType = null,
    string KmsKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks.property.diskEncryption">DiskEncryption</a></code> | <code>string</code> | Optional. Input only. Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["GMEK", "CMEK"]. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks.property.diskSizeGb">DiskSizeGb</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks.property.diskType">DiskType</a></code> | <code>string</code> | Optional. Input only. Indicates the type of the disk. Possible values: ["PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"]. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks.property.kmsKey">KmsKey</a></code> | <code>string</code> | 'Optional. |

---

##### `DiskEncryption`<sup>Optional</sup> <a name="DiskEncryption" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks.property.diskEncryption"></a>

```csharp
public string DiskEncryption { get; set; }
```

- *Type:* string

Optional. Input only. Disk encryption method used on the boot and data disks, defaults to GMEK. Possible values: ["GMEK", "CMEK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#disk_encryption WorkbenchInstance#disk_encryption}

---

##### `DiskSizeGb`<sup>Optional</sup> <a name="DiskSizeGb" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks.property.diskSizeGb"></a>

```csharp
public string DiskSizeGb { get; set; }
```

- *Type:* string

Optional.

The size of the disk in GB attached to this VM instance,
up to a maximum of 64000 GB (64 TB). If not specified, this defaults to
100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#disk_size_gb WorkbenchInstance#disk_size_gb}

---

##### `DiskType`<sup>Optional</sup> <a name="DiskType" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks.property.diskType"></a>

```csharp
public string DiskType { get; set; }
```

- *Type:* string

Optional. Input only. Indicates the type of the disk. Possible values: ["PD_STANDARD", "PD_SSD", "PD_BALANCED", "PD_EXTREME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#disk_type WorkbenchInstance#disk_type}

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks.property.kmsKey"></a>

```csharp
public string KmsKey { get; set; }
```

- *Type:* string

'Optional.

The KMS key used to encrypt the disks,
only applicable if disk_encryption is CMEK. Format: 'projects/{project_id}/locations/{location}/keyRings/{key_ring_id}/cryptoKeys/{key_id}'
Learn more about using your own encryption keys.'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#kms_key WorkbenchInstance#kms_key}

---

### WorkbenchInstanceGceSetupNetworkInterfaces <a name="WorkbenchInstanceGceSetupNetworkInterfaces" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new WorkbenchInstanceGceSetupNetworkInterfaces {
    object AccessConfigs = null,
    string Network = null,
    string NicType = null,
    string Subnet = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces.property.accessConfigs">AccessConfigs</a></code> | <code>object</code> | access_configs block. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces.property.network">Network</a></code> | <code>string</code> | Optional. The name of the VPC that this VM instance is in. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces.property.nicType">NicType</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces.property.subnet">Subnet</a></code> | <code>string</code> | Optional. The name of the subnet that this VM instance is in. |

---

##### `AccessConfigs`<sup>Optional</sup> <a name="AccessConfigs" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces.property.accessConfigs"></a>

```csharp
public object AccessConfigs { get; set; }
```

- *Type:* object

access_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#access_configs WorkbenchInstance#access_configs}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

Optional. The name of the VPC that this VM instance is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#network WorkbenchInstance#network}

---

##### `NicType`<sup>Optional</sup> <a name="NicType" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces.property.nicType"></a>

```csharp
public string NicType { get; set; }
```

- *Type:* string

Optional.

The type of vNIC to be used on this interface. This
may be gVNIC or VirtioNet. Possible values: ["VIRTIO_NET", "GVNIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#nic_type WorkbenchInstance#nic_type}

---

##### `Subnet`<sup>Optional</sup> <a name="Subnet" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfaces.property.subnet"></a>

```csharp
public string Subnet { get; set; }
```

- *Type:* string

Optional. The name of the subnet that this VM instance is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#subnet WorkbenchInstance#subnet}

---

### WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs <a name="WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs {
    string ExternalIp
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs.property.externalIp">ExternalIp</a></code> | <code>string</code> | An external IP address associated with this instance. |

---

##### `ExternalIp`<sup>Required</sup> <a name="ExternalIp" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigs.property.externalIp"></a>

```csharp
public string ExternalIp { get; set; }
```

- *Type:* string

An external IP address associated with this instance.

Specify an unused
static external IP address available to the project or leave this field
undefined to use an IP from a shared ephemeral IP address pool. If you
specify a static external IP address, it must live in the same region as
the zone of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#external_ip WorkbenchInstance#external_ip}

---

### WorkbenchInstanceGceSetupServiceAccounts <a name="WorkbenchInstanceGceSetupServiceAccounts" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccounts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new WorkbenchInstanceGceSetupServiceAccounts {
    string Email = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccounts.property.email">Email</a></code> | <code>string</code> | Optional. Email address of the service account. |

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccounts.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Optional. Email address of the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#email WorkbenchInstance#email}

---

### WorkbenchInstanceGceSetupShieldedInstanceConfig <a name="WorkbenchInstanceGceSetupShieldedInstanceConfig" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new WorkbenchInstanceGceSetupShieldedInstanceConfig {
    object EnableIntegrityMonitoring = null,
    object EnableSecureBoot = null,
    object EnableVtpm = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig.property.enableIntegrityMonitoring">EnableIntegrityMonitoring</a></code> | <code>object</code> | Optional. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig.property.enableSecureBoot">EnableSecureBoot</a></code> | <code>object</code> | Optional. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig.property.enableVtpm">EnableVtpm</a></code> | <code>object</code> | Optional. Defines whether the VM instance has the vTPM enabled. Enabled by default. |

---

##### `EnableIntegrityMonitoring`<sup>Optional</sup> <a name="EnableIntegrityMonitoring" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig.property.enableIntegrityMonitoring"></a>

```csharp
public object EnableIntegrityMonitoring { get; set; }
```

- *Type:* object

Optional.

Defines whether the VM instance has integrity monitoring
enabled. Enables monitoring and attestation of the boot integrity of the VM
instance. The attestation is performed against the integrity policy baseline.
This baseline is initially derived from the implicitly trusted boot image
when the VM instance is created. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#enable_integrity_monitoring WorkbenchInstance#enable_integrity_monitoring}

---

##### `EnableSecureBoot`<sup>Optional</sup> <a name="EnableSecureBoot" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig.property.enableSecureBoot"></a>

```csharp
public object EnableSecureBoot { get; set; }
```

- *Type:* object

Optional.

Defines whether the VM instance has Secure Boot enabled.
Secure Boot helps ensure that the system only runs authentic software by verifying
the digital signature of all boot components, and halting the boot process
if signature verification fails. Disabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#enable_secure_boot WorkbenchInstance#enable_secure_boot}

---

##### `EnableVtpm`<sup>Optional</sup> <a name="EnableVtpm" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig.property.enableVtpm"></a>

```csharp
public object EnableVtpm { get; set; }
```

- *Type:* object

Optional. Defines whether the VM instance has the vTPM enabled. Enabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#enable_vtpm WorkbenchInstance#enable_vtpm}

---

### WorkbenchInstanceGceSetupVmImage <a name="WorkbenchInstanceGceSetupVmImage" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new WorkbenchInstanceGceSetupVmImage {
    string Family = null,
    string Name = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImage.property.family">Family</a></code> | <code>string</code> | Optional. Use this VM image family to find the image; the newest image in this family will be used. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImage.property.name">Name</a></code> | <code>string</code> | Optional. Use VM image name to find the image. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImage.property.project">Project</a></code> | <code>string</code> | The name of the Google Cloud project that this VM image belongs to. Format: {project_id}. |

---

##### `Family`<sup>Optional</sup> <a name="Family" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImage.property.family"></a>

```csharp
public string Family { get; set; }
```

- *Type:* string

Optional. Use this VM image family to find the image; the newest image in this family will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#family WorkbenchInstance#family}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImage.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Optional. Use VM image name to find the image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#name WorkbenchInstance#name}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImage.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The name of the Google Cloud project that this VM image belongs to. Format: {project_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#project WorkbenchInstance#project}

---

### WorkbenchInstanceHealthInfo <a name="WorkbenchInstanceHealthInfo" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new WorkbenchInstanceHealthInfo {

};
```


### WorkbenchInstanceTimeouts <a name="WorkbenchInstanceTimeouts" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new WorkbenchInstanceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#create WorkbenchInstance#create}. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#delete WorkbenchInstance#delete}. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#update WorkbenchInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#create WorkbenchInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#delete WorkbenchInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.4.0/docs/resources/workbench_instance#update WorkbenchInstance#update}.

---

### WorkbenchInstanceUpgradeHistory <a name="WorkbenchInstanceUpgradeHistory" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistory.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new WorkbenchInstanceUpgradeHistory {

};
```


## Classes <a name="Classes" id="Classes"></a>

### WorkbenchInstanceGceSetupAcceleratorConfigsList <a name="WorkbenchInstanceGceSetupAcceleratorConfigsList" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new WorkbenchInstanceGceSetupAcceleratorConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.get"></a>

```csharp
private WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference <a name="WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.resetCoreCount">ResetCoreCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCoreCount` <a name="ResetCoreCount" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.resetCoreCount"></a>

```csharp
private void ResetCoreCount()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.coreCountInput">CoreCountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.coreCount">CoreCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CoreCountInput`<sup>Optional</sup> <a name="CoreCountInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.coreCountInput"></a>

```csharp
public string CoreCountInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `CoreCount`<sup>Required</sup> <a name="CoreCount" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.coreCount"></a>

```csharp
public string CoreCount { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WorkbenchInstanceGceSetupBootDiskOutputReference <a name="WorkbenchInstanceGceSetupBootDiskOutputReference" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new WorkbenchInstanceGceSetupBootDiskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.resetDiskEncryption">ResetDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.resetDiskSizeGb">ResetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.resetDiskType">ResetDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDiskEncryption` <a name="ResetDiskEncryption" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.resetDiskEncryption"></a>

```csharp
private void ResetDiskEncryption()
```

##### `ResetDiskSizeGb` <a name="ResetDiskSizeGb" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.resetDiskSizeGb"></a>

```csharp
private void ResetDiskSizeGb()
```

##### `ResetDiskType` <a name="ResetDiskType" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.resetDiskType"></a>

```csharp
private void ResetDiskType()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.resetKmsKey"></a>

```csharp
private void ResetKmsKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.diskEncryptionInput">DiskEncryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.diskSizeGbInput">DiskSizeGbInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.diskTypeInput">DiskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.diskEncryption">DiskEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.diskType">DiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk">WorkbenchInstanceGceSetupBootDisk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiskEncryptionInput`<sup>Optional</sup> <a name="DiskEncryptionInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.diskEncryptionInput"></a>

```csharp
public string DiskEncryptionInput { get; }
```

- *Type:* string

---

##### `DiskSizeGbInput`<sup>Optional</sup> <a name="DiskSizeGbInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.diskSizeGbInput"></a>

```csharp
public string DiskSizeGbInput { get; }
```

- *Type:* string

---

##### `DiskTypeInput`<sup>Optional</sup> <a name="DiskTypeInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.diskTypeInput"></a>

```csharp
public string DiskTypeInput { get; }
```

- *Type:* string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.kmsKeyInput"></a>

```csharp
public string KmsKeyInput { get; }
```

- *Type:* string

---

##### `DiskEncryption`<sup>Required</sup> <a name="DiskEncryption" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.diskEncryption"></a>

```csharp
public string DiskEncryption { get; }
```

- *Type:* string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.diskSizeGb"></a>

```csharp
public string DiskSizeGb { get; }
```

- *Type:* string

---

##### `DiskType`<sup>Required</sup> <a name="DiskType" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.diskType"></a>

```csharp
public string DiskType { get; }
```

- *Type:* string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference.property.internalValue"></a>

```csharp
public WorkbenchInstanceGceSetupBootDisk InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk">WorkbenchInstanceGceSetupBootDisk</a>

---


### WorkbenchInstanceGceSetupContainerImageOutputReference <a name="WorkbenchInstanceGceSetupContainerImageOutputReference" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new WorkbenchInstanceGceSetupContainerImageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.resetTag">ResetTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTag` <a name="ResetTag" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.resetTag"></a>

```csharp
private void ResetTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.property.tagInput">TagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.property.tag">Tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImage">WorkbenchInstanceGceSetupContainerImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `TagInput`<sup>Optional</sup> <a name="TagInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.property.tagInput"></a>

```csharp
public string TagInput { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.property.tag"></a>

```csharp
public string Tag { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference.property.internalValue"></a>

```csharp
public WorkbenchInstanceGceSetupContainerImage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImage">WorkbenchInstanceGceSetupContainerImage</a>

---


### WorkbenchInstanceGceSetupDataDisksOutputReference <a name="WorkbenchInstanceGceSetupDataDisksOutputReference" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new WorkbenchInstanceGceSetupDataDisksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.resetDiskEncryption">ResetDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.resetDiskSizeGb">ResetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.resetDiskType">ResetDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDiskEncryption` <a name="ResetDiskEncryption" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.resetDiskEncryption"></a>

```csharp
private void ResetDiskEncryption()
```

##### `ResetDiskSizeGb` <a name="ResetDiskSizeGb" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.resetDiskSizeGb"></a>

```csharp
private void ResetDiskSizeGb()
```

##### `ResetDiskType` <a name="ResetDiskType" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.resetDiskType"></a>

```csharp
private void ResetDiskType()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.resetKmsKey"></a>

```csharp
private void ResetKmsKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.diskEncryptionInput">DiskEncryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.diskSizeGbInput">DiskSizeGbInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.diskTypeInput">DiskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.diskEncryption">DiskEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.diskType">DiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks">WorkbenchInstanceGceSetupDataDisks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiskEncryptionInput`<sup>Optional</sup> <a name="DiskEncryptionInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.diskEncryptionInput"></a>

```csharp
public string DiskEncryptionInput { get; }
```

- *Type:* string

---

##### `DiskSizeGbInput`<sup>Optional</sup> <a name="DiskSizeGbInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.diskSizeGbInput"></a>

```csharp
public string DiskSizeGbInput { get; }
```

- *Type:* string

---

##### `DiskTypeInput`<sup>Optional</sup> <a name="DiskTypeInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.diskTypeInput"></a>

```csharp
public string DiskTypeInput { get; }
```

- *Type:* string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.kmsKeyInput"></a>

```csharp
public string KmsKeyInput { get; }
```

- *Type:* string

---

##### `DiskEncryption`<sup>Required</sup> <a name="DiskEncryption" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.diskEncryption"></a>

```csharp
public string DiskEncryption { get; }
```

- *Type:* string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.diskSizeGb"></a>

```csharp
public string DiskSizeGb { get; }
```

- *Type:* string

---

##### `DiskType`<sup>Required</sup> <a name="DiskType" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.diskType"></a>

```csharp
public string DiskType { get; }
```

- *Type:* string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference.property.internalValue"></a>

```csharp
public WorkbenchInstanceGceSetupDataDisks InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks">WorkbenchInstanceGceSetupDataDisks</a>

---


### WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList <a name="WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.get"></a>

```csharp
private WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference <a name="WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.property.externalIpInput">ExternalIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.property.externalIp">ExternalIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExternalIpInput`<sup>Optional</sup> <a name="ExternalIpInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.property.externalIpInput"></a>

```csharp
public string ExternalIpInput { get; }
```

- *Type:* string

---

##### `ExternalIp`<sup>Required</sup> <a name="ExternalIp" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.property.externalIp"></a>

```csharp
public string ExternalIp { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WorkbenchInstanceGceSetupNetworkInterfacesList <a name="WorkbenchInstanceGceSetupNetworkInterfacesList" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new WorkbenchInstanceGceSetupNetworkInterfacesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.get"></a>

```csharp
private WorkbenchInstanceGceSetupNetworkInterfacesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WorkbenchInstanceGceSetupNetworkInterfacesOutputReference <a name="WorkbenchInstanceGceSetupNetworkInterfacesOutputReference" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new WorkbenchInstanceGceSetupNetworkInterfacesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.putAccessConfigs">PutAccessConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resetAccessConfigs">ResetAccessConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resetNicType">ResetNicType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resetSubnet">ResetSubnet</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccessConfigs` <a name="PutAccessConfigs" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.putAccessConfigs"></a>

```csharp
private void PutAccessConfigs(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.putAccessConfigs.parameter.value"></a>

- *Type:* object

---

##### `ResetAccessConfigs` <a name="ResetAccessConfigs" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resetAccessConfigs"></a>

```csharp
private void ResetAccessConfigs()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetNicType` <a name="ResetNicType" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resetNicType"></a>

```csharp
private void ResetNicType()
```

##### `ResetSubnet` <a name="ResetSubnet" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.resetSubnet"></a>

```csharp
private void ResetSubnet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.accessConfigs">AccessConfigs</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList">WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.accessConfigsInput">AccessConfigsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.nicTypeInput">NicTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.subnetInput">SubnetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.nicType">NicType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.subnet">Subnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessConfigs`<sup>Required</sup> <a name="AccessConfigs" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.accessConfigs"></a>

```csharp
public WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList AccessConfigs { get; }
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList">WorkbenchInstanceGceSetupNetworkInterfacesAccessConfigsList</a>

---

##### `AccessConfigsInput`<sup>Optional</sup> <a name="AccessConfigsInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.accessConfigsInput"></a>

```csharp
public object AccessConfigsInput { get; }
```

- *Type:* object

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `NicTypeInput`<sup>Optional</sup> <a name="NicTypeInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.nicTypeInput"></a>

```csharp
public string NicTypeInput { get; }
```

- *Type:* string

---

##### `SubnetInput`<sup>Optional</sup> <a name="SubnetInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.subnetInput"></a>

```csharp
public string SubnetInput { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `NicType`<sup>Required</sup> <a name="NicType" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.nicType"></a>

```csharp
public string NicType { get; }
```

- *Type:* string

---

##### `Subnet`<sup>Required</sup> <a name="Subnet" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.subnet"></a>

```csharp
public string Subnet { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WorkbenchInstanceGceSetupOutputReference <a name="WorkbenchInstanceGceSetupOutputReference" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new WorkbenchInstanceGceSetupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putAcceleratorConfigs">PutAcceleratorConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putBootDisk">PutBootDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putContainerImage">PutContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putDataDisks">PutDataDisks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putNetworkInterfaces">PutNetworkInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putServiceAccounts">PutServiceAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putShieldedInstanceConfig">PutShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putVmImage">PutVmImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetAcceleratorConfigs">ResetAcceleratorConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetBootDisk">ResetBootDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetContainerImage">ResetContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetDataDisks">ResetDataDisks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetDisablePublicIp">ResetDisablePublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetEnableIpForwarding">ResetEnableIpForwarding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetMachineType">ResetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetNetworkInterfaces">ResetNetworkInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetServiceAccounts">ResetServiceAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetShieldedInstanceConfig">ResetShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetVmImage">ResetVmImage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAcceleratorConfigs` <a name="PutAcceleratorConfigs" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putAcceleratorConfigs"></a>

```csharp
private void PutAcceleratorConfigs(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putAcceleratorConfigs.parameter.value"></a>

- *Type:* object

---

##### `PutBootDisk` <a name="PutBootDisk" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putBootDisk"></a>

```csharp
private void PutBootDisk(WorkbenchInstanceGceSetupBootDisk Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putBootDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk">WorkbenchInstanceGceSetupBootDisk</a>

---

##### `PutContainerImage` <a name="PutContainerImage" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putContainerImage"></a>

```csharp
private void PutContainerImage(WorkbenchInstanceGceSetupContainerImage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putContainerImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImage">WorkbenchInstanceGceSetupContainerImage</a>

---

##### `PutDataDisks` <a name="PutDataDisks" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putDataDisks"></a>

```csharp
private void PutDataDisks(WorkbenchInstanceGceSetupDataDisks Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putDataDisks.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks">WorkbenchInstanceGceSetupDataDisks</a>

---

##### `PutNetworkInterfaces` <a name="PutNetworkInterfaces" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putNetworkInterfaces"></a>

```csharp
private void PutNetworkInterfaces(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putNetworkInterfaces.parameter.value"></a>

- *Type:* object

---

##### `PutServiceAccounts` <a name="PutServiceAccounts" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putServiceAccounts"></a>

```csharp
private void PutServiceAccounts(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putServiceAccounts.parameter.value"></a>

- *Type:* object

---

##### `PutShieldedInstanceConfig` <a name="PutShieldedInstanceConfig" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putShieldedInstanceConfig"></a>

```csharp
private void PutShieldedInstanceConfig(WorkbenchInstanceGceSetupShieldedInstanceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putShieldedInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig">WorkbenchInstanceGceSetupShieldedInstanceConfig</a>

---

##### `PutVmImage` <a name="PutVmImage" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putVmImage"></a>

```csharp
private void PutVmImage(WorkbenchInstanceGceSetupVmImage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.putVmImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImage">WorkbenchInstanceGceSetupVmImage</a>

---

##### `ResetAcceleratorConfigs` <a name="ResetAcceleratorConfigs" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetAcceleratorConfigs"></a>

```csharp
private void ResetAcceleratorConfigs()
```

##### `ResetBootDisk` <a name="ResetBootDisk" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetBootDisk"></a>

```csharp
private void ResetBootDisk()
```

##### `ResetContainerImage` <a name="ResetContainerImage" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetContainerImage"></a>

```csharp
private void ResetContainerImage()
```

##### `ResetDataDisks` <a name="ResetDataDisks" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetDataDisks"></a>

```csharp
private void ResetDataDisks()
```

##### `ResetDisablePublicIp` <a name="ResetDisablePublicIp" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetDisablePublicIp"></a>

```csharp
private void ResetDisablePublicIp()
```

##### `ResetEnableIpForwarding` <a name="ResetEnableIpForwarding" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetEnableIpForwarding"></a>

```csharp
private void ResetEnableIpForwarding()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetMachineType"></a>

```csharp
private void ResetMachineType()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetNetworkInterfaces` <a name="ResetNetworkInterfaces" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetNetworkInterfaces"></a>

```csharp
private void ResetNetworkInterfaces()
```

##### `ResetServiceAccounts` <a name="ResetServiceAccounts" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetServiceAccounts"></a>

```csharp
private void ResetServiceAccounts()
```

##### `ResetShieldedInstanceConfig` <a name="ResetShieldedInstanceConfig" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetShieldedInstanceConfig"></a>

```csharp
private void ResetShieldedInstanceConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetVmImage` <a name="ResetVmImage" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.resetVmImage"></a>

```csharp
private void ResetVmImage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.acceleratorConfigs">AcceleratorConfigs</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList">WorkbenchInstanceGceSetupAcceleratorConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.bootDisk">BootDisk</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference">WorkbenchInstanceGceSetupBootDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.containerImage">ContainerImage</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference">WorkbenchInstanceGceSetupContainerImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.dataDisks">DataDisks</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference">WorkbenchInstanceGceSetupDataDisksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.networkInterfaces">NetworkInterfaces</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList">WorkbenchInstanceGceSetupNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.serviceAccounts">ServiceAccounts</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList">WorkbenchInstanceGceSetupServiceAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.shieldedInstanceConfig">ShieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference">WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.vmImage">VmImage</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference">WorkbenchInstanceGceSetupVmImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.acceleratorConfigsInput">AcceleratorConfigsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.bootDiskInput">BootDiskInput</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk">WorkbenchInstanceGceSetupBootDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.containerImageInput">ContainerImageInput</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImage">WorkbenchInstanceGceSetupContainerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.dataDisksInput">DataDisksInput</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks">WorkbenchInstanceGceSetupDataDisks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.disablePublicIpInput">DisablePublicIpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.enableIpForwardingInput">EnableIpForwardingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.metadataInput">MetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.networkInterfacesInput">NetworkInterfacesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.serviceAccountsInput">ServiceAccountsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.shieldedInstanceConfigInput">ShieldedInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig">WorkbenchInstanceGceSetupShieldedInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.vmImageInput">VmImageInput</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImage">WorkbenchInstanceGceSetupVmImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.disablePublicIp">DisablePublicIp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.enableIpForwarding">EnableIpForwarding</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.machineType">MachineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup">WorkbenchInstanceGceSetup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcceleratorConfigs`<sup>Required</sup> <a name="AcceleratorConfigs" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.acceleratorConfigs"></a>

```csharp
public WorkbenchInstanceGceSetupAcceleratorConfigsList AcceleratorConfigs { get; }
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupAcceleratorConfigsList">WorkbenchInstanceGceSetupAcceleratorConfigsList</a>

---

##### `BootDisk`<sup>Required</sup> <a name="BootDisk" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.bootDisk"></a>

```csharp
public WorkbenchInstanceGceSetupBootDiskOutputReference BootDisk { get; }
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDiskOutputReference">WorkbenchInstanceGceSetupBootDiskOutputReference</a>

---

##### `ContainerImage`<sup>Required</sup> <a name="ContainerImage" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.containerImage"></a>

```csharp
public WorkbenchInstanceGceSetupContainerImageOutputReference ContainerImage { get; }
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImageOutputReference">WorkbenchInstanceGceSetupContainerImageOutputReference</a>

---

##### `DataDisks`<sup>Required</sup> <a name="DataDisks" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.dataDisks"></a>

```csharp
public WorkbenchInstanceGceSetupDataDisksOutputReference DataDisks { get; }
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisksOutputReference">WorkbenchInstanceGceSetupDataDisksOutputReference</a>

---

##### `NetworkInterfaces`<sup>Required</sup> <a name="NetworkInterfaces" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.networkInterfaces"></a>

```csharp
public WorkbenchInstanceGceSetupNetworkInterfacesList NetworkInterfaces { get; }
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupNetworkInterfacesList">WorkbenchInstanceGceSetupNetworkInterfacesList</a>

---

##### `ServiceAccounts`<sup>Required</sup> <a name="ServiceAccounts" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.serviceAccounts"></a>

```csharp
public WorkbenchInstanceGceSetupServiceAccountsList ServiceAccounts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList">WorkbenchInstanceGceSetupServiceAccountsList</a>

---

##### `ShieldedInstanceConfig`<sup>Required</sup> <a name="ShieldedInstanceConfig" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.shieldedInstanceConfig"></a>

```csharp
public WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference ShieldedInstanceConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference">WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference</a>

---

##### `VmImage`<sup>Required</sup> <a name="VmImage" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.vmImage"></a>

```csharp
public WorkbenchInstanceGceSetupVmImageOutputReference VmImage { get; }
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference">WorkbenchInstanceGceSetupVmImageOutputReference</a>

---

##### `AcceleratorConfigsInput`<sup>Optional</sup> <a name="AcceleratorConfigsInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.acceleratorConfigsInput"></a>

```csharp
public object AcceleratorConfigsInput { get; }
```

- *Type:* object

---

##### `BootDiskInput`<sup>Optional</sup> <a name="BootDiskInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.bootDiskInput"></a>

```csharp
public WorkbenchInstanceGceSetupBootDisk BootDiskInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupBootDisk">WorkbenchInstanceGceSetupBootDisk</a>

---

##### `ContainerImageInput`<sup>Optional</sup> <a name="ContainerImageInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.containerImageInput"></a>

```csharp
public WorkbenchInstanceGceSetupContainerImage ContainerImageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupContainerImage">WorkbenchInstanceGceSetupContainerImage</a>

---

##### `DataDisksInput`<sup>Optional</sup> <a name="DataDisksInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.dataDisksInput"></a>

```csharp
public WorkbenchInstanceGceSetupDataDisks DataDisksInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupDataDisks">WorkbenchInstanceGceSetupDataDisks</a>

---

##### `DisablePublicIpInput`<sup>Optional</sup> <a name="DisablePublicIpInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.disablePublicIpInput"></a>

```csharp
public object DisablePublicIpInput { get; }
```

- *Type:* object

---

##### `EnableIpForwardingInput`<sup>Optional</sup> <a name="EnableIpForwardingInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.enableIpForwardingInput"></a>

```csharp
public object EnableIpForwardingInput { get; }
```

- *Type:* object

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.machineTypeInput"></a>

```csharp
public string MachineTypeInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.metadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NetworkInterfacesInput`<sup>Optional</sup> <a name="NetworkInterfacesInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.networkInterfacesInput"></a>

```csharp
public object NetworkInterfacesInput { get; }
```

- *Type:* object

---

##### `ServiceAccountsInput`<sup>Optional</sup> <a name="ServiceAccountsInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.serviceAccountsInput"></a>

```csharp
public object ServiceAccountsInput { get; }
```

- *Type:* object

---

##### `ShieldedInstanceConfigInput`<sup>Optional</sup> <a name="ShieldedInstanceConfigInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.shieldedInstanceConfigInput"></a>

```csharp
public WorkbenchInstanceGceSetupShieldedInstanceConfig ShieldedInstanceConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig">WorkbenchInstanceGceSetupShieldedInstanceConfig</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `VmImageInput`<sup>Optional</sup> <a name="VmImageInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.vmImageInput"></a>

```csharp
public WorkbenchInstanceGceSetupVmImage VmImageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImage">WorkbenchInstanceGceSetupVmImage</a>

---

##### `DisablePublicIp`<sup>Required</sup> <a name="DisablePublicIp" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.disablePublicIp"></a>

```csharp
public object DisablePublicIp { get; }
```

- *Type:* object

---

##### `EnableIpForwarding`<sup>Required</sup> <a name="EnableIpForwarding" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.enableIpForwarding"></a>

```csharp
public object EnableIpForwarding { get; }
```

- *Type:* object

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.machineType"></a>

```csharp
public string MachineType { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupOutputReference.property.internalValue"></a>

```csharp
public WorkbenchInstanceGceSetup InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetup">WorkbenchInstanceGceSetup</a>

---


### WorkbenchInstanceGceSetupServiceAccountsList <a name="WorkbenchInstanceGceSetupServiceAccountsList" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new WorkbenchInstanceGceSetupServiceAccountsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.get"></a>

```csharp
private WorkbenchInstanceGceSetupServiceAccountsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WorkbenchInstanceGceSetupServiceAccountsOutputReference <a name="WorkbenchInstanceGceSetupServiceAccountsOutputReference" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new WorkbenchInstanceGceSetupServiceAccountsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupServiceAccountsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference <a name="WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring">ResetEnableIntegrityMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resetEnableSecureBoot">ResetEnableSecureBoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resetEnableVtpm">ResetEnableVtpm</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableIntegrityMonitoring` <a name="ResetEnableIntegrityMonitoring" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resetEnableIntegrityMonitoring"></a>

```csharp
private void ResetEnableIntegrityMonitoring()
```

##### `ResetEnableSecureBoot` <a name="ResetEnableSecureBoot" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resetEnableSecureBoot"></a>

```csharp
private void ResetEnableSecureBoot()
```

##### `ResetEnableVtpm` <a name="ResetEnableVtpm" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.resetEnableVtpm"></a>

```csharp
private void ResetEnableVtpm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput">EnableIntegrityMonitoringInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableSecureBootInput">EnableSecureBootInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableVtpmInput">EnableVtpmInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">EnableIntegrityMonitoring</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableSecureBoot">EnableSecureBoot</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableVtpm">EnableVtpm</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig">WorkbenchInstanceGceSetupShieldedInstanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableIntegrityMonitoringInput`<sup>Optional</sup> <a name="EnableIntegrityMonitoringInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoringInput"></a>

```csharp
public object EnableIntegrityMonitoringInput { get; }
```

- *Type:* object

---

##### `EnableSecureBootInput`<sup>Optional</sup> <a name="EnableSecureBootInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableSecureBootInput"></a>

```csharp
public object EnableSecureBootInput { get; }
```

- *Type:* object

---

##### `EnableVtpmInput`<sup>Optional</sup> <a name="EnableVtpmInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableVtpmInput"></a>

```csharp
public object EnableVtpmInput { get; }
```

- *Type:* object

---

##### `EnableIntegrityMonitoring`<sup>Required</sup> <a name="EnableIntegrityMonitoring" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```csharp
public object EnableIntegrityMonitoring { get; }
```

- *Type:* object

---

##### `EnableSecureBoot`<sup>Required</sup> <a name="EnableSecureBoot" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```csharp
public object EnableSecureBoot { get; }
```

- *Type:* object

---

##### `EnableVtpm`<sup>Required</sup> <a name="EnableVtpm" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```csharp
public object EnableVtpm { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfigOutputReference.property.internalValue"></a>

```csharp
public WorkbenchInstanceGceSetupShieldedInstanceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupShieldedInstanceConfig">WorkbenchInstanceGceSetupShieldedInstanceConfig</a>

---


### WorkbenchInstanceGceSetupVmImageOutputReference <a name="WorkbenchInstanceGceSetupVmImageOutputReference" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new WorkbenchInstanceGceSetupVmImageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.resetFamily">ResetFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFamily` <a name="ResetFamily" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.resetFamily"></a>

```csharp
private void ResetFamily()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.resetProject"></a>

```csharp
private void ResetProject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.familyInput">FamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.family">Family</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImage">WorkbenchInstanceGceSetupVmImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FamilyInput`<sup>Optional</sup> <a name="FamilyInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.familyInput"></a>

```csharp
public string FamilyInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.family"></a>

```csharp
public string Family { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImageOutputReference.property.internalValue"></a>

```csharp
public WorkbenchInstanceGceSetupVmImage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceGceSetupVmImage">WorkbenchInstanceGceSetupVmImage</a>

---


### WorkbenchInstanceHealthInfoList <a name="WorkbenchInstanceHealthInfoList" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new WorkbenchInstanceHealthInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.get"></a>

```csharp
private WorkbenchInstanceHealthInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### WorkbenchInstanceHealthInfoOutputReference <a name="WorkbenchInstanceHealthInfoOutputReference" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new WorkbenchInstanceHealthInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfo">WorkbenchInstanceHealthInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfoOutputReference.property.internalValue"></a>

```csharp
public WorkbenchInstanceHealthInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceHealthInfo">WorkbenchInstanceHealthInfo</a>

---


### WorkbenchInstanceTimeoutsOutputReference <a name="WorkbenchInstanceTimeoutsOutputReference" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new WorkbenchInstanceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WorkbenchInstanceUpgradeHistoryList <a name="WorkbenchInstanceUpgradeHistoryList" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new WorkbenchInstanceUpgradeHistoryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.get"></a>

```csharp
private WorkbenchInstanceUpgradeHistoryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### WorkbenchInstanceUpgradeHistoryOutputReference <a name="WorkbenchInstanceUpgradeHistoryOutputReference" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new WorkbenchInstanceUpgradeHistoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.containerImage">ContainerImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.framework">Framework</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.snapshot">Snapshot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.targetVersion">TargetVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.vmImage">VmImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistory">WorkbenchInstanceUpgradeHistory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `ContainerImage`<sup>Required</sup> <a name="ContainerImage" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.containerImage"></a>

```csharp
public string ContainerImage { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Framework`<sup>Required</sup> <a name="Framework" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.framework"></a>

```csharp
public string Framework { get; }
```

- *Type:* string

---

##### `Snapshot`<sup>Required</sup> <a name="Snapshot" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.snapshot"></a>

```csharp
public string Snapshot { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TargetVersion`<sup>Required</sup> <a name="TargetVersion" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.targetVersion"></a>

```csharp
public string TargetVersion { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `VmImage`<sup>Required</sup> <a name="VmImage" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.vmImage"></a>

```csharp
public string VmImage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistoryOutputReference.property.internalValue"></a>

```csharp
public WorkbenchInstanceUpgradeHistory InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.workbenchInstance.WorkbenchInstanceUpgradeHistory">WorkbenchInstanceUpgradeHistory</a>

---



