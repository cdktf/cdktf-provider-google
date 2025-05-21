# `geminiRepositoryGroupIamPolicy` Submodule <a name="`geminiRepositoryGroupIamPolicy` Submodule" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiRepositoryGroupIamPolicy <a name="GeminiRepositoryGroupIamPolicy" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_policy google_gemini_repository_group_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GeminiRepositoryGroupIamPolicy(Construct Scope, string Id, GeminiRepositoryGroupIamPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig">GeminiRepositoryGroupIamPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig">GeminiRepositoryGroupIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GeminiRepositoryGroupIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

GeminiRepositoryGroupIamPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

GeminiRepositoryGroupIamPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

GeminiRepositoryGroupIamPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

GeminiRepositoryGroupIamPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GeminiRepositoryGroupIamPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GeminiRepositoryGroupIamPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GeminiRepositoryGroupIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GeminiRepositoryGroupIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.codeRepositoryIndexInput">CodeRepositoryIndexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.policyDataInput">PolicyDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.repositoryGroupIdInput">RepositoryGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.codeRepositoryIndex">CodeRepositoryIndex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.policyData">PolicyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.repositoryGroupId">RepositoryGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `CodeRepositoryIndexInput`<sup>Optional</sup> <a name="CodeRepositoryIndexInput" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.codeRepositoryIndexInput"></a>

```csharp
public string CodeRepositoryIndexInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `PolicyDataInput`<sup>Optional</sup> <a name="PolicyDataInput" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.policyDataInput"></a>

```csharp
public string PolicyDataInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RepositoryGroupIdInput`<sup>Optional</sup> <a name="RepositoryGroupIdInput" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.repositoryGroupIdInput"></a>

```csharp
public string RepositoryGroupIdInput { get; }
```

- *Type:* string

---

##### `CodeRepositoryIndex`<sup>Required</sup> <a name="CodeRepositoryIndex" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.codeRepositoryIndex"></a>

```csharp
public string CodeRepositoryIndex { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.policyData"></a>

```csharp
public string PolicyData { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RepositoryGroupId`<sup>Required</sup> <a name="RepositoryGroupId" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.repositoryGroupId"></a>

```csharp
public string RepositoryGroupId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiRepositoryGroupIamPolicyConfig <a name="GeminiRepositoryGroupIamPolicyConfig" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GeminiRepositoryGroupIamPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CodeRepositoryIndex,
    string PolicyData,
    string RepositoryGroupId,
    string Id = null,
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.codeRepositoryIndex">CodeRepositoryIndex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_policy#code_repository_index GeminiRepositoryGroupIamPolicy#code_repository_index}. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.policyData">PolicyData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_policy#policy_data GeminiRepositoryGroupIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.repositoryGroupId">RepositoryGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_policy#repository_group_id GeminiRepositoryGroupIamPolicy#repository_group_id}. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_policy#id GeminiRepositoryGroupIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_policy#location GeminiRepositoryGroupIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_policy#project GeminiRepositoryGroupIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CodeRepositoryIndex`<sup>Required</sup> <a name="CodeRepositoryIndex" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.codeRepositoryIndex"></a>

```csharp
public string CodeRepositoryIndex { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_policy#code_repository_index GeminiRepositoryGroupIamPolicy#code_repository_index}.

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.policyData"></a>

```csharp
public string PolicyData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_policy#policy_data GeminiRepositoryGroupIamPolicy#policy_data}.

---

##### `RepositoryGroupId`<sup>Required</sup> <a name="RepositoryGroupId" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.repositoryGroupId"></a>

```csharp
public string RepositoryGroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_policy#repository_group_id GeminiRepositoryGroupIamPolicy#repository_group_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_policy#id GeminiRepositoryGroupIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_policy#location GeminiRepositoryGroupIamPolicy#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.geminiRepositoryGroupIamPolicy.GeminiRepositoryGroupIamPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/gemini_repository_group_iam_policy#project GeminiRepositoryGroupIamPolicy#project}.

---



