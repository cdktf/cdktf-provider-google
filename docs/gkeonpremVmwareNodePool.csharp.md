# `google_gkeonprem_vmware_node_pool`

Refer to the Terraform Registory for docs: [`google_gkeonprem_vmware_node_pool`](https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gkeonprem_vmware_node_pool).

# `gkeonpremVmwareNodePool` Submodule <a name="`gkeonpremVmwareNodePool` Submodule" id="@cdktf/provider-google.gkeonpremVmwareNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GkeonpremVmwareNodePool <a name="GkeonpremVmwareNodePool" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gkeonprem_vmware_node_pool google_gkeonprem_vmware_node_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareNodePool(Construct Scope, string Id, GkeonpremVmwareNodePoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig">GkeonpremVmwareNodePoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig">GkeonpremVmwareNodePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.putNodePoolAutoscaling">PutNodePoolAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetNodePoolAutoscaling">ResetNodePoolAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.putConfig"></a>

```csharp
private void PutConfig(GkeonpremVmwareNodePoolConfigA Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA">GkeonpremVmwareNodePoolConfigA</a>

---

##### `PutNodePoolAutoscaling` <a name="PutNodePoolAutoscaling" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.putNodePoolAutoscaling"></a>

```csharp
private void PutNodePoolAutoscaling(GkeonpremVmwareNodePoolNodePoolAutoscaling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.putNodePoolAutoscaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling">GkeonpremVmwareNodePoolNodePoolAutoscaling</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.putTimeouts"></a>

```csharp
private void PutTimeouts(GkeonpremVmwareNodePoolTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts">GkeonpremVmwareNodePoolTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNodePoolAutoscaling` <a name="ResetNodePoolAutoscaling" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetNodePoolAutoscaling"></a>

```csharp
private void ResetNodePoolAutoscaling()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GkeonpremVmwareNodePool resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

GkeonpremVmwareNodePool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

GkeonpremVmwareNodePool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

GkeonpremVmwareNodePool.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

GkeonpremVmwareNodePool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GkeonpremVmwareNodePool resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GkeonpremVmwareNodePool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GkeonpremVmwareNodePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gkeonprem_vmware_node_pool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GkeonpremVmwareNodePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference">GkeonpremVmwareNodePoolConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.deleteTime">DeleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.nodePoolAutoscaling">NodePoolAutoscaling</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference">GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.onPremVersion">OnPremVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.reconciling">Reconciling</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.status">Status</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList">GkeonpremVmwareNodePoolStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference">GkeonpremVmwareNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA">GkeonpremVmwareNodePoolConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.nodePoolAutoscalingInput">NodePoolAutoscalingInput</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling">GkeonpremVmwareNodePoolNodePoolAutoscaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.vmwareClusterInput">VmwareClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.vmwareCluster">VmwareCluster</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.config"></a>

```csharp
public GkeonpremVmwareNodePoolConfigAOutputReference Config { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference">GkeonpremVmwareNodePoolConfigAOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.deleteTime"></a>

```csharp
public string DeleteTime { get; }
```

- *Type:* string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `NodePoolAutoscaling`<sup>Required</sup> <a name="NodePoolAutoscaling" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.nodePoolAutoscaling"></a>

```csharp
public GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference NodePoolAutoscaling { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference">GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference</a>

---

##### `OnPremVersion`<sup>Required</sup> <a name="OnPremVersion" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.onPremVersion"></a>

```csharp
public string OnPremVersion { get; }
```

- *Type:* string

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.reconciling"></a>

```csharp
public IResolvable Reconciling { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.status"></a>

```csharp
public GkeonpremVmwareNodePoolStatusList Status { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList">GkeonpremVmwareNodePoolStatusList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.timeouts"></a>

```csharp
public GkeonpremVmwareNodePoolTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference">GkeonpremVmwareNodePoolTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.configInput"></a>

```csharp
public GkeonpremVmwareNodePoolConfigA ConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA">GkeonpremVmwareNodePoolConfigA</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NodePoolAutoscalingInput`<sup>Optional</sup> <a name="NodePoolAutoscalingInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.nodePoolAutoscalingInput"></a>

```csharp
public GkeonpremVmwareNodePoolNodePoolAutoscaling NodePoolAutoscalingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling">GkeonpremVmwareNodePoolNodePoolAutoscaling</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VmwareClusterInput`<sup>Optional</sup> <a name="VmwareClusterInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.vmwareClusterInput"></a>

```csharp
public string VmwareClusterInput { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `VmwareCluster`<sup>Required</sup> <a name="VmwareCluster" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.vmwareCluster"></a>

```csharp
public string VmwareCluster { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GkeonpremVmwareNodePoolConfig <a name="GkeonpremVmwareNodePoolConfig" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareNodePoolConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    GkeonpremVmwareNodePoolConfigA Config,
    string Location,
    string Name,
    string VmwareCluster,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    string DisplayName = null,
    string Id = null,
    GkeonpremVmwareNodePoolNodePoolAutoscaling NodePoolAutoscaling = null,
    string Project = null,
    GkeonpremVmwareNodePoolTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA">GkeonpremVmwareNodePoolConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.location">Location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.name">Name</a></code> | <code>string</code> | The vmware node pool name. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.vmwareCluster">VmwareCluster</a></code> | <code>string</code> | The cluster this node pool belongs to. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Annotations on the node Pool. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name for the node pool. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gkeonprem_vmware_node_pool#id GkeonpremVmwareNodePool#id}. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.nodePoolAutoscaling">NodePoolAutoscaling</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling">GkeonpremVmwareNodePoolNodePoolAutoscaling</a></code> | node_pool_autoscaling block. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gkeonprem_vmware_node_pool#project GkeonpremVmwareNodePool#project}. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts">GkeonpremVmwareNodePoolTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.config"></a>

```csharp
public GkeonpremVmwareNodePoolConfigA Config { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA">GkeonpremVmwareNodePoolConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gkeonprem_vmware_node_pool#config GkeonpremVmwareNodePool#config}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gkeonprem_vmware_node_pool#location GkeonpremVmwareNodePool#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The vmware node pool name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gkeonprem_vmware_node_pool#name GkeonpremVmwareNodePool#name}

---

##### `VmwareCluster`<sup>Required</sup> <a name="VmwareCluster" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.vmwareCluster"></a>

```csharp
public string VmwareCluster { get; set; }
```

- *Type:* string

The cluster this node pool belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gkeonprem_vmware_node_pool#vmware_cluster GkeonpremVmwareNodePool#vmware_cluster}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Annotations on the node Pool.

This field has the same restrictions as Kubernetes annotations.
The total size of all keys and values combined is limited to 256k.
Key can have 2 segments: prefix (optional) and name (required),
separated by a slash (/).
Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gkeonprem_vmware_node_pool#annotations GkeonpremVmwareNodePool#annotations}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name for the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gkeonprem_vmware_node_pool#display_name GkeonpremVmwareNodePool#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gkeonprem_vmware_node_pool#id GkeonpremVmwareNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NodePoolAutoscaling`<sup>Optional</sup> <a name="NodePoolAutoscaling" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.nodePoolAutoscaling"></a>

```csharp
public GkeonpremVmwareNodePoolNodePoolAutoscaling NodePoolAutoscaling { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling">GkeonpremVmwareNodePoolNodePoolAutoscaling</a>

node_pool_autoscaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gkeonprem_vmware_node_pool#node_pool_autoscaling GkeonpremVmwareNodePool#node_pool_autoscaling}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gkeonprem_vmware_node_pool#project GkeonpremVmwareNodePool#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfig.property.timeouts"></a>

```csharp
public GkeonpremVmwareNodePoolTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts">GkeonpremVmwareNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gkeonprem_vmware_node_pool#timeouts GkeonpremVmwareNodePool#timeouts}

---

### GkeonpremVmwareNodePoolConfigA <a name="GkeonpremVmwareNodePoolConfigA" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareNodePoolConfigA {
    string ImageType,
    double BootDiskSizeGb = null,
    double Cpus = null,
    object EnableLoadBalancer = null,
    string Image = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    double MemoryMb = null,
    double Replicas = null,
    object Taints = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.imageType">ImageType</a></code> | <code>string</code> | The OS image to be used for each node in a node pool. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.bootDiskSizeGb">BootDiskSizeGb</a></code> | <code>double</code> | VMware disk size to be used during creation. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.cpus">Cpus</a></code> | <code>double</code> | The number of CPUs for each node in the node pool. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.enableLoadBalancer">EnableLoadBalancer</a></code> | <code>object</code> | Allow node pool traffic to be load balanced. Only works for clusters with MetalLB load balancers. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.image">Image</a></code> | <code>string</code> | The OS image name in vCenter, only valid when using Windows. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The map of Kubernetes labels (key/value pairs) to be applied to each node. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.memoryMb">MemoryMb</a></code> | <code>double</code> | The megabytes of memory for each node in the node pool. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.replicas">Replicas</a></code> | <code>double</code> | The number of nodes in the node pool. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.taints">Taints</a></code> | <code>object</code> | taints block. |

---

##### `ImageType`<sup>Required</sup> <a name="ImageType" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.imageType"></a>

```csharp
public string ImageType { get; set; }
```

- *Type:* string

The OS image to be used for each node in a node pool.

Currently 'cos', 'ubuntu', 'ubuntu_containerd' and 'windows' are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gkeonprem_vmware_node_pool#image_type GkeonpremVmwareNodePool#image_type}

---

##### `BootDiskSizeGb`<sup>Optional</sup> <a name="BootDiskSizeGb" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.bootDiskSizeGb"></a>

```csharp
public double BootDiskSizeGb { get; set; }
```

- *Type:* double

VMware disk size to be used during creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gkeonprem_vmware_node_pool#boot_disk_size_gb GkeonpremVmwareNodePool#boot_disk_size_gb}

---

##### `Cpus`<sup>Optional</sup> <a name="Cpus" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.cpus"></a>

```csharp
public double Cpus { get; set; }
```

- *Type:* double

The number of CPUs for each node in the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gkeonprem_vmware_node_pool#cpus GkeonpremVmwareNodePool#cpus}

---

##### `EnableLoadBalancer`<sup>Optional</sup> <a name="EnableLoadBalancer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.enableLoadBalancer"></a>

```csharp
public object EnableLoadBalancer { get; set; }
```

- *Type:* object

Allow node pool traffic to be load balanced. Only works for clusters with MetalLB load balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gkeonprem_vmware_node_pool#enable_load_balancer GkeonpremVmwareNodePool#enable_load_balancer}

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.image"></a>

```csharp
public string Image { get; set; }
```

- *Type:* string

The OS image name in vCenter, only valid when using Windows.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gkeonprem_vmware_node_pool#image GkeonpremVmwareNodePool#image}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The map of Kubernetes labels (key/value pairs) to be applied to each node.

These will added in addition to any default label(s) that
Kubernetes may apply to the node.
In case of conflict in label keys, the applied set may differ depending on
the Kubernetes version -- it's best to assume the behavior is undefined
and conflicts should be avoided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gkeonprem_vmware_node_pool#labels GkeonpremVmwareNodePool#labels}

---

##### `MemoryMb`<sup>Optional</sup> <a name="MemoryMb" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.memoryMb"></a>

```csharp
public double MemoryMb { get; set; }
```

- *Type:* double

The megabytes of memory for each node in the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gkeonprem_vmware_node_pool#memory_mb GkeonpremVmwareNodePool#memory_mb}

---

##### `Replicas`<sup>Optional</sup> <a name="Replicas" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.replicas"></a>

```csharp
public double Replicas { get; set; }
```

- *Type:* double

The number of nodes in the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gkeonprem_vmware_node_pool#replicas GkeonpremVmwareNodePool#replicas}

---

##### `Taints`<sup>Optional</sup> <a name="Taints" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA.property.taints"></a>

```csharp
public object Taints { get; set; }
```

- *Type:* object

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gkeonprem_vmware_node_pool#taints GkeonpremVmwareNodePool#taints}

---

### GkeonpremVmwareNodePoolConfigTaints <a name="GkeonpremVmwareNodePoolConfigTaints" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareNodePoolConfigTaints {
    string Key,
    string Value,
    string Effect = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints.property.key">Key</a></code> | <code>string</code> | Key associated with the effect. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints.property.value">Value</a></code> | <code>string</code> | Value associated with the effect. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints.property.effect">Effect</a></code> | <code>string</code> | Available taint effects. Possible values: ["EFFECT_UNSPECIFIED", "NO_SCHEDULE", "PREFER_NO_SCHEDULE", "NO_EXECUTE"]. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Key associated with the effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gkeonprem_vmware_node_pool#key GkeonpremVmwareNodePool#key}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Value associated with the effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gkeonprem_vmware_node_pool#value GkeonpremVmwareNodePool#value}

---

##### `Effect`<sup>Optional</sup> <a name="Effect" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaints.property.effect"></a>

```csharp
public string Effect { get; set; }
```

- *Type:* string

Available taint effects. Possible values: ["EFFECT_UNSPECIFIED", "NO_SCHEDULE", "PREFER_NO_SCHEDULE", "NO_EXECUTE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gkeonprem_vmware_node_pool#effect GkeonpremVmwareNodePool#effect}

---

### GkeonpremVmwareNodePoolConfigVsphereConfig <a name="GkeonpremVmwareNodePoolConfigVsphereConfig" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareNodePoolConfigVsphereConfig {

};
```


### GkeonpremVmwareNodePoolConfigVsphereConfigTags <a name="GkeonpremVmwareNodePoolConfigVsphereConfigTags" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareNodePoolConfigVsphereConfigTags {

};
```


### GkeonpremVmwareNodePoolNodePoolAutoscaling <a name="GkeonpremVmwareNodePoolNodePoolAutoscaling" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareNodePoolNodePoolAutoscaling {
    double MaxReplicas,
    double MinReplicas
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling.property.maxReplicas">MaxReplicas</a></code> | <code>double</code> | Maximum number of replicas in the NodePool. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling.property.minReplicas">MinReplicas</a></code> | <code>double</code> | Minimum number of replicas in the NodePool. |

---

##### `MaxReplicas`<sup>Required</sup> <a name="MaxReplicas" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling.property.maxReplicas"></a>

```csharp
public double MaxReplicas { get; set; }
```

- *Type:* double

Maximum number of replicas in the NodePool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gkeonprem_vmware_node_pool#max_replicas GkeonpremVmwareNodePool#max_replicas}

---

##### `MinReplicas`<sup>Required</sup> <a name="MinReplicas" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling.property.minReplicas"></a>

```csharp
public double MinReplicas { get; set; }
```

- *Type:* double

Minimum number of replicas in the NodePool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gkeonprem_vmware_node_pool#min_replicas GkeonpremVmwareNodePool#min_replicas}

---

### GkeonpremVmwareNodePoolStatus <a name="GkeonpremVmwareNodePoolStatus" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareNodePoolStatus {

};
```


### GkeonpremVmwareNodePoolStatusConditions <a name="GkeonpremVmwareNodePoolStatusConditions" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareNodePoolStatusConditions {

};
```


### GkeonpremVmwareNodePoolTimeouts <a name="GkeonpremVmwareNodePoolTimeouts" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareNodePoolTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gkeonprem_vmware_node_pool#create GkeonpremVmwareNodePool#create}. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gkeonprem_vmware_node_pool#delete GkeonpremVmwareNodePool#delete}. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gkeonprem_vmware_node_pool#update GkeonpremVmwareNodePool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gkeonprem_vmware_node_pool#create GkeonpremVmwareNodePool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gkeonprem_vmware_node_pool#delete GkeonpremVmwareNodePool#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/gkeonprem_vmware_node_pool#update GkeonpremVmwareNodePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GkeonpremVmwareNodePoolConfigAOutputReference <a name="GkeonpremVmwareNodePoolConfigAOutputReference" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareNodePoolConfigAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.putTaints">PutTaints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetBootDiskSizeGb">ResetBootDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetCpus">ResetCpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetEnableLoadBalancer">ResetEnableLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetImage">ResetImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetMemoryMb">ResetMemoryMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetReplicas">ResetReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetTaints">ResetTaints</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTaints` <a name="PutTaints" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.putTaints"></a>

```csharp
private void PutTaints(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.putTaints.parameter.value"></a>

- *Type:* object

---

##### `ResetBootDiskSizeGb` <a name="ResetBootDiskSizeGb" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetBootDiskSizeGb"></a>

```csharp
private void ResetBootDiskSizeGb()
```

##### `ResetCpus` <a name="ResetCpus" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetCpus"></a>

```csharp
private void ResetCpus()
```

##### `ResetEnableLoadBalancer` <a name="ResetEnableLoadBalancer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetEnableLoadBalancer"></a>

```csharp
private void ResetEnableLoadBalancer()
```

##### `ResetImage` <a name="ResetImage" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetImage"></a>

```csharp
private void ResetImage()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMemoryMb` <a name="ResetMemoryMb" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetMemoryMb"></a>

```csharp
private void ResetMemoryMb()
```

##### `ResetReplicas` <a name="ResetReplicas" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetReplicas"></a>

```csharp
private void ResetReplicas()
```

##### `ResetTaints` <a name="ResetTaints" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.resetTaints"></a>

```csharp
private void ResetTaints()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.taints">Taints</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList">GkeonpremVmwareNodePoolConfigTaintsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.vsphereConfig">VsphereConfig</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList">GkeonpremVmwareNodePoolConfigVsphereConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.bootDiskSizeGbInput">BootDiskSizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.cpusInput">CpusInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.enableLoadBalancerInput">EnableLoadBalancerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.imageInput">ImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.imageTypeInput">ImageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.memoryMbInput">MemoryMbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.replicasInput">ReplicasInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.taintsInput">TaintsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.bootDiskSizeGb">BootDiskSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.cpus">Cpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.enableLoadBalancer">EnableLoadBalancer</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.imageType">ImageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.memoryMb">MemoryMb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.replicas">Replicas</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA">GkeonpremVmwareNodePoolConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Taints`<sup>Required</sup> <a name="Taints" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.taints"></a>

```csharp
public GkeonpremVmwareNodePoolConfigTaintsList Taints { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList">GkeonpremVmwareNodePoolConfigTaintsList</a>

---

##### `VsphereConfig`<sup>Required</sup> <a name="VsphereConfig" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.vsphereConfig"></a>

```csharp
public GkeonpremVmwareNodePoolConfigVsphereConfigList VsphereConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList">GkeonpremVmwareNodePoolConfigVsphereConfigList</a>

---

##### `BootDiskSizeGbInput`<sup>Optional</sup> <a name="BootDiskSizeGbInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.bootDiskSizeGbInput"></a>

```csharp
public double BootDiskSizeGbInput { get; }
```

- *Type:* double

---

##### `CpusInput`<sup>Optional</sup> <a name="CpusInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.cpusInput"></a>

```csharp
public double CpusInput { get; }
```

- *Type:* double

---

##### `EnableLoadBalancerInput`<sup>Optional</sup> <a name="EnableLoadBalancerInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.enableLoadBalancerInput"></a>

```csharp
public object EnableLoadBalancerInput { get; }
```

- *Type:* object

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.imageInput"></a>

```csharp
public string ImageInput { get; }
```

- *Type:* string

---

##### `ImageTypeInput`<sup>Optional</sup> <a name="ImageTypeInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.imageTypeInput"></a>

```csharp
public string ImageTypeInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MemoryMbInput`<sup>Optional</sup> <a name="MemoryMbInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.memoryMbInput"></a>

```csharp
public double MemoryMbInput { get; }
```

- *Type:* double

---

##### `ReplicasInput`<sup>Optional</sup> <a name="ReplicasInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.replicasInput"></a>

```csharp
public double ReplicasInput { get; }
```

- *Type:* double

---

##### `TaintsInput`<sup>Optional</sup> <a name="TaintsInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.taintsInput"></a>

```csharp
public object TaintsInput { get; }
```

- *Type:* object

---

##### `BootDiskSizeGb`<sup>Required</sup> <a name="BootDiskSizeGb" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.bootDiskSizeGb"></a>

```csharp
public double BootDiskSizeGb { get; }
```

- *Type:* double

---

##### `Cpus`<sup>Required</sup> <a name="Cpus" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.cpus"></a>

```csharp
public double Cpus { get; }
```

- *Type:* double

---

##### `EnableLoadBalancer`<sup>Required</sup> <a name="EnableLoadBalancer" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.enableLoadBalancer"></a>

```csharp
public object EnableLoadBalancer { get; }
```

- *Type:* object

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `ImageType`<sup>Required</sup> <a name="ImageType" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.imageType"></a>

```csharp
public string ImageType { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MemoryMb`<sup>Required</sup> <a name="MemoryMb" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.memoryMb"></a>

```csharp
public double MemoryMb { get; }
```

- *Type:* double

---

##### `Replicas`<sup>Required</sup> <a name="Replicas" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.replicas"></a>

```csharp
public double Replicas { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigAOutputReference.property.internalValue"></a>

```csharp
public GkeonpremVmwareNodePoolConfigA InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigA">GkeonpremVmwareNodePoolConfigA</a>

---


### GkeonpremVmwareNodePoolConfigTaintsList <a name="GkeonpremVmwareNodePoolConfigTaintsList" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareNodePoolConfigTaintsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.get"></a>

```csharp
private GkeonpremVmwareNodePoolConfigTaintsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GkeonpremVmwareNodePoolConfigTaintsOutputReference <a name="GkeonpremVmwareNodePoolConfigTaintsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareNodePoolConfigTaintsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.resetEffect">ResetEffect</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEffect` <a name="ResetEffect" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.resetEffect"></a>

```csharp
private void ResetEffect()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.effectInput">EffectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.effect">Effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EffectInput`<sup>Optional</sup> <a name="EffectInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.effectInput"></a>

```csharp
public string EffectInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.effect"></a>

```csharp
public string Effect { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigTaintsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GkeonpremVmwareNodePoolConfigVsphereConfigList <a name="GkeonpremVmwareNodePoolConfigVsphereConfigList" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareNodePoolConfigVsphereConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList.get"></a>

```csharp
private GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference <a name="GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.datastore">Datastore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList">GkeonpremVmwareNodePoolConfigVsphereConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfig">GkeonpremVmwareNodePoolConfigVsphereConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Datastore`<sup>Required</sup> <a name="Datastore" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.datastore"></a>

```csharp
public string Datastore { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.tags"></a>

```csharp
public GkeonpremVmwareNodePoolConfigVsphereConfigTagsList Tags { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList">GkeonpremVmwareNodePoolConfigVsphereConfigTagsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigOutputReference.property.internalValue"></a>

```csharp
public GkeonpremVmwareNodePoolConfigVsphereConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfig">GkeonpremVmwareNodePoolConfigVsphereConfig</a>

---


### GkeonpremVmwareNodePoolConfigVsphereConfigTagsList <a name="GkeonpremVmwareNodePoolConfigVsphereConfigTagsList" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareNodePoolConfigVsphereConfigTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.get"></a>

```csharp
private GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference <a name="GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.tag">Tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTags">GkeonpremVmwareNodePoolConfigVsphereConfigTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.tag"></a>

```csharp
public string Tag { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTagsOutputReference.property.internalValue"></a>

```csharp
public GkeonpremVmwareNodePoolConfigVsphereConfigTags InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolConfigVsphereConfigTags">GkeonpremVmwareNodePoolConfigVsphereConfigTags</a>

---


### GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference <a name="GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.maxReplicasInput">MaxReplicasInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.minReplicasInput">MinReplicasInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.maxReplicas">MaxReplicas</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.minReplicas">MinReplicas</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling">GkeonpremVmwareNodePoolNodePoolAutoscaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxReplicasInput`<sup>Optional</sup> <a name="MaxReplicasInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.maxReplicasInput"></a>

```csharp
public double MaxReplicasInput { get; }
```

- *Type:* double

---

##### `MinReplicasInput`<sup>Optional</sup> <a name="MinReplicasInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.minReplicasInput"></a>

```csharp
public double MinReplicasInput { get; }
```

- *Type:* double

---

##### `MaxReplicas`<sup>Required</sup> <a name="MaxReplicas" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.maxReplicas"></a>

```csharp
public double MaxReplicas { get; }
```

- *Type:* double

---

##### `MinReplicas`<sup>Required</sup> <a name="MinReplicas" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.minReplicas"></a>

```csharp
public double MinReplicas { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscalingOutputReference.property.internalValue"></a>

```csharp
public GkeonpremVmwareNodePoolNodePoolAutoscaling InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolNodePoolAutoscaling">GkeonpremVmwareNodePoolNodePoolAutoscaling</a>

---


### GkeonpremVmwareNodePoolStatusConditionsList <a name="GkeonpremVmwareNodePoolStatusConditionsList" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareNodePoolStatusConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.get"></a>

```csharp
private GkeonpremVmwareNodePoolStatusConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GkeonpremVmwareNodePoolStatusConditionsOutputReference <a name="GkeonpremVmwareNodePoolStatusConditionsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareNodePoolStatusConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.lastTransitionTime">LastTransitionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.reason">Reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditions">GkeonpremVmwareNodePoolStatusConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LastTransitionTime`<sup>Required</sup> <a name="LastTransitionTime" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.lastTransitionTime"></a>

```csharp
public string LastTransitionTime { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.reason"></a>

```csharp
public string Reason { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsOutputReference.property.internalValue"></a>

```csharp
public GkeonpremVmwareNodePoolStatusConditions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditions">GkeonpremVmwareNodePoolStatusConditions</a>

---


### GkeonpremVmwareNodePoolStatusList <a name="GkeonpremVmwareNodePoolStatusList" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareNodePoolStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.get"></a>

```csharp
private GkeonpremVmwareNodePoolStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GkeonpremVmwareNodePoolStatusOutputReference <a name="GkeonpremVmwareNodePoolStatusOutputReference" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareNodePoolStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList">GkeonpremVmwareNodePoolStatusConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatus">GkeonpremVmwareNodePoolStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.property.conditions"></a>

```csharp
public GkeonpremVmwareNodePoolStatusConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusConditionsList">GkeonpremVmwareNodePoolStatusConditionsList</a>

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.property.errorMessage"></a>

```csharp
public string ErrorMessage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatusOutputReference.property.internalValue"></a>

```csharp
public GkeonpremVmwareNodePoolStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolStatus">GkeonpremVmwareNodePoolStatus</a>

---


### GkeonpremVmwareNodePoolTimeoutsOutputReference <a name="GkeonpremVmwareNodePoolTimeoutsOutputReference" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeonpremVmwareNodePoolTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeonpremVmwareNodePool.GkeonpremVmwareNodePoolTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



