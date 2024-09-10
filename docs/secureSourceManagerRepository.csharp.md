# `secureSourceManagerRepository` Submodule <a name="`secureSourceManagerRepository` Submodule" id="@cdktf/provider-google.secureSourceManagerRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecureSourceManagerRepository <a name="SecureSourceManagerRepository" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/secure_source_manager_repository google_secure_source_manager_repository}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecureSourceManagerRepository(Construct Scope, string Id, SecureSourceManagerRepositoryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig">SecureSourceManagerRepositoryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig">SecureSourceManagerRepositoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.putInitialConfig">PutInitialConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.resetInitialConfig">ResetInitialConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInitialConfig` <a name="PutInitialConfig" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.putInitialConfig"></a>

```csharp
private void PutInitialConfig(SecureSourceManagerRepositoryInitialConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.putInitialConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfig">SecureSourceManagerRepositoryInitialConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.putTimeouts"></a>

```csharp
private void PutTimeouts(SecureSourceManagerRepositoryTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeouts">SecureSourceManagerRepositoryTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInitialConfig` <a name="ResetInitialConfig" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.resetInitialConfig"></a>

```csharp
private void ResetInitialConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SecureSourceManagerRepository resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SecureSourceManagerRepository.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SecureSourceManagerRepository.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SecureSourceManagerRepository.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

SecureSourceManagerRepository.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SecureSourceManagerRepository resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecureSourceManagerRepository to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecureSourceManagerRepository that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/secure_source_manager_repository#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SecureSourceManagerRepository to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.initialConfig">InitialConfig</a></code> | <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference">SecureSourceManagerRepositoryInitialConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference">SecureSourceManagerRepositoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.uris">Uris</a></code> | <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList">SecureSourceManagerRepositoryUrisList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.initialConfigInput">InitialConfigInput</a></code> | <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfig">SecureSourceManagerRepositoryInitialConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.instanceInput">InstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.repositoryIdInput">RepositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.instance">Instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.repositoryId">RepositoryId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `InitialConfig`<sup>Required</sup> <a name="InitialConfig" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.initialConfig"></a>

```csharp
public SecureSourceManagerRepositoryInitialConfigOutputReference InitialConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference">SecureSourceManagerRepositoryInitialConfigOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.timeouts"></a>

```csharp
public SecureSourceManagerRepositoryTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference">SecureSourceManagerRepositoryTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `Uris`<sup>Required</sup> <a name="Uris" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.uris"></a>

```csharp
public SecureSourceManagerRepositoryUrisList Uris { get; }
```

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList">SecureSourceManagerRepositoryUrisList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InitialConfigInput`<sup>Optional</sup> <a name="InitialConfigInput" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.initialConfigInput"></a>

```csharp
public SecureSourceManagerRepositoryInitialConfig InitialConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfig">SecureSourceManagerRepositoryInitialConfig</a>

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.instanceInput"></a>

```csharp
public string InstanceInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RepositoryIdInput`<sup>Optional</sup> <a name="RepositoryIdInput" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.repositoryIdInput"></a>

```csharp
public string RepositoryIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.instance"></a>

```csharp
public string Instance { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.repositoryId"></a>

```csharp
public string RepositoryId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepository.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecureSourceManagerRepositoryConfig <a name="SecureSourceManagerRepositoryConfig" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecureSourceManagerRepositoryConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Instance,
    string Location,
    string RepositoryId,
    string Description = null,
    string Id = null,
    SecureSourceManagerRepositoryInitialConfig InitialConfig = null,
    string Project = null,
    SecureSourceManagerRepositoryTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.instance">Instance</a></code> | <code>string</code> | The name of the instance in which the repository is hosted. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.location">Location</a></code> | <code>string</code> | The location for the Repository. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.repositoryId">RepositoryId</a></code> | <code>string</code> | The ID for the Repository. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.description">Description</a></code> | <code>string</code> | Description of the repository, which cannot exceed 500 characters. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/secure_source_manager_repository#id SecureSourceManagerRepository#id}. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.initialConfig">InitialConfig</a></code> | <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfig">SecureSourceManagerRepositoryInitialConfig</a></code> | initial_config block. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/secure_source_manager_repository#project SecureSourceManagerRepository#project}. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeouts">SecureSourceManagerRepositoryTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.instance"></a>

```csharp
public string Instance { get; set; }
```

- *Type:* string

The name of the instance in which the repository is hosted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/secure_source_manager_repository#instance SecureSourceManagerRepository#instance}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location for the Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/secure_source_manager_repository#location SecureSourceManagerRepository#location}

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.repositoryId"></a>

```csharp
public string RepositoryId { get; set; }
```

- *Type:* string

The ID for the Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/secure_source_manager_repository#repository_id SecureSourceManagerRepository#repository_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the repository, which cannot exceed 500 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/secure_source_manager_repository#description SecureSourceManagerRepository#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/secure_source_manager_repository#id SecureSourceManagerRepository#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InitialConfig`<sup>Optional</sup> <a name="InitialConfig" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.initialConfig"></a>

```csharp
public SecureSourceManagerRepositoryInitialConfig InitialConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfig">SecureSourceManagerRepositoryInitialConfig</a>

initial_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/secure_source_manager_repository#initial_config SecureSourceManagerRepository#initial_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/secure_source_manager_repository#project SecureSourceManagerRepository#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryConfig.property.timeouts"></a>

```csharp
public SecureSourceManagerRepositoryTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeouts">SecureSourceManagerRepositoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/secure_source_manager_repository#timeouts SecureSourceManagerRepository#timeouts}

---

### SecureSourceManagerRepositoryInitialConfig <a name="SecureSourceManagerRepositoryInitialConfig" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecureSourceManagerRepositoryInitialConfig {
    string DefaultBranch = null,
    string[] Gitignores = null,
    string License = null,
    string Readme = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfig.property.defaultBranch">DefaultBranch</a></code> | <code>string</code> | Default branch name of the repository. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfig.property.gitignores">Gitignores</a></code> | <code>string[]</code> | List of gitignore template names user can choose from. Valid values can be viewed at https://cloud.google.com/secure-source-manager/docs/reference/rest/v1/projects.locations.repositories#initialconfig. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfig.property.license">License</a></code> | <code>string</code> | License template name user can choose from. Valid values can be viewed at https://cloud.google.com/secure-source-manager/docs/reference/rest/v1/projects.locations.repositories#initialconfig. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfig.property.readme">Readme</a></code> | <code>string</code> | README template name. Valid values can be viewed at https://cloud.google.com/secure-source-manager/docs/reference/rest/v1/projects.locations.repositories#initialconfig. |

---

##### `DefaultBranch`<sup>Optional</sup> <a name="DefaultBranch" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfig.property.defaultBranch"></a>

```csharp
public string DefaultBranch { get; set; }
```

- *Type:* string

Default branch name of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/secure_source_manager_repository#default_branch SecureSourceManagerRepository#default_branch}

---

##### `Gitignores`<sup>Optional</sup> <a name="Gitignores" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfig.property.gitignores"></a>

```csharp
public string[] Gitignores { get; set; }
```

- *Type:* string[]

List of gitignore template names user can choose from. Valid values can be viewed at https://cloud.google.com/secure-source-manager/docs/reference/rest/v1/projects.locations.repositories#initialconfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/secure_source_manager_repository#gitignores SecureSourceManagerRepository#gitignores}

---

##### `License`<sup>Optional</sup> <a name="License" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfig.property.license"></a>

```csharp
public string License { get; set; }
```

- *Type:* string

License template name user can choose from. Valid values can be viewed at https://cloud.google.com/secure-source-manager/docs/reference/rest/v1/projects.locations.repositories#initialconfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/secure_source_manager_repository#license SecureSourceManagerRepository#license}

---

##### `Readme`<sup>Optional</sup> <a name="Readme" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfig.property.readme"></a>

```csharp
public string Readme { get; set; }
```

- *Type:* string

README template name. Valid values can be viewed at https://cloud.google.com/secure-source-manager/docs/reference/rest/v1/projects.locations.repositories#initialconfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/secure_source_manager_repository#readme SecureSourceManagerRepository#readme}

---

### SecureSourceManagerRepositoryTimeouts <a name="SecureSourceManagerRepositoryTimeouts" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecureSourceManagerRepositoryTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/secure_source_manager_repository#create SecureSourceManagerRepository#create}. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/secure_source_manager_repository#delete SecureSourceManagerRepository#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/secure_source_manager_repository#create SecureSourceManagerRepository#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/secure_source_manager_repository#delete SecureSourceManagerRepository#delete}.

---

### SecureSourceManagerRepositoryUris <a name="SecureSourceManagerRepositoryUris" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUris"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUris.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecureSourceManagerRepositoryUris {

};
```


## Classes <a name="Classes" id="Classes"></a>

### SecureSourceManagerRepositoryInitialConfigOutputReference <a name="SecureSourceManagerRepositoryInitialConfigOutputReference" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecureSourceManagerRepositoryInitialConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.resetDefaultBranch">ResetDefaultBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.resetGitignores">ResetGitignores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.resetLicense">ResetLicense</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.resetReadme">ResetReadme</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefaultBranch` <a name="ResetDefaultBranch" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.resetDefaultBranch"></a>

