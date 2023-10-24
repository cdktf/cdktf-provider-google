# `google_sourcerepo_repository_iam_policy`

Refer to the Terraform Registory for docs: [`google_sourcerepo_repository_iam_policy`](https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/sourcerepo_repository_iam_policy).

# `sourcerepoRepositoryIamPolicy` Submodule <a name="`sourcerepoRepositoryIamPolicy` Submodule" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SourcerepoRepositoryIamPolicy <a name="SourcerepoRepositoryIamPolicy" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/sourcerepo_repository_iam_policy google_sourcerepo_repository_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SourcerepoRepositoryIamPolicy(Construct Scope, string Id, SourcerepoRepositoryIamPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicyConfig">SourcerepoRepositoryIamPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicyConfig">SourcerepoRepositoryIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SourcerepoRepositoryIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SourcerepoRepositoryIamPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SourcerepoRepositoryIamPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SourcerepoRepositoryIamPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SourcerepoRepositoryIamPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SourcerepoRepositoryIamPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SourcerepoRepositoryIamPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SourcerepoRepositoryIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/sourcerepo_repository_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SourcerepoRepositoryIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.policyDataInput">PolicyDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.policyData">PolicyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.repository">Repository</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PolicyDataInput`<sup>Optional</sup> <a name="PolicyDataInput" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.policyDataInput"></a>

```csharp
public string PolicyDataInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.policyData"></a>

```csharp
public string PolicyData { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SourcerepoRepositoryIamPolicyConfig <a name="SourcerepoRepositoryIamPolicyConfig" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SourcerepoRepositoryIamPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string PolicyData,
    string Repository,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicyConfig.property.policyData">PolicyData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/sourcerepo_repository_iam_policy#policy_data SourcerepoRepositoryIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicyConfig.property.repository">Repository</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/sourcerepo_repository_iam_policy#repository SourcerepoRepositoryIamPolicy#repository}. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/sourcerepo_repository_iam_policy#id SourcerepoRepositoryIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/sourcerepo_repository_iam_policy#project SourcerepoRepositoryIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicyConfig.property.policyData"></a>

```csharp
public string PolicyData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/sourcerepo_repository_iam_policy#policy_data SourcerepoRepositoryIamPolicy#policy_data}.

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicyConfig.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/sourcerepo_repository_iam_policy#repository SourcerepoRepositoryIamPolicy#repository}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/sourcerepo_repository_iam_policy#id SourcerepoRepositoryIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.sourcerepoRepositoryIamPolicy.SourcerepoRepositoryIamPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/sourcerepo_repository_iam_policy#project SourcerepoRepositoryIamPolicy#project}.

---



