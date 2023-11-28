# `computeTargetGrpcProxy` Submodule <a name="`computeTargetGrpcProxy` Submodule" id="@cdktf/provider-google.computeTargetGrpcProxy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeTargetGrpcProxy <a name="ComputeTargetGrpcProxy" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/compute_target_grpc_proxy google_compute_target_grpc_proxy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeTargetGrpcProxy(Construct Scope, string Id, ComputeTargetGrpcProxyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyConfig">ComputeTargetGrpcProxyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyConfig">ComputeTargetGrpcProxyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.resetUrlMap">ResetUrlMap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.resetValidateForProxyless">ResetValidateForProxyless</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeTargetGrpcProxyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeouts">ComputeTargetGrpcProxyTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUrlMap` <a name="ResetUrlMap" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.resetUrlMap"></a>

```csharp
private void ResetUrlMap()
```

##### `ResetValidateForProxyless` <a name="ResetValidateForProxyless" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.resetValidateForProxyless"></a>

```csharp
private void ResetValidateForProxyless()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeTargetGrpcProxy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeTargetGrpcProxy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeTargetGrpcProxy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeTargetGrpcProxy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeTargetGrpcProxy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ComputeTargetGrpcProxy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeTargetGrpcProxy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeTargetGrpcProxy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/compute_target_grpc_proxy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ComputeTargetGrpcProxy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.fingerprint">Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.selfLinkWithId">SelfLinkWithId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference">ComputeTargetGrpcProxyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.urlMapInput">UrlMapInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.validateForProxylessInput">ValidateForProxylessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.urlMap">UrlMap</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.validateForProxyless">ValidateForProxyless</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.fingerprint"></a>

```csharp
public string Fingerprint { get; }
```

- *Type:* string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `SelfLinkWithId`<sup>Required</sup> <a name="SelfLinkWithId" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.selfLinkWithId"></a>

```csharp
public string SelfLinkWithId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.timeouts"></a>

```csharp
public ComputeTargetGrpcProxyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference">ComputeTargetGrpcProxyTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UrlMapInput`<sup>Optional</sup> <a name="UrlMapInput" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.urlMapInput"></a>

```csharp
public string UrlMapInput { get; }
```

- *Type:* string

---

##### `ValidateForProxylessInput`<sup>Optional</sup> <a name="ValidateForProxylessInput" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.validateForProxylessInput"></a>

```csharp
public object ValidateForProxylessInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `UrlMap`<sup>Required</sup> <a name="UrlMap" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.urlMap"></a>

```csharp
public string UrlMap { get; }
```

- *Type:* string

---

##### `ValidateForProxyless`<sup>Required</sup> <a name="ValidateForProxyless" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.validateForProxyless"></a>

```csharp
public object ValidateForProxyless { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeTargetGrpcProxyConfig <a name="ComputeTargetGrpcProxyConfig" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeTargetGrpcProxyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Description = null,
    string Id = null,
    string Project = null,
    ComputeTargetGrpcProxyTimeouts Timeouts = null,
    string UrlMap = null,
    object ValidateForProxyless = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/compute_target_grpc_proxy#id ComputeTargetGrpcProxy#id}. |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/compute_target_grpc_proxy#project ComputeTargetGrpcProxy#project}. |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeouts">ComputeTargetGrpcProxyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyConfig.property.urlMap">UrlMap</a></code> | <code>string</code> | URL to the UrlMap resource that defines the mapping from URL to the BackendService. |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyConfig.property.validateForProxyless">ValidateForProxyless</a></code> | <code>object</code> | If true, indicates that the BackendServices referenced by the urlMap may be accessed by gRPC applications without using a sidecar proxy. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource.

Provided by the client when the resource
is created. The name must be 1-63 characters long, and comply
with RFC1035. Specifically, the name must be 1-63 characters long
and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which
means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/compute_target_grpc_proxy#name ComputeTargetGrpcProxy#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/compute_target_grpc_proxy#description ComputeTargetGrpcProxy#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/compute_target_grpc_proxy#id ComputeTargetGrpcProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/compute_target_grpc_proxy#project ComputeTargetGrpcProxy#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyConfig.property.timeouts"></a>

```csharp
public ComputeTargetGrpcProxyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeouts">ComputeTargetGrpcProxyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/compute_target_grpc_proxy#timeouts ComputeTargetGrpcProxy#timeouts}

---

##### `UrlMap`<sup>Optional</sup> <a name="UrlMap" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyConfig.property.urlMap"></a>

```csharp
public string UrlMap { get; set; }
```

- *Type:* string

URL to the UrlMap resource that defines the mapping from URL to the BackendService.

The protocol field in the BackendService
must be set to GRPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/compute_target_grpc_proxy#url_map ComputeTargetGrpcProxy#url_map}

---

##### `ValidateForProxyless`<sup>Optional</sup> <a name="ValidateForProxyless" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyConfig.property.validateForProxyless"></a>

```csharp
public object ValidateForProxyless { get; set; }
```

- *Type:* object

If true, indicates that the BackendServices referenced by the urlMap may be accessed by gRPC applications without using a sidecar proxy.

This will enable configuration checks on urlMap
and its referenced BackendServices to not allow unsupported features.
A gRPC application must use "xds:///" scheme in the target URI
of the service it is connecting to. If false, indicates that the
BackendServices referenced by the urlMap will be accessed by gRPC
applications via a sidecar proxy. In this case, a gRPC application
must not use "xds:///" scheme in the target URI of the service
it is connecting to

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/compute_target_grpc_proxy#validate_for_proxyless ComputeTargetGrpcProxy#validate_for_proxyless}

---

### ComputeTargetGrpcProxyTimeouts <a name="ComputeTargetGrpcProxyTimeouts" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeTargetGrpcProxyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/compute_target_grpc_proxy#create ComputeTargetGrpcProxy#create}. |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/compute_target_grpc_proxy#delete ComputeTargetGrpcProxy#delete}. |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/compute_target_grpc_proxy#update ComputeTargetGrpcProxy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/compute_target_grpc_proxy#create ComputeTargetGrpcProxy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/compute_target_grpc_proxy#delete ComputeTargetGrpcProxy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/compute_target_grpc_proxy#update ComputeTargetGrpcProxy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeTargetGrpcProxyTimeoutsOutputReference <a name="ComputeTargetGrpcProxyTimeoutsOutputReference" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeTargetGrpcProxyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeTargetGrpcProxy.ComputeTargetGrpcProxyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