```csharp
private void ResetDefaultBranch()
```

##### `ResetGitignores` <a name="ResetGitignores" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.resetGitignores"></a>

```csharp
private void ResetGitignores()
```

##### `ResetLicense` <a name="ResetLicense" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.resetLicense"></a>

```csharp
private void ResetLicense()
```

##### `ResetReadme` <a name="ResetReadme" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.resetReadme"></a>

```csharp
private void ResetReadme()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.property.defaultBranchInput">DefaultBranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.property.gitignoresInput">GitignoresInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.property.licenseInput">LicenseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.property.readmeInput">ReadmeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.property.defaultBranch">DefaultBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.property.gitignores">Gitignores</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.property.license">License</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.property.readme">Readme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfig">SecureSourceManagerRepositoryInitialConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultBranchInput`<sup>Optional</sup> <a name="DefaultBranchInput" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.property.defaultBranchInput"></a>

```csharp
public string DefaultBranchInput { get; }
```

- *Type:* string

---

##### `GitignoresInput`<sup>Optional</sup> <a name="GitignoresInput" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.property.gitignoresInput"></a>

```csharp
public string[] GitignoresInput { get; }
```

- *Type:* string[]

---

##### `LicenseInput`<sup>Optional</sup> <a name="LicenseInput" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.property.licenseInput"></a>

