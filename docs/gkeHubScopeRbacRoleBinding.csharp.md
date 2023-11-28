# `gkeHubScopeRbacRoleBinding` Submodule <a name="`gkeHubScopeRbacRoleBinding` Submodule" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GkeHubScopeRbacRoleBinding <a name="GkeHubScopeRbacRoleBinding" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/gke_hub_scope_rbac_role_binding google_gke_hub_scope_rbac_role_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeHubScopeRbacRoleBinding(Construct Scope, string Id, GkeHubScopeRbacRoleBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig">GkeHubScopeRbacRoleBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig">GkeHubScopeRbacRoleBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.putRole">PutRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetGroup">ResetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetUser">ResetUser</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutRole` <a name="PutRole" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.putRole"></a>

```csharp
private void PutRole(GkeHubScopeRbacRoleBindingRole Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.putRole.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole">GkeHubScopeRbacRoleBindingRole</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.putTimeouts"></a>

```csharp
private void PutTimeouts(GkeHubScopeRbacRoleBindingTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts">GkeHubScopeRbacRoleBindingTimeouts</a>

---

##### `ResetGroup` <a name="ResetGroup" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetGroup"></a>

```csharp
private void ResetGroup()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUser` <a name="ResetUser" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetUser"></a>

```csharp
private void ResetUser()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GkeHubScopeRbacRoleBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

GkeHubScopeRbacRoleBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

GkeHubScopeRbacRoleBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

GkeHubScopeRbacRoleBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

GkeHubScopeRbacRoleBinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GkeHubScopeRbacRoleBinding resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GkeHubScopeRbacRoleBinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GkeHubScopeRbacRoleBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/gke_hub_scope_rbac_role_binding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GkeHubScopeRbacRoleBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.deleteTime">DeleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.role">Role</a></code> | <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference">GkeHubScopeRbacRoleBindingRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.state">State</a></code> | <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList">GkeHubScopeRbacRoleBindingStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference">GkeHubScopeRbacRoleBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.groupInput">GroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.roleInput">RoleInput</a></code> | <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole">GkeHubScopeRbacRoleBindingRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.scopeIdInput">ScopeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.scopeRbacRoleBindingIdInput">ScopeRbacRoleBindingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.userInput">UserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.group">Group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.scopeId">ScopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.scopeRbacRoleBindingId">ScopeRbacRoleBindingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.user">User</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.deleteTime"></a>

```csharp
public string DeleteTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.role"></a>

```csharp
public GkeHubScopeRbacRoleBindingRoleOutputReference Role { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference">GkeHubScopeRbacRoleBindingRoleOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.state"></a>

```csharp
public GkeHubScopeRbacRoleBindingStateList State { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList">GkeHubScopeRbacRoleBindingStateList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.timeouts"></a>

```csharp
public GkeHubScopeRbacRoleBindingTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference">GkeHubScopeRbacRoleBindingTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.groupInput"></a>

```csharp
public string GroupInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.roleInput"></a>

```csharp
public GkeHubScopeRbacRoleBindingRole RoleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole">GkeHubScopeRbacRoleBindingRole</a>

---

##### `ScopeIdInput`<sup>Optional</sup> <a name="ScopeIdInput" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.scopeIdInput"></a>

```csharp
public string ScopeIdInput { get; }
```

- *Type:* string

---

##### `ScopeRbacRoleBindingIdInput`<sup>Optional</sup> <a name="ScopeRbacRoleBindingIdInput" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.scopeRbacRoleBindingIdInput"></a>

```csharp
public string ScopeRbacRoleBindingIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.userInput"></a>

```csharp
public string UserInput { get; }
```

- *Type:* string

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.group"></a>

```csharp
public string Group { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ScopeId`<sup>Required</sup> <a name="ScopeId" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.scopeId"></a>

```csharp
public string ScopeId { get; }
```

- *Type:* string

---

##### `ScopeRbacRoleBindingId`<sup>Required</sup> <a name="ScopeRbacRoleBindingId" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.scopeRbacRoleBindingId"></a>

```csharp
public string ScopeRbacRoleBindingId { get; }
```

- *Type:* string

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.user"></a>

```csharp
public string User { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GkeHubScopeRbacRoleBindingConfig <a name="GkeHubScopeRbacRoleBindingConfig" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeHubScopeRbacRoleBindingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    GkeHubScopeRbacRoleBindingRole Role,
    string ScopeId,
    string ScopeRbacRoleBindingId,
    string Group = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GkeHubScopeRbacRoleBindingTimeouts Timeouts = null,
    string User = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.role">Role</a></code> | <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole">GkeHubScopeRbacRoleBindingRole</a></code> | role block. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.scopeId">ScopeId</a></code> | <code>string</code> | Id of the scope. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.scopeRbacRoleBindingId">ScopeRbacRoleBindingId</a></code> | <code>string</code> | The client-provided identifier of the RBAC Role Binding. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.group">Group</a></code> | <code>string</code> | Principal that is be authorized in the cluster (at least of one the oneof is required). |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/gke_hub_scope_rbac_role_binding#id GkeHubScopeRbacRoleBinding#id}. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels for this ScopeRBACRoleBinding. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/gke_hub_scope_rbac_role_binding#project GkeHubScopeRbacRoleBinding#project}. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts">GkeHubScopeRbacRoleBindingTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.user">User</a></code> | <code>string</code> | Principal that is be authorized in the cluster (at least of one the oneof is required). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.role"></a>

```csharp
public GkeHubScopeRbacRoleBindingRole Role { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole">GkeHubScopeRbacRoleBindingRole</a>

role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/gke_hub_scope_rbac_role_binding#role GkeHubScopeRbacRoleBinding#role}

---

##### `ScopeId`<sup>Required</sup> <a name="ScopeId" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.scopeId"></a>

```csharp
public string ScopeId { get; set; }
```

- *Type:* string

Id of the scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/gke_hub_scope_rbac_role_binding#scope_id GkeHubScopeRbacRoleBinding#scope_id}

---

##### `ScopeRbacRoleBindingId`<sup>Required</sup> <a name="ScopeRbacRoleBindingId" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.scopeRbacRoleBindingId"></a>

```csharp
public string ScopeRbacRoleBindingId { get; set; }
```

- *Type:* string

The client-provided identifier of the RBAC Role Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/gke_hub_scope_rbac_role_binding#scope_rbac_role_binding_id GkeHubScopeRbacRoleBinding#scope_rbac_role_binding_id}

---

##### `Group`<sup>Optional</sup> <a name="Group" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.group"></a>

```csharp
public string Group { get; set; }
```

- *Type:* string

Principal that is be authorized in the cluster (at least of one the oneof is required).

Updating one will unset the other automatically.
group is the group, as seen by the kubernetes cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/gke_hub_scope_rbac_role_binding#group GkeHubScopeRbacRoleBinding#group}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/gke_hub_scope_rbac_role_binding#id GkeHubScopeRbacRoleBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels for this ScopeRBACRoleBinding.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/gke_hub_scope_rbac_role_binding#labels GkeHubScopeRbacRoleBinding#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/gke_hub_scope_rbac_role_binding#project GkeHubScopeRbacRoleBinding#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.timeouts"></a>

```csharp
public GkeHubScopeRbacRoleBindingTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts">GkeHubScopeRbacRoleBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/gke_hub_scope_rbac_role_binding#timeouts GkeHubScopeRbacRoleBinding#timeouts}

---

##### `User`<sup>Optional</sup> <a name="User" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.user"></a>

```csharp
public string User { get; set; }
```

- *Type:* string

Principal that is be authorized in the cluster (at least of one the oneof is required).

Updating one will unset the other automatically.
user is the name of the user as seen by the kubernetes cluster, example
"alice" or "alice@domain.tld"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/gke_hub_scope_rbac_role_binding#user GkeHubScopeRbacRoleBinding#user}

---

### GkeHubScopeRbacRoleBindingRole <a name="GkeHubScopeRbacRoleBindingRole" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeHubScopeRbacRoleBindingRole {
    string PredefinedRole = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole.property.predefinedRole">PredefinedRole</a></code> | <code>string</code> | PredefinedRole is an ENUM representation of the default Kubernetes Roles Possible values: ["UNKNOWN", "ADMIN", "EDIT", "VIEW"]. |

---

##### `PredefinedRole`<sup>Optional</sup> <a name="PredefinedRole" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole.property.predefinedRole"></a>

```csharp
public string PredefinedRole { get; set; }
```

- *Type:* string

PredefinedRole is an ENUM representation of the default Kubernetes Roles Possible values: ["UNKNOWN", "ADMIN", "EDIT", "VIEW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/gke_hub_scope_rbac_role_binding#predefined_role GkeHubScopeRbacRoleBinding#predefined_role}

---

### GkeHubScopeRbacRoleBindingState <a name="GkeHubScopeRbacRoleBindingState" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingState.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeHubScopeRbacRoleBindingState {

};
```


### GkeHubScopeRbacRoleBindingTimeouts <a name="GkeHubScopeRbacRoleBindingTimeouts" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeHubScopeRbacRoleBindingTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/gke_hub_scope_rbac_role_binding#create GkeHubScopeRbacRoleBinding#create}. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/gke_hub_scope_rbac_role_binding#delete GkeHubScopeRbacRoleBinding#delete}. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/gke_hub_scope_rbac_role_binding#update GkeHubScopeRbacRoleBinding#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/gke_hub_scope_rbac_role_binding#create GkeHubScopeRbacRoleBinding#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/gke_hub_scope_rbac_role_binding#delete GkeHubScopeRbacRoleBinding#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/gke_hub_scope_rbac_role_binding#update GkeHubScopeRbacRoleBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GkeHubScopeRbacRoleBindingRoleOutputReference <a name="GkeHubScopeRbacRoleBindingRoleOutputReference" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeHubScopeRbacRoleBindingRoleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.resetPredefinedRole">ResetPredefinedRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPredefinedRole` <a name="ResetPredefinedRole" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.resetPredefinedRole"></a>

```csharp
private void ResetPredefinedRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.property.predefinedRoleInput">PredefinedRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.property.predefinedRole">PredefinedRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole">GkeHubScopeRbacRoleBindingRole</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PredefinedRoleInput`<sup>Optional</sup> <a name="PredefinedRoleInput" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.property.predefinedRoleInput"></a>

```csharp
public string PredefinedRoleInput { get; }
```

- *Type:* string

---

##### `PredefinedRole`<sup>Required</sup> <a name="PredefinedRole" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.property.predefinedRole"></a>

```csharp
public string PredefinedRole { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.property.internalValue"></a>

```csharp
public GkeHubScopeRbacRoleBindingRole InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole">GkeHubScopeRbacRoleBindingRole</a>

---


### GkeHubScopeRbacRoleBindingStateList <a name="GkeHubScopeRbacRoleBindingStateList" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeHubScopeRbacRoleBindingStateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.get"></a>

```csharp
private GkeHubScopeRbacRoleBindingStateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GkeHubScopeRbacRoleBindingStateOutputReference <a name="GkeHubScopeRbacRoleBindingStateOutputReference" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeHubScopeRbacRoleBindingStateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.property.code">Code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingState">GkeHubScopeRbacRoleBindingState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.property.code"></a>

```csharp
public string Code { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.property.internalValue"></a>

```csharp
public GkeHubScopeRbacRoleBindingState InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingState">GkeHubScopeRbacRoleBindingState</a>

---


### GkeHubScopeRbacRoleBindingTimeoutsOutputReference <a name="GkeHubScopeRbacRoleBindingTimeoutsOutputReference" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GkeHubScopeRbacRoleBindingTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



