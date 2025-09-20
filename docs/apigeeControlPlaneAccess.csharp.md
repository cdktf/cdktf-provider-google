# `apigeeControlPlaneAccess` Submodule <a name="`apigeeControlPlaneAccess` Submodule" id="@cdktf/provider-google.apigeeControlPlaneAccess"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeControlPlaneAccess <a name="ApigeeControlPlaneAccess" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_control_plane_access google_apigee_control_plane_access}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeControlPlaneAccess(Construct Scope, string Id, ApigeeControlPlaneAccessConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig">ApigeeControlPlaneAccessConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig">ApigeeControlPlaneAccessConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.resetAnalyticsPublisherIdentities">ResetAnalyticsPublisherIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.resetSynchronizerIdentities">ResetSynchronizerIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.putTimeouts"></a>

```csharp
private void PutTimeouts(ApigeeControlPlaneAccessTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeouts">ApigeeControlPlaneAccessTimeouts</a>

---

##### `ResetAnalyticsPublisherIdentities` <a name="ResetAnalyticsPublisherIdentities" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.resetAnalyticsPublisherIdentities"></a>

```csharp
private void ResetAnalyticsPublisherIdentities()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSynchronizerIdentities` <a name="ResetSynchronizerIdentities" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.resetSynchronizerIdentities"></a>

```csharp
private void ResetSynchronizerIdentities()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApigeeControlPlaneAccess resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ApigeeControlPlaneAccess.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ApigeeControlPlaneAccess.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ApigeeControlPlaneAccess.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ApigeeControlPlaneAccess.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ApigeeControlPlaneAccess resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigeeControlPlaneAccess to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigeeControlPlaneAccess that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_control_plane_access#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ApigeeControlPlaneAccess to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference">ApigeeControlPlaneAccessTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.analyticsPublisherIdentitiesInput">AnalyticsPublisherIdentitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.synchronizerIdentitiesInput">SynchronizerIdentitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.analyticsPublisherIdentities">AnalyticsPublisherIdentities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.synchronizerIdentities">SynchronizerIdentities</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.timeouts"></a>

```csharp
public ApigeeControlPlaneAccessTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference">ApigeeControlPlaneAccessTimeoutsOutputReference</a>

---

##### `AnalyticsPublisherIdentitiesInput`<sup>Optional</sup> <a name="AnalyticsPublisherIdentitiesInput" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.analyticsPublisherIdentitiesInput"></a>

```csharp
public string[] AnalyticsPublisherIdentitiesInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SynchronizerIdentitiesInput`<sup>Optional</sup> <a name="SynchronizerIdentitiesInput" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.synchronizerIdentitiesInput"></a>

```csharp
public string[] SynchronizerIdentitiesInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AnalyticsPublisherIdentities`<sup>Required</sup> <a name="AnalyticsPublisherIdentities" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.analyticsPublisherIdentities"></a>

```csharp
public string[] AnalyticsPublisherIdentities { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SynchronizerIdentities`<sup>Required</sup> <a name="SynchronizerIdentities" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.synchronizerIdentities"></a>

```csharp
public string[] SynchronizerIdentities { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccess.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeControlPlaneAccessConfig <a name="ApigeeControlPlaneAccessConfig" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeControlPlaneAccessConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string[] AnalyticsPublisherIdentities = null,
    string Id = null,
    string[] SynchronizerIdentities = null,
    ApigeeControlPlaneAccessTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.name">Name</a></code> | <code>string</code> | Name of the Apigee organization. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.analyticsPublisherIdentities">AnalyticsPublisherIdentities</a></code> | <code>string[]</code> | Array of service accounts authorized to publish analytics data to the control plane, each specified using the following format: 'serviceAccount:service-account-name'. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_control_plane_access#id ApigeeControlPlaneAccess#id}. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.synchronizerIdentities">SynchronizerIdentities</a></code> | <code>string[]</code> | Array of service accounts to grant access to control plane resources (for the Synchronizer component), each specified using the following format: 'serviceAccount:service-account-name'. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeouts">ApigeeControlPlaneAccessTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the Apigee organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_control_plane_access#name ApigeeControlPlaneAccess#name}

---

##### `AnalyticsPublisherIdentities`<sup>Optional</sup> <a name="AnalyticsPublisherIdentities" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.analyticsPublisherIdentities"></a>

```csharp
public string[] AnalyticsPublisherIdentities { get; set; }
```

- *Type:* string[]

Array of service accounts authorized to publish analytics data to the control plane, each specified using the following format: 'serviceAccount:service-account-name'.

The 'service-account-name' is formatted like an email address. For example: serviceAccount@my_project_id.iam.gserviceaccount.com

You might specify multiple service accounts, for example, if you have multiple environments and wish to assign a unique service account to each one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_control_plane_access#analytics_publisher_identities ApigeeControlPlaneAccess#analytics_publisher_identities}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_control_plane_access#id ApigeeControlPlaneAccess#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SynchronizerIdentities`<sup>Optional</sup> <a name="SynchronizerIdentities" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.synchronizerIdentities"></a>

```csharp
public string[] SynchronizerIdentities { get; set; }
```

- *Type:* string[]

Array of service accounts to grant access to control plane resources (for the Synchronizer component), each specified using the following format: 'serviceAccount:service-account-name'.

The 'service-account-name' is formatted like an email address. For example: serviceAccount@my_project_id.iam.gserviceaccount.com

You might specify multiple service accounts, for example, if you have multiple environments and wish to assign a unique service account to each one.

The service accounts must have **Apigee Synchronizer Manager** role. See also [Create service accounts](https://cloud.google.com/apigee/docs/hybrid/v1.8/sa-about#create-the-service-accounts).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_control_plane_access#synchronizer_identities ApigeeControlPlaneAccess#synchronizer_identities}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessConfig.property.timeouts"></a>

```csharp
public ApigeeControlPlaneAccessTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeouts">ApigeeControlPlaneAccessTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_control_plane_access#timeouts ApigeeControlPlaneAccess#timeouts}

---

### ApigeeControlPlaneAccessTimeouts <a name="ApigeeControlPlaneAccessTimeouts" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeControlPlaneAccessTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_control_plane_access#create ApigeeControlPlaneAccess#create}. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_control_plane_access#delete ApigeeControlPlaneAccess#delete}. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_control_plane_access#update ApigeeControlPlaneAccess#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_control_plane_access#create ApigeeControlPlaneAccess#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_control_plane_access#delete ApigeeControlPlaneAccess#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_control_plane_access#update ApigeeControlPlaneAccess#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeControlPlaneAccessTimeoutsOutputReference <a name="ApigeeControlPlaneAccessTimeoutsOutputReference" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeControlPlaneAccessTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeControlPlaneAccess.ApigeeControlPlaneAccessTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



