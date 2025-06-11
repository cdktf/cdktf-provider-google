# `apikeysKey` Submodule <a name="`apikeysKey` Submodule" id="@cdktf/provider-google.apikeysKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApikeysKey <a name="ApikeysKey" id="@cdktf/provider-google.apikeysKey.ApikeysKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apikeys_key google_apikeys_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApikeysKey(Construct Scope, string Id, ApikeysKeyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig">ApikeysKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.apikeysKey.ApikeysKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig">ApikeysKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.putRestrictions">PutRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.resetRestrictions">ResetRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apikeysKey.ApikeysKey.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.apikeysKey.ApikeysKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.apikeysKey.ApikeysKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apikeysKey.ApikeysKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.apikeysKey.ApikeysKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.apikeysKey.ApikeysKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.apikeysKey.ApikeysKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.apikeysKey.ApikeysKey.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.apikeysKey.ApikeysKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.apikeysKey.ApikeysKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.apikeysKey.ApikeysKey.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.apikeysKey.ApikeysKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.apikeysKey.ApikeysKey.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.apikeysKey.ApikeysKey.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apikeysKey.ApikeysKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apikeysKey.ApikeysKey.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.apikeysKey.ApikeysKey.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apikeysKey.ApikeysKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.apikeysKey.ApikeysKey.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.apikeysKey.ApikeysKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.apikeysKey.ApikeysKey.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.apikeysKey.ApikeysKey.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apikeysKey.ApikeysKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRestrictions` <a name="PutRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKey.putRestrictions"></a>

