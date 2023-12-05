# `iamDenyPolicy` Submodule <a name="`iamDenyPolicy` Submodule" id="@cdktf/provider-google.iamDenyPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamDenyPolicy <a name="IamDenyPolicy" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy google_iam_deny_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamDenyPolicy(Construct Scope, string Id, IamDenyPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig">IamDenyPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig">IamDenyPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRules` <a name="PutRules" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.putRules"></a>

```csharp
private void PutRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.putRules.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(IamDenyPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts">IamDenyPolicyTimeouts</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IamDenyPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IamDenyPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IamDenyPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IamDenyPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

IamDenyPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IamDenyPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IamDenyPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IamDenyPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IamDenyPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList">IamDenyPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference">IamDenyPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.rulesInput">RulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.parent">Parent</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.rules"></a>

```csharp
public IamDenyPolicyRulesList Rules { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList">IamDenyPolicyRulesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.timeouts"></a>

```csharp
public IamDenyPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference">IamDenyPolicyTimeoutsOutputReference</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.rulesInput"></a>

```csharp
public object RulesInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IamDenyPolicyConfig <a name="IamDenyPolicyConfig" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamDenyPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Parent,
    object Rules,
    string DisplayName = null,
    string Id = null,
    IamDenyPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.name">Name</a></code> | <code>string</code> | The name of the policy. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.parent">Parent</a></code> | <code>string</code> | The attachment point is identified by its URL-encoded full resource name. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.rules">Rules</a></code> | <code>object</code> | rules block. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name of the rule. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#id IamDenyPolicy#id}. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts">IamDenyPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#name IamDenyPolicy#name}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

The attachment point is identified by its URL-encoded full resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#parent IamDenyPolicy#parent}

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.rules"></a>

```csharp
public object Rules { get; set; }
```

- *Type:* object

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#rules IamDenyPolicy#rules}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#display_name IamDenyPolicy#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#id IamDenyPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyConfig.property.timeouts"></a>

```csharp
public IamDenyPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts">IamDenyPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#timeouts IamDenyPolicy#timeouts}

---

### IamDenyPolicyRules <a name="IamDenyPolicyRules" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamDenyPolicyRules {
    IamDenyPolicyRulesDenyRule DenyRule = null,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules.property.denyRule">DenyRule</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule">IamDenyPolicyRulesDenyRule</a></code> | deny_rule block. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules.property.description">Description</a></code> | <code>string</code> | The description of the rule. |

---

##### `DenyRule`<sup>Optional</sup> <a name="DenyRule" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules.property.denyRule"></a>

```csharp
public IamDenyPolicyRulesDenyRule DenyRule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule">IamDenyPolicyRulesDenyRule</a>

deny_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#deny_rule IamDenyPolicy#deny_rule}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRules.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#description IamDenyPolicy#description}

---

### IamDenyPolicyRulesDenyRule <a name="IamDenyPolicyRulesDenyRule" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamDenyPolicyRulesDenyRule {
    IamDenyPolicyRulesDenyRuleDenialCondition DenialCondition = null,
    string[] DeniedPermissions = null,
    string[] DeniedPrincipals = null,
    string[] ExceptionPermissions = null,
    string[] ExceptionPrincipals = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule.property.denialCondition">DenialCondition</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition">IamDenyPolicyRulesDenyRuleDenialCondition</a></code> | denial_condition block. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule.property.deniedPermissions">DeniedPermissions</a></code> | <code>string[]</code> | The permissions that are explicitly denied by this rule. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule.property.deniedPrincipals">DeniedPrincipals</a></code> | <code>string[]</code> | The identities that are prevented from using one or more permissions on Google Cloud resources. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule.property.exceptionPermissions">ExceptionPermissions</a></code> | <code>string[]</code> | Specifies the permissions that this rule excludes from the set of denied permissions given by deniedPermissions. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule.property.exceptionPrincipals">ExceptionPrincipals</a></code> | <code>string[]</code> | The identities that are excluded from the deny rule, even if they are listed in the deniedPrincipals. |

---

##### `DenialCondition`<sup>Optional</sup> <a name="DenialCondition" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule.property.denialCondition"></a>

```csharp
public IamDenyPolicyRulesDenyRuleDenialCondition DenialCondition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition">IamDenyPolicyRulesDenyRuleDenialCondition</a>

denial_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#denial_condition IamDenyPolicy#denial_condition}

---

##### `DeniedPermissions`<sup>Optional</sup> <a name="DeniedPermissions" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule.property.deniedPermissions"></a>

```csharp
public string[] DeniedPermissions { get; set; }
```

- *Type:* string[]

The permissions that are explicitly denied by this rule.

Each permission uses the format '{service-fqdn}/{resource}.{verb}',
where '{service-fqdn}' is the fully qualified domain name for the service. For example, 'iam.googleapis.com/roles.list'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#denied_permissions IamDenyPolicy#denied_permissions}

---

##### `DeniedPrincipals`<sup>Optional</sup> <a name="DeniedPrincipals" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule.property.deniedPrincipals"></a>

```csharp
public string[] DeniedPrincipals { get; set; }
```

- *Type:* string[]

The identities that are prevented from using one or more permissions on Google Cloud resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#denied_principals IamDenyPolicy#denied_principals}

---

##### `ExceptionPermissions`<sup>Optional</sup> <a name="ExceptionPermissions" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule.property.exceptionPermissions"></a>

```csharp
public string[] ExceptionPermissions { get; set; }
```

- *Type:* string[]

Specifies the permissions that this rule excludes from the set of denied permissions given by deniedPermissions.

If a permission appears in deniedPermissions and in exceptionPermissions then it will not be denied.
The excluded permissions can be specified using the same syntax as deniedPermissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#exception_permissions IamDenyPolicy#exception_permissions}

---

##### `ExceptionPrincipals`<sup>Optional</sup> <a name="ExceptionPrincipals" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule.property.exceptionPrincipals"></a>

```csharp
public string[] ExceptionPrincipals { get; set; }
```

- *Type:* string[]

The identities that are excluded from the deny rule, even if they are listed in the deniedPrincipals.

For example, you could add a Google group to the deniedPrincipals, then exclude specific users who belong to that group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#exception_principals IamDenyPolicy#exception_principals}

---

### IamDenyPolicyRulesDenyRuleDenialCondition <a name="IamDenyPolicyRulesDenyRuleDenialCondition" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamDenyPolicyRulesDenyRuleDenialCondition {
    string Expression,
    string Description = null,
    string Location = null,
    string Title = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition.property.expression">Expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition.property.description">Description</a></code> | <code>string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition.property.location">Location</a></code> | <code>string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition.property.title">Title</a></code> | <code>string</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#expression IamDenyPolicy#expression}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the expression.

This is a longer text which describes the expression,
e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#description IamDenyPolicy#description}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#location IamDenyPolicy#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#title IamDenyPolicy#title}

---

### IamDenyPolicyTimeouts <a name="IamDenyPolicyTimeouts" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamDenyPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#create IamDenyPolicy#create}. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#delete IamDenyPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#update IamDenyPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#create IamDenyPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#delete IamDenyPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.8.0/docs/resources/iam_deny_policy#update IamDenyPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamDenyPolicyRulesDenyRuleDenialConditionOutputReference <a name="IamDenyPolicyRulesDenyRuleDenialConditionOutputReference" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamDenyPolicyRulesDenyRuleDenialConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.resetTitle"></a>

```csharp
private void ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition">IamDenyPolicyRulesDenyRuleDenialCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference.property.internalValue"></a>

```csharp
public IamDenyPolicyRulesDenyRuleDenialCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition">IamDenyPolicyRulesDenyRuleDenialCondition</a>

---


### IamDenyPolicyRulesDenyRuleOutputReference <a name="IamDenyPolicyRulesDenyRuleOutputReference" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamDenyPolicyRulesDenyRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.putDenialCondition">PutDenialCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resetDenialCondition">ResetDenialCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resetDeniedPermissions">ResetDeniedPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resetDeniedPrincipals">ResetDeniedPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resetExceptionPermissions">ResetExceptionPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resetExceptionPrincipals">ResetExceptionPrincipals</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDenialCondition` <a name="PutDenialCondition" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.putDenialCondition"></a>

```csharp
private void PutDenialCondition(IamDenyPolicyRulesDenyRuleDenialCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.putDenialCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition">IamDenyPolicyRulesDenyRuleDenialCondition</a>

---

##### `ResetDenialCondition` <a name="ResetDenialCondition" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resetDenialCondition"></a>

```csharp
private void ResetDenialCondition()
```

##### `ResetDeniedPermissions` <a name="ResetDeniedPermissions" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resetDeniedPermissions"></a>

```csharp
private void ResetDeniedPermissions()
```

##### `ResetDeniedPrincipals` <a name="ResetDeniedPrincipals" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resetDeniedPrincipals"></a>

```csharp
private void ResetDeniedPrincipals()
```

##### `ResetExceptionPermissions` <a name="ResetExceptionPermissions" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resetExceptionPermissions"></a>

```csharp
private void ResetExceptionPermissions()
```

##### `ResetExceptionPrincipals` <a name="ResetExceptionPrincipals" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.resetExceptionPrincipals"></a>

```csharp
private void ResetExceptionPrincipals()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.denialCondition">DenialCondition</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference">IamDenyPolicyRulesDenyRuleDenialConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.denialConditionInput">DenialConditionInput</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition">IamDenyPolicyRulesDenyRuleDenialCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.deniedPermissionsInput">DeniedPermissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.deniedPrincipalsInput">DeniedPrincipalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPermissionsInput">ExceptionPermissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPrincipalsInput">ExceptionPrincipalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.deniedPermissions">DeniedPermissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.deniedPrincipals">DeniedPrincipals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPermissions">ExceptionPermissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPrincipals">ExceptionPrincipals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule">IamDenyPolicyRulesDenyRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DenialCondition`<sup>Required</sup> <a name="DenialCondition" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.denialCondition"></a>

```csharp
public IamDenyPolicyRulesDenyRuleDenialConditionOutputReference DenialCondition { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialConditionOutputReference">IamDenyPolicyRulesDenyRuleDenialConditionOutputReference</a>

---

##### `DenialConditionInput`<sup>Optional</sup> <a name="DenialConditionInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.denialConditionInput"></a>

```csharp
public IamDenyPolicyRulesDenyRuleDenialCondition DenialConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleDenialCondition">IamDenyPolicyRulesDenyRuleDenialCondition</a>

---

##### `DeniedPermissionsInput`<sup>Optional</sup> <a name="DeniedPermissionsInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.deniedPermissionsInput"></a>

```csharp
public string[] DeniedPermissionsInput { get; }
```

- *Type:* string[]

---

##### `DeniedPrincipalsInput`<sup>Optional</sup> <a name="DeniedPrincipalsInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.deniedPrincipalsInput"></a>

```csharp
public string[] DeniedPrincipalsInput { get; }
```

- *Type:* string[]

---

##### `ExceptionPermissionsInput`<sup>Optional</sup> <a name="ExceptionPermissionsInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPermissionsInput"></a>

```csharp
public string[] ExceptionPermissionsInput { get; }
```

- *Type:* string[]

---

##### `ExceptionPrincipalsInput`<sup>Optional</sup> <a name="ExceptionPrincipalsInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPrincipalsInput"></a>

```csharp
public string[] ExceptionPrincipalsInput { get; }
```

- *Type:* string[]

---

##### `DeniedPermissions`<sup>Required</sup> <a name="DeniedPermissions" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.deniedPermissions"></a>

```csharp
public string[] DeniedPermissions { get; }
```

- *Type:* string[]

---

##### `DeniedPrincipals`<sup>Required</sup> <a name="DeniedPrincipals" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.deniedPrincipals"></a>

```csharp
public string[] DeniedPrincipals { get; }
```

- *Type:* string[]

---

##### `ExceptionPermissions`<sup>Required</sup> <a name="ExceptionPermissions" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPermissions"></a>

```csharp
public string[] ExceptionPermissions { get; }
```

- *Type:* string[]

---

##### `ExceptionPrincipals`<sup>Required</sup> <a name="ExceptionPrincipals" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.exceptionPrincipals"></a>

```csharp
public string[] ExceptionPrincipals { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference.property.internalValue"></a>

```csharp
public IamDenyPolicyRulesDenyRule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule">IamDenyPolicyRulesDenyRule</a>

---


### IamDenyPolicyRulesList <a name="IamDenyPolicyRulesList" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamDenyPolicyRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.get"></a>

```csharp
private IamDenyPolicyRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IamDenyPolicyRulesOutputReference <a name="IamDenyPolicyRulesOutputReference" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamDenyPolicyRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.putDenyRule">PutDenyRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.resetDenyRule">ResetDenyRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDenyRule` <a name="PutDenyRule" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.putDenyRule"></a>

```csharp
private void PutDenyRule(IamDenyPolicyRulesDenyRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.putDenyRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule">IamDenyPolicyRulesDenyRule</a>

---

##### `ResetDenyRule` <a name="ResetDenyRule" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.resetDenyRule"></a>

```csharp
private void ResetDenyRule()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.denyRule">DenyRule</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference">IamDenyPolicyRulesDenyRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.denyRuleInput">DenyRuleInput</a></code> | <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule">IamDenyPolicyRulesDenyRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DenyRule`<sup>Required</sup> <a name="DenyRule" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.denyRule"></a>

```csharp
public IamDenyPolicyRulesDenyRuleOutputReference DenyRule { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRuleOutputReference">IamDenyPolicyRulesDenyRuleOutputReference</a>

---

##### `DenyRuleInput`<sup>Optional</sup> <a name="DenyRuleInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.denyRuleInput"></a>

```csharp
public IamDenyPolicyRulesDenyRule DenyRuleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesDenyRule">IamDenyPolicyRulesDenyRule</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### IamDenyPolicyTimeoutsOutputReference <a name="IamDenyPolicyTimeoutsOutputReference" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new IamDenyPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iamDenyPolicy.IamDenyPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



