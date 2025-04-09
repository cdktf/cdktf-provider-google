# `parameterManagerParameterVersion` Submodule <a name="`parameterManagerParameterVersion` Submodule" id="@cdktf/provider-google.parameterManagerParameterVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ParameterManagerParameterVersion <a name="ParameterManagerParameterVersion" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/parameter_manager_parameter_version google_parameter_manager_parameter_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ParameterManagerParameterVersion(Construct Scope, string Id, ParameterManagerParameterVersionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig">ParameterManagerParameterVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig">ParameterManagerParameterVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.putTimeouts"></a>

```csharp
private void PutTimeouts(ParameterManagerParameterVersionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeouts">ParameterManagerParameterVersionTimeouts</a>

---

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ParameterManagerParameterVersion resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ParameterManagerParameterVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ParameterManagerParameterVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ParameterManagerParameterVersion.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ParameterManagerParameterVersion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ParameterManagerParameterVersion resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ParameterManagerParameterVersion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ParameterManagerParameterVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/parameter_manager_parameter_version#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ParameterManagerParameterVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.kmsKeyVersion">KmsKeyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference">ParameterManagerParameterVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.disabledInput">DisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.parameterDataInput">ParameterDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.parameterInput">ParameterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.parameterVersionIdInput">ParameterVersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.disabled">Disabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.parameter">Parameter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.parameterData">ParameterData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.parameterVersionId">ParameterVersionId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `KmsKeyVersion`<sup>Required</sup> <a name="KmsKeyVersion" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.kmsKeyVersion"></a>

```csharp
public string KmsKeyVersion { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.timeouts"></a>

```csharp
public ParameterManagerParameterVersionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference">ParameterManagerParameterVersionTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.disabledInput"></a>

```csharp
public object DisabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ParameterDataInput`<sup>Optional</sup> <a name="ParameterDataInput" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.parameterDataInput"></a>

```csharp
public string ParameterDataInput { get; }
```

- *Type:* string

---

##### `ParameterInput`<sup>Optional</sup> <a name="ParameterInput" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.parameterInput"></a>

```csharp
public string ParameterInput { get; }
```

- *Type:* string

---

##### `ParameterVersionIdInput`<sup>Optional</sup> <a name="ParameterVersionIdInput" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.parameterVersionIdInput"></a>

```csharp
public string ParameterVersionIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.disabled"></a>

```csharp
public object Disabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.parameter"></a>

```csharp
public string Parameter { get; }
```

- *Type:* string

---

##### `ParameterData`<sup>Required</sup> <a name="ParameterData" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.parameterData"></a>

```csharp
public string ParameterData { get; }
```

- *Type:* string

---

##### `ParameterVersionId`<sup>Required</sup> <a name="ParameterVersionId" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.parameterVersionId"></a>

```csharp
public string ParameterVersionId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ParameterManagerParameterVersionConfig <a name="ParameterManagerParameterVersionConfig" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ParameterManagerParameterVersionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Parameter,
    string ParameterData,
    string ParameterVersionId,
    object Disabled = null,
    string Id = null,
    ParameterManagerParameterVersionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.parameter">Parameter</a></code> | <code>string</code> | Parameter Manager Parameter resource. |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.parameterData">ParameterData</a></code> | <code>string</code> | The Parameter data. |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.parameterVersionId">ParameterVersionId</a></code> | <code>string</code> | Version ID of the Parameter Version Resource. This must be unique within the Parameter. |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.disabled">Disabled</a></code> | <code>object</code> | The current state of Parameter Version. This field is only applicable for updating Parameter Version. |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/parameter_manager_parameter_version#id ParameterManagerParameterVersion#id}. |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeouts">ParameterManagerParameterVersionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.parameter"></a>

```csharp
public string Parameter { get; set; }
```

- *Type:* string

Parameter Manager Parameter resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/parameter_manager_parameter_version#parameter ParameterManagerParameterVersion#parameter}

---

##### `ParameterData`<sup>Required</sup> <a name="ParameterData" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.parameterData"></a>

```csharp
public string ParameterData { get; set; }
```

- *Type:* string

The Parameter data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/parameter_manager_parameter_version#parameter_data ParameterManagerParameterVersion#parameter_data}

---

##### `ParameterVersionId`<sup>Required</sup> <a name="ParameterVersionId" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.parameterVersionId"></a>

```csharp
public string ParameterVersionId { get; set; }
```

- *Type:* string

Version ID of the Parameter Version Resource. This must be unique within the Parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/parameter_manager_parameter_version#parameter_version_id ParameterManagerParameterVersion#parameter_version_id}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.disabled"></a>

```csharp
public object Disabled { get; set; }
```

- *Type:* object

The current state of Parameter Version. This field is only applicable for updating Parameter Version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/parameter_manager_parameter_version#disabled ParameterManagerParameterVersion#disabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/parameter_manager_parameter_version#id ParameterManagerParameterVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionConfig.property.timeouts"></a>

```csharp
public ParameterManagerParameterVersionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeouts">ParameterManagerParameterVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/parameter_manager_parameter_version#timeouts ParameterManagerParameterVersion#timeouts}

---

### ParameterManagerParameterVersionTimeouts <a name="ParameterManagerParameterVersionTimeouts" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ParameterManagerParameterVersionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/parameter_manager_parameter_version#create ParameterManagerParameterVersion#create}. |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/parameter_manager_parameter_version#delete ParameterManagerParameterVersion#delete}. |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/parameter_manager_parameter_version#update ParameterManagerParameterVersion#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/parameter_manager_parameter_version#create ParameterManagerParameterVersion#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/parameter_manager_parameter_version#delete ParameterManagerParameterVersion#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/parameter_manager_parameter_version#update ParameterManagerParameterVersion#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ParameterManagerParameterVersionTimeoutsOutputReference <a name="ParameterManagerParameterVersionTimeoutsOutputReference" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ParameterManagerParameterVersionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.parameterManagerParameterVersion.ParameterManagerParameterVersionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