```csharp
private void PutRestrictions(ApikeysKeyRestrictions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apikeysKey.ApikeysKey.putRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions">ApikeysKeyRestrictions</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.apikeysKey.ApikeysKey.putTimeouts"></a>

```csharp
private void PutTimeouts(ApikeysKeyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apikeysKey.ApikeysKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts">ApikeysKeyTimeouts</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.apikeysKey.ApikeysKey.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.apikeysKey.ApikeysKey.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.apikeysKey.ApikeysKey.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRestrictions` <a name="ResetRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKey.resetRestrictions"></a>

```csharp
private void ResetRestrictions()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.apikeysKey.ApikeysKey.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApikeysKey resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.apikeysKey.ApikeysKey.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ApikeysKey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.apikeysKey.ApikeysKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.apikeysKey.ApikeysKey.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ApikeysKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.apikeysKey.ApikeysKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.apikeysKey.ApikeysKey.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ApikeysKey.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.apikeysKey.ApikeysKey.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.apikeysKey.ApikeysKey.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ApikeysKey.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ApikeysKey resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.apikeysKey.ApikeysKey.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.apikeysKey.ApikeysKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApikeysKey to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.apikeysKey.ApikeysKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApikeysKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apikeys_key#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apikeysKey.ApikeysKey.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ApikeysKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.keyString">KeyString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.restrictions">Restrictions</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference">ApikeysKeyRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference">ApikeysKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.restrictionsInput">RestrictionsInput</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions">ApikeysKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `KeyString`<sup>Required</sup> <a name="KeyString" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.keyString"></a>

```csharp
public string KeyString { get; }
```

- *Type:* string

---

##### `Restrictions`<sup>Required</sup> <a name="Restrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.restrictions"></a>

```csharp
public ApikeysKeyRestrictionsOutputReference Restrictions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference">ApikeysKeyRestrictionsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.timeouts"></a>

```csharp
public ApikeysKeyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference">ApikeysKeyTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RestrictionsInput`<sup>Optional</sup> <a name="RestrictionsInput" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.restrictionsInput"></a>

```csharp
public ApikeysKeyRestrictions RestrictionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions">ApikeysKeyRestrictions</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.apikeysKey.ApikeysKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApikeysKeyConfig <a name="ApikeysKeyConfig" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApikeysKeyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string DisplayName = null,
    string Id = null,
    string Project = null,
    ApikeysKeyRestrictions Restrictions = null,
    ApikeysKeyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.name">Name</a></code> | <code>string</code> | The resource name of the key. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Human-readable display name of this API key. Modifiable by user. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apikeys_key#id ApikeysKey#id}. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.project">Project</a></code> | <code>string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.restrictions">Restrictions</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions">ApikeysKeyRestrictions</a></code> | restrictions block. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts">ApikeysKeyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The resource name of the key.

The name must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. In another word, the name must match the regular expression: `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apikeys_key#name ApikeysKey#name}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Human-readable display name of this API key. Modifiable by user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apikeys_key#display_name ApikeysKey#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apikeys_key#id ApikeysKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apikeys_key#project ApikeysKey#project}

---

##### `Restrictions`<sup>Optional</sup> <a name="Restrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.restrictions"></a>

```csharp
public ApikeysKeyRestrictions Restrictions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions">ApikeysKeyRestrictions</a>

restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apikeys_key#restrictions ApikeysKey#restrictions}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.apikeysKey.ApikeysKeyConfig.property.timeouts"></a>

```csharp
public ApikeysKeyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts">ApikeysKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apikeys_key#timeouts ApikeysKey#timeouts}

---

### ApikeysKeyRestrictions <a name="ApikeysKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApikeysKeyRestrictions {
    ApikeysKeyRestrictionsAndroidKeyRestrictions AndroidKeyRestrictions = null,
    object ApiTargets = null,
    ApikeysKeyRestrictionsBrowserKeyRestrictions BrowserKeyRestrictions = null,
    ApikeysKeyRestrictionsIosKeyRestrictions IosKeyRestrictions = null,
    ApikeysKeyRestrictionsServerKeyRestrictions ServerKeyRestrictions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions.property.androidKeyRestrictions">AndroidKeyRestrictions</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions">ApikeysKeyRestrictionsAndroidKeyRestrictions</a></code> | android_key_restrictions block. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions.property.apiTargets">ApiTargets</a></code> | <code>object</code> | api_targets block. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions.property.browserKeyRestrictions">BrowserKeyRestrictions</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions">ApikeysKeyRestrictionsBrowserKeyRestrictions</a></code> | browser_key_restrictions block. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions.property.iosKeyRestrictions">IosKeyRestrictions</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions">ApikeysKeyRestrictionsIosKeyRestrictions</a></code> | ios_key_restrictions block. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions.property.serverKeyRestrictions">ServerKeyRestrictions</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions">ApikeysKeyRestrictionsServerKeyRestrictions</a></code> | server_key_restrictions block. |

---

##### `AndroidKeyRestrictions`<sup>Optional</sup> <a name="AndroidKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions.property.androidKeyRestrictions"></a>

```csharp
public ApikeysKeyRestrictionsAndroidKeyRestrictions AndroidKeyRestrictions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions">ApikeysKeyRestrictionsAndroidKeyRestrictions</a>

android_key_restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apikeys_key#android_key_restrictions ApikeysKey#android_key_restrictions}

---

##### `ApiTargets`<sup>Optional</sup> <a name="ApiTargets" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions.property.apiTargets"></a>

```csharp
public object ApiTargets { get; set; }
```

- *Type:* object

api_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apikeys_key#api_targets ApikeysKey#api_targets}

---

##### `BrowserKeyRestrictions`<sup>Optional</sup> <a name="BrowserKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions.property.browserKeyRestrictions"></a>

```csharp
public ApikeysKeyRestrictionsBrowserKeyRestrictions BrowserKeyRestrictions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions">ApikeysKeyRestrictionsBrowserKeyRestrictions</a>

browser_key_restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apikeys_key#browser_key_restrictions ApikeysKey#browser_key_restrictions}

---

##### `IosKeyRestrictions`<sup>Optional</sup> <a name="IosKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions.property.iosKeyRestrictions"></a>

```csharp
public ApikeysKeyRestrictionsIosKeyRestrictions IosKeyRestrictions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions">ApikeysKeyRestrictionsIosKeyRestrictions</a>

ios_key_restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apikeys_key#ios_key_restrictions ApikeysKey#ios_key_restrictions}

---

##### `ServerKeyRestrictions`<sup>Optional</sup> <a name="ServerKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions.property.serverKeyRestrictions"></a>

```csharp
public ApikeysKeyRestrictionsServerKeyRestrictions ServerKeyRestrictions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions">ApikeysKeyRestrictionsServerKeyRestrictions</a>

server_key_restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apikeys_key#server_key_restrictions ApikeysKey#server_key_restrictions}

---

### ApikeysKeyRestrictionsAndroidKeyRestrictions <a name="ApikeysKeyRestrictionsAndroidKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApikeysKeyRestrictionsAndroidKeyRestrictions {
    object AllowedApplications
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions.property.allowedApplications">AllowedApplications</a></code> | <code>object</code> | allowed_applications block. |

---

##### `AllowedApplications`<sup>Required</sup> <a name="AllowedApplications" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions.property.allowedApplications"></a>

```csharp
public object AllowedApplications { get; set; }
```

- *Type:* object

allowed_applications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apikeys_key#allowed_applications ApikeysKey#allowed_applications}

---

### ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications <a name="ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications {
    string PackageName,
    string Sha1Fingerprint
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications.property.packageName">PackageName</a></code> | <code>string</code> | The package name of the application. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications.property.sha1Fingerprint">Sha1Fingerprint</a></code> | <code>string</code> | The SHA1 fingerprint of the application. |

---

##### `PackageName`<sup>Required</sup> <a name="PackageName" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications.property.packageName"></a>

```csharp
public string PackageName { get; set; }
```

- *Type:* string

The package name of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apikeys_key#package_name ApikeysKey#package_name}

---

##### `Sha1Fingerprint`<sup>Required</sup> <a name="Sha1Fingerprint" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplications.property.sha1Fingerprint"></a>

```csharp
public string Sha1Fingerprint { get; set; }
```

- *Type:* string

The SHA1 fingerprint of the application.

For example, both sha1 formats are acceptable : DA:39:A3:EE:5E:6B:4B:0D:32:55:BF:EF:95:60:18:90:AF:D8:07:09 or DA39A3EE5E6B4B0D3255BFEF95601890AFD80709. Output format is the latter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apikeys_key#sha1_fingerprint ApikeysKey#sha1_fingerprint}

---

### ApikeysKeyRestrictionsApiTargets <a name="ApikeysKeyRestrictionsApiTargets" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApikeysKeyRestrictionsApiTargets {
    string Service,
    string[] Methods = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargets.property.service">Service</a></code> | <code>string</code> | The service for this restriction. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargets.property.methods">Methods</a></code> | <code>string[]</code> | Optional. |

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargets.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

The service for this restriction.

It should be the canonical service name, for example: `translate.googleapis.com`. You can use `gcloud services list` to get a list of services that are enabled in the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apikeys_key#service ApikeysKey#service}

---

##### `Methods`<sup>Optional</sup> <a name="Methods" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargets.property.methods"></a>

```csharp
public string[] Methods { get; set; }
```

- *Type:* string[]

Optional.

List of one or more methods that can be called. If empty, all methods for the service are allowed. A wildcard (*) can be used as the last symbol. Valid examples: `google.cloud.translate.v2.TranslateService.GetSupportedLanguage` `TranslateText` `Get*` `translate.googleapis.com.Get*`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apikeys_key#methods ApikeysKey#methods}

---

### ApikeysKeyRestrictionsBrowserKeyRestrictions <a name="ApikeysKeyRestrictionsBrowserKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApikeysKeyRestrictionsBrowserKeyRestrictions {
    string[] AllowedReferrers
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions.property.allowedReferrers">AllowedReferrers</a></code> | <code>string[]</code> | A list of regular expressions for the referrer URLs that are allowed to make API calls with this key. |

---

##### `AllowedReferrers`<sup>Required</sup> <a name="AllowedReferrers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions.property.allowedReferrers"></a>

```csharp
public string[] AllowedReferrers { get; set; }
```

- *Type:* string[]

A list of regular expressions for the referrer URLs that are allowed to make API calls with this key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apikeys_key#allowed_referrers ApikeysKey#allowed_referrers}

---

### ApikeysKeyRestrictionsIosKeyRestrictions <a name="ApikeysKeyRestrictionsIosKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApikeysKeyRestrictionsIosKeyRestrictions {
    string[] AllowedBundleIds
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions.property.allowedBundleIds">AllowedBundleIds</a></code> | <code>string[]</code> | A list of bundle IDs that are allowed when making API calls with this key. |

---

##### `AllowedBundleIds`<sup>Required</sup> <a name="AllowedBundleIds" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions.property.allowedBundleIds"></a>

```csharp
public string[] AllowedBundleIds { get; set; }
```

- *Type:* string[]

A list of bundle IDs that are allowed when making API calls with this key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apikeys_key#allowed_bundle_ids ApikeysKey#allowed_bundle_ids}

---

### ApikeysKeyRestrictionsServerKeyRestrictions <a name="ApikeysKeyRestrictionsServerKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApikeysKeyRestrictionsServerKeyRestrictions {
    string[] AllowedIps
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions.property.allowedIps">AllowedIps</a></code> | <code>string[]</code> | A list of the caller IP addresses that are allowed to make API calls with this key. |

---

##### `AllowedIps`<sup>Required</sup> <a name="AllowedIps" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions.property.allowedIps"></a>

```csharp
public string[] AllowedIps { get; set; }
```

- *Type:* string[]

A list of the caller IP addresses that are allowed to make API calls with this key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apikeys_key#allowed_ips ApikeysKey#allowed_ips}

---

### ApikeysKeyTimeouts <a name="ApikeysKeyTimeouts" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApikeysKeyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apikeys_key#create ApikeysKey#create}. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apikeys_key#delete ApikeysKey#delete}. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apikeys_key#update ApikeysKey#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apikeys_key#create ApikeysKey#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apikeys_key#delete ApikeysKey#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/apikeys_key#update ApikeysKey#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList <a name="ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.get"></a>

```csharp
private ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference <a name="ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.packageNameInput">PackageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.sha1FingerprintInput">Sha1FingerprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.packageName">PackageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.sha1Fingerprint">Sha1Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PackageNameInput`<sup>Optional</sup> <a name="PackageNameInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.packageNameInput"></a>

```csharp
public string PackageNameInput { get; }
```

- *Type:* string

---

##### `Sha1FingerprintInput`<sup>Optional</sup> <a name="Sha1FingerprintInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.sha1FingerprintInput"></a>

```csharp
public string Sha1FingerprintInput { get; }
```

- *Type:* string

---

##### `PackageName`<sup>Required</sup> <a name="PackageName" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.packageName"></a>

```csharp
public string PackageName { get; }
```

- *Type:* string

---

##### `Sha1Fingerprint`<sup>Required</sup> <a name="Sha1Fingerprint" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.sha1Fingerprint"></a>

```csharp
public string Sha1Fingerprint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference <a name="ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.putAllowedApplications">PutAllowedApplications</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllowedApplications` <a name="PutAllowedApplications" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.putAllowedApplications"></a>

```csharp
private void PutAllowedApplications(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.putAllowedApplications.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.allowedApplications">AllowedApplications</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList">ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.allowedApplicationsInput">AllowedApplicationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions">ApikeysKeyRestrictionsAndroidKeyRestrictions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedApplications`<sup>Required</sup> <a name="AllowedApplications" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.allowedApplications"></a>

```csharp
public ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList AllowedApplications { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList">ApikeysKeyRestrictionsAndroidKeyRestrictionsAllowedApplicationsList</a>

---

##### `AllowedApplicationsInput`<sup>Optional</sup> <a name="AllowedApplicationsInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.allowedApplicationsInput"></a>

```csharp
public object AllowedApplicationsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference.property.internalValue"></a>

```csharp
public ApikeysKeyRestrictionsAndroidKeyRestrictions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions">ApikeysKeyRestrictionsAndroidKeyRestrictions</a>

---


### ApikeysKeyRestrictionsApiTargetsList <a name="ApikeysKeyRestrictionsApiTargetsList" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApikeysKeyRestrictionsApiTargetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.get"></a>

```csharp
private ApikeysKeyRestrictionsApiTargetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApikeysKeyRestrictionsApiTargetsOutputReference <a name="ApikeysKeyRestrictionsApiTargetsOutputReference" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApikeysKeyRestrictionsApiTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.resetMethods">ResetMethods</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMethods` <a name="ResetMethods" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.resetMethods"></a>

```csharp
private void ResetMethods()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.methodsInput">MethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.methods">Methods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MethodsInput`<sup>Optional</sup> <a name="MethodsInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.methodsInput"></a>

```csharp
public string[] MethodsInput { get; }
```

- *Type:* string[]

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `Methods`<sup>Required</sup> <a name="Methods" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.methods"></a>

```csharp
public string[] Methods { get; }
```

- *Type:* string[]

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference <a name="ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.allowedReferrersInput">AllowedReferrersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.allowedReferrers">AllowedReferrers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions">ApikeysKeyRestrictionsBrowserKeyRestrictions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedReferrersInput`<sup>Optional</sup> <a name="AllowedReferrersInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.allowedReferrersInput"></a>

```csharp
public string[] AllowedReferrersInput { get; }
```

- *Type:* string[]

---

##### `AllowedReferrers`<sup>Required</sup> <a name="AllowedReferrers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.allowedReferrers"></a>

```csharp
public string[] AllowedReferrers { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference.property.internalValue"></a>

```csharp
public ApikeysKeyRestrictionsBrowserKeyRestrictions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions">ApikeysKeyRestrictionsBrowserKeyRestrictions</a>

---


### ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference <a name="ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.allowedBundleIdsInput">AllowedBundleIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.allowedBundleIds">AllowedBundleIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions">ApikeysKeyRestrictionsIosKeyRestrictions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedBundleIdsInput`<sup>Optional</sup> <a name="AllowedBundleIdsInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.allowedBundleIdsInput"></a>

```csharp
public string[] AllowedBundleIdsInput { get; }
```

- *Type:* string[]

---

##### `AllowedBundleIds`<sup>Required</sup> <a name="AllowedBundleIds" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.allowedBundleIds"></a>

```csharp
public string[] AllowedBundleIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference.property.internalValue"></a>

```csharp
public ApikeysKeyRestrictionsIosKeyRestrictions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions">ApikeysKeyRestrictionsIosKeyRestrictions</a>

---


### ApikeysKeyRestrictionsOutputReference <a name="ApikeysKeyRestrictionsOutputReference" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApikeysKeyRestrictionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putAndroidKeyRestrictions">PutAndroidKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putApiTargets">PutApiTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putBrowserKeyRestrictions">PutBrowserKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putIosKeyRestrictions">PutIosKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putServerKeyRestrictions">PutServerKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resetAndroidKeyRestrictions">ResetAndroidKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resetApiTargets">ResetApiTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resetBrowserKeyRestrictions">ResetBrowserKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resetIosKeyRestrictions">ResetIosKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resetServerKeyRestrictions">ResetServerKeyRestrictions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAndroidKeyRestrictions` <a name="PutAndroidKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putAndroidKeyRestrictions"></a>

```csharp
private void PutAndroidKeyRestrictions(ApikeysKeyRestrictionsAndroidKeyRestrictions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putAndroidKeyRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions">ApikeysKeyRestrictionsAndroidKeyRestrictions</a>

---

##### `PutApiTargets` <a name="PutApiTargets" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putApiTargets"></a>

```csharp
private void PutApiTargets(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putApiTargets.parameter.value"></a>

- *Type:* object

---

##### `PutBrowserKeyRestrictions` <a name="PutBrowserKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putBrowserKeyRestrictions"></a>

```csharp
private void PutBrowserKeyRestrictions(ApikeysKeyRestrictionsBrowserKeyRestrictions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putBrowserKeyRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions">ApikeysKeyRestrictionsBrowserKeyRestrictions</a>

---

##### `PutIosKeyRestrictions` <a name="PutIosKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putIosKeyRestrictions"></a>

```csharp
private void PutIosKeyRestrictions(ApikeysKeyRestrictionsIosKeyRestrictions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putIosKeyRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions">ApikeysKeyRestrictionsIosKeyRestrictions</a>

---

##### `PutServerKeyRestrictions` <a name="PutServerKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putServerKeyRestrictions"></a>

```csharp
private void PutServerKeyRestrictions(ApikeysKeyRestrictionsServerKeyRestrictions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.putServerKeyRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions">ApikeysKeyRestrictionsServerKeyRestrictions</a>

---

##### `ResetAndroidKeyRestrictions` <a name="ResetAndroidKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resetAndroidKeyRestrictions"></a>

```csharp
private void ResetAndroidKeyRestrictions()
```

##### `ResetApiTargets` <a name="ResetApiTargets" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resetApiTargets"></a>

```csharp
private void ResetApiTargets()
```

##### `ResetBrowserKeyRestrictions` <a name="ResetBrowserKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resetBrowserKeyRestrictions"></a>

```csharp
private void ResetBrowserKeyRestrictions()
```

##### `ResetIosKeyRestrictions` <a name="ResetIosKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resetIosKeyRestrictions"></a>

```csharp
private void ResetIosKeyRestrictions()
```

##### `ResetServerKeyRestrictions` <a name="ResetServerKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.resetServerKeyRestrictions"></a>

```csharp
private void ResetServerKeyRestrictions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.androidKeyRestrictions">AndroidKeyRestrictions</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference">ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.apiTargets">ApiTargets</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList">ApikeysKeyRestrictionsApiTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.browserKeyRestrictions">BrowserKeyRestrictions</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference">ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.iosKeyRestrictions">IosKeyRestrictions</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference">ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.serverKeyRestrictions">ServerKeyRestrictions</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference">ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.androidKeyRestrictionsInput">AndroidKeyRestrictionsInput</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions">ApikeysKeyRestrictionsAndroidKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.apiTargetsInput">ApiTargetsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.browserKeyRestrictionsInput">BrowserKeyRestrictionsInput</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions">ApikeysKeyRestrictionsBrowserKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.iosKeyRestrictionsInput">IosKeyRestrictionsInput</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions">ApikeysKeyRestrictionsIosKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.serverKeyRestrictionsInput">ServerKeyRestrictionsInput</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions">ApikeysKeyRestrictionsServerKeyRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions">ApikeysKeyRestrictions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AndroidKeyRestrictions`<sup>Required</sup> <a name="AndroidKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.androidKeyRestrictions"></a>

```csharp
public ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference AndroidKeyRestrictions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference">ApikeysKeyRestrictionsAndroidKeyRestrictionsOutputReference</a>

---

##### `ApiTargets`<sup>Required</sup> <a name="ApiTargets" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.apiTargets"></a>

```csharp
public ApikeysKeyRestrictionsApiTargetsList ApiTargets { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsApiTargetsList">ApikeysKeyRestrictionsApiTargetsList</a>

---

##### `BrowserKeyRestrictions`<sup>Required</sup> <a name="BrowserKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.browserKeyRestrictions"></a>

```csharp
public ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference BrowserKeyRestrictions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference">ApikeysKeyRestrictionsBrowserKeyRestrictionsOutputReference</a>

---

##### `IosKeyRestrictions`<sup>Required</sup> <a name="IosKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.iosKeyRestrictions"></a>

```csharp
public ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference IosKeyRestrictions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference">ApikeysKeyRestrictionsIosKeyRestrictionsOutputReference</a>

---

##### `ServerKeyRestrictions`<sup>Required</sup> <a name="ServerKeyRestrictions" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.serverKeyRestrictions"></a>

```csharp
public ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference ServerKeyRestrictions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference">ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference</a>

---

##### `AndroidKeyRestrictionsInput`<sup>Optional</sup> <a name="AndroidKeyRestrictionsInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.androidKeyRestrictionsInput"></a>

```csharp
public ApikeysKeyRestrictionsAndroidKeyRestrictions AndroidKeyRestrictionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsAndroidKeyRestrictions">ApikeysKeyRestrictionsAndroidKeyRestrictions</a>

---

##### `ApiTargetsInput`<sup>Optional</sup> <a name="ApiTargetsInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.apiTargetsInput"></a>

```csharp
public object ApiTargetsInput { get; }
```

- *Type:* object

---

##### `BrowserKeyRestrictionsInput`<sup>Optional</sup> <a name="BrowserKeyRestrictionsInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.browserKeyRestrictionsInput"></a>

```csharp
public ApikeysKeyRestrictionsBrowserKeyRestrictions BrowserKeyRestrictionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsBrowserKeyRestrictions">ApikeysKeyRestrictionsBrowserKeyRestrictions</a>

---

##### `IosKeyRestrictionsInput`<sup>Optional</sup> <a name="IosKeyRestrictionsInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.iosKeyRestrictionsInput"></a>

```csharp
public ApikeysKeyRestrictionsIosKeyRestrictions IosKeyRestrictionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsIosKeyRestrictions">ApikeysKeyRestrictionsIosKeyRestrictions</a>

---

##### `ServerKeyRestrictionsInput`<sup>Optional</sup> <a name="ServerKeyRestrictionsInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.serverKeyRestrictionsInput"></a>

```csharp
public ApikeysKeyRestrictionsServerKeyRestrictions ServerKeyRestrictionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions">ApikeysKeyRestrictionsServerKeyRestrictions</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsOutputReference.property.internalValue"></a>

```csharp
public ApikeysKeyRestrictions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictions">ApikeysKeyRestrictions</a>

---


### ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference <a name="ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.allowedIpsInput">AllowedIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.allowedIps">AllowedIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions">ApikeysKeyRestrictionsServerKeyRestrictions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedIpsInput`<sup>Optional</sup> <a name="AllowedIpsInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.allowedIpsInput"></a>

```csharp
public string[] AllowedIpsInput { get; }
```

- *Type:* string[]

---

##### `AllowedIps`<sup>Required</sup> <a name="AllowedIps" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.allowedIps"></a>

```csharp
public string[] AllowedIps { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictionsOutputReference.property.internalValue"></a>

```csharp
public ApikeysKeyRestrictionsServerKeyRestrictions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyRestrictionsServerKeyRestrictions">ApikeysKeyRestrictionsServerKeyRestrictions</a>

---


### ApikeysKeyTimeoutsOutputReference <a name="ApikeysKeyTimeoutsOutputReference" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ApikeysKeyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apikeysKey.ApikeysKeyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



