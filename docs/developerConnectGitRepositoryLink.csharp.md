# `developerConnectGitRepositoryLink` Submodule <a name="`developerConnectGitRepositoryLink` Submodule" id="@cdktf/provider-google.developerConnectGitRepositoryLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DeveloperConnectGitRepositoryLink <a name="DeveloperConnectGitRepositoryLink" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/developer_connect_git_repository_link google_developer_connect_git_repository_link}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectGitRepositoryLink(Construct Scope, string Id, DeveloperConnectGitRepositoryLinkConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig">DeveloperConnectGitRepositoryLinkConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig">DeveloperConnectGitRepositoryLinkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.resetEtag">ResetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.putTimeouts"></a>

```csharp
private void PutTimeouts(DeveloperConnectGitRepositoryLinkTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeouts">DeveloperConnectGitRepositoryLinkTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetEtag` <a name="ResetEtag" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.resetEtag"></a>

```csharp
private void ResetEtag()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DeveloperConnectGitRepositoryLink resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DeveloperConnectGitRepositoryLink.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DeveloperConnectGitRepositoryLink.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DeveloperConnectGitRepositoryLink.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DeveloperConnectGitRepositoryLink.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DeveloperConnectGitRepositoryLink resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DeveloperConnectGitRepositoryLink to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DeveloperConnectGitRepositoryLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/developer_connect_git_repository_link#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DeveloperConnectGitRepositoryLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.deleteTime">DeleteTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.reconciling">Reconciling</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference">DeveloperConnectGitRepositoryLinkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.cloneUriInput">CloneUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.etagInput">EtagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.gitRepositoryLinkIdInput">GitRepositoryLinkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.parentConnectionInput">ParentConnectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.cloneUri">CloneUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.gitRepositoryLinkId">GitRepositoryLinkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.parentConnection">ParentConnection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DeleteTime`<sup>Required</sup> <a name="DeleteTime" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.deleteTime"></a>

```csharp
public string DeleteTime { get; }
```

- *Type:* string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.reconciling"></a>

```csharp
public IResolvable Reconciling { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.timeouts"></a>

```csharp
public DeveloperConnectGitRepositoryLinkTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference">DeveloperConnectGitRepositoryLinkTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CloneUriInput`<sup>Optional</sup> <a name="CloneUriInput" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.cloneUriInput"></a>

```csharp
public string CloneUriInput { get; }
```

- *Type:* string

---

##### `EtagInput`<sup>Optional</sup> <a name="EtagInput" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.etagInput"></a>

```csharp
public string EtagInput { get; }
```

- *Type:* string

---

##### `GitRepositoryLinkIdInput`<sup>Optional</sup> <a name="GitRepositoryLinkIdInput" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.gitRepositoryLinkIdInput"></a>

```csharp
public string GitRepositoryLinkIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ParentConnectionInput`<sup>Optional</sup> <a name="ParentConnectionInput" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.parentConnectionInput"></a>

```csharp
public string ParentConnectionInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CloneUri`<sup>Required</sup> <a name="CloneUri" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.cloneUri"></a>

