# `serviceNetworkingVpcServiceControls` Submodule <a name="`serviceNetworkingVpcServiceControls` Submodule" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceNetworkingVpcServiceControls <a name="ServiceNetworkingVpcServiceControls" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/service_networking_vpc_service_controls google_service_networking_vpc_service_controls}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ServiceNetworkingVpcServiceControls(Construct Scope, string Id, ServiceNetworkingVpcServiceControlsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig">ServiceNetworkingVpcServiceControlsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig">ServiceNetworkingVpcServiceControlsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.putTimeouts"></a>

```csharp
private void PutTimeouts(ServiceNetworkingVpcServiceControlsTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts">ServiceNetworkingVpcServiceControlsTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceNetworkingVpcServiceControls resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ServiceNetworkingVpcServiceControls.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ServiceNetworkingVpcServiceControls.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ServiceNetworkingVpcServiceControls.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ServiceNetworkingVpcServiceControls.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ServiceNetworkingVpcServiceControls resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServiceNetworkingVpcServiceControls to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServiceNetworkingVpcServiceControls that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/service_networking_vpc_service_controls#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ServiceNetworkingVpcServiceControls to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference">ServiceNetworkingVpcServiceControlsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.service">Service</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.timeouts"></a>

```csharp
public ServiceNetworkingVpcServiceControlsTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference">ServiceNetworkingVpcServiceControlsTimeoutsOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControls.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceNetworkingVpcServiceControlsConfig <a name="ServiceNetworkingVpcServiceControlsConfig" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ServiceNetworkingVpcServiceControlsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Enabled,
    string Network,
    string Service,
    string Id = null,
    string Project = null,
    ServiceNetworkingVpcServiceControlsTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.enabled">Enabled</a></code> | <code>object</code> | Desired VPC Service Controls state service producer VPC network, as described at the top of this page. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.network">Network</a></code> | <code>string</code> | The network that the consumer is using to connect with services. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.service">Service</a></code> | <code>string</code> | The service that is managing peering connectivity for a service producer's organization. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/service_networking_vpc_service_controls#id ServiceNetworkingVpcServiceControls#id}. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.project">Project</a></code> | <code>string</code> | The id of the Google Cloud project containing the consumer network. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts">ServiceNetworkingVpcServiceControlsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Desired VPC Service Controls state service producer VPC network, as described at the top of this page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/service_networking_vpc_service_controls#enabled ServiceNetworkingVpcServiceControls#enabled}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The network that the consumer is using to connect with services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/service_networking_vpc_service_controls#network ServiceNetworkingVpcServiceControls#network}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

The service that is managing peering connectivity for a service producer's organization.

For Google services that support this
functionality, this value is 'servicenetworking.googleapis.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/service_networking_vpc_service_controls#service ServiceNetworkingVpcServiceControls#service}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/service_networking_vpc_service_controls#id ServiceNetworkingVpcServiceControls#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The id of the Google Cloud project containing the consumer network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/service_networking_vpc_service_controls#project ServiceNetworkingVpcServiceControls#project}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsConfig.property.timeouts"></a>

```csharp
public ServiceNetworkingVpcServiceControlsTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts">ServiceNetworkingVpcServiceControlsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/service_networking_vpc_service_controls#timeouts ServiceNetworkingVpcServiceControls#timeouts}

---

### ServiceNetworkingVpcServiceControlsTimeouts <a name="ServiceNetworkingVpcServiceControlsTimeouts" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ServiceNetworkingVpcServiceControlsTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/service_networking_vpc_service_controls#create ServiceNetworkingVpcServiceControls#create}. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/service_networking_vpc_service_controls#delete ServiceNetworkingVpcServiceControls#delete}. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/service_networking_vpc_service_controls#update ServiceNetworkingVpcServiceControls#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/service_networking_vpc_service_controls#create ServiceNetworkingVpcServiceControls#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/service_networking_vpc_service_controls#delete ServiceNetworkingVpcServiceControls#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/service_networking_vpc_service_controls#update ServiceNetworkingVpcServiceControls#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceNetworkingVpcServiceControlsTimeoutsOutputReference <a name="ServiceNetworkingVpcServiceControlsTimeoutsOutputReference" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ServiceNetworkingVpcServiceControlsTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.serviceNetworkingVpcServiceControls.ServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



