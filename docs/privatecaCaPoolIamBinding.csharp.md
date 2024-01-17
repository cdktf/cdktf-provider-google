# `privatecaCaPoolIamBinding` Submodule <a name="`privatecaCaPoolIamBinding` Submodule" id="@cdktf/provider-google.privatecaCaPoolIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivatecaCaPoolIamBinding <a name="PrivatecaCaPoolIamBinding" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/privateca_ca_pool_iam_binding google_privateca_ca_pool_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolIamBinding(Construct Scope, string Id, PrivatecaCaPoolIamBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConfig">PrivatecaCaPoolIamBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConfig">PrivatecaCaPoolIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.putCondition"></a>

```csharp
private void PutCondition(PrivatecaCaPoolIamBindingCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingCondition">PrivatecaCaPoolIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PrivatecaCaPoolIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

PrivatecaCaPoolIamBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

PrivatecaCaPoolIamBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

PrivatecaCaPoolIamBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

PrivatecaCaPoolIamBinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PrivatecaCaPoolIamBinding resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PrivatecaCaPoolIamBinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PrivatecaCaPoolIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/privateca_ca_pool_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PrivatecaCaPoolIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference">PrivatecaCaPoolIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.caPoolInput">CaPoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingCondition">PrivatecaCaPoolIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.membersInput">MembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.caPool">CaPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.members">Members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.role">Role</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.condition"></a>

```csharp
public PrivatecaCaPoolIamBindingConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference">PrivatecaCaPoolIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `CaPoolInput`<sup>Optional</sup> <a name="CaPoolInput" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.caPoolInput"></a>

```csharp
public string CaPoolInput { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.conditionInput"></a>

```csharp
public PrivatecaCaPoolIamBindingCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingCondition">PrivatecaCaPoolIamBindingCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.membersInput"></a>

```csharp
public string[] MembersInput { get; }
```

- *Type:* string[]

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `CaPool`<sup>Required</sup> <a name="CaPool" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.caPool"></a>

```csharp
public string CaPool { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.members"></a>

```csharp
public string[] Members { get; }
```

- *Type:* string[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivatecaCaPoolIamBindingCondition <a name="PrivatecaCaPoolIamBindingCondition" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolIamBindingCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/privateca_ca_pool_iam_binding#expression PrivatecaCaPoolIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/privateca_ca_pool_iam_binding#title PrivatecaCaPoolIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/privateca_ca_pool_iam_binding#description PrivatecaCaPoolIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/privateca_ca_pool_iam_binding#expression PrivatecaCaPoolIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/privateca_ca_pool_iam_binding#title PrivatecaCaPoolIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/privateca_ca_pool_iam_binding#description PrivatecaCaPoolIamBinding#description}.

---

### PrivatecaCaPoolIamBindingConfig <a name="PrivatecaCaPoolIamBindingConfig" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolIamBindingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CaPool,
    string[] Members,
    string Role,
    PrivatecaCaPoolIamBindingCondition Condition = null,
    string Id = null,
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConfig.property.caPool">CaPool</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/privateca_ca_pool_iam_binding#ca_pool PrivatecaCaPoolIamBinding#ca_pool}. |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConfig.property.members">Members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/privateca_ca_pool_iam_binding#members PrivatecaCaPoolIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/privateca_ca_pool_iam_binding#role PrivatecaCaPoolIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingCondition">PrivatecaCaPoolIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/privateca_ca_pool_iam_binding#id PrivatecaCaPoolIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/privateca_ca_pool_iam_binding#location PrivatecaCaPoolIamBinding#location}. |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/privateca_ca_pool_iam_binding#project PrivatecaCaPoolIamBinding#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CaPool`<sup>Required</sup> <a name="CaPool" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConfig.property.caPool"></a>

```csharp
public string CaPool { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/privateca_ca_pool_iam_binding#ca_pool PrivatecaCaPoolIamBinding#ca_pool}.

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConfig.property.members"></a>

```csharp
public string[] Members { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/privateca_ca_pool_iam_binding#members PrivatecaCaPoolIamBinding#members}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/privateca_ca_pool_iam_binding#role PrivatecaCaPoolIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConfig.property.condition"></a>

```csharp
public PrivatecaCaPoolIamBindingCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingCondition">PrivatecaCaPoolIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/privateca_ca_pool_iam_binding#condition PrivatecaCaPoolIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/privateca_ca_pool_iam_binding#id PrivatecaCaPoolIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/privateca_ca_pool_iam_binding#location PrivatecaCaPoolIamBinding#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.12.0/docs/resources/privateca_ca_pool_iam_binding#project PrivatecaCaPoolIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivatecaCaPoolIamBindingConditionOutputReference <a name="PrivatecaCaPoolIamBindingConditionOutputReference" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new PrivatecaCaPoolIamBindingConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingCondition">PrivatecaCaPoolIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingConditionOutputReference.property.internalValue"></a>

```csharp
public PrivatecaCaPoolIamBindingCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPoolIamBinding.PrivatecaCaPoolIamBindingCondition">PrivatecaCaPoolIamBindingCondition</a>

---