```csharp
public string CloneUri { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `GitRepositoryLinkId`<sup>Required</sup> <a name="GitRepositoryLinkId" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.gitRepositoryLinkId"></a>

```csharp
public string GitRepositoryLinkId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ParentConnection`<sup>Required</sup> <a name="ParentConnection" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.parentConnection"></a>

```csharp
public string ParentConnection { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLink.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DeveloperConnectGitRepositoryLinkConfig <a name="DeveloperConnectGitRepositoryLinkConfig" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectGitRepositoryLinkConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CloneUri,
    string GitRepositoryLinkId,
    string Location,
    string ParentConnection,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    string Etag = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    DeveloperConnectGitRepositoryLinkTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.cloneUri">CloneUri</a></code> | <code>string</code> | Required. Git Clone URI. |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.gitRepositoryLinkId">GitRepositoryLinkId</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.parentConnection">ParentConnection</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. Allows clients to store small amounts of arbitrary data. |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.etag">Etag</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/developer_connect_git_repository_link#id DeveloperConnectGitRepositoryLink#id}. |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/developer_connect_git_repository_link#project DeveloperConnectGitRepositoryLink#project}. |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeouts">DeveloperConnectGitRepositoryLinkTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CloneUri`<sup>Required</sup> <a name="CloneUri" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.cloneUri"></a>

```csharp
public string CloneUri { get; set; }
```

- *Type:* string

Required. Git Clone URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/developer_connect_git_repository_link#clone_uri DeveloperConnectGitRepositoryLink#clone_uri}

---

##### `GitRepositoryLinkId`<sup>Required</sup> <a name="GitRepositoryLinkId" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.gitRepositoryLinkId"></a>

```csharp
public string GitRepositoryLinkId { get; set; }
```

- *Type:* string

Required.

The ID to use for the repository, which will become the final component of
the repository's resource name. This ID should be unique in the connection.
Allows alphanumeric characters and any of -._~%!$&'()*+,;=@.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/developer_connect_git_repository_link#git_repository_link_id DeveloperConnectGitRepositoryLink#git_repository_link_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'.

It identifies the resource within its parent collection as described in https://google.aip.dev/122. See documentation for resource type 'developerconnect.googleapis.com/GitRepositoryLink'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/developer_connect_git_repository_link#location DeveloperConnectGitRepositoryLink#location}

---

##### `ParentConnection`<sup>Required</sup> <a name="ParentConnection" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.parentConnection"></a>

```csharp
public string ParentConnection { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'.

It identifies the resource within its parent collection as described in https://google.aip.dev/122. See documentation for resource type 'developerconnect.googleapis.com/GitRepositoryLink'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/developer_connect_git_repository_link#parent_connection DeveloperConnectGitRepositoryLink#parent_connection}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional. Allows clients to store small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/developer_connect_git_repository_link#annotations DeveloperConnectGitRepositoryLink#annotations}

---

##### `Etag`<sup>Optional</sup> <a name="Etag" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.etag"></a>

```csharp
public string Etag { get; set; }
```

- *Type:* string

Optional.

This checksum is computed by the server based on the value of other
fields, and may be sent on update and delete requests to ensure the
client has an up-to-date value before proceeding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/developer_connect_git_repository_link#etag DeveloperConnectGitRepositoryLink#etag}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/developer_connect_git_repository_link#id DeveloperConnectGitRepositoryLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional. Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/developer_connect_git_repository_link#labels DeveloperConnectGitRepositoryLink#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/developer_connect_git_repository_link#project DeveloperConnectGitRepositoryLink#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkConfig.property.timeouts"></a>

```csharp
public DeveloperConnectGitRepositoryLinkTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeouts">DeveloperConnectGitRepositoryLinkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/developer_connect_git_repository_link#timeouts DeveloperConnectGitRepositoryLink#timeouts}

---

### DeveloperConnectGitRepositoryLinkTimeouts <a name="DeveloperConnectGitRepositoryLinkTimeouts" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectGitRepositoryLinkTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/developer_connect_git_repository_link#create DeveloperConnectGitRepositoryLink#create}. |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/developer_connect_git_repository_link#delete DeveloperConnectGitRepositoryLink#delete}. |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/developer_connect_git_repository_link#update DeveloperConnectGitRepositoryLink#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/developer_connect_git_repository_link#create DeveloperConnectGitRepositoryLink#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/developer_connect_git_repository_link#delete DeveloperConnectGitRepositoryLink#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/developer_connect_git_repository_link#update DeveloperConnectGitRepositoryLink#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DeveloperConnectGitRepositoryLinkTimeoutsOutputReference <a name="DeveloperConnectGitRepositoryLinkTimeoutsOutputReference" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DeveloperConnectGitRepositoryLinkTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.developerConnectGitRepositoryLink.DeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



