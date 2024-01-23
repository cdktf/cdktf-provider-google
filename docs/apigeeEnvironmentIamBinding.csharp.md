# `apigeeEnvironmentIamBinding` Submodule <a name="`apigeeEnvironmentIamBinding` Submodule" id="@cdktf/provider-google.apigeeEnvironmentIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeEnvironmentIamBinding <a name="ApigeeEnvironmentIamBinding" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_environment_iam_binding google_apigee_environment_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeEnvironmentIamBinding(Construct Scope, string Id, ApigeeEnvironmentIamBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig">ApigeeEnvironmentIamBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig">ApigeeEnvironmentIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.putCondition"></a>

```csharp
private void PutCondition(ApigeeEnvironmentIamBindingCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingCondition">ApigeeEnvironmentIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApigeeEnvironmentIamBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ApigeeEnvironmentIamBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ApigeeEnvironmentIamBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ApigeeEnvironmentIamBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ApigeeEnvironmentIamBinding.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ApigeeEnvironmentIamBinding resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigeeEnvironmentIamBinding to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigeeEnvironmentIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_environment_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ApigeeEnvironmentIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference">ApigeeEnvironmentIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingCondition">ApigeeEnvironmentIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.envIdInput">EnvIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.membersInput">MembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.orgIdInput">OrgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.envId">EnvId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.members">Members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.orgId">OrgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.role">Role</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.condition"></a>

```csharp
public ApigeeEnvironmentIamBindingConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference">ApigeeEnvironmentIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.conditionInput"></a>

```csharp
public ApigeeEnvironmentIamBindingCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingCondition">ApigeeEnvironmentIamBindingCondition</a>

---

##### `EnvIdInput`<sup>Optional</sup> <a name="EnvIdInput" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.envIdInput"></a>

```csharp
public string EnvIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.membersInput"></a>

```csharp
public string[] MembersInput { get; }
```

- *Type:* string[]

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.orgIdInput"></a>

```csharp
public string OrgIdInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `EnvId`<sup>Required</sup> <a name="EnvId" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.envId"></a>

```csharp
public string EnvId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.members"></a>

```csharp
public string[] Members { get; }
```

- *Type:* string[]

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.orgId"></a>

```csharp
public string OrgId { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeEnvironmentIamBindingCondition <a name="ApigeeEnvironmentIamBindingCondition" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeEnvironmentIamBindingCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_environment_iam_binding#expression ApigeeEnvironmentIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_environment_iam_binding#title ApigeeEnvironmentIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_environment_iam_binding#description ApigeeEnvironmentIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_environment_iam_binding#expression ApigeeEnvironmentIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_environment_iam_binding#title ApigeeEnvironmentIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_environment_iam_binding#description ApigeeEnvironmentIamBinding#description}.

---

### ApigeeEnvironmentIamBindingConfig <a name="ApigeeEnvironmentIamBindingConfig" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeEnvironmentIamBindingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string EnvId,
    string[] Members,
    string OrgId,
    string Role,
    ApigeeEnvironmentIamBindingCondition Condition = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.envId">EnvId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_environment_iam_binding#env_id ApigeeEnvironmentIamBinding#env_id}. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.members">Members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_environment_iam_binding#members ApigeeEnvironmentIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.orgId">OrgId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_environment_iam_binding#org_id ApigeeEnvironmentIamBinding#org_id}. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_environment_iam_binding#role ApigeeEnvironmentIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingCondition">ApigeeEnvironmentIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_environment_iam_binding#id ApigeeEnvironmentIamBinding#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EnvId`<sup>Required</sup> <a name="EnvId" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.envId"></a>

```csharp
public string EnvId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_environment_iam_binding#env_id ApigeeEnvironmentIamBinding#env_id}.

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.members"></a>

```csharp
public string[] Members { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_environment_iam_binding#members ApigeeEnvironmentIamBinding#members}.

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.orgId"></a>

```csharp
public string OrgId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_environment_iam_binding#org_id ApigeeEnvironmentIamBinding#org_id}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_environment_iam_binding#role ApigeeEnvironmentIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.condition"></a>

```csharp
public ApigeeEnvironmentIamBindingCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingCondition">ApigeeEnvironmentIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_environment_iam_binding#condition ApigeeEnvironmentIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/apigee_environment_iam_binding#id ApigeeEnvironmentIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeEnvironmentIamBindingConditionOutputReference <a name="ApigeeEnvironmentIamBindingConditionOutputReference" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApigeeEnvironmentIamBindingConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingCondition">ApigeeEnvironmentIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingConditionOutputReference.property.internalValue"></a>

```csharp
public ApigeeEnvironmentIamBindingCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apigeeEnvironmentIamBinding.ApigeeEnvironmentIamBindingCondition">ApigeeEnvironmentIamBindingCondition</a>

---