```csharp
public string LicenseInput { get; }
```

- *Type:* string

---

##### `ReadmeInput`<sup>Optional</sup> <a name="ReadmeInput" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.property.readmeInput"></a>

```csharp
public string ReadmeInput { get; }
```

- *Type:* string

---

##### `DefaultBranch`<sup>Required</sup> <a name="DefaultBranch" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.property.defaultBranch"></a>

```csharp
public string DefaultBranch { get; }
```

- *Type:* string

---

##### `Gitignores`<sup>Required</sup> <a name="Gitignores" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.property.gitignores"></a>

```csharp
public string[] Gitignores { get; }
```

- *Type:* string[]

---

##### `License`<sup>Required</sup> <a name="License" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.property.license"></a>

```csharp
public string License { get; }
```

- *Type:* string

---

##### `Readme`<sup>Required</sup> <a name="Readme" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.property.readme"></a>

```csharp
public string Readme { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfigOutputReference.property.internalValue"></a>

```csharp
public SecureSourceManagerRepositoryInitialConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryInitialConfig">SecureSourceManagerRepositoryInitialConfig</a>

---


### SecureSourceManagerRepositoryTimeoutsOutputReference <a name="SecureSourceManagerRepositoryTimeoutsOutputReference" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecureSourceManagerRepositoryTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SecureSourceManagerRepositoryUrisList <a name="SecureSourceManagerRepositoryUrisList" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecureSourceManagerRepositoryUrisList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.get"></a>

```csharp
private SecureSourceManagerRepositoryUrisOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### SecureSourceManagerRepositoryUrisOutputReference <a name="SecureSourceManagerRepositoryUrisOutputReference" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new SecureSourceManagerRepositoryUrisOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.property.api">Api</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.property.gitHttps">GitHttps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.property.html">Html</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUris">SecureSourceManagerRepositoryUris</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Api`<sup>Required</sup> <a name="Api" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.property.api"></a>

```csharp
public string Api { get; }
```

- *Type:* string

---

##### `GitHttps`<sup>Required</sup> <a name="GitHttps" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.property.gitHttps"></a>

```csharp
public string GitHttps { get; }
```

- *Type:* string

---

##### `Html`<sup>Required</sup> <a name="Html" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.property.html"></a>

```csharp
public string Html { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUrisOutputReference.property.internalValue"></a>

```csharp
public SecureSourceManagerRepositoryUris InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.secureSourceManagerRepository.SecureSourceManagerRepositoryUris">SecureSourceManagerRepositoryUris</a>

---



